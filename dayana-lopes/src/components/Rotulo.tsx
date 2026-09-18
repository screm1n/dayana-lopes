// Rótulo numerado com fio, como na referência: "01 / SERVIÇOS ———————".
type Props = {
  numero: string;
  children: React.ReactNode;
  /** Sem o fio, para quando o rótulo fica dentro de uma coluna estreita. */
  semFio?: boolean;
};

const Rotulo = ({ numero, children, semFio = false }: Props) => (
  <div className="flex items-center gap-6">
    <p className="rotulo whitespace-nowrap">
      {numero} <span className="mx-1 opacity-50">/</span> {children}
    </p>
    {!semFio && <span className="fio shrink" />}
  </div>
);

export default Rotulo;
