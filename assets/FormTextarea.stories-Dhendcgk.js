import{j as n}from"./jsx-runtime-CexXSJP5.js";import{u as T,b as V,c as I,e as c,F as j}from"./Form-DjRej1vO.js";import{b as _,c as C}from"./index-YfRCopfe.js";import{r as p}from"./index-BP8_t0zE.js";import{T as N}from"./Textarea-CyiEX_9b.js";import{B as D}from"./Button-C0GdinNN.js";import"./clsx-B-dksMZM.js";import"./Label-U7w9Tf6e.js";import"./Hint-BgND6QIn.js";const l=p.forwardRef(({name:e,required:s,disabled:i,errorMsg:r,onChange:a,...g},h)=>{var m;const{control:F,setError:d,getFieldState:E,formState:{errors:t}}=T(),{field:{value:u,onChange:v}}=V({name:e,control:F,disabled:i});p.useEffect(()=>{r!=null&&r.message&&d(e,r)},[e,d,r]);const S=!E(e).invalid&&!!u;return n.jsx(N,{...g,onChange:a||(q=>v(q.target.value)),errorMsg:t!=null&&t[e]?(m=t[e])==null?void 0:m.message:void 0,required:s,value:u,isValid:S,ref:h})});try{l.displayName="FormTextarea",l.__docgenInfo={description:"",displayName:"FormTextarea",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: any) => void)"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"FieldError"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},labelEndAdornment:{defaultValue:null,description:"",name:"labelEndAdornment",required:!1,type:{name:"ReactNode"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},reserveSpaceForError:{defaultValue:null,description:"",name:"reserveSpaceForError",required:!1,type:{name:"boolean"}},isValid:{defaultValue:null,description:"",name:"isValid",required:!1,type:{name:"boolean"}}}}}catch{}const f={none:void 0,searchIcon:n.jsx(_,{size:13}),infoIcon:n.jsx(C,{size:13})},A={none:"None",searchIcon:"Search",infoIcon:"Information"},w={title:"Components/Forms/FormTextarea",component:l,argTypes:{name:{control:!1},isValid:{control:!1},value:{control:!1},onChange:{control:!1},testId:{control:!1},className:{control:!1},labelEndAdornment:{options:Object.keys(f),mapping:f,control:{type:"select",labels:A}}}},o={render:e=>{const s=I({textarea:e.required?c().required():c()}).required(),i=a=>{alert(JSON.stringify(a))},r=a=>{console.log(a)};return n.jsxs(j,{validationSchema:s,defaultValues:{textarea:""},onSubmit:i,onError:r,children:[n.jsx(l,{...e,name:"textarea",reserveSpaceForError:!0}),n.jsx(D,{type:"submit",children:"Submit"})]})},args:{label:"",labelPosition:"top",labelEndAdornment:"none",placeholder:"",hintText:"",disabled:!1,required:!1,reserveSpaceForError:!1,maxLength:0}};var b,x,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    const schema = yup.object({
      textarea: args.required ? yup.string().required() : yup.string()
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
      textarea: ''
    }} onSubmit={onSubmit} onError={onError}>
        <FormTextarea {...args} name="textarea" reserveSpaceForError />
        <Button type="submit">Submit</Button>
      </Form>;
  },
  args: {
    label: '',
    labelPosition: 'top',
    labelEndAdornment: 'none',
    placeholder: '',
    hintText: '',
    disabled: false,
    required: false,
    reserveSpaceForError: false,
    maxLength: 0
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const H=["Default"];export{o as Default,H as __namedExportsOrder,w as default};