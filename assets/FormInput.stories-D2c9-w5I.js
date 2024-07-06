import{j as e}from"./jsx-runtime-CexXSJP5.js";import{c as y,a,F as f}from"./Form-Cyk7D10R.js";import{b as h,d as b,e as g,c as x}from"./index-CNhk0B_H.js";import{F as m}from"./FormInput-BHbMd8rb.js";import{B as F}from"./Button-C0GdinNN.js";import"./index-BP8_t0zE.js";import"./Input-5t21YLbx.js";import"./clsx-B-dksMZM.js";import"./Label-Q9pw0DqB.js";import"./Hint-BgND6QIn.js";const o={none:void 0,searchIcon:e.jsx(h,{}),eyeIcon:e.jsx(b,{}),eyeSlashIcon:e.jsx(g,{}),infoIcon:e.jsx(x,{size:13})},n={none:"None",searchIcon:"Search",infoIcon:"Information",eyeIcon:"Eye",eyeSlashIcon:"Eye Slash"},B={title:"Components/Forms/FormInput",component:m,args:{type:"text",label:"",labelPosition:"top",labelEndAdornment:"none",startAdornment:"none",endAdornment:"none",small:!1,disabled:!1,required:!1,placeholder:"value",hintText:"",passwordToggleTooltip:"",passwordToggle:!1,reserveSpaceForError:!1,hideError:!1},argTypes:{name:{control:!1},type:{options:["text","password","email","number","search","tel","url"],control:{type:"select"}},startAdornment:{options:Object.keys(o),mapping:o,control:{type:"select",labels:n}},endAdornment:{options:Object.keys(o),mapping:o,control:{type:"select",labels:n}},labelEndAdornment:{options:Object.keys(o),mapping:o,control:{type:"select",labels:n}}}},r={render:s=>{const p=y({textinput:s.required?a().required():a()}).required(),u=t=>{console.log(JSON.stringify(t))},d=t=>{console.log(t)};return e.jsxs(f,{validationSchema:p,defaultValues:{textinput:""},onSubmit:u,onError:d,shouldValidateOnChange:!0,children:[e.jsx(m,{...s,name:"textinput",reserveSpaceForError:!0}),e.jsx(F,{type:"submit",children:"Submit"})]})}};var i,l,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const C=["Default"];export{r as Default,C as __namedExportsOrder,B as default};
