import{r as E,R as e}from"./index-CDs2tPxN.js";import{u as R,b as F,c as v,a as g,F as y}from"./Form-BuIgr2gz.js";import{R as S,a as r}from"./RadioOption-C6UIio0x.js";import"./clsx-B-dksMZM.js";import"./Hint-CwrnwYvC.js";import"./lodash-B2soob2o.js";import"./Label-5g4jD_uN.js";const m=({name:o,errorMsg:a,children:l,...i})=>{const{control:t,setError:d}=R(),{field:{value:f,onChange:b},fieldState:{error:s}}=F({name:o,control:t});return E.useEffect(()=>{a&&d(o,a)},[o,d,a]),e.createElement(S,{...i,selected:f,onChange:b,errorMsg:s==null?void 0:s.message},l)};m.__docgenInfo={description:"",methods:[],displayName:"FormRadio",props:{name:{required:!0,tsType:{name:"string"},description:""},errorMsg:{required:!1,tsType:{name:"FieldError"},description:""}},composes:["Omit"]};const I={title:"Forms/FormRadio",component:m,argTypes:{labelPosition:{options:["left","right"]},variant:{options:[void 0,"text"]},name:{control:!1},selected:{control:!1}}},n={render:o=>{const a=v({formRadioExample:g()}),l=t=>{alert(JSON.stringify(t))},i=t=>{console.log(t)};return e.createElement(y,{validationSchema:a,defaultValues:{formRadioExample:"option_1"},onSubmit:l,onError:i},e.createElement(m,{...o,name:"formRadioExample"},e.createElement(r,{value:"option_1",label:"Label 1"}),e.createElement(r,{value:"option_2",label:"Label 2"}),e.createElement(r,{value:"option_3",label:"Label 3"}),e.createElement(r,{value:"option_4",label:"Label 4",disabled:!0})),e.createElement("button",{type:"submit"},"Submit"))},args:{variant:void 0,labelPosition:"left",hintText:"",disabled:!1,isInline:!1,reserveSpaceForError:!1}};var p,c,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const schema = yup.object({
      formRadioExample: yup.string()
    });
    type TFormData = yup.InferType<typeof schema>;
    const onSubmit = (data: TFormData) => {
      alert(JSON.stringify(data));
    };
    const onError = (errors: FieldErrors<TFormData>) => {
      console.log(errors);
      //Handle form error here
    };
    return <Form<TFormData> validationSchema={schema} defaultValues={{
      formRadioExample: 'option_1'
    }} onSubmit={onSubmit} onError={onError}>
        <FormRadio {...args} name="formRadioExample">
          <RadioOption value="option_1" label="Label 1" />
          <RadioOption value="option_2" label="Label 2" />
          <RadioOption value="option_3" label="Label 3" />
          <RadioOption value="option_4" label="Label 4" disabled />
        </FormRadio>
        <button type="submit">Submit</button>
      </Form>;
  },
  args: {
    variant: undefined,
    labelPosition: 'left',
    hintText: '',
    disabled: false,
    isInline: false,
    reserveSpaceForError: false
  }
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const C=["Default"];export{n as Default,C as __namedExportsOrder,I as default};
