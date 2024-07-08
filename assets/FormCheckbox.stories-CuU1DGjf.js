import{j as n}from"./jsx-runtime-CexXSJP5.js";import{u as x,b as F,c as g,d as m,F as v}from"./Form-Cbg0D920.js";import{b as E,c as S}from"./index-DcsI7YQs.js";import{B as k}from"./Button-C0GdinNN.js";import{r as q}from"./index-BP8_t0zE.js";import{C}from"./Checkbox-MT3MR88x.js";import"./clsx-B-dksMZM.js";import"./Label-Q9pw0DqB.js";import"./Hint-BgND6QIn.js";const i=({name:e,required:a,errorMsg:r,...s})=>{const{control:o,setError:c}=x(),{field:{value:b,onChange:h,ref:y},fieldState:{error:l}}=F({name:e,control:o,rules:{required:a}});return q.useEffect(()=>{r!=null&&r.message&&c(e,r)},[e,c,r]),n.jsx(C,{...s,ref:y,required:a,checked:b,onChange:h,errorMsg:l==null?void 0:l.message})};try{i.displayName="FormCheckbox",i.__docgenInfo={description:"",displayName:"FormCheckbox",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"FieldError"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"checkmark"'},{value:'"square"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},labelEndAdornment:{defaultValue:null,description:"",name:"labelEndAdornment",required:!1,type:{name:"ReactNode"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},reserveSpaceForError:{defaultValue:null,description:"",name:"reserveSpaceForError",required:!1,type:{name:"boolean"}}}}}catch{}const u={none:void 0,searchIcon:n.jsx(E,{size:13}),infoIcon:n.jsx(S,{size:13})},j={none:"None",searchIcon:"Search",infoIcon:"Information"},P={title:"Components/Forms/FormCheckbox",component:i,argTypes:{name:{control:!1},checked:{control:!1},labelEndAdornment:{options:Object.keys(u),mapping:u,control:{type:"select",labels:j}}},args:{label:"Get notified",labelPosition:"right",labelEndAdornment:"none",hintText:"",required:!1,disabled:!1,variant:"checkmark",reserveSpaceForError:!1}},t={render:e=>{const a=g({notification:e.required?m().oneOf([!0],"Checkbox selection is required"):m()}).required(),r=o=>{alert(JSON.stringify(o))},s=o=>{console.log(o)};return n.jsxs(v,{validationSchema:a,defaultValues:{notification:!1},onSubmit:r,onError:s,children:[n.jsx(i,{...e,name:"notification"}),n.jsx("div",{style:{marginTop:"1rem"},children:n.jsx(k,{type:"submit",children:"Submit"})})]})}};var d,p,f;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        <div style={{
        marginTop: '1rem'
      }}>
          <Button type="submit">Submit</Button>
        </div>
      </Form>;
  }
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const z=["Default"];export{t as Default,z as __namedExportsOrder,P as default};
