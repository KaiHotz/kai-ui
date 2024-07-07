import{j as n}from"./jsx-runtime-CexXSJP5.js";import{u as S,b as q,c as T,a as m,F as V}from"./Form-Cyk7D10R.js";import{b as C,c as I}from"./index-CNhk0B_H.js";import{r as c}from"./index-BP8_t0zE.js";import{T as j}from"./Textarea-DMjbVym9.js";import{B as _}from"./Button-C0GdinNN.js";import"./clsx-B-dksMZM.js";import"./Label-Q9pw0DqB.js";import"./Hint-BgND6QIn.js";const l=c.forwardRef(({name:e,required:s,disabled:i,errorMsg:r,onChange:a,...b},g)=>{var d;const{formState:{errors:t},setError:u,control:y}=S(),{field:{value:F,onChange:E}}=q({name:e,control:y,disabled:i});return c.useEffect(()=>{r!=null&&r.message&&u(e,r)},[e,u,r]),n.jsx(j,{...b,onChange:a||(v=>E(v.target.value)),errorMsg:t!=null&&t[e]?(d=t[e])==null?void 0:d.message:void 0,required:s,value:F,ref:g})});try{l.displayName="FormTextarea",l.__docgenInfo={description:"",displayName:"FormTextarea",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: any) => void)"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"FieldError"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},labelEndAdornment:{defaultValue:null,description:"",name:"labelEndAdornment",required:!1,type:{name:"ReactNode"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},reserveSpaceForError:{defaultValue:null,description:"",name:"reserveSpaceForError",required:!1,type:{name:"boolean"}}}}}catch{}const p={none:void 0,searchIcon:n.jsx(C,{size:13}),infoIcon:n.jsx(I,{size:13})},N={none:"None",searchIcon:"Search",infoIcon:"Information"},$={title:"Components/Forms/FormTextarea",component:l,argTypes:{name:{control:!1},value:{control:!1},onChange:{control:!1},testId:{control:!1},className:{control:!1},labelEndAdornment:{options:Object.keys(p),mapping:p,control:{type:"select",labels:N}}}},o={render:e=>{const s=T({textarea:e.required?m().required():m()}).required(),i=a=>{alert(JSON.stringify(a))},r=a=>{console.log(a)};return n.jsxs(V,{validationSchema:s,defaultValues:{textarea:""},onSubmit:i,onError:r,shouldValidateOnChange:!0,children:[n.jsx(l,{...e,name:"textarea",reserveSpaceForError:!0}),n.jsx(_,{type:"submit",children:"Submit"})]})},args:{label:"",labelPosition:"top",labelEndAdornment:"none",placeholder:"",hintText:"",disabled:!1,required:!1,reserveSpaceForError:!1,maxLength:0}};var f,h,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    }} onSubmit={onSubmit} onError={onError} shouldValidateOnChange>
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
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const k=["Default"];export{o as Default,k as __namedExportsOrder,$ as default};
