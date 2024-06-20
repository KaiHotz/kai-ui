import{j as a}from"./jsx-runtime-qGIIFXMu.js";import{u as D,b as I,c as p,a as s,F as V}from"./Form-BuxMYNPf.js";import{B as w}from"./Button-9aiuKYTr.js";import{r as T}from"./index-CDs2tPxN.js";import{l as M}from"./lodash-B2soob2o.js";import{S as R}from"./Select-4adZnUE7.js";import{A as _}from"./AsyncSelect-BL0lEkDO.js";import"./clsx-B-dksMZM.js";import"./Select-B2AI_-0p.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BA1o8LyZ.js";import"./index-B-yFm4aN.js";import"./floating-ui.dom-5jwf2x9o.js";import"./index-C0IPxtKF.js";import"./getCSSVariable-Dab2ZoWK.js";import"./useTheme-CRT84cb2.js";import"./ThemeProvider-BPSOSGFa.js";import"./Label-CtH19-Rh.js";import"./Hint-6Kt6kgG9.js";const m=({name:n,options:r,required:o,defaultOptions:l,reserveSpaceForError:t,loadOptions:c,errorMsg:u,onChange:x=M.noop,placeholder:d,selectRef:j,small:f,...b})=>{const{control:C,setError:g}=D(),{field:{value:y,onChange:v,onBlur:E},fieldState:{error:e}}=I({name:n,control:C}),S=(q,B)=>{v(q),x(q,B)};return T.useImperativeHandle(j,()=>({setValue:v,onBlur:E})),T.useEffect(()=>{u&&g(n,u)},[n,g,u]),c?a.jsx(_,{...b,defaultOptions:l,value:y,errorMsg:(e==null?void 0:e.message)||(e==null?void 0:e.value.message)||(e==null?void 0:e.label.message),onChange:S,loadOptions:c,reserveSpaceForError:t,placeholder:d,required:o,small:f}):a.jsx(R,{...b,options:r||[],value:y,errorMsg:(e==null?void 0:e.message)||(e==null?void 0:e.value.message)||(e==null?void 0:e.label.message),onChange:S,reserveSpaceForError:t,placeholder:d,required:o,small:f})};m.__docgenInfo={description:"",methods:[],displayName:"FormSelect",props:{name:{required:!0,tsType:{name:"string"},description:""},small:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},hintText:{required:!1,tsType:{name:"string"},description:""},errorMsg:{required:!1,tsType:{name:"FieldError"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},reserveSpaceForError:{required:!1,tsType:{name:"boolean"},description:""},isCreatable:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"OptionType"}],raw:"OptionType[]"},description:""},selectRef:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"signature",type:"object",raw:`{
  setValue?: (option: ISelectOption) => void;
  onBlur?: () => void;
}`,signature:{properties:[{key:"setValue",value:{name:"signature",type:"function",raw:"(option: ISelectOption) => void",signature:{arguments:[{type:{name:"ISelectOption"},name:"option"}],return:{name:"void"}},required:!1}},{key:"onBlur",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:`MutableRefObject<{
  setValue?: (option: ISelectOption) => void;
  onBlur?: () => void;
}>`},description:""},onChange:{defaultValue:{value:"noop",computed:!0},required:!1}},composes:["SelectProps","Partial"]};const A=[{value:"opt-1",label:"Option 1"},{value:"opt-2",label:"Option 2"},{value:"opt-3",label:"Option 3"},{value:"opt-4",label:"Option 4"}],ae={title:"Components/Forms/FormSelect",component:m,argTypes:{name:{control:!1}},args:{label:"",placeholder:"",hintText:"",small:!1,required:!1,disabled:!1,isCreatable:!1,reserveSpaceForError:!1,isClearable:!1,isMulti:!1}},i={render:function(r){const o=p({user:r.required?p({label:s().required(),value:s().required()}):p({label:s(),value:s()})}).required(),l=t=>{console.log({data:t}),alert(JSON.stringify(t))};return a.jsxs(V,{validationSchema:o,defaultValues:{user:{value:"",label:""}},onSubmit:l,children:[a.jsx(m,{...r,name:"user",options:A,reserveSpaceForError:!0}),a.jsx(w,{type:"submit",children:"Submit"})]})}};var F,h,O;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(h=i.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};const ne=["Default"];export{i as Default,ne as __namedExportsOrder,ae as default};
