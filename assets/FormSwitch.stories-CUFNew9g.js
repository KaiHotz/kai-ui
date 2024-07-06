import{j as n}from"./jsx-runtime-CexXSJP5.js";import{u as c,b as p,c as f,d as y,F as g}from"./Form-Cyk7D10R.js";import{S as b}from"./Switch-DqWM3yD2.js";import{B as h}from"./Button-C0GdinNN.js";import"./index-BP8_t0zE.js";import"./clsx-B-dksMZM.js";import"./Label-BDDHWpQq.js";const r=({name:a,...o})=>{const{control:l}=c(),{field:{value:s,onChange:e,ref:d}}=p({name:a,control:l});return n.jsx(b,{...o,ref:d,value:s,onChange:e})};try{r.displayName="FormSwitch",r.__docgenInfo={description:"",displayName:"FormSwitch",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const T={title:"components/Forms/FormSwitch",component:r,argTypes:{name:{control:!1},value:{control:!1},className:{control:!1},testId:{control:!1}}},t={render:a=>{const o=f({notification:y()}).required(),l=e=>{alert(JSON.stringify(e))},s=e=>{console.log(e)};return n.jsxs(g,{validationSchema:o,defaultValues:{notification:!1},onSubmit:l,onError:s,children:[n.jsx(r,{...a,name:"notification"}),n.jsx("div",{style:{marginTop:"10px"},children:n.jsx(h,{type:"submit",children:"Submit"})})]})},args:{label:"",disabled:!1}};var i,m,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const schema = yup.object({
      notification: yup.boolean()
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
        <FormSwitch {...args} name="notification" />

        <div style={{
        marginTop: '10px'
      }}>
          <Button type="submit">Submit</Button>
        </div>
      </Form>;
  },
  args: {
    label: '',
    disabled: false
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,T as default};
