import{j as o}from"./jsx-runtime-CexXSJP5.js";import{u as T,b as _,c as n,e as h,a as r,F as k}from"./Form-CJm1iUD6.js";import{b as D,c as N}from"./index-DcsI7YQs.js";import{B}from"./Button-C0GdinNN.js";import{r as v}from"./index-BP8_t0zE.js";import{n as R}from"./noop-Bj0g98VJ.js";import{C as A}from"./CheckboxSelect-DUIvoMU5.js";import"./Select-CPRG45gO.js";import"./AsyncSelect-CPpnF7Xg.js";import"./clsx-B-dksMZM.js";import"./react-select.esm-DHf4C5Wo.js";import"./Select-C3vllaXk.js";import"./setPrototypeOf-DM9aTif1.js";import"./isNativeReflectConstruct-EvkcTDr1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-apZrcZRD.js";import"./objectWithoutPropertiesLoose-gpp6Tpz-.js";import"./index-BxmsGmlx.js";import"./floating-ui.dom-5jwf2x9o.js";import"./omit-Dv_hKa-K.js";import"./_baseGet-C7KzGAK3.js";import"./_MapCache-bPlbJmjb.js";import"./isObjectLike-yY6ejuuN.js";import"./isSymbol-CMQYLC8d.js";import"./_baseClone-UMuXwTt9.js";import"./_baseAssignValue-HfMhWjzy.js";import"./_baseTimes-BeXZtkeT.js";import"./_initCloneObject-D-aFD1Qy.js";import"./isPlainObject-DfuvdCyT.js";import"./_flatRest-LQTfQqTk.js";import"./identity-CwXImgea.js";import"./highlightText-BfWprMrp.js";import"./useTheme-C2mG1LtK.js";import"./ThemeProvider-DX_3E3qS.js";import"./Hint-BgND6QIn.js";import"./Label-Q9pw0DqB.js";import"./useCreatable-d97ef2c9.esm-QR2ISgyt.js";const u=({name:a,options:t,required:p,reserveSpaceForError:m,errorMsg:l,onChange:d=R,placeholder:i,selectRef:x,small:C,...V})=>{const{control:j,setError:c,resetField:E}=T(),{field:{value:O,onChange:f,onBlur:M},fieldState:{error:e}}=_({name:a,control:j}),I=(b,y)=>{y.action==="clear"?E(a):(f(b),d(b,y))};return v.useImperativeHandle(x,()=>({setValue:f,onBlur:M})),v.useEffect(()=>{l&&c(a,l)},[a,c,l]),o.jsx(A,{...V,options:t||[],value:O,errorMsg:(e==null?void 0:e.message)||(e==null?void 0:e.value.message)||(e==null?void 0:e.label.message),onChange:I,reserveSpaceForError:m,placeholder:i,required:p,small:C})};try{u.displayName="FormCheckboxSelect",u.__docgenInfo={description:"",displayName:"FormCheckboxSelect",props:{name:{defaultValue:null,description:"Name of the HTML Input (optional - without this, no input will be rendered)",name:"name",required:!0,type:{name:"string"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},labelEndAdornment:{defaultValue:null,description:"",name:"labelEndAdornment",required:!1,type:{name:"ReactNode"}},required:{defaultValue:null,description:"Marks the value-holding input as required for form validation",name:"required",required:!1,type:{name:"boolean"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"FieldError"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},reserveSpaceForError:{defaultValue:null,description:"",name:"reserveSpaceForError",required:!1,type:{name:"boolean"}},isCreatable:{defaultValue:null,description:"",name:"isCreatable",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"Array of options that populate the select menu",name:"options",required:!1,type:{name:"OptionType[]"}},selectRef:{defaultValue:null,description:"",name:"selectRef",required:!1,type:{name:"MutableRefObject<{ setValue?: ((option: ISelectOption) => void); onBlur?: (() => void); }> | undefined"}}}}}catch{}const q={none:void 0,searchIcon:o.jsx(D,{size:13}),infoIcon:o.jsx(N,{size:13})},H={none:"None",searchIcon:"Search",infoIcon:"Information"},P=[{value:"opt-1",label:"Option 1"},{value:"opt-2",label:"Option 2"},{value:"opt-3",label:"Option 3"},{value:"opt-4",label:"Option 4"}],xe={title:"Components/Forms/FormCheckboxSelect",component:u,argTypes:{name:{control:!1},labelEndAdornment:{options:Object.keys(q),mapping:q,control:{type:"select",labels:H}}},args:{label:"",labelPosition:"top",labelEndAdornment:"none",placeholder:"",hintText:"",small:!1,required:!1,disabled:!1,isCreatable:!1,reserveSpaceForError:!1,isClearable:!1,isMulti:!1}},s={render:function(t){const p=t.isMulti?n({users:t.required?h(n({label:r().required(),value:r().required()})):h(n({label:r(),value:r()}))}).required():n({user:t.required?n({label:r().required(),value:r().required()}):n({label:r(),value:r()})}).required(),m=i=>{console.log({data:i}),alert(JSON.stringify(i))},l=t.isMulti?{users:void 0}:{user:void 0},d=t.isMulti?"users":"user";return o.jsxs(k,{validationSchema:p,defaultValues:l,onSubmit:m,children:[o.jsx(u,{...t,name:d,options:P,reserveSpaceForError:!0}),o.jsx(B,{type:"submit",children:"Submit"})]})}};var g,S,F;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function useFormSelect(args) {
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
}`,...(F=(S=s.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const Ce=["Default"];export{s as Default,Ce as __namedExportsOrder,xe as default};
