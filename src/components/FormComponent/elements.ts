import styled from 'styled-components';

export const FormMainBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 35px;
`;

export const Form = styled.form`
  width: 800px;
  min-height: 300px;
  border: 2px solid #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  & * {
    color: #fff;
  }
  #formTitle {
    margin-top: 25px;
  }
`;

export const FormInputsBlock = styled.div`
  width: 75%:
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  padding-left: 10px;
  font-size: 20px;
  margin-right: 10px;
  margin-top: 7px;
  margin-bottom: 7px;
`;


export const FormButton = styled.input`
  width: 250px;
  min-height: 80px;
  outline: none;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 800;
  cursor: pointer;
  margin-bottom: 25px;
`;