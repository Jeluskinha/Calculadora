import CalculadoraStyle from "./style";
import InputArea from "./components/Inputs";
import ResultArea from "./components/Result";

function App() {
  return (
    <CalculadoraStyle>
      <main>
        <InputArea />
        <ResultArea />
      </main>
    </CalculadoraStyle>
  );
}

export default App;
