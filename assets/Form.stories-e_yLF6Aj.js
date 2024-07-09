import{j as e}from"./jsx-runtime-CexXSJP5.js";import{F,c as p,d as r,a as E}from"./Form-Cxp3Z12N.js";import{f as x}from"./index-YfRCopfe.js";import{B as d}from"./Button-C0GdinNN.js";import{F as l}from"./FormInput-DxofOWPv.js";import{F as y}from"./FormPasswordInput-DEndvCL3.js";import{F as g}from"./FormRadio-BFP99mEN.js";import{a as n}from"./RadioOption-BaJB0O_F.js";import{F as q}from"./FormCheckbox-DjuLG507.js";import{F as S}from"./FormSelect-D4cBc0yy.js";import"./highlightText-BfWprMrp.js";import"./index-BP8_t0zE.js";import"./clsx-B-dksMZM.js";import"./Input-bkSlrWo6.js";import"./Label-Q9pw0DqB.js";import"./Hint-BgND6QIn.js";import"./PasswordInput-DkjqFtuZ.js";import"./omit-Dv_hKa-K.js";import"./_baseGet-C7KzGAK3.js";import"./_MapCache-bPlbJmjb.js";import"./isObjectLike-yY6ejuuN.js";import"./isSymbol-CMQYLC8d.js";import"./_baseClone-UMuXwTt9.js";import"./_baseAssignValue-HfMhWjzy.js";import"./_baseTimes-BeXZtkeT.js";import"./_initCloneObject-D-aFD1Qy.js";import"./isPlainObject-DfuvdCyT.js";import"./_flatRest-LQTfQqTk.js";import"./identity-CwXImgea.js";import"./Checkbox-MT3MR88x.js";import"./noop-Bj0g98VJ.js";import"./CheckboxSelect-Dlb-b-uD.js";import"./react-select.esm-DuJaZ1ac.js";import"./Select-IwGuar_0.js";import"./setPrototypeOf-DM9aTif1.js";import"./isNativeReflectConstruct-EvkcTDr1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-apZrcZRD.js";import"./objectWithoutPropertiesLoose-gpp6Tpz-.js";import"./index-BxmsGmlx.js";import"./floating-ui.dom-5jwf2x9o.js";import"./useTheme-C2mG1LtK.js";import"./ThemeProvider-DX_3E3qS.js";import"./Select-YTf7UlWv.js";import"./useCreatable-d97ef2c9.esm-BQo9MOHB.js";import"./AsyncSelect-D1W8e1tT.js";const c=s=>s.split(" ").map(a=>a.match(/^[A-Za-z]/)?a[0].toUpperCase()+a.substring(1):a).join(" "),f=["onBlur","onChange","onSubmit","onTouched","all"],he={title:"Components/Forms/Form",component:F,args:{submitOnChange:!1,shouldValidateOnChange:!0,validationMode:"onChange"},argTypes:{children:{control:!1},validationSchema:{control:!1},defaultValues:{control:!1},onSubmit:{control:!1},onError:{control:!1},shouldValidateOnChange:{control:!1},validationMode:{options:f,control:{type:"select",labels:f}}}},i={render:s=>{const m=p({firstName:r().required("this field is required"),lastName:r().required("this field is required"),email:r().email().required("this field is required"),user:p({label:r().required("this field is required"),value:r().required("this field is required")}),password:r().required("this field is required"),formRadioExample:r(),notification:E()}).required(),u=(o,t)=>{console.log(o),t()},a=o=>{console.log(o)};return e.jsx(F,{...s,validationSchema:m,defaultValues:{firstName:"",lastName:"",email:"",user:void 0,password:"",formRadioExample:"opt_1",notification:!1},onSubmit:u,onError:a,children:({setValue:o})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(l,{name:"firstName",label:"First name",placeholder:"Enter your first name",required:!0,reserveSpaceForError:!0,onChange:t=>{o("firstName",c(t.target.value))}}),e.jsx(l,{name:"lastName",label:"Last name",placeholder:"Enter your last name",required:!0,reserveSpaceForError:!0,onChange:t=>{o("lastName",c(t.target.value))}})]}),e.jsx(l,{name:"email",label:"Email",placeholder:"Enter your E-mail",required:!0,reserveSpaceForError:!0,endAdornment:e.jsx(x,{})}),e.jsx(S,{name:"user",label:"User",placeholder:"Select a user",required:!0,reserveSpaceForError:!0,options:[{value:"user-1",label:"User 1"},{value:"user-2",label:"User 2"},{value:"user-3",label:"User 3"},{value:"user-4",label:"User 4"}]}),e.jsx(y,{name:"password",label:"Password",placeholder:"Enter your password",passwordToggle:!0,required:!0,reserveSpaceForError:!0}),e.jsxs(g,{name:"formRadioExample",reserveSpaceForError:!0,isInline:!0,children:[e.jsx(n,{value:"option_1",label:"Label 1"}),e.jsx(n,{value:"option_2",label:"Label 2"}),e.jsx(n,{value:"option_3",label:"Label 3"}),e.jsx(n,{value:"option_4",label:"Label 4",disabled:!0})]}),e.jsx(q,{name:"notification",reserveSpaceForError:!0,label:"Get notified"}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px"},children:[e.jsx(d,{type:"reset",variant:"secondary",children:"Reset"}),e.jsx(d,{type:"submit",children:"Submit"})]})]})})}};var b,h,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    const schema = yup.object({
      firstName: yup.string().required('this field is required'),
      lastName: yup.string().required('this field is required'),
      email: yup.string().email().required('this field is required'),
      user: yup.object({
        label: yup.string().required('this field is required'),
        value: yup.string().required('this field is required')
      }),
      password: yup.string().required('this field is required'),
      formRadioExample: yup.string(),
      notification: yup.boolean()
    }).required();
    type TFormData = yup.InferType<typeof schema>;
    const onSubmit = (data: TFormData, reset: UseFormReset<TFormData>) => {
      console.log(data);
      reset();
    };
    const onError = (errors: FieldErrors<TFormData>) => {
      console.log(errors);
      //Handle form error here
    };
    return <Form<TFormData> {...args} validationSchema={schema} defaultValues={{
      firstName: '',
      lastName: '',
      email: '',
      user: undefined,
      password: '',
      formRadioExample: 'opt_1',
      notification: false
    }} onSubmit={onSubmit} onError={onError}>
        {({
        setValue
      }) => {
        return <>
              <div style={{
            display: 'flex',
            gap: '10px'
          }}>
                <FormInput name="firstName" label="First name" placeholder="Enter your first name" required reserveSpaceForError onChange={e => {
              setValue('firstName', capitalizeWords(e.target.value));
            }} />
                <FormInput name="lastName" label="Last name" placeholder="Enter your last name" required reserveSpaceForError onChange={e => {
              setValue('lastName', capitalizeWords(e.target.value));
            }} />
              </div>
              <FormInput name="email" label="Email" placeholder="Enter your E-mail" required reserveSpaceForError endAdornment={<FaEnvelope />} />
              <FormSelect name="user" label="User" placeholder="Select a user" required reserveSpaceForError options={[{
            value: 'user-1',
            label: 'User 1'
          }, {
            value: 'user-2',
            label: 'User 2'
          }, {
            value: 'user-3',
            label: 'User 3'
          }, {
            value: 'user-4',
            label: 'User 4'
          }]} />
              <FormPasswordInput name="password" label="Password" placeholder="Enter your password" passwordToggle required reserveSpaceForError />
              <FormRadio name="formRadioExample" reserveSpaceForError isInline>
                <RadioOption value="option_1" label="Label 1" />
                <RadioOption value="option_2" label="Label 2" />
                <RadioOption value="option_3" label="Label 3" />
                <RadioOption value="option_4" label="Label 4" disabled />
              </FormRadio>
              <FormCheckbox name="notification" reserveSpaceForError label="Get notified" />
              <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '10px'
          }}>
                <Button type="reset" variant="secondary">
                  Reset
                </Button>
                <Button type="submit">Submit</Button>
              </div>
            </>;
      }}
      </Form>;
  }
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const ve=["Default"];export{i as Default,ve as __namedExportsOrder,he as default};
