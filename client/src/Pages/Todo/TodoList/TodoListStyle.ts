import styled, { css } from "styled-components";

export const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
`;
export const Container = styled.div`
  width: 512px;
  height: 768px;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  position: relative;

  & h2 {
    font-size: 36px;
    color: #343a40;
    text-align: left;
    font-weight: 500;
  }

  & .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  & .tasks {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
    border-bottom: 1px solid #e9ecef;
    padding-bottom: 24px;
  }
`;

export const TodoTitle = styled.span`
  text-transform: uppercase;
  font-size: 40px;
  font-weight: bold;
  margin: 40px 0;
  letter-spacing: 2px;
  color: #000;
  z-index: 1;
  text-align: center;
  display: block;

  @media (max-width: 800px) {
    .heading {
      margin: 15px 0;
      font-size: 35px;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
`;

// InputField
export const FormWrapper = styled.form`
  width: 100%;
`;

export const InsertForm = styled.div`
  width: 100%;
  padding: 30px 30px 40px;
  bottom: 0;
  left: 0;
  position: absolute;
  background: #f8f9fa;
`;

export const Controller = styled.input`
  width: 100%;
  margin: 0 auto;
  border-radius: 50px;
  padding: 20px 30px;
  font-size: 18px;
  border: none;
  transition: 0.2s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  :focus {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
    outline: none;
  }
`;

export const FormButton = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  border: none;
  border-radius: 50%;
  color: white;
  transition: 0.2s all;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background: #38d9a9;
  transition: 0.125s all ease-in;

  :hover {
    background-color: #63e6be;
  }
  :active {
    background: #20c997;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }

  ${(props: { open: any }) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
    `}
`;

// SingleTodo
export const Todos = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
`;

export const TodosSingleForm = styled.form`
  display: flex;
  border-radius: 5px;
  padding: 20px;
  margin-top: 15px;
  background-color: #38d9a9;
  transition: 0.2s;
`;

export const TodosSingleInput = styled.input`
  flex: 1;
  padding: 5px;
  border: none;
  outline: none;
  font-size: 20px;
`;

export const TodosSingleTextS = styled.s`
  flex: 1;
  padding: 5px;
  border: none;
  font-size: 20px;
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
