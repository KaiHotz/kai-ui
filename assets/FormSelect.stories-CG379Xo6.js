import{j as a}from"./jsx-runtime-CexXSJP5.js";import{u as _,b as A,c as p,a as r,F as D}from"./Form-Cyk7D10R.js";import{b as M,c as N}from"./index-CNhk0B_H.js";import{B}from"./Button-C0GdinNN.js";import{r as q}from"./index-BP8_t0zE.js";import{l as R}from"./lodash-DZrcJQkD.js";import{S as H}from"./Select-Goc4VS8j.js";import{A as P}from"./AsyncSelect-BAm7e9DR.js";import"./clsx-B-dksMZM.js";import"./setPrototypeOf-DM9aTif1.js";import"./Select-B4xSK5o1.js";import"./objectWithoutPropertiesLoose-gpp6Tpz-.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-apZrcZRD.js";import"./index-BxmsGmlx.js";import"./floating-ui.dom-5jwf2x9o.js";import"./isNativeReflectConstruct-EvkcTDr1.js";import"./highlightText-BfWprMrp.js";import"./useTheme-BQkKZjoQ.js";import"./ThemeProvider-siUfK81O.js";import"./Label-Q9pw0DqB.js";import"./Hint-BgND6QIn.js";const i=({name:t,options:l,required:o,defaultOptions:u,reserveSpaceForError:n,loadOptions:d,errorMsg:m,onChange:j=R.noop,placeholder:c,selectRef:C,small:f,...b})=>{const{control:O,setError:y}=_(),{field:{value:g,onChange:v,onBlur:I},fieldState:{error:e}}=A({name:t,control:O}),h=(S,T)=>{v(S),j(S,T)};return q.useImperativeHandle(C,()=>({setValue:v,onBlur:I})),q.useEffect(()=>{m&&y(t,m)},[t,y,m]),d?a.jsx(P,{...b,defaultOptions:u,value:g,errorMsg:(e==null?void 0:e.message)||(e==null?void 0:e.value.message)||(e==null?void 0:e.label.message),onChange:h,loadOptions:d,reserveSpaceForError:n,placeholder:c,required:o,small:f}):a.jsx(H,{...b,options:l||[],value:g,errorMsg:(e==null?void 0:e.message)||(e==null?void 0:e.value.message)||(e==null?void 0:e.label.message),onChange:h,reserveSpaceForError:n,placeholder:c,required:o,small:f})};try{i.displayName="FormSelect",i.__docgenInfo={description:"",displayName:"FormSelect",props:{name:{defaultValue:null,description:"Name of the HTML Input (optional - without this, no input will be rendered)",name:"name",required:!0,type:{name:"string"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},labelEndAdornment:{defaultValue:null,description:"",name:"labelEndAdornment",required:!1,type:{name:"ReactNode"}},required:{defaultValue:null,description:"Marks the value-holding input as required for form validation",name:"required",required:!1,type:{name:"boolean"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"FieldError"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},reserveSpaceForError:{defaultValue:null,description:"",name:"reserveSpaceForError",required:!1,type:{name:"boolean"}},isCreatable:{defaultValue:null,description:"",name:"isCreatable",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"Array of options that populate the select menu",name:"options",required:!1,type:{name:"OptionType[]"}},selectRef:{defaultValue:null,description:"",name:"selectRef",required:!1,type:{name:"MutableRefObject<{ setValue?: ((option: ISelectOption) => void); onBlur?: (() => void); }> | undefined"}}}}}catch{}const F={none:void 0,searchIcon:a.jsx(M,{size:13}),infoIcon:a.jsx(N,{size:13})},k={none:"None",searchIcon:"Search",infoIcon:"Information"},w=[{value:"opt-1",label:"Option 1"},{value:"opt-2",label:"Option 2"},{value:"opt-3",label:"Option 3"},{value:"opt-4",label:"Option 4"}],ue={title:"Components/Forms/FormSelect",component:i,argTypes:{name:{control:!1},labelEndAdornment:{options:Object.keys(F),mapping:F,control:{type:"select",labels:k}}},args:{label:"",labelPosition:"top",labelEndAdornment:"none",placeholder:"",hintText:"",small:!1,required:!1,disabled:!1,isCreatable:!1,reserveSpaceForError:!1,isClearable:!1,isMulti:!1}},s={render:function(l){const o=p({user:l.required?p({label:r().required(),value:r().required()}):p({label:r(),value:r()})}).required(),u=n=>{console.log({data:n}),alert(JSON.stringify(n))};return a.jsxs(D,{validationSchema:o,defaultValues:{user:{value:"",label:""}},onSubmit:u,children:[a.jsx(i,{...l,name:"user",options:w,reserveSpaceForError:!0}),a.jsx(B,{type:"submit",children:"Submit"})]})}};var x,V,E;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(V=s.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};const me=["Default"];export{s as Default,me as __namedExportsOrder,ue as default};
