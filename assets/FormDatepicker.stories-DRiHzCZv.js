import{r as h,R as a}from"./index-CDs2tPxN.js";import{u as w,b as g,c as S,e as d,F}from"./Form-BuIgr2gz.js";import{B as b}from"./Button-ZLkBMCvJ.js";import{D as x}from"./Datepicker-CIkzBTMV.js";import"./clsx-B-dksMZM.js";import"./index-B-yFm4aN.js";import"./floating-ui.dom-5jwf2x9o.js";import"./index-BpAWt-Gq.js";import"./Input-Dpq5PwE2.js";import"./Hint-CwrnwYvC.js";import"./Label-5g4jD_uN.js";const l=({name:e,required:r,errorMsg:t,...o})=>{const{control:f,setError:m}=w(),{field:{value:i,onChange:D},fieldState:{error:s}}=g({name:e,control:f});return h.useEffect(()=>{t&&m(e,t)},[e,m,t]),a.createElement(x,{...o,name:e,required:r,onChange:y=>D(y),value:i,errorMsg:s==null?void 0:s.message,selected:i})};l.__docgenInfo={description:"",methods:[],displayName:"FormDatepicker",props:{name:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | [Date | null, Date | null] | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | [Date | null, Date | null] | null",elements:[{name:"Date"},{name:"tuple",raw:"[Date | null, Date | null]",elements:[{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]}]},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},errorMsg:{required:!1,tsType:{name:"FieldError"},description:""}},composes:["Omit"]};const R={title:"Components/Forms/FormDatepicker",component:l,argTypes:{dropdownMode:{description:"type for year and month dropdown"}}},n={render:e=>{const r=S().shape({my_date:e.required?d().required("Required"):d()}),t=o=>{alert(JSON.stringify(o))};return a.createElement("div",{style:{padding:"10px 10px 250px 10px"}},a.createElement(F,{validationSchema:r,defaultValues:{my_date:new Date},onSubmit:t},a.createElement(l,{...e,name:"my_date"}),a.createElement(b,{type:"submit"},"Submit")))},args:{label:"",placeholder:"Select a date",hintText:"",required:!1,disabled:!1,reserveSpaceForError:!0,showMonthDropdown:!1,showYearDropdown:!1,showTimeSelect:!1,showTimeInput:!1,dropdownMode:"select",autoComplete:"off"}};var p,u,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const N=["Default"];export{n as Default,N as __namedExportsOrder,R as default};
