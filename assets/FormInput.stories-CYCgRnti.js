import{j as e}from"./jsx-runtime-CexXSJP5.js";import{c as y,a,F as f}from"./Form-CrycOdgP.js";import{b as h,c as x,d as F,e as S}from"./index-HCt5ZxLs.js";import{B as b}from"./Button-DNiJI1Uu.js";import{F as l}from"./FormInput-X4t5JK4a.js";import"./index-BP8_t0zE.js";import"./clsx-B-dksMZM.js";import"./Input-C-_XjmA-.js";import"./Hint-BgND6QIn.js";import"./Label-Dj0iuwZQ.js";const r={none:void 0,searchIcon:e.jsx(h,{}),eyeIcon:e.jsx(x,{}),eyeSlashIcon:e.jsx(F,{}),infoIcon:e.jsx(S,{size:13})},s={none:"None",searchIcon:"Search",infoIcon:"Information",eyeIcon:"Eye",eyeSlashIcon:"Eye Slash"},C={title:"Components/Forms/FormInput",component:l,args:{label:"",type:"text",small:!1,disabled:!1,required:!1,placeholder:"value",hintText:"",reserveSpaceForError:!1},argTypes:{name:{control:!1},type:{options:["text","password","email","number","search","tel","url"],control:{type:"select"}},startAdornment:{options:Object.keys(r),mapping:r,control:{type:"select",labels:s}},endAdornment:{options:Object.keys(r),mapping:r,control:{type:"select",labels:s}}}},o={render:n=>{const p=y({textinput:n.required?a().required():a()}).required(),u=t=>{console.log(JSON.stringify(t))},d=t=>{console.log(t)};return e.jsxs(f,{validationSchema:p,defaultValues:{textinput:""},onSubmit:u,onError:d,shouldValidateOnChange:!0,children:[e.jsx(l,{...n,name:"textinput",reserveSpaceForError:!0}),e.jsx(b,{type:"submit",children:"Submit"})]})}};var i,c,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
