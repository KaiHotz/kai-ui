import{j as o}from"./jsx-runtime-CexXSJP5.js";import{c as u,e as c,F as b}from"./Form-DaGtRD3M.js";import{F as l}from"./FormRadio-CCc10FyV.js";import{a as e}from"./RadioOption-DtGWmbjR.js";import"./index-BP8_t0zE.js";import"./clsx-B-dksMZM.js";import"./Hint-BgND6QIn.js";import"./omit-Dv_hKa-K.js";import"./_baseGet-C7KzGAK3.js";import"./_MapCache-bPlbJmjb.js";import"./isObjectLike-yY6ejuuN.js";import"./isSymbol-CMQYLC8d.js";import"./_baseClone-UMuXwTt9.js";import"./_baseAssignValue-HfMhWjzy.js";import"./_baseTimes-BeXZtkeT.js";import"./_initCloneObject-D-aFD1Qy.js";import"./isPlainObject-DfuvdCyT.js";import"./_flatRest-LQTfQqTk.js";import"./identity-CwXImgea.js";import"./Label-U7w9Tf6e.js";const V={title:"Components/Forms/FormRadio",component:l,argTypes:{labelPosition:{options:["left","right"]},variant:{options:[void 0,"text"]},name:{control:!1},selected:{control:!1}}},a={render:s=>{const m=u({formRadioExample:c()}),p=r=>{alert(JSON.stringify(r))},d=r=>{console.log(r)};return o.jsxs(b,{validationSchema:m,defaultValues:{formRadioExample:"option_1"},onSubmit:p,onError:d,children:[o.jsxs(l,{...s,name:"formRadioExample",children:[o.jsx(e,{value:"option_1",label:"Label 1"}),o.jsx(e,{value:"option_2",label:"Label 2"}),o.jsx(e,{value:"option_3",label:"Label 3"}),o.jsx(e,{value:"option_4",label:"Label 4",disabled:!0})]}),o.jsx("button",{type:"submit",children:"Submit"})]})},args:{variant:void 0,labelPosition:"left",hintText:"",disabled:!1,isInline:!1,reserveSpaceForError:!1}};var t,n,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const $=["Default"];export{a as Default,$ as __namedExportsOrder,V as default};
