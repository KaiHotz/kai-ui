import{R as e}from"./index-CDs2tPxN.js";import{c as y,a,F as f}from"./Form-BuIgr2gz.js";import{b as h,c as F,d as E,e as S}from"./index-BpAWt-Gq.js";import{B as b}from"./Button-_NUuuICh.js";import{F as i}from"./FormInput-BvV4F-2E.js";import"./clsx-B-dksMZM.js";import"./Input-C6nk_Lll.js";import"./Hint-CwrnwYvC.js";import"./Label-5g4jD_uN.js";const r={none:void 0,searchIcon:e.createElement(h,null),eyeIcon:e.createElement(F,null),eyeSlashIcon:e.createElement(E,null),infoIcon:e.createElement(S,{size:13})},s={none:"None",searchIcon:"Search",infoIcon:"Information",eyeIcon:"Eye",eyeSlashIcon:"Eye Slash"},C={title:"Components/Forms/FormInput",component:i,args:{label:"",type:"text",small:!1,disabled:!1,required:!1,placeholder:"value",hintText:"",reserveSpaceForError:!1},argTypes:{name:{control:!1},type:{options:["text","password","email","number","search","tel","url"],control:{type:"select"}},startAdornment:{options:Object.keys(r),mapping:r,control:{type:"select",labels:s}},endAdornment:{options:Object.keys(r),mapping:r,control:{type:"select",labels:s}}}},t={render:n=>{const p=y({textinput:n.required?a().required():a()}).required(),u=o=>{console.log(JSON.stringify(o))},d=o=>{console.log(o)};return e.createElement(f,{validationSchema:p,defaultValues:{textinput:""},onSubmit:u,onError:d,shouldValidateOnChange:!0},e.createElement(i,{...n,name:"textinput",reserveSpaceForError:!0}),e.createElement(b,{type:"submit"},"Submit"))}};var l,c,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const V=["Default"];export{t as Default,V as __namedExportsOrder,C as default};
