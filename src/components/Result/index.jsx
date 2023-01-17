import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ResultAreaStyle from "./styles";

function ResultArea() {
  const { simulacao } = useContext(AuthContext);

  return (
    <ResultAreaStyle>
      <div>
        <h3>Amanhã</h3>
        {simulacao && <span>{simulacao[0]}</span>}
      </div>
      <div>
        <h3>Em 15 dias</h3>
        {simulacao && <span>{simulacao[1]}</span>}
      </div>
      <div>
        <h3>Em 30 dias</h3>
        {simulacao && <span>{simulacao[2]}</span>}
      </div>
      <div>
        <h3>Em 90 dias</h3>
        {simulacao && <span>{simulacao[3]}</span>}
      </div>
    </ResultAreaStyle>
  );
}

export default ResultArea;
