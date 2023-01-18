import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import InputStyleds from "./styles";

function InputArea() {

  const {calculate} = useContext(AuthContext)
  
  const { register, handleSubmit, formState: {errors}} = useForm({
    // resolver: yupResolver(schema)
  });

  return (
    <InputStyleds>
      <h1>Simule sua antecipação</h1>
      <form onSubmit={handleSubmit(calculate)}>
        <label htmlFor="">
          <h2>Informe o valor da venda</h2>
          <input type="text" id="amount" {...register("amount")}/>
        </label>
        <label htmlFor="">
          <h2>Em quantas parcelas</h2>
          <input type="text" id="installments" {...register("installments")}/>
          <span>máximo de 12 parcelas</span>
        </label>
        <label htmlFor="">
          <h2>Informe o percentual de MDR</h2>
          <input type="text" id="mdr" {...register("mdr")}/>
        </label>
        <button>
          calcular
        </button>
      </form>
    </InputStyleds>
  );
}

export default InputArea;
