import{j as e}from"./jsx-runtime-CexXSJP5.js";import{u as v,b as x,c as y,a as F,F as g}from"./Form-Cyk7D10R.js";import{r as E}from"./index-BP8_t0zE.js";import{R,a as n}from"./RadioOption-B7bu7kIS.js";import"./clsx-B-dksMZM.js";import"./Hint-BgND6QIn.js";import"./lodash-DZrcJQkD.js";import"./Label-Q9pw0DqB.js";const l=({name:a,errorMsg:o,children:i,...s})=>{const{control:r,setError:d}=v(),{field:{value:f,onChange:b},fieldState:{error:m}}=x({name:a,control:r});return E.useEffect(()=>{o&&d(a,o)},[a,d,o]),e.jsx(R,{...s,selected:f,onChange:b,errorMsg:m==null?void 0:m.message,children:i})};try{l.displayName="FormRadio",l.__docgenInfo={description:"",displayName:"FormRadio",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"FieldError"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'}]}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},reserveSpaceForError:{defaultValue:null,description:"",name:"reserveSpaceForError",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"string | number"}},isInline:{defaultValue:null,description:"",name:"isInline",required:!1,type:{name:"boolean"}}}}}catch{}const O={title:"Components/Forms/FormRadio",component:l,argTypes:{labelPosition:{options:["left","right"]},variant:{options:[void 0,"text"]},name:{control:!1},selected:{control:!1}}},t={render:a=>{const o=y({formRadioExample:F()}),i=r=>{alert(JSON.stringify(r))},s=r=>{console.log(r)};return e.jsxs(g,{validationSchema:o,defaultValues:{formRadioExample:"option_1"},onSubmit:i,onError:s,children:[e.jsxs(l,{...a,name:"formRadioExample",children:[e.jsx(n,{value:"option_1",label:"Label 1"}),e.jsx(n,{value:"option_2",label:"Label 2"}),e.jsx(n,{value:"option_3",label:"Label 3"}),e.jsx(n,{value:"option_4",label:"Label 4",disabled:!0})]}),e.jsx("button",{type:"submit",children:"Submit"})]})},args:{variant:void 0,labelPosition:"left",hintText:"",disabled:!1,isInline:!1,reserveSpaceForError:!1}};var u,p,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const schema = yup.object({
      formRadioExample: yup.string()
    });
    type TFormData = yup.InferType<typeof schema>;
    const onSubmit = (data: TFormData) => {
      alert(JSON.stringify(data));
    };
    const onError = (errors: FieldErrors<TFormData>) => {
      console.log(errors);
      //Handle form error here
    };
    return <Form<TFormData> validationSchema={schema} defaultValues={{
      formRadioExample: 'option_1'
    }} onSubmit={onSubmit} onError={onError}>
        <FormRadio {...args} name="formRadioExample">
          <RadioOption value="option_1" label="Label 1" />
          <RadioOption value="option_2" label="Label 2" />
          <RadioOption value="option_3" label="Label 3" />
          <RadioOption value="option_4" label="Label 4" disabled />
        </FormRadio>
        <button type="submit">Submit</button>
      </Form>;
  },
  args: {
    variant: undefined,
    labelPosition: 'left',
    hintText: '',
    disabled: false,
    isInline: false,
    reserveSpaceForError: false
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,O as default};
