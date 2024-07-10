import{j as e}from"./jsx-runtime-CexXSJP5.js";import{c as y,e as a,F as f}from"./Form-DjRej1vO.js";import{b,d as x,e as F,c as h}from"./index-YfRCopfe.js";import{F as c}from"./FormInput-Dvdzjw64.js";import{B as S}from"./Button-C0GdinNN.js";import"./index-BP8_t0zE.js";import"./Input-DF4M-RAo.js";import"./clsx-B-dksMZM.js";import"./Label-U7w9Tf6e.js";import"./Hint-BgND6QIn.js";import"./PasswordInput-DgCMTlWS.js";const r={none:void 0,searchIcon:e.jsx(b,{}),eyeIcon:e.jsx(x,{}),eyeSlashIcon:e.jsx(F,{}),infoIcon:e.jsx(h,{size:13})},n={none:"None",searchIcon:"Search",infoIcon:"Information",eyeIcon:"Eye",eyeSlashIcon:"Eye Slash"},k={title:"Components/Forms/FormInput",component:c,args:{type:"text",label:"",labelPosition:"top",labelEndAdornment:"none",startAdornment:"none",endAdornment:"none",small:!1,disabled:!1,required:!1,placeholder:"value",hintText:"",reserveSpaceForError:!1,hideError:!1},argTypes:{name:{control:!1},isValid:{control:!1},type:{options:["text","password","email","number","search","tel","url"],control:{type:"select"}},startAdornment:{options:Object.keys(r),mapping:r,control:{type:"select",labels:n}},endAdornment:{options:Object.keys(r),mapping:r,control:{type:"select",labels:n}},labelEndAdornment:{options:Object.keys(r),mapping:r,control:{type:"select",labels:n}}}},t={render:s=>{const p=y({textinput:s.required?a().required():a()}).required(),u=o=>{alert(JSON.stringify(o))},d=o=>{console.log(o)};return e.jsxs(f,{validationSchema:p,defaultValues:{textinput:""},onSubmit:u,onError:d,children:[e.jsx(c,{...s,name:"textinput",reserveSpaceForError:!0}),e.jsx(S,{type:"submit",children:"Submit"})]})}};var i,l,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
    }} onSubmit={onSubmit} onError={onError}>
        <FormInput {...args} name="textinput" reserveSpaceForError />

        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,k as default};
