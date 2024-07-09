import{j as e}from"./jsx-runtime-CexXSJP5.js";import{c as y,d as s,F as f}from"./Form-Cxp3Z12N.js";import{b as h,d as b,e as x,c as F}from"./index-YfRCopfe.js";import{F as c}from"./FormInput-BwatV4BY.js";import{B as S}from"./Button-C0GdinNN.js";import"./index-BP8_t0zE.js";import"./Input-DF4M-RAo.js";import"./clsx-B-dksMZM.js";import"./Label-U7w9Tf6e.js";import"./Hint-BgND6QIn.js";import"./PasswordInput-rANRdrd9.js";const r={none:void 0,searchIcon:e.jsx(h,{}),eyeIcon:e.jsx(b,{}),eyeSlashIcon:e.jsx(x,{}),infoIcon:e.jsx(F,{size:13})},n={none:"None",searchIcon:"Search",infoIcon:"Information",eyeIcon:"Eye",eyeSlashIcon:"Eye Slash"},B={title:"Components/Forms/FormInput",component:c,args:{type:"text",label:"",labelPosition:"top",labelEndAdornment:"none",startAdornment:"none",endAdornment:"none",small:!1,disabled:!1,required:!1,placeholder:"value",hintText:"",reserveSpaceForError:!1,hideError:!1},argTypes:{name:{control:!1},isValid:{control:!1},type:{options:["text","password","email","number","search","tel","url"],control:{type:"select"}},startAdornment:{options:Object.keys(r),mapping:r,control:{type:"select",labels:n}},endAdornment:{options:Object.keys(r),mapping:r,control:{type:"select",labels:n}},labelEndAdornment:{options:Object.keys(r),mapping:r,control:{type:"select",labels:n}}}},t={render:a=>{const p=y({textinput:a.required?s().required():s()}).required(),u=o=>{alert(JSON.stringify(o))},d=o=>{console.log(o)};return e.jsxs(f,{validationSchema:p,defaultValues:{textinput:""},onSubmit:u,onError:d,shouldValidateOnChange:!0,children:[e.jsx(c,{...a,name:"textinput",reserveSpaceForError:!0}),e.jsx(S,{type:"submit",children:"Submit"})]})}};var i,l,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const schema = yup.object({
      textinput: args.required ? yup.string().required() : yup.string()
    }).required();
    type TFormData = yup.InferType<typeof schema>;
    const onSubmit = (data: TFormData) => {
      alert(JSON.stringify(data));
    };
    const onError = (errors: FieldErrors<TFormData>) => {
      console.log(errors);
      //Handle form error here
    };
    return <Form<TFormData> validationSchema={schema} defaultValues={{
      textinput: ''
    }} onSubmit={onSubmit} onError={onError} shouldValidateOnChange>
        <FormInput {...args} name="textinput" reserveSpaceForError />

        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const C=["Default"];export{t as Default,C as __namedExportsOrder,B as default};
