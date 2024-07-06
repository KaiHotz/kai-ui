import{j as a}from"./jsx-runtime-CexXSJP5.js";import{u as c,b as p,c as f,d as y,F as b}from"./Form-Cyk7D10R.js";import{S as g}from"./Switch-CZIK_mDi.js";import{B as h}from"./Button-C0GdinNN.js";import"./index-BP8_t0zE.js";import"./clsx-B-dksMZM.js";import"./Label-0w12sUq_.js";const r=({name:n,...o})=>{const{control:l}=c(),{field:{value:s,onChange:e,ref:d}}=p({name:n,control:l});return a.jsx(g,{...o,ref:d,value:s,onChange:e})};try{r.displayName="FormSwitch",r.__docgenInfo={description:"",displayName:"FormSwitch",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const T={title:"components/Forms/FormSwitch",component:r,argTypes:{name:{control:!1},value:{control:!1},className:{control:!1},testId:{control:!1}}},t={render:n=>{const o=f({notification:y()}).required(),l=e=>{alert(JSON.stringify(e))},s=e=>{console.log(e)};return a.jsxs(b,{validationSchema:o,defaultValues:{notification:!1},onSubmit:l,onError:s,children:[a.jsx(r,{...n,name:"notification"}),a.jsx("div",{style:{marginTop:"10px"},children:a.jsx(h,{type:"submit",children:"Submit"})})]})},args:{label:"",disabled:!1}};var i,u,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,T as default};
