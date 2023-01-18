import styled from "styled-components";

const InputStyleds = styled.div`
  width: 50%;
  color: #808080;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1{
    color: black;
    font-weight: 800;
  }
  form{
    width: 100%;
    display: flex;
    padding: 10%;
    flex-direction: column;
    gap: 2.5rem;
    label{
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    button{
      width: fit-content;
      align-self: center;
      background-color: white;
      color: #808080;
      padding: 5px;
      border: 2px solid grey;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

export default InputStyleds;
