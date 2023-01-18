import styled from 'styled-components';

const ResultAreaStyle = styled.div`
  width: 50%;
  color: #808080;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d3d3d3;

  h2{
    width: 80%;
    color: #005eff;
    font-weight: 800;
    font-size: 2.5rem;
    padding-bottom: 20px;
    border-bottom: 2px solid #808080;
    text-align: center;
  }
  section{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10%;
    gap: 2.5rem;
    align-items: center;
    div{
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export default ResultAreaStyle;