import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FormConstructor, FormConstructorMainBlock, FormConstructorTip, FormConstructorInputBlock, DropDownMenu,
  FormConstructorInput, FormConstructorAddInput, FormConstructorLine, MakeFormButton } from "./elements";
import { Title, FormTitle } from '../../elements'

const FormConstructorComponent : React.FC = () => {
  const [ inputType, setInputType ] : React.ComponentState = useState('Type:');
  const [ inputName, setInputName ] : React.ComponentState = useState('');
  const [ inputPlaceholder, setInputPlaceholder ] : React.ComponentState = useState('');
  const [ inputColor, setInputColor ] : React.ComponentState = useState('');
  const [ inputBG, setInputBG ] : React.ComponentState = useState('');
  const [ inputBorderColor, setInputBorderColor ] : React.ComponentState = useState('');
  const [ inputRequiredNumber, setInputRequiredNumber ] : React.ComponentState = useState(0);
  const [ formTitle, setFormTitle ] : React.ComponentState = useState('');
  const [ formSubmitButtonText, setFormSubmitButtonText ] : React.ComponentState = useState('');
  const [ formSubmitButtonColor, setFormSubmitButtonColor ] : React.ComponentState = useState('');
  const [ formSubmitButtonBG, setFormSubmitButtonBG ] : React.ComponentState = useState('');
  const [ formSubmitButtonBorderColor, setFormSubmitButtonBorderColor ] : React.ComponentState = useState('');
  const [ formSubmitButtonWidth, setFormSubmitButtonWidth ] : React.ComponentState = useState('');
  const [ formSubmitButtonHeight, setFormSubmitButtonHeight ] : React.ComponentState = useState('');
  const [ formComponentsArray, setFormComponentsArray ] : React.ComponentState = useState([]);
  const [ showLinkNumber, setShowLinkNumber ] : React.ComponentState = useState(0);

  const handleFormTitleChange = ( event: any ) => {
    setFormTitle(event.target.value);
  };

  const addTitle = ( event : any ) => {
    event.preventDefault();

    let titleObject : any = { title: formTitle };
    let titleIndex = -1;
    for(let i : number = 0; i < formComponentsArray.length; i++) {
      if(formComponentsArray[i].title) {
        titleIndex = i;
      }
    }

    if(titleIndex === -1) {
      formComponentsArray.push(titleObject);
    } else {
      formComponentsArray[titleIndex] = titleObject;
    }

    setFormTitle('');
    alert('Title was added!');
    console.log(formComponentsArray);
  };

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

  const handleInputBorderColorChange = (event : any) => {
    setInputBorderColor(event.target.value);
  }

  const addInput = (e : any) => {
    e.preventDefault();

    if(inputType === 'Type:' || inputName.length < 1 || inputColor.length > 7 || inputBorderColor.length > 7) {
      alert('Please, choose type of input, write name of input or inputColor.length > 7 or inputBG.length > 7!');
    } else {
      // if(localStorage.getItem('forms_array')) {
      //   let unsortedFormsArray : any = localStorage.getItem('forms_array');
      //   let formsArray = JSON.parse(unsortedFormsArray);
      // } else {
      //   let formsArray = [];
      // }
      let inputObject : any = {its: 'input', type: inputType, name: inputName, placeholder: '', inputColor: '#ffffff', inputBG: 'transparent', inputBorderColor: '#297CC1', required: 0};

      if(inputPlaceholder.length > 0) {
        inputObject.placeholder = inputPlaceholder;
      }

      if(inputColor.length > 3) {
        inputObject.inputColor = inputColor;
      }

      if(inputBG.length > 3) {
        inputObject.inputBG = inputBG;
      }

      if(inputBorderColor.length > 3) {
        inputObject.inputBorderColor = inputBorderColor;
      }

      if(inputRequiredNumber === 1) {
        inputObject.required = inputRequiredNumber;
      }

      formComponentsArray.push(inputObject);

      alert('Input was added!');

      console.log(formComponentsArray);

      setInputType('Type:');
      setInputName('');
      setInputPlaceholder('');
      setInputColor('');
      setInputBG('');
      setInputBorderColor('');
    }
  };

  const handleFormSubmitButtonTextChange = ( event : any ) => {
    setFormSubmitButtonText(event.target.value);
  };

  const handleFormSubmitButtonColorChange = ( event : any ) => {
    setFormSubmitButtonColor(event.target.value);
  };

  const handleFormSubmitButtonBGChange = ( event : any ) => {
    setFormSubmitButtonBG(event.target.value);
  };

  const handleFormSubmitButtonBorderColorChange = ( event : any ) => {
    setFormSubmitButtonBorderColor(event.target.value);
  };

  const handleFormSubmitButtonWidthChange = ( event : any ) => {
    setFormSubmitButtonWidth(event.target.value);
  };

  const handleFormSubmitButtonHeightChange = ( event : any ) => {
    setFormSubmitButtonHeight(event.target.value);
  };

  const addSubmitButton = ( event : any ) => {
    event.preventDefault();

    let submitButtonObject : any = {its: 'submitButton' ,text: formSubmitButtonText, color: '#ffffff', bg: '#0E57AA', BorderColor: 'none', width: '150px', height: '50px'};

    if(formSubmitButtonColor.length > 1) {
      submitButtonObject.color = formSubmitButtonColor;
    }

    if(formSubmitButtonBG.length > 1) {
      submitButtonObject.bg = formSubmitButtonBG;
    }

    if(formSubmitButtonBorderColor.length > 1) {
      submitButtonObject.BorderColor = formSubmitButtonBorderColor;
    }

    if(formSubmitButtonWidth.length > 0) {
      submitButtonObject.width = formSubmitButtonWidth + 'px';
    }

    if(formSubmitButtonHeight.length > 0) {
      submitButtonObject.height = formSubmitButtonHeight + 'px';
    }

    let submitButtonIndex : number = -1;

    for(let i : number = 0; i < formComponentsArray.length; i++) {
      if(formComponentsArray[i].its === 'submitButton') {
        submitButtonIndex = i;
      }
    }

    if(submitButtonIndex === -1) {
      formComponentsArray.push(submitButtonObject);
    } else {
      formComponentsArray[submitButtonIndex] = submitButtonObject;
    }

    console.log(formComponentsArray);

    setFormSubmitButtonText('');
    setFormSubmitButtonColor('');
    setFormSubmitButtonBG('');
    setFormSubmitButtonBorderColor('');
    setFormSubmitButtonWidth('');
    setFormSubmitButtonHeight('');

    alert('Submit Button was added!');

  };

  const makeForm = ( event : any ) => {
    event.preventDefault();

    let formArray = [];
    let formTitle = '';
    let formInputs = [];
    let formSubmit = [];

    formArray.push(formComponentsArray);

    for(let i : number = 0; i < formArray[0].length; i++) {
      if(formArray[0][i].title) {
        formTitle = formArray[0][i].title;
      }
      if(formArray[0][i].its === 'input') {
        formInputs.push(formArray[0][i]);
      }
      if(formArray[0][i].its === 'submitButton') {
        formSubmit.push(formArray[0][i]);
      }
    }

    localStorage.setItem('form_objects', JSON.stringify(formArray));
    localStorage.setItem('form_title', formTitle);
    localStorage.setItem('form_inputs', JSON.stringify(formInputs));
    localStorage.setItem('form_submit', JSON.stringify(formSubmit));

    alert('Form was made! Please go to new form and reload page!');

    setFormComponentsArray([]);

    setShowLinkNumber(1);
  };

  return(
    <FormConstructorMainBlock>
      <Title>Form Constructor</Title>
      <FormConstructor>
        <FormConstructorTip>Checkbox(checked) - required</FormConstructorTip>

        <FormTitle>Title</FormTitle>
        <FormConstructorInputBlock>
          <FormConstructorInput type={'text'} id={'formTitle'} name={'formTitle'} onChange={handleFormTitleChange} value={ formTitle } placeholder={'Title'} />
        </FormConstructorInputBlock>
        <FormConstructorAddInput onClick={addTitle}>Add Title</FormConstructorAddInput>

        <FormConstructorLine />

        <FormTitle>Input</FormTitle>
        <FormConstructorInputBlock>
          <DropDownMenu>
            <span>{ inputType }</span>
            <div>
              <p onClick={() => {setInputType('email')}}>email</p>
              <p onClick={() => {setInputType('text')}}>text</p>
              <p onClick={() => {setInputType('password')}}>password</p>
              <p onClick={() => {setInputType('number')}}>number</p>
              <p onClick={() => {setInputType('checkbox')}}>checkbox</p>
              <p onClick={() => {setInputType('submit')}}>submit</p>
              <p onClick={() => {setInputType('button')}}>button</p>
            </div>
          </DropDownMenu>
          <FormConstructorInput type={'text'} id={'inputName'} name={'inputName'} onChange={handleInputNameChange} value={ inputName } placeholder={'*name'} />
          <FormConstructorInput type={'text'} id={'inputPlaceholder'} name={'inputPlaceholder'} onChange={handleInputPlaceholderChange} value={ inputPlaceholder } placeholder={'placeholder'} />
          <FormConstructorInput type={'text'} id={'inputColor'} name={'inputColor'} onChange={handleInputColorChange} value={ inputColor } placeholder={'color(#0E57AA)'} />
          <FormConstructorInput type={'text'} id={'inputBG'} name={'inputBG'} onChange={handleInputBGChange} value={ inputBG } placeholder={'BG color(#0E57AA)'} />
          <FormConstructorInput type={'text'} id={'inputBorderColor'} name={'inputBorderColor'} onChange={handleInputBorderColorChange} value={ inputBorderColor } placeholder={'Border color(#0E57AA)'} />
          <FormConstructorInput type={'checkbox'} id={'inputRequired'} onClick={handleInputRequiredClick} name={'inputRequired'} />
        </FormConstructorInputBlock>
        <FormConstructorAddInput onClick={addInput}>Add Input</FormConstructorAddInput>

        <FormConstructorLine />

        <FormTitle>Submit Button</FormTitle>
        <FormConstructorInputBlock>
          <FormConstructorInput type={'text'} id={'formSubmitButtonText'} name={'formSubmitButtonText'} onChange={handleFormSubmitButtonTextChange} value={ formSubmitButtonText } placeholder={'Text'} />
          <FormConstructorInput type={'text'} id={'formSubmitButtonColor'} name={'formSubmitButtonColor'} onChange={handleFormSubmitButtonColorChange} value={ formSubmitButtonColor } placeholder={'color(#0E57AA)'} />
          <FormConstructorInput type={'text'} id={'formSubmitButtonBG'} name={'formSubmitButtonBG'} onChange={handleFormSubmitButtonBGChange} value={ formSubmitButtonBG} placeholder={'BG(#0E57AA)'} />
          <FormConstructorInput type={'text'} id={'formSubmitButtonBorderColor'} name={'formSubmitButtonBorderColor'} onChange={handleFormSubmitButtonBorderColorChange} value={ formSubmitButtonBorderColor} placeholder={'Border(#0E57AA)'} />
          <FormConstructorInput type={'text'} id={'formSubmitButtonWidth'} name={'formSubmitButtonWidth'} onChange={handleFormSubmitButtonWidthChange} value={ formSubmitButtonWidth} placeholder={'width(123)'} />
          <FormConstructorInput type={'text'} id={'formSubmitButtonHeight'} name={'formSubmitButtonHeight'} onChange={handleFormSubmitButtonHeightChange} value={ formSubmitButtonHeight} placeholder={'height(123)'} />
        </FormConstructorInputBlock>
        <FormConstructorAddInput onClick={addSubmitButton}>Add Submit Button</FormConstructorAddInput>

      </FormConstructor>
      <MakeFormButton onClick={makeForm}>Make Form</MakeFormButton>
      { showLinkNumber === 1 ? <Link to={'/form'} id='goToForm'>Go To Form</Link> : null}
    </FormConstructorMainBlock>
  )
};

export default FormConstructorComponent;