import{j as e}from"./jsx-runtime-CexXSJP5.js";import{F,c as p,d as r,a as y}from"./Form-Dgq8zOsw.js";import{f as E}from"./index-8LmFUV_v.js";import{B as d}from"./Button-C0GdinNN.js";import{F as n}from"./FormInput-SD8ikrGR.js";import{F as x}from"./FormRadio-Zqe-5ir6.js";import{a as i}from"./RadioOption-BaJB0O_F.js";import{F as g}from"./FormCheckbox-C0VfOWPc.js";import{F as q}from"./FormSelect-ACUue0ad.js";import"./highlightText-BfWprMrp.js";import"./index-BP8_t0zE.js";import"./clsx-B-dksMZM.js";import"./Input-CxFEEFMv.js";import"./Label-Q9pw0DqB.js";import"./Hint-BgND6QIn.js";import"./omit-Dv_hKa-K.js";import"./_baseGet-C7KzGAK3.js";import"./_MapCache-bPlbJmjb.js";import"./isObjectLike-yY6ejuuN.js";import"./isSymbol-CMQYLC8d.js";import"./_baseClone-UMuXwTt9.js";import"./_baseAssignValue-HfMhWjzy.js";import"./_baseTimes-BeXZtkeT.js";import"./_initCloneObject-D-aFD1Qy.js";import"./isPlainObject-DfuvdCyT.js";import"./_flatRest-LQTfQqTk.js";import"./identity-CwXImgea.js";import"./Checkbox-MT3MR88x.js";import"./noop-Bj0g98VJ.js";import"./CheckboxSelect-CtQt4pWD.js";import"./react-select.esm-C5hQIgGl.js";import"./Select-B6BRwtNA.js";import"./setPrototypeOf-DM9aTif1.js";import"./isNativeReflectConstruct-EvkcTDr1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-apZrcZRD.js";import"./objectWithoutPropertiesLoose-gpp6Tpz-.js";import"./index-BxmsGmlx.js";import"./floating-ui.dom-5jwf2x9o.js";import"./useTheme-C2mG1LtK.js";import"./ThemeProvider-DX_3E3qS.js";import"./Select-YRO8NlyY.js";import"./useCreatable-d97ef2c9.esm-DERNFTJR.js";import"./AsyncSelect-CTPfz3bk.js";const c=l=>l.split(" ").map(a=>a.match(/^[A-Za-z]/)?a[0].toUpperCase()+a.substring(1):a).join(" "),f=["onBlur","onChange","onSubmit","onTouched","all"],ce={title:"Components/Forms/Form",component:F,args:{submitOnChange:!1,shouldValidateOnChange:!0,validationMode:"onChange"},argTypes:{children:{control:!1},validationSchema:{control:!1},defaultValues:{control:!1},onSubmit:{control:!1},onError:{control:!1},shouldValidateOnChange:{control:!1},validationMode:{options:f,control:{type:"select",labels:f}}}},s={render:l=>{const m=p({firstName:r().required("this field is required"),lastName:r().required("this field is required"),email:r().email().required("this field is required"),user:p({label:r().required("this field is required"),value:r().required("this field is required")}),password:r().required("this field is required"),formRadioExample:r(),notification:y()}).required(),u=(o,t)=>{console.log(o),t()},a=o=>{console.log(o)};return e.jsx(F,{...l,validationSchema:m,defaultValues:{firstName:"",lastName:"",email:"",user:void 0,password:"",formRadioExample:"opt_1",notification:!1},onSubmit:u,onError:a,children:({setValue:o})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(n,{name:"firstName",label:"First name",placeholder:"Enter your first name",required:!0,reserveSpaceForError:!0,onChange:t=>{o("firstName",c(t.target.value))}}),e.jsx(n,{name:"lastName",label:"Last name",placeholder:"Enter your last name",required:!0,reserveSpaceForError:!0,onChange:t=>{o("lastName",c(t.target.value))}})]}),e.jsx(n,{name:"email",label:"Email",placeholder:"Enter your E-mail",required:!0,reserveSpaceForError:!0,withVaildationIcon:!0,endAdornment:e.jsx(E,{})}),e.jsx(q,{name:"user",label:"User",placeholder:"Select a user",required:!0,reserveSpaceForError:!0,options:[{value:"user-1",label:"User 1"},{value:"user-2",label:"User 2"},{value:"user-3",label:"User 3"},{value:"user-4",label:"User 4"}]}),e.jsx(n,{name:"password",label:"Password",placeholder:"Enter your password",type:"password",passwordToggle:!0,required:!0,withVaildationIcon:!0,reserveSpaceForError:!0}),e.jsxs(x,{name:"formRadioExample",reserveSpaceForError:!0,isInline:!0,children:[e.jsx(i,{value:"option_1",label:"Label 1"}),e.jsx(i,{value:"option_2",label:"Label 2"}),e.jsx(i,{value:"option_3",label:"Label 3"}),e.jsx(i,{value:"option_4",label:"Label 4",disabled:!0})]}),e.jsx(g,{name:"notification",reserveSpaceForError:!0,label:"Get notified"}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px"},children:[e.jsx(d,{type:"reset",variant:"secondary",children:"Reset"}),e.jsx(d,{type:"submit",children:"Submit"})]})]})})}};var b,h,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
              <FormInput name="email" label="Email" placeholder="Enter your E-mail" required reserveSpaceForError withVaildationIcon endAdornment={<FaEnvelope />} />
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
              <FormInput name="password" label="Password" placeholder="Enter your password" type="password" passwordToggle required withVaildationIcon reserveSpaceForError />
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
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const fe=["Default"];export{s as Default,fe as __namedExportsOrder,ce as default};