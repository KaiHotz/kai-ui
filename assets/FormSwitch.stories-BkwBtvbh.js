import{j as e}from"./jsx-runtime-CexXSJP5.js";import{u as p,b as f,c as b,a as y,F as g}from"./Form-Cxp3Z12N.js";import{b as h,c as v}from"./index-YfRCopfe.js";import{S}from"./Switch-BOJR35aF.js";import{B as F}from"./Button-C0GdinNN.js";import"./index-BP8_t0zE.js";import"./clsx-B-dksMZM.js";import"./Label-U7w9Tf6e.js";const o=({name:a,...r})=>{const{control:l}=p(),{field:{value:i,onChange:n,ref:c}}=f({name:a,control:l});return e.jsx(S,{...r,ref:c,value:i,onChange:n})};try{o.displayName="FormSwitch",o.__docgenInfo={description:"",displayName:"FormSwitch",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},labelEndAdornment:{defaultValue:null,description:"",name:"labelEndAdornment",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const s={none:void 0,searchIcon:e.jsx(h,{size:13}),infoIcon:e.jsx(v,{size:13})},E={none:"None",searchIcon:"Search",infoIcon:"Information"},C={title:"Components/Forms/FormSwitch",component:o,argTypes:{name:{control:!1},value:{control:!1},className:{control:!1},testId:{control:!1},labelEndAdornment:{options:Object.keys(s),mapping:s,control:{type:"select",labels:E}}}},t={render:a=>{const r=b({notification:y()}).required(),l=n=>{alert(JSON.stringify(n))},i=n=>{console.log(n)};return e.jsxs(g,{validationSchema:r,defaultValues:{notification:!1},onSubmit:l,onError:i,children:[e.jsx(o,{...a,name:"notification"}),e.jsx("div",{style:{marginTop:"10px"},children:e.jsx(F,{type:"submit",children:"Submit"})})]})},args:{size:void 0,label:"",labelPosition:"right",labelEndAdornment:"none",disabled:!1}};var m,u,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    size: undefined,
    label: '',
    labelPosition: 'right',
    labelEndAdornment: 'none',
    disabled: false
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,C as default};
