import{j as a}from"./jsx-runtime-CexXSJP5.js";import{u as x,b as g,c as S,e as p,F as w}from"./Form-BWgC46Iv.js";import{B as D}from"./Button-DNiJI1Uu.js";import{r as b}from"./index-BP8_t0zE.js";import{D as q}from"./Datepicker-Dxz4LPgJ.js";import"./clsx-B-dksMZM.js";import"./index-BxmsGmlx.js";import"./floating-ui.dom-5jwf2x9o.js";import"./index-OyZyT1oi.js";import"./Input-DpsOtBxU.js";import"./Hint-BgND6QIn.js";import"./Label-Dj0iuwZQ.js";const n=({name:e,required:o,errorMsg:r,...l})=>{const{control:f,setError:d}=x(),{field:{value:i,onChange:y},fieldState:{error:s}}=g({name:e,control:f});return b.useEffect(()=>{r&&d(e,r)},[e,d,r]),a.jsx(q,{...l,name:e,required:o,onChange:h=>y(h),value:i,errorMsg:s==null?void 0:s.message,selected:i})};try{n.displayName="FormDatepicker",n.__docgenInfo={description:"",displayName:"FormDatepicker",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((date: Date | [Date | null, Date | null] | null) => void)"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"FieldError"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},reserveSpaceForError:{defaultValue:null,description:"",name:"reserveSpaceForError",required:!1,type:{name:"boolean"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"enum",value:[{value:'"on"'},{value:'"off"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},dropdownMode:{defaultValue:null,description:"",name:"dropdownMode",required:!1,type:{name:"enum",value:[{value:'"scroll"'},{value:'"select"'}]}},inputSmall:{defaultValue:null,description:"",name:"inputSmall",required:!1,type:{name:"boolean"}}}}}catch{}const N={title:"Components/Forms/FormDatepicker",component:n,argTypes:{dropdownMode:{description:"type for year and month dropdown"}}},t={render:e=>{const o=S().shape({my_date:e.required?p().required("Required"):p()}),r=l=>{alert(JSON.stringify(l))};return a.jsx("div",{style:{padding:"10px 10px 250px 10px"},children:a.jsxs(w,{validationSchema:o,defaultValues:{my_date:new Date},onSubmit:r,children:[a.jsx(n,{...e,name:"my_date"}),a.jsx(D,{type:"submit",children:"Submit"})]})})},args:{label:"",placeholder:"Select a date",hintText:"",required:!1,disabled:!1,reserveSpaceForError:!0,showMonthDropdown:!1,showYearDropdown:!1,showTimeSelect:!1,showTimeInput:!1,dropdownMode:"select",autoComplete:"off"}};var u,m,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const schema = yup.object().shape({
      my_date: args.required ? yup.date().required('Required') : yup.date()
    });
    type TFormData = yup.InferType<typeof schema>;
    const onSubmit = (data: TFormData) => {
      alert(JSON.stringify(data));
    };
    return <div style={{
      padding: '10px 10px 250px 10px'
    }}>
        <Form validationSchema={schema} defaultValues={{
        my_date: new Date()
      }} onSubmit={onSubmit}>
          <FormDatepicker {...args} name="my_date" />
          <Button type="submit">Submit</Button>
        </Form>
      </div>;
  },
  args: {
    label: '',
    placeholder: 'Select a date',
    hintText: '',
    required: false,
    disabled: false,
    reserveSpaceForError: true,
    showMonthDropdown: false,
    showYearDropdown: false,
    showTimeSelect: false,
    showTimeInput: false,
    dropdownMode: 'select',
    autoComplete: 'off'
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const O=["Default"];export{t as Default,O as __namedExportsOrder,N as default};
