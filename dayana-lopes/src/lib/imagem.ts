// Redimensiona uma imagem no navegador antes de enviar pro backend.
// Foto de celular passa fácil de 5 MB; a Function tem limite prático de ~4 MB e base64 infla ~33%.
// Sem isso, upload de qualquer foto boa falha.

const LADO_MAX = 1600;
const QUALIDADE = 0.85;

export type ImagemPreparada = {
  base64: string; // sem prefixo data:
  tipo: string; // sempre image/jpeg (padroniza)
};

export async function prepararImagem(arquivo: File): Promise<ImagemPreparada> {
  if (!arquivo.type.startsWith("image/")) {
    throw new Error("selecione uma imagem (jpg, png ou webp)");
  }
  const bitmap = await carregarBitmap(arquivo);
  try {
    const { width, height } = calcularTamanho(bitmap.width, bitmap.height);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("navegador nao suporta canvas");
    ctx.drawImage(bitmap, 0, 0, width, height);

    const blob = await canvasParaBlob(canvas);
    const base64 = await blobParaBase64(blob);
    return { base64, tipo: "image/jpeg" };
  } finally {
    if ("close" in bitmap) (bitmap as ImageBitmap).close();
  }
}

async function carregarBitmap(arquivo: File): Promise<ImageBitmap | HTMLImageElement> {
  if (typeof createImageBitmap === "function") {
    try {
      return await createImageBitmap(arquivo);
    } catch {
      // fallback abaixo
    }
  }
  const url = URL.createObjectURL(arquivo);
  try {
    const img = new Image();
    img.decoding = "async";
    img.src = url;
    await img.decode();
    return img;
  } finally {
    // O canvas.drawImage já leu; podemos revogar assim que a Promise resolver.
    // Aguardamos um tick para garantir que decode terminou de usar o src.
    setTimeout(() => URL.revokeObjectURL(url), 0);
  }
}

function calcularTamanho(w: number, h: number) {
  if (w <= LADO_MAX && h <= LADO_MAX) return { width: w, height: h };
  if (w >= h) {
    const width = LADO_MAX;
    const height = Math.round((h * LADO_MAX) / w);
    return { width, height };
  }
  const height = LADO_MAX;
  const width = Math.round((w * LADO_MAX) / h);
  return { width, height };
}

function canvasParaBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolver, rejeitar) => {
    canvas.toBlob(
      (blob) => (blob ? resolver(blob) : rejeitar(new Error("falha ao converter canvas"))),
      "image/jpeg",
      QUALIDADE,
    );
  });
}

function blobParaBase64(blob: Blob): Promise<string> {
  return new Promise((resolver, rejeitar) => {
    const reader = new FileReader();
    reader.onload = () => {
      const txt = String(reader.result || "");
      const virgula = txt.indexOf(",");
      resolver(virgula >= 0 ? txt.slice(virgula + 1) : txt);
    };
    reader.onerror = () => rejeitar(new Error("falha ao ler imagem"));
    reader.readAsDataURL(blob);
  });
}
