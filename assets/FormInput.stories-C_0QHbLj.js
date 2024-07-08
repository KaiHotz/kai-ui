import{j as e}from"./jsx-runtime-CexXSJP5.js";import{c as y,a as s,F as f}from"./Form-Cbg0D920.js";import{b as h,d as b,e as x,c as F}from"./index-DcsI7YQs.js";import{F as p}from"./FormInput-Dflt-7HE.js";import{B as g}from"./Button-C0GdinNN.js";import"./index-BP8_t0zE.js";import"./Input-DNth81pe.js";import"./clsx-B-dksMZM.js";import"./Label-Q9pw0DqB.js";import"./Hint-BgND6QIn.js";const r={none:void 0,searchIcon:e.jsx(h,{}),eyeIcon:e.jsx(b,{}),eyeSlashIcon:e.jsx(x,{}),infoIcon:e.jsx(F,{size:13})},n={none:"None",searchIcon:"Search",infoIcon:"Information",eyeIcon:"Eye",eyeSlashIcon:"Eye Slash"},B={title:"Components/Forms/FormInput",component:p,args:{type:"text",label:"",labelPosition:"top",labelEndAdornment:"none",startAdornment:"none",endAdornment:"none",small:!1,disabled:!1,required:!1,placeholder:"value",hintText:"",passwordToggleTooltip:"",passwordToggle:!1,reserveSpaceForError:!1,hideError:!1},argTypes:{name:{control:!1},type:{options:["text","password","email","number","search","tel","url"],control:{type:"select"}},startAdornment:{options:Object.keys(r),mapping:r,control:{type:"select",labels:n}},endAdornment:{options:Object.keys(r),mapping:r,control:{type:"select",labels:n}},labelEndAdornment:{options:Object.keys(r),mapping:r,control:{type:"select",labels:n}}}},o={render:a=>{const c=y({textinput:a.required?s().required():s()}).required(),u=t=>{alert(JSON.stringify(t))},d=t=>{console.log(t)};return e.jsxs(f,{validationSchema:c,defaultValues:{textinput:""},onSubmit:u,onError:d,shouldValidateOnChange:!0,children:[e.jsx(p,{...a,name:"textinput",reserveSpaceForError:!0}),e.jsx(g,{type:"submit",children:"Submit"})]})}};var i,l,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const C=["Default"];export{o as Default,C as __namedExportsOrder,B as default};
