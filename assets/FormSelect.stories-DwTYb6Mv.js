import{j as t}from"./jsx-runtime-CexXSJP5.js";import{u as D,b as N,c as m,a as l,F as A}from"./Form-Cbg0D920.js";import{b as B,c as R}from"./index-Bt2cBs-r.js";import{B as H}from"./Button-C0GdinNN.js";import{r as x}from"./index-BP8_t0zE.js";import{n as P}from"./noop-Bj0g98VJ.js";import"./CheckboxSelect-CiJOjVy6.js";import{S as k}from"./Select-C_ha76Pq.js";import{A as w}from"./AsyncSelect-D423HZ-Z.js";import"./clsx-B-dksMZM.js";import"./react-select.esm-DlIkQFst.js";import"./Select-CasWa8u3.js";import"./setPrototypeOf-DM9aTif1.js";import"./isNativeReflectConstruct-EvkcTDr1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-apZrcZRD.js";import"./objectWithoutPropertiesLoose-gpp6Tpz-.js";import"./index-BxmsGmlx.js";import"./floating-ui.dom-5jwf2x9o.js";import"./omit-CobcZoPH.js";import"./_baseGet-BilIP510.js";import"./_baseAssignValue-C5pZOkKE.js";import"./_baseClone-CC1rQEIg.js";import"./_initCloneObject-Cmd1S_nI.js";import"./isPlainObject-BgrzB_nQ.js";import"./_flatRest-DX57TjYk.js";import"./highlightText-BfWprMrp.js";import"./useTheme-C2mG1LtK.js";import"./ThemeProvider-DX_3E3qS.js";import"./Hint-BgND6QIn.js";import"./Label-Q9pw0DqB.js";import"./useCreatable-d97ef2c9.esm-CHgjhgCM.js";const s=({name:a,options:n,required:o,defaultOptions:u,reserveSpaceForError:r,loadOptions:c,errorMsg:p,onChange:O=P,placeholder:d,selectRef:I,small:f,...b})=>{const{control:T,setError:y,resetField:_}=D(),{field:{value:g,onChange:v,onBlur:M},fieldState:{error:e}}=N({name:a,control:T}),S=(q,F)=>{F.action==="clear"?_(a):(v(q),O(q,F))};x.useImperativeHandle(I,()=>({setValue:v,onBlur:M})),x.useEffect(()=>{p&&y(a,p)},[a,y,p]);const h=(e==null?void 0:e.message)||(e==null?void 0:e.value.message)||(e==null?void 0:e.label.message);return c?t.jsx(w,{...b,defaultOptions:u,value:g,errorMsg:h,onChange:S,loadOptions:c,reserveSpaceForError:r,placeholder:d,required:o,small:f}):t.jsx(k,{...b,options:n||[],value:g,errorMsg:h,onChange:S,reserveSpaceForError:r,placeholder:d,required:o,small:f})};try{s.displayName="FormSelect",s.__docgenInfo={description:"",displayName:"FormSelect",props:{name:{defaultValue:null,description:"Name of the HTML Input (optional - without this, no input will be rendered)",name:"name",required:!0,type:{name:"string"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},labelEndAdornment:{defaultValue:null,description:"",name:"labelEndAdornment",required:!1,type:{name:"ReactNode"}},required:{defaultValue:null,description:"Marks the value-holding input as required for form validation",name:"required",required:!1,type:{name:"boolean"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"FieldError"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},reserveSpaceForError:{defaultValue:null,description:"",name:"reserveSpaceForError",required:!1,type:{name:"boolean"}},isCreatable:{defaultValue:null,description:"",name:"isCreatable",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"Array of options that populate the select menu",name:"options",required:!1,type:{name:"OptionType[]"}},selectRef:{defaultValue:null,description:"",name:"selectRef",required:!1,type:{name:"MutableRefObject<{ setValue?: ((option: ISelectOption) => void); onBlur?: (() => void); }> | undefined"}}}}}catch{}const V={none:void 0,searchIcon:t.jsx(B,{size:13}),infoIcon:t.jsx(R,{size:13})},z={none:"None",searchIcon:"Search",infoIcon:"Information"},J=[{value:"opt-1",label:"Option 1"},{value:"opt-2",label:"Option 2"},{value:"opt-3",label:"Option 3"},{value:"opt-4",label:"Option 4"}],qe={title:"Components/Forms/FormSelect",component:s,argTypes:{name:{control:!1},labelEndAdornment:{options:Object.keys(V),mapping:V,control:{type:"select",labels:z}}},args:{label:"",labelPosition:"top",labelEndAdornment:"none",placeholder:"",hintText:"",small:!1,required:!1,disabled:!1,isCreatable:!1,reserveSpaceForError:!1,isClearable:!1,isMulti:!1}},i={render:function(n){const o=m({user:n.required?m({label:l().required(),value:l().required()}):m({label:l(),value:l()})}).required(),u=r=>{console.log({data:r}),alert(JSON.stringify(r))};return t.jsxs(A,{validationSchema:o,defaultValues:{user:{value:"",label:""}},onSubmit:u,children:[t.jsx(s,{...n,name:"user",options:J,reserveSpaceForError:!0}),t.jsx(H,{type:"submit",children:"Submit"})]})}};var E,j,C;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(C=(j=i.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const Fe=["Default"];export{i as Default,Fe as __namedExportsOrder,qe as default};
