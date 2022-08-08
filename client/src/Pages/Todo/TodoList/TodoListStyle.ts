import styled from "styled-components";

export const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TodoTitle = styled.span`
  text-transform: uppercase;
  font-size: 40px;
  margin: 40px 0;
  letter-spacing: 2px;
  color: #000;
  z-index: 1;
  text-align: center;

  @media (max-width: 800px) {
    .heading {
      margin: 15px 0;
      font-size: 35px;
    }
  }
`;

// InputField
export const FormWrapper = styled.form`
  display: flex;
  width: 95%;
  position: relative;
  align-items: center;
`;

export const Controller = styled.input`
  width: 70vw;
  margin: 0 auto;
  border-radius: 50px;
  padding: 20px 30px;
  font-size: 20px;
  border: none;
  transition: 0.2s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  :focus {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
    outline: none;
  }
`;

export const FormButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  margin: 12px;
  border-radius: 50px;
  right: 11vw;
  border: none;
  font-size: 15px;
  background-color: #2f74c0;
  color: white;
  transition: 0.2s all;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  :hover {
    background-color: #388ae2;
  }
  :active {
    transform: scale(0.8);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

// SingleTodo
export const Todos = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 47.5%;
  padding: 15px;
  background-color: #388ae2;
`;

export const TodosSingleForm = styled.form`
  display: flex;
  border-radius: 5px;
  padding: 20px;
  margin-top: 15px;
  background-color: yellow;
  transition: 0.2s;
`;

export const TodosSingleInput = styled.input`
  flex: 1;
  padding: 5px;
  border: none;
  font-size: 20px;
`;

export const TodosSingleTextS = styled.span`
  flex: 1;
  padding: 5px;
  border: none;
  font-size: 16px;
  & :focus {
    outline: none;
  }
`;

export const TodosSingleText = styled.span`
  flex: 1;
  padding: 5px;
  border: none;
  font-size: 20px;
  & :focus {
    outline: none;
  }
`;

export const IconPick = styled.span`
  margin-left: 10px;
  font-size: 25px;
  cursor: pointer;
`;
