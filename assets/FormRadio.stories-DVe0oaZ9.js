import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{u as x,b as E,c as F,a as R,F as v}from"./Form-BuxMYNPf.js";import{r as g}from"./index-CDs2tPxN.js";import{R as h,a as t}from"./RadioOption-Bm4T3BvT.js";import"./clsx-B-dksMZM.js";import"./Hint-6Kt6kgG9.js";import"./lodash-B2soob2o.js";import"./Label-CtH19-Rh.js";const m=({name:o,errorMsg:a,children:s,...i})=>{const{control:r,setError:d}=x(),{field:{value:f,onChange:b},fieldState:{error:l}}=E({name:o,control:r});return g.useEffect(()=>{a&&d(o,a)},[o,d,a]),e.jsx(h,{...i,selected:f,onChange:b,errorMsg:l==null?void 0:l.message,children:s})};m.__docgenInfo={description:"",methods:[],displayName:"FormRadio",props:{name:{required:!0,tsType:{name:"string"},description:""},errorMsg:{required:!1,tsType:{name:"FieldError"},description:""}},composes:["Omit"]};const C={title:"Components/Forms/FormRadio",component:m,argTypes:{labelPosition:{options:["left","right"]},variant:{options:[void 0,"text"]},name:{control:!1},selected:{control:!1}}},n={render:o=>{const a=F({formRadioExample:R()}),s=r=>{alert(JSON.stringify(r))},i=r=>{console.log(r)};return e.jsxs(v,{validationSchema:a,defaultValues:{formRadioExample:"option_1"},onSubmit:s,onError:i,children:[e.jsxs(m,{...o,name:"formRadioExample",children:[e.jsx(t,{value:"option_1",label:"Label 1"}),e.jsx(t,{value:"option_2",label:"Label 2"}),e.jsx(t,{value:"option_3",label:"Label 3"}),e.jsx(t,{value:"option_4",label:"Label 4",disabled:!0})]}),e.jsx("button",{type:"submit",children:"Submit"})]})},args:{variant:void 0,labelPosition:"left",hintText:"",disabled:!1,isInline:!1,reserveSpaceForError:!1}};var p,c,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const I=["Default"];export{n as Default,I as __namedExportsOrder,C as default};
