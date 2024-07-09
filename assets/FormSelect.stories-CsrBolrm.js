import{j as e}from"./jsx-runtime-CexXSJP5.js";import{c as t,d as r,F as d}from"./Form-D_UmE9hU.js";import{b,c as f}from"./index-YfRCopfe.js";import{B as S}from"./Button-C0GdinNN.js";import{F as p}from"./FormSelect-0l506xx3.js";import"./index-BP8_t0zE.js";import"./clsx-B-dksMZM.js";import"./noop-Bj0g98VJ.js";import"./CheckboxSelect-D0e1C-LW.js";import"./react-select.esm-CD5uUjhY.js";import"./Select-Bt7LCtpj.js";import"./setPrototypeOf-DM9aTif1.js";import"./isNativeReflectConstruct-EvkcTDr1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-apZrcZRD.js";import"./objectWithoutPropertiesLoose-gpp6Tpz-.js";import"./index-BxmsGmlx.js";import"./floating-ui.dom-5jwf2x9o.js";import"./omit-Dv_hKa-K.js";import"./_baseGet-C7KzGAK3.js";import"./_MapCache-bPlbJmjb.js";import"./isObjectLike-yY6ejuuN.js";import"./isSymbol-CMQYLC8d.js";import"./_baseClone-UMuXwTt9.js";import"./_baseAssignValue-HfMhWjzy.js";import"./_baseTimes-BeXZtkeT.js";import"./_initCloneObject-D-aFD1Qy.js";import"./isPlainObject-DfuvdCyT.js";import"./_flatRest-LQTfQqTk.js";import"./identity-CwXImgea.js";import"./highlightText-BfWprMrp.js";import"./useTheme-C2mG1LtK.js";import"./ThemeProvider-DX_3E3qS.js";import"./Hint-BgND6QIn.js";import"./Label-U7w9Tf6e.js";import"./Select-Dl4qDWFA.js";import"./useCreatable-d97ef2c9.esm-GhE9lbNw.js";import"./AsyncSelect-KeIbVo3b.js";const i={none:void 0,searchIcon:e.jsx(b,{size:13}),infoIcon:e.jsx(f,{size:13})},y={none:"None",searchIcon:"Search",infoIcon:"Information"},F=[{value:"opt-1",label:"Option 1"},{value:"opt-2",label:"Option 2"},{value:"opt-3",label:"Option 3"},{value:"opt-4",label:"Option 4"}],oe={title:"Components/Forms/FormSelect",component:p,argTypes:{name:{control:!1},labelEndAdornment:{options:Object.keys(i),mapping:i,control:{type:"select",labels:y}}},args:{label:"",labelPosition:"top",labelEndAdornment:"none",placeholder:"",hintText:"",small:!1,required:!1,disabled:!1,isCreatable:!1,reserveSpaceForError:!1,isClearable:!1,isMulti:!1}},o={render:n=>{const u=t({user:n.required?t({label:r().required(),value:r().required()}):t({label:r(),value:r()})}).required(),c=a=>{console.log({data:a}),alert(JSON.stringify(a))};return e.jsxs(d,{validationSchema:u,defaultValues:{user:{value:"",label:""}},onSubmit:c,children:[e.jsx(p,{...n,name:"user",options:F,reserveSpaceForError:!0}),e.jsx(S,{type:"submit",children:"Submit"})]})}};var s,l,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const schema = yup.object({
      user: args.required ? yup.object({
        label: yup.string().required(),
        value: yup.string().required()
      }) : yup.object({
        label: yup.string(),
        value: yup.string()
      })
    }).required();
    type TFormData = yup.InferType<typeof schema>;
    const onSubmit = (data: TFormData) => {
      console.log({
        data
      });
      alert(JSON.stringify(data));
    };
    return <Form<TFormData> validationSchema={schema} defaultValues={{
      user: {
        value: '',
        label: ''
      }
    }} onSubmit={onSubmit}>
        <FormSelect {...args} name="user" options={optionsDefault} reserveSpaceForError />

        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const te=["Default"];export{o as Default,te as __namedExportsOrder,oe as default};
