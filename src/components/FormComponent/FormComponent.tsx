import React, { useEffect, useState } from 'react';
import { FormMainBlock, Form, FormInput, FormInputsBlock, FormButton } from './elements';
import { Title, FormTitle } from '../../elements'

const FormComponent : React.FC = () => {
  const formTitle : any = localStorage.getItem('form_title');
  const unsortedFormInputsArray : any = localStorage.getItem('form_inputs');
  const formInputs = JSON.parse(unsortedFormInputsArray);
  const unsortedFormSubmit : any = localStorage.getItem('form_submit');
  const formSubmit = JSON.parse(unsortedFormSubmit);
  const unsortedFormArrayObjects : any = localStorage.getItem('form_objects');
  const formArrayObjects : any = JSON.parse(unsortedFormArrayObjects);


  return(
      <FormMainBlock>
        <Title onClick={() => {console.log(formSubmit)}}>Form</Title>
        <Form>
          <FormTitle id={'formTitle'}>{formTitle}</FormTitle>

          <FormInputsBlock >
            { formInputs.map( (input : any, index : number) => {
              if(input.required === 1) {
                return (
                  <FormInput type={input.type} name={input.name}
                   placeholder={input.placeholder.length > 0 ? input.placeholder : null} style={{color: input.inputColor, background: input.inputBG, border: `1px solid ${input.inputBorderColor}` }}
                   key={index} required />
                );
              } else {
                return (<FormInput type={input.type} name={input.name}
                 placeholder={input.placeholder.length > 0 ? input.placeholder : null} style={{color: input.inputColor, background: input.inputBG, border: `1px solid ${input.inputBorderColor}` }}
                 key={index} />);
              }
               } ) }
          </FormInputsBlock>

          <FormButton type={'submit'} style={{color: formSubmit[0].color, background: formSubmit[0].bg, width: formSubmit[0].width, height: formSubmit[0].height,
          border: formSubmit[0].BorderColor !== 'none' ? `1px solid ${formSubmit[0].BorderColor}` : 'none' }} value={formSubmit[0].text} />

        </Form>
      </FormMainBlock>
  )
};

export default FormComponent;