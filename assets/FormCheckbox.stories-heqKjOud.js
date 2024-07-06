import{j as o}from"./jsx-runtime-CexXSJP5.js";import{u as y,b as x,c as F,d as u,F as g}from"./Form-Cyk7D10R.js";import{r as v}from"./index-BP8_t0zE.js";import{C as k}from"./Checkbox-DlEZw4sG.js";import"./clsx-B-dksMZM.js";import"./Label-BDDHWpQq.js";import"./Hint-BgND6QIn.js";const i=({name:e,required:t,errorMsg:r,...s})=>{const{control:a,setError:c}=y(),{field:{value:p,onChange:b,ref:h},fieldState:{error:l}}=x({name:e,control:a,rules:{required:t}});return v.useEffect(()=>{r!=null&&r.message&&c(e,r)},[e,c,r]),o.jsx(k,{...s,ref:h,required:t,checked:p,onChange:b,errorMsg:l==null?void 0:l.message})};try{i.displayName="FormCheckbox",i.__docgenInfo={description:"",displayName:"FormCheckbox",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"FieldError"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"checkmark"'},{value:'"square"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},reserveSpaceForError:{defaultValue:null,description:"",name:"reserveSpaceForError",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const j={title:"Forms/FormCheckbox",component:i,argTypes:{name:{control:!1},checked:{control:!1}}},n={render:e=>{const t=F({notification:e.required?u().oneOf([!0],"Checkbox selection is required"):u()}).required(),r=a=>{alert(JSON.stringify(a))},s=a=>{console.log(a)};return o.jsxs(g,{validationSchema:t,defaultValues:{notification:!1},onSubmit:r,onError:s,children:[o.jsx(i,{...e,name:"notification"}),o.jsx("button",{type:"submit",children:"Submit"})]})},args:{label:"Get notified",labelPosition:"right",hintText:"",required:!1,disabled:!1,variant:"checkmark",reserveSpaceForError:!1}};var m,d,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const schema = yup.object({
      notification: args.required ? yup.boolean().oneOf([true], 'Checkbox selection is required') : yup.boolean()
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
      notification: false
    }} onSubmit={onSubmit} onError={onError}>
        <FormCheckbox {...args} name="notification" />
        <button type="submit">Submit</button>
      </Form>;
  },
  args: {
    label: 'Get notified',
    labelPosition: 'right',
    hintText: '',
    required: false,
    disabled: false,
    variant: 'checkmark',
    reserveSpaceForError: false
  }
}`,...(f=(d=n.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const D=["Default"];export{n as Default,D as __namedExportsOrder,j as default};
