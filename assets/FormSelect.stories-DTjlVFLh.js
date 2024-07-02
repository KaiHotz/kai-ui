import{j as n}from"./jsx-runtime-CexXSJP5.js";import{u as _,b as D,c as m,a as o,F as B}from"./Form-BWgC46Iv.js";import{B as M}from"./Button-DNiJI1Uu.js";import{r as q}from"./index-BP8_t0zE.js";import{l as I}from"./lodash-DZrcJQkD.js";import{S as N}from"./Select-DqIMywNW.js";import{A as R}from"./AsyncSelect-CRf-eDko.js";import"./clsx-B-dksMZM.js";import"./assertThisInitialized-DtN97TLk.js";import"./Select-CZYQLNso.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-apZrcZRD.js";import"./index-BxmsGmlx.js";import"./floating-ui.dom-5jwf2x9o.js";import"./index-OyZyT1oi.js";import"./highlightText-BfWprMrp.js";import"./useTheme-BQkKZjoQ.js";import"./ThemeProvider-siUfK81O.js";import"./Label-Dj0iuwZQ.js";import"./Hint-BgND6QIn.js";const i=({name:a,options:r,required:l,defaultOptions:u,reserveSpaceForError:t,loadOptions:d,errorMsg:p,onChange:C=I.noop,placeholder:c,selectRef:j,small:f,...b})=>{const{control:E,setError:y}=_(),{field:{value:g,onChange:S,onBlur:O},fieldState:{error:e}}=D({name:a,control:E}),h=(v,T)=>{S(v),C(v,T)};return q.useImperativeHandle(j,()=>({setValue:S,onBlur:O})),q.useEffect(()=>{p&&y(a,p)},[a,y,p]),d?n.jsx(R,{...b,defaultOptions:u,value:g,errorMsg:(e==null?void 0:e.message)||(e==null?void 0:e.value.message)||(e==null?void 0:e.label.message),onChange:h,loadOptions:d,reserveSpaceForError:t,placeholder:c,required:l,small:f}):n.jsx(N,{...b,options:r||[],value:g,errorMsg:(e==null?void 0:e.message)||(e==null?void 0:e.value.message)||(e==null?void 0:e.label.message),onChange:h,reserveSpaceForError:t,placeholder:c,required:l,small:f})};try{i.displayName="FormSelect",i.__docgenInfo={description:"",displayName:"FormSelect",props:{name:{defaultValue:null,description:"Name of the HTML Input (optional - without this, no input will be rendered)",name:"name",required:!0,type:{name:"string"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"Marks the value-holding input as required for form validation",name:"required",required:!1,type:{name:"boolean"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"FieldError"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},reserveSpaceForError:{defaultValue:null,description:"",name:"reserveSpaceForError",required:!1,type:{name:"boolean"}},isCreatable:{defaultValue:null,description:"",name:"isCreatable",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"Array of options that populate the select menu",name:"options",required:!1,type:{name:"OptionType[]"}},selectRef:{defaultValue:null,description:"",name:"selectRef",required:!1,type:{name:"MutableRefObject<{ setValue?: ((option: ISelectOption) => void); onBlur?: (() => void); }> | undefined"}}}}}catch{}const A=[{value:"opt-1",label:"Option 1"},{value:"opt-2",label:"Option 2"},{value:"opt-3",label:"Option 3"},{value:"opt-4",label:"Option 4"}],ne={title:"Components/Forms/FormSelect",component:i,argTypes:{name:{control:!1}},args:{label:"",placeholder:"",hintText:"",small:!1,required:!1,disabled:!1,isCreatable:!1,reserveSpaceForError:!1,isClearable:!1,isMulti:!1}},s={render:function(r){const l=m({user:r.required?m({label:o().required(),value:o().required()}):m({label:o(),value:o()})}).required(),u=t=>{console.log({data:t}),alert(JSON.stringify(t))};return n.jsxs(B,{validationSchema:l,defaultValues:{user:{value:"",label:""}},onSubmit:u,children:[n.jsx(i,{...r,name:"user",options:A,reserveSpaceForError:!0}),n.jsx(M,{type:"submit",children:"Submit"})]})}};var F,x,V;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(V=(x=s.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};const re=["Default"];export{s as Default,re as __namedExportsOrder,ne as default};
