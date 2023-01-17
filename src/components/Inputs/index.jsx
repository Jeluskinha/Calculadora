import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";

function InputArea() {

  const {calculate} = useContext(AuthContext)
  
  const { register, handleSubmit, formState: {errors}} = useForm({
    // resolver: yupResolver(schema)
  });

  return (
      <form onSubmit={handleSubmit(calculate)}>
        <label htmlFor="">
          <h2>Informe o valor da venda</h2>
          <input type="text" id="amount" {...register("amount")}/>
        </label>
        <label htmlFor="">
          <h2>Em quantas parcelas</h2>
          <input type="text" id="installments" {...register("installments")}/>
        </label>
        <label htmlFor="">
          <h2>Informe o percentual de MDR</h2>
          <input type="text" id="mdr" {...register("mdr")}/>
        </label>
        <button>
          calcular
        </button>
      </form>
  );
}

export default InputArea;
