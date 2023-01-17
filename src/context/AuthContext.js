import { createContext, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext(); 

const AuthProvider = ({ children }) => {
  const [simulacao, setSimulacao] = useState()

  const calculate = async (data) =>{
    const response = await api.post('', data)
    .then(res => res.data)
    .catch(error => console.log(error))

    const result = [];
    for (const [key, value] of Object.entries(response)) {
      // console.log(`${key}: ${value}`);
      result.push(value);
    }
    setSimulacao(result)
  }

  return (
    <AuthContext.Provider value={{calculate, simulacao}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;