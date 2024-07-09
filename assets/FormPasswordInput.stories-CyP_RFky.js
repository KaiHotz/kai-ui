import{j as r}from"./jsx-runtime-CexXSJP5.js";import{c as f,d as a,F as y}from"./Form-Cxp3Z12N.js";import{b,c as h}from"./index-YfRCopfe.js";import{F as p}from"./FormPasswordInput-C0i2rQzp.js";import{B as g}from"./Button-C0GdinNN.js";import"./index-BP8_t0zE.js";import"./Input-DF4M-RAo.js";import"./clsx-B-dksMZM.js";import"./Label-U7w9Tf6e.js";import"./Hint-BgND6QIn.js";import"./PasswordInput-rANRdrd9.js";const e={none:void 0,searchIcon:r.jsx(b,{}),infoIcon:r.jsx(h,{size:13})},s={none:"None",searchIcon:"Search",infoIcon:"Information",eyeIcon:"Eye",eyeSlashIcon:"Eye Slash"},A={title:"Components/Forms/FormPasswordInput",component:p,args:{label:"",labelPosition:"top",labelEndAdornment:"none",startAdornment:"none",endAdornment:"none",small:!1,disabled:!1,required:!1,placeholder:"value",hintText:"",passwordToggleTooltip:"",passwordToggle:!1,reserveSpaceForError:!1,hideError:!1},argTypes:{name:{control:!1},isValid:{control:!1},startAdornment:{options:Object.keys(e),mapping:e,control:{type:"select",labels:s}},endAdornment:{options:Object.keys(e),mapping:e,control:{type:"select",labels:s}},labelEndAdornment:{options:Object.keys(e),mapping:e,control:{type:"select",labels:s}}}},o={render:t=>{const c=f({password:t.required?a().required():a()}).required(),d=n=>{alert(JSON.stringify(n))},u=n=>{console.log(n)};return r.jsxs(y,{validationSchema:c,defaultValues:{password:""},onSubmit:d,onError:u,shouldValidateOnChange:!0,children:[r.jsx(p,{...t,name:"password",reserveSpaceForError:!0}),r.jsx(g,{type:"submit",children:"Submit"})]})}};var i,l,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const schema = yup.object({
      password: args.required ? yup.string().required() : yup.string()
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
      password: ''
    }} onSubmit={onSubmit} onError={onError} shouldValidateOnChange>
        <FormPasswordInput {...args} name="password" reserveSpaceForError />

        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const D=["Default"];export{o as Default,D as __namedExportsOrder,A as default};
