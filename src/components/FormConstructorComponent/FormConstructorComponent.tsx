import React, { useEffect, useState } from 'react';
import { FormConstructor, FormConstructorMainBlock, Title, FormConstructorTitle, FormConstructorTip, FormConstructorInputBlock, DropDownMenu,
  FormConstructorInput} from "./elements";

const FormConstructorComponent : React.FC = () => {
  const [ inputType, setInputType ] : React.ComponentState = useState('Type:');
  const [ inputName, setInputName ] : React.ComponentState = useState('');
  const [ inputPlaceholder, setInputPlaceholder ] : React.ComponentState = useState('');
  const [ inputColor, setInputColor ] : React.ComponentState = useState('');
  const [ inputBG, setInputBG ] : React.ComponentState = useState('');
  const [ inputRequiredNumber, setInputRequiredNumber ] : React.ComponentState = useState(0);

  const handleInputNameChange = ( event : any ) => {
    setInputName(event.target.value);
  };

  const handleInputPlaceholderChange = ( event : any ) => {
    setInputPlaceholder(event.target.value);
  };

  const handleInputColorChange = ( event : any ) => {
    setInputColor(event.target.value);
  };

  const handleInputBGChange = ( event : any ) => {
    setInputBG(event.target.value);
  };

  const handleInputRequiredClick = (event : any) => {
    if(event.target.checked) {
      setInputRequiredNumber(1);
    } else {
      setInputRequiredNumber(0);
    }
    console.log(inputRequiredNumber);
  };

  return(
    <FormConstructorMainBlock>
      <Title>Form Constructor</Title>
      <FormConstructor>
        <FormConstructorTip>Checkbox(checked) - required</FormConstructorTip>
        <FormConstructorTitle>Input</FormConstructorTitle>
        <FormConstructorInputBlock>
          <DropDownMenu>
            <span>{ inputType }</span>
            <div>
              <p onClick={() => {setInputType('email')}}>email</p>
              <p onClick={() => {setInputType('text')}}>text</p>
              <p onClick={() => {setInputType('password')}}>password</p>
              <p onClick={() => {setInputType('number')}}>number</p>
              <p onClick={() => {setInputType('checkbox')}}>checkbox</p>
            </div>
          </DropDownMenu>
          <FormConstructorInput type={'text'} id={'inputName'} name={'inputName'} onChange={handleInputNameChange} value={ inputName } placeholder={'name'} />
          <FormConstructorInput type={'text'} id={'inputPlaceholder'} name={'inputPlaceholder'} onChange={handleInputPlaceholderChange} value={ inputPlaceholder } placeholder={'placeholder'} />
          <FormConstructorInput type={'text'} id={'inputColor'} name={'inputColor'} onChange={handleInputColorChange} value={ inputColor } placeholder={'color(#0E57AA)'} />
          <FormConstructorInput type={'text'} id={'inputBG'} name={'inputBG'} onChange={handleInputBGChange} value={ inputBG } placeholder={'BG color(#0E57AA)'} />
          <FormConstructorInput type={'checkbox'} id={'inputRequired'} onClick={handleInputRequiredClick} name={'inputRequired'} />
        </FormConstructorInputBlock>
      </FormConstructor>
    </FormConstructorMainBlock>
  )
}

export default FormConstructorComponent;