import{j as o}from"./jsx-runtime-CexXSJP5.js";import{u as k,b as B,c as a,e as v,d as r,F as D}from"./Form-D_UmE9hU.js";import{b as N,c as R}from"./index-YfRCopfe.js";import{B as A}from"./Button-C0GdinNN.js";import{r as h}from"./index-BP8_t0zE.js";import{n as H}from"./noop-Bj0g98VJ.js";import{C as P}from"./CheckboxSelect-bQQM308l.js";import"./Select-bUQOLXsq.js";import"./AsyncSelect-iMFsOGzm.js";import"./clsx-B-dksMZM.js";import"./react-select.esm-Cmf5oT9f.js";import"./Select-DgVWUGjx.js";import"./setPrototypeOf-DM9aTif1.js";import"./isNativeReflectConstruct-EvkcTDr1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-apZrcZRD.js";import"./objectWithoutPropertiesLoose-gpp6Tpz-.js";import"./index-BxmsGmlx.js";import"./floating-ui.dom-5jwf2x9o.js";import"./omit-Dv_hKa-K.js";import"./_baseGet-C7KzGAK3.js";import"./_MapCache-bPlbJmjb.js";import"./isObjectLike-yY6ejuuN.js";import"./isSymbol-CMQYLC8d.js";import"./_baseClone-UMuXwTt9.js";import"./_baseAssignValue-HfMhWjzy.js";import"./_baseTimes-BeXZtkeT.js";import"./_initCloneObject-D-aFD1Qy.js";import"./isPlainObject-DfuvdCyT.js";import"./_flatRest-LQTfQqTk.js";import"./identity-CwXImgea.js";import"./highlightText-BfWprMrp.js";import"./useTheme-C2mG1LtK.js";import"./ThemeProvider-DX_3E3qS.js";import"./Hint-BgND6QIn.js";import"./Label-U7w9Tf6e.js";import"./useCreatable-d97ef2c9.esm-qsThzvjN.js";const s=({name:e,options:u,required:p,reserveSpaceForError:m,errorMsg:n,onChange:l=H,placeholder:x,selectRef:V,small:C,...j})=>{const{control:E,setError:d,resetField:O,getFieldState:M}=k(),{field:{value:c,onChange:f,onBlur:I},fieldState:{error:t}}=B({name:e,control:E}),T=(b,y)=>{y.action==="clear"?O(e):(f(b),l(b,y))};h.useImperativeHandle(V,()=>({setValue:f,onBlur:I})),h.useEffect(()=>{n&&d(e,n)},[e,d,n]);const _=!M(e).invalid&&!!c;return o.jsx(P,{...j,options:u||[],value:c,errorMsg:(t==null?void 0:t.message)||(t==null?void 0:t.value.message)||(t==null?void 0:t.label.message),isValid:_,onChange:T,reserveSpaceForError:m,placeholder:x,required:p,small:C})};try{s.displayName="FormCheckboxSelect",s.__docgenInfo={description:"",displayName:"FormCheckboxSelect",props:{name:{defaultValue:null,description:"Name of the HTML Input (optional - without this, no input will be rendered)",name:"name",required:!0,type:{name:"string"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},labelEndAdornment:{defaultValue:null,description:"",name:"labelEndAdornment",required:!1,type:{name:"ReactNode"}},required:{defaultValue:null,description:"Marks the value-holding input as required for form validation",name:"required",required:!1,type:{name:"boolean"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"FieldError"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},reserveSpaceForError:{defaultValue:null,description:"",name:"reserveSpaceForError",required:!1,type:{name:"boolean"}},isCreatable:{defaultValue:null,description:"",name:"isCreatable",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"Array of options that populate the select menu",name:"options",required:!1,type:{name:"OptionType[]"}},selectRef:{defaultValue:null,description:"",name:"selectRef",required:!1,type:{name:"MutableRefObject<{ setValue?: ((option: ISelectOption) => void); onBlur?: (() => void); }> | undefined"}}}}}catch{}const q={none:void 0,searchIcon:o.jsx(N,{size:13}),infoIcon:o.jsx(R,{size:13})},$={none:"None",searchIcon:"Search",infoIcon:"Information"},w=[{value:"opt-1",label:"Option 1"},{value:"opt-2",label:"Option 2"},{value:"opt-3",label:"Option 3"},{value:"opt-4",label:"Option 4"}],Ce={title:"Components/Forms/FormCheckboxSelect",component:s,argTypes:{name:{control:!1},labelEndAdornment:{options:Object.keys(q),mapping:q,control:{type:"select",labels:$}}},args:{label:"",labelPosition:"top",labelEndAdornment:"none",placeholder:"",hintText:"",small:!1,required:!1,disabled:!1,isCreatable:!1,reserveSpaceForError:!1,isClearable:!1,isMulti:!1}},i={render:e=>{const u=e.isMulti?a({users:e.required?v(a({label:r().required(),value:r().required()})):v(a({label:r(),value:r()}))}).required():a({user:e.required?a({label:r().required(),value:r().required()}):a({label:r(),value:r()})}).required(),p=l=>{console.log({data:l}),alert(JSON.stringify(l))},m=e.isMulti?{users:void 0}:{user:void 0},n=e.isMulti?"users":"user";return o.jsxs(D,{validationSchema:u,defaultValues:m,onSubmit:p,children:[o.jsx(s,{...e,name:n,options:w,reserveSpaceForError:!0}),o.jsx(A,{type:"submit",children:"Submit"})]})}};var g,S,F;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const schema = args.isMulti ? yup.object({
      users: args.required ? yup.array(yup.object({
        label: yup.string().required(),
        value: yup.string().required()
      })) : yup.array(yup.object({
        label: yup.string(),
        value: yup.string()
      }))
    }).required() : yup.object({
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
    const defaultValues = args.isMulti ? {
      users: undefined
    } : {
      user: undefined
    };
    const name = args.isMulti ? 'users' : 'user';
    return <Form<TFormData> validationSchema={schema} defaultValues={defaultValues} onSubmit={onSubmit}>
        <FormCheckboxSelect {...args} name={name} options={optionsDefault} reserveSpaceForError />

        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(F=(S=i.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const je=["Default"];export{i as Default,je as __namedExportsOrder,Ce as default};
