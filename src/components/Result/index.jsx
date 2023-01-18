import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ResultAreaStyle from "./styles";

function ResultArea() {
  const { simulacao } = useContext(AuthContext);

  return (
    <ResultAreaStyle>
      <h2>Você receberá</h2>
      <section>
        <div>
          <h3>Amanhã</h3>
          {simulacao && <span>{`R$ ${simulacao[0]},00`}</span>}
        </div>
        <div>
          <h3>Em 15 dias</h3>
          {simulacao && <span>{`R$ ${simulacao[1]},00`}</span>}
        </div>
        <div>
          <h3>Em 30 dias</h3>
          {simulacao && <span>{`R$ ${simulacao[2]},00`}</span>}
        </div>
        <div>
          <h3>Em 90 dias</h3>
          {simulacao && <span>{`R$ ${simulacao[3]},00`}</span>}
        </div>
      </section>
    </ResultAreaStyle>
  );
}

export default ResultArea;
