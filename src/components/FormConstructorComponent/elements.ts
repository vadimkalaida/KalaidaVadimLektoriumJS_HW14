import styled from 'styled-components';

export const FormConstructorMainBlock = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FormConstructor = styled.form`
  width: 800px;
  min-height: 300px;
  background: rgba(41,151,241, .8);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  & * {
    color: #fff;
    font-family: 'Amatic SC', 'sans-serif';
  }
`;

export const FormConstructorTip = styled.p`
  position: absolute;
  top: -15px;
  left: 0;
  font-size: 16px;
`;

export const Title = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-size: 36px;
  letter-spacing: 1.33px;
  margin-bottom: 30px;
`;

export const FormConstructorTitle = styled.h3`
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 36px;
`;

export const FormConstructorInputBlock = styled.div`
  width: 75%;
  min-height: 105px;
  background: rgba(0,76,166, .8);
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  #inputBG {
    width: 150px;
  }
`;

export const DropDownMenu = styled.div`
  width: 120px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  border: 1px solid #297CC1;
  margin-right: 10px;
  & span {
    font-size: 24px;
    min-height: 35px;
  }
  & div {
    min-width: 120px;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    & p {
      min-height: 35px;
      color: #0E57AA;
      font-weight: 800;
      font-size: 18px;
      border-bottom: 1px solid #0E57AA;
      margin-bottom: 0;
      margin-top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: .3s;
      &:hover {
        background: rgba(14,87,170, .1);
      }
    }
  }
  &:hover& div {
    display: block;
  }
`;

export const FormConstructorInput = styled.input`
  width: 120px;
  height: 32px;
  background: transparent;
  outline: none;
  border: 1px solid #297CC1;
  padding-left: 10px;
  color: #fff;
  font-size: 20px;
  margin-right: 10px;
  margin-top: 7px;
  margin-bottom: 7px;
  &::placeholder {
    color: rgba(255,255,255, .5);
  }
`;