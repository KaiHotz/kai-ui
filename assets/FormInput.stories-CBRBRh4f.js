import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{c as y,a,F as f}from"./Form-BuxMYNPf.js";import{b as h,c as x,d as F,e as S}from"./index-C0IPxtKF.js";import{B as b}from"./Button-9aiuKYTr.js";import{F as l}from"./FormInput-BN_9_Uf9.js";import"./index-CDs2tPxN.js";import"./clsx-B-dksMZM.js";import"./Input-DcAjtIlW.js";import"./Hint-6Kt6kgG9.js";import"./Label-CtH19-Rh.js";const r={none:void 0,searchIcon:e.jsx(h,{}),eyeIcon:e.jsx(x,{}),eyeSlashIcon:e.jsx(F,{}),infoIcon:e.jsx(S,{size:13})},s={none:"None",searchIcon:"Search",infoIcon:"Information",eyeIcon:"Eye",eyeSlashIcon:"Eye Slash"},C={title:"Components/Forms/FormInput",component:l,args:{label:"",type:"text",small:!1,disabled:!1,required:!1,placeholder:"value",hintText:"",reserveSpaceForError:!1},argTypes:{name:{control:!1},type:{options:["text","password","email","number","search","tel","url"],control:{type:"select"}},startAdornment:{options:Object.keys(r),mapping:r,control:{type:"select",labels:s}},endAdornment:{options:Object.keys(r),mapping:r,control:{type:"select",labels:s}}}},o={render:n=>{const p=y({textinput:n.required?a().required():a()}).required(),u=t=>{console.log(JSON.stringify(t))},d=t=>{console.log(t)};return e.jsxs(f,{validationSchema:p,defaultValues:{textinput:""},onSubmit:u,onError:d,shouldValidateOnChange:!0,children:[e.jsx(l,{...n,name:"textinput",reserveSpaceForError:!0}),e.jsx(b,{type:"submit",children:"Submit"})]})}};var i,c,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const schema = yup.object({
      textinput: args.required ? yup.string().required() : yup.string()
    }).required();
    type TFormData = yup.InferType<typeof schema>;
    const onSubmit = (data: TFormData) => {
      console.log(JSON.stringify(data));
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
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const V=["Default"];export{o as Default,V as __namedExportsOrder,C as default};
