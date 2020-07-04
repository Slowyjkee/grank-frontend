import React from 'react'
import {
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    ButtonToolbar,
    Button,
    Schema,
    Toggle,
    InputPicker,
    CheckPicker,
    InputNumber
} from "rsuite";
import {ReusableUploader} from "./ReusableUploader";
import {translateKeyword} from "../../utils/translateKeyword";
const { StringType, NumberType } = Schema.Types;


export const ReusableForm = (props) => {
    const {
        form = {},
        withImage = true,
        onChange,
        onSubmit,
        fieldsToValidate = [],
        onCancel,
        children,
        categories,
        mixes,
        initialForm = []
    } = props ;
    let formRef;

    let validationFields =  action => {
      let obj;
      for (let item of fieldsToValidate){
            obj = {...obj, [item] : action}
        }
      return obj;
    };

    const model = Schema.Model({
        ...validationFields(StringType().isRequired('Необходимо заполнить поле'))
    });

    console.log(mixes)
    let FormList = Object.keys(form).map((el) => {
         // const isTextarea = el === 'description';
         //Description key is default for textarea;
         // const checkIsBoolean = el.slice(0, 2) === 'is';
         switch (el) {
             case 'image' :
                 return (
                     <FormGroup>
                         <ControlLabel>Изображение</ControlLabel>
                         <ReusableUploader  onUpload={(file) => onChange({image: file})} link={initialForm.image}/>
                     </FormGroup>
                 );
             case 'description':
                 return (
                     <FormGroup>
                         <ControlLabel>{translateKeyword(el)}</ControlLabel>
                         <FormControl name={el} componentClass='textarea' rows={5}/>
                     </FormGroup>
                 );
             case 'isMix':
                 return (
                     <FormGroup>
                       <span>Травосмесь:</span> <Toggle onChange={(value) => {onChange({isMix:value})}} />
                     </FormGroup>
                 );
             case 'category':
                 return !form.isMix && (
                     <InputPicker
                         valueKey='_id'
                         labelKey='name'
                         onSelect={(value) => onChange({category:value})}
                         onClean={() => onChange({category:''})}
                         data={categories}
                         style={{ width: 224 }}
                     />
                 );
             case 'mixes':
                 const percentageInputs= form.mixes.length &&  form.mixes.map( (el, index) => {

                     return (
                         <div>
                             <span>{el.label}</span>
                             <InputNumber postfix="%" />
                         </div>
                     )
                 });

                 return form.isMix && (
                     <>
                         <CheckPicker data={mixes} onChange={(value) => onChange({mixes:value})} groupBy="groupTitle" style={{ width: 224 }} />
                     </>
                 )
             default :
                 return (
                     <FormGroup>
                         <ControlLabel>{translateKeyword(el)}</ControlLabel>
                         <FormControl name={el}/>
                     </FormGroup>
                 );

         }


        }
    );

    function onSubmitAction() {
        if(formRef.check()){
            onSubmit()
        }
    }
    return (
        <Form layout="horizontal" model={model}
              formDefaultValue={initialForm}
              onChange={formValue => onChange(formValue)}
              checkTrigger='none'
              onError={(error) => console.log(error)}
              ref={(ref) => formRef = ref}
        >
            {FormList}
            {children}
            <FormGroup>
                <ButtonToolbar>
                    <Button appearance="primary" onClick={() => onSubmitAction()}>Создать</Button>
                    <Button appearance="default" onClick={() => onCancel()}>Отмена</Button>
                </ButtonToolbar>
            </FormGroup>
        </Form>
    );
};
