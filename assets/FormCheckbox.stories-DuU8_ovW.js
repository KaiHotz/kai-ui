import{j as e}from"./jsx-runtime-CexXSJP5.js";import{c as u,a as t,F as f}from"./Form-DaGtRD3M.js";import{b,c as h}from"./index-YfRCopfe.js";import{B as x}from"./Button-C0GdinNN.js";import{F as m}from"./FormCheckbox-BgqMiQ1X.js";import"./index-BP8_t0zE.js";import"./clsx-B-dksMZM.js";import"./Checkbox-CowMggBG.js";import"./Label-U7w9Tf6e.js";import"./Hint-BgND6QIn.js";const a={none:void 0,searchIcon:e.jsx(b,{size:13}),infoIcon:e.jsx(h,{size:13})},F={none:"None",searchIcon:"Search",infoIcon:"Information"},I={title:"Components/Forms/FormCheckbox",component:m,argTypes:{name:{control:!1},checked:{control:!1},labelEndAdornment:{options:Object.keys(a),mapping:a,control:{type:"select",labels:F}}},args:{label:"Get notified",labelPosition:"right",labelEndAdornment:"none",hintText:"",required:!1,disabled:!1,variant:"checkmark",reserveSpaceForError:!1}},o={render:n=>{const l=u({notification:n.required?t().oneOf([!0],"Checkbox selection is required"):t()}).required(),d=r=>{alert(JSON.stringify(r))},p=r=>{console.log(r)};return e.jsxs(f,{validationSchema:l,defaultValues:{notification:!1},onSubmit:d,onError:p,children:[e.jsx(m,{...n,name:"notification"}),e.jsx("div",{style:{marginTop:"1rem"},children:e.jsx(x,{type:"submit",children:"Submit"})})]})}};var i,s,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const O=["Default"];export{o as Default,O as __namedExportsOrder,I as default};
