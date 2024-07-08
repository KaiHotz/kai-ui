import{j as e}from"./jsx-runtime-CexXSJP5.js";import{c as t,d as r,F as d}from"./Form-Dgq8zOsw.js";import{b,c as f}from"./index-8LmFUV_v.js";import{B as S}from"./Button-C0GdinNN.js";import{F as p}from"./FormSelect-ACUue0ad.js";import"./index-BP8_t0zE.js";import"./clsx-B-dksMZM.js";import"./noop-Bj0g98VJ.js";import"./CheckboxSelect-CtQt4pWD.js";import"./react-select.esm-C5hQIgGl.js";import"./Select-B6BRwtNA.js";import"./setPrototypeOf-DM9aTif1.js";import"./isNativeReflectConstruct-EvkcTDr1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-apZrcZRD.js";import"./objectWithoutPropertiesLoose-gpp6Tpz-.js";import"./index-BxmsGmlx.js";import"./floating-ui.dom-5jwf2x9o.js";import"./omit-Dv_hKa-K.js";import"./_baseGet-C7KzGAK3.js";import"./_MapCache-bPlbJmjb.js";import"./isObjectLike-yY6ejuuN.js";import"./isSymbol-CMQYLC8d.js";import"./_baseClone-UMuXwTt9.js";import"./_baseAssignValue-HfMhWjzy.js";import"./_baseTimes-BeXZtkeT.js";import"./_initCloneObject-D-aFD1Qy.js";import"./isPlainObject-DfuvdCyT.js";import"./_flatRest-LQTfQqTk.js";import"./identity-CwXImgea.js";import"./highlightText-BfWprMrp.js";import"./useTheme-C2mG1LtK.js";import"./ThemeProvider-DX_3E3qS.js";import"./Hint-BgND6QIn.js";import"./Label-Q9pw0DqB.js";import"./Select-YRO8NlyY.js";import"./useCreatable-d97ef2c9.esm-DERNFTJR.js";import"./AsyncSelect-CTPfz3bk.js";const i={none:void 0,searchIcon:e.jsx(b,{size:13}),infoIcon:e.jsx(f,{size:13})},F={none:"None",searchIcon:"Search",infoIcon:"Information"},y=[{value:"opt-1",label:"Option 1"},{value:"opt-2",label:"Option 2"},{value:"opt-3",label:"Option 3"},{value:"opt-4",label:"Option 4"}],te={title:"Components/Forms/FormSelect",component:p,argTypes:{name:{control:!1},labelEndAdornment:{options:Object.keys(i),mapping:i,control:{type:"select",labels:F}}},args:{label:"",labelPosition:"top",labelEndAdornment:"none",placeholder:"",hintText:"",small:!1,required:!1,disabled:!1,isCreatable:!1,reserveSpaceForError:!1,isClearable:!1,isMulti:!1}},o={render:function(n){const u=t({user:n.required?t({label:r().required(),value:r().required()}):t({label:r(),value:r()})}).required(),c=a=>{console.log({data:a}),alert(JSON.stringify(a))};return e.jsxs(d,{validationSchema:u,defaultValues:{user:{value:"",label:""}},onSubmit:c,children:[e.jsx(p,{...n,name:"user",options:y,reserveSpaceForError:!0}),e.jsx(S,{type:"submit",children:"Submit"})]})}};var s,l,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: function useFormSelect(args) {
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
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const ne=["Default"];export{o as Default,ne as __namedExportsOrder,te as default};