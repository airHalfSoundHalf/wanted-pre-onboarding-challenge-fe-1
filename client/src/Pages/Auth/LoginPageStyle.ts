import styled from "styled-components";

export const GotoTodoList = styled.div`
  cursor: pointer;
  position: absolute;
  left: 50px;
  top: 30px;
  & svg {
    font-size: 30px;
    color: #fff;
  }
`;

export const AuthForm = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #05212a;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 350px;
  margin: 0 auto;
  border-radius: 12px;
  background-color: #fff;
`;

export const FormTitle = styled.h1`
  letter-spacing: 0.5px;
`;
export const FormControlLabel = styled.label``;

export const Controller = styled.input`
  margin: 10px;
  padding: 10px;
  width: 80%;
  border-radius: 3px;
  border: 1px solid #0aa8c2;
  outline: none;
  :focus {
    box-shadow: inset 0 0 2px #0aa8c2;
  }
  letter-spacing: 0.5px;
`;
export const FormButton = styled.button`
  margin: 10px;
  padding: 10px;
  width: 80%;
  background-color: #0aa8c2;
  color: #fff;
  border: none;
  border-radius: 3px;
  letter-spacing: 0.5px;
  cursor: pointer;

  :active {
    background-color: #ccc;
  }
`;

export const Register = styled.button`
  margin: 10px;
  padding: 10px;
  width: 80%;
  background-color: transparent;
  border: none;
  & a {
    color: #000;
    text-decoration: none;
  }
`;
