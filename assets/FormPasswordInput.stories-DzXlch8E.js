import{j as e}from"./jsx-runtime-CexXSJP5.js";import{c as f,e as a,F as y}from"./Form-DaGtRD3M.js";import{b,c as F}from"./index-YfRCopfe.js";import{F as p}from"./FormPasswordInput-r4Vt-0aS.js";import{B as g}from"./Button-C0GdinNN.js";import"./index-BP8_t0zE.js";import"./Input-DF4M-RAo.js";import"./clsx-B-dksMZM.js";import"./Label-U7w9Tf6e.js";import"./Hint-BgND6QIn.js";import"./PasswordInput-rANRdrd9.js";const r={none:void 0,searchIcon:e.jsx(b,{}),infoIcon:e.jsx(F,{size:13})},s={none:"None",searchIcon:"Search",infoIcon:"Information",eyeIcon:"Eye",eyeSlashIcon:"Eye Slash"},A={title:"Components/Forms/FormPasswordInput",component:p,args:{label:"",labelPosition:"top",labelEndAdornment:"none",startAdornment:"none",endAdornment:"none",small:!1,disabled:!1,required:!1,placeholder:"value",hintText:"",passwordToggleTooltip:"",passwordToggle:!1,reserveSpaceForError:!1,hideError:!1},argTypes:{name:{control:!1},isValid:{control:!1},startAdornment:{options:Object.keys(r),mapping:r,control:{type:"select",labels:s}},endAdornment:{options:Object.keys(r),mapping:r,control:{type:"select",labels:s}},labelEndAdornment:{options:Object.keys(r),mapping:r,control:{type:"select",labels:s}}}},o={render:t=>{const c=f({password:t.required?a().required():a()}).required(),d=n=>{alert(JSON.stringify(n))},u=n=>{console.log(n)};return e.jsxs(y,{validationSchema:c,defaultValues:{password:""},onSubmit:d,onError:u,children:[e.jsx(p,{...t,name:"password",reserveSpaceForError:!0}),e.jsx(g,{type:"submit",children:"Submit"})]})}};var i,m,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
    }} onSubmit={onSubmit} onError={onError}>
        <FormPasswordInput {...args} name="password" reserveSpaceForError />

        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const D=["Default"];export{o as Default,D as __namedExportsOrder,A as default};
