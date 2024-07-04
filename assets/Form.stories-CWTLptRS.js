import{j as e}from"./jsx-runtime-CexXSJP5.js";import{F as b,c as u,a as r,d as g}from"./Form-f_IjoSRD.js";import{B as m}from"./Button-Bkxkp8i5.js";import{F as t}from"./FormInput-C6mY61ZA.js";import"./highlightText-BfWprMrp.js";import"./index-BP8_t0zE.js";import"./clsx-B-dksMZM.js";import"./Input-ZLs-LNMl.js";import"./index-DRwCZS7x.js";import"./Hint-BgND6QIn.js";import"./Label-Dj0iuwZQ.js";const p=i=>i.split(" ").map(a=>a.match(/^[A-Za-z]/)?a[0].toUpperCase()+a.substring(1):a).join(" "),c=["onBlur","onChange","onSubmit","onTouched","all"],T={title:"Components/Forms/Form",component:b,args:{submitOnChange:!1,shouldValidateOnChange:!0,validationMode:"onChange"},argTypes:{children:{control:!1},validationSchema:{control:!1},defaultValues:{control:!1},onSubmit:{control:!1},onError:{control:!1},shouldValidateOnChange:{control:!1},validationMode:{options:c,control:{type:"select",labels:c}}}},s={render:i=>{const l=u({firstName:r().required("this field is required"),lastName:r().required("this field is required"),email:r().email().required("this field is required"),user:u({label:r().required("this field is required"),value:r().required("this field is required")}),password:r().required("this field is required"),formRadioExample:r(),notification:g()}).required(),d=(n,o)=>{console.log(n),o()},a=n=>{console.log(n)};return e.jsx(b,{...i,validationSchema:l,defaultValues:{firstName:"",lastName:"",email:"",user:{label:"",value:""},password:"",formRadioExample:"opt_1",notification:!1},onSubmit:d,onError:a,children:({setValue:n})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx("div",{style:{width:"100%"},children:e.jsx(t,{name:"firstName",label:"First name",placeholder:"First name",required:!0,reserveSpaceForError:!0,onChange:o=>{n("firstName",p(o.target.value))}})}),e.jsx("div",{style:{width:"100%"},children:e.jsx(t,{name:"lastName",label:"Last name",placeholder:"Last name",required:!0,reserveSpaceForError:!0,onChange:o=>{n("lastName",p(o.target.value))}})})]}),e.jsx(t,{name:"email",label:"Email",placeholder:"E-mail",required:!0,reserveSpaceForError:!0}),e.jsx(t,{name:"password",label:"Password",placeholder:"Password",type:"password",passwordToggle:!0,required:!0,reserveSpaceForError:!0}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px"},children:[e.jsx(m,{type:"reset",variant:"secondary",children:"Reset"}),e.jsx(m,{type:"submit",children:"Submit"})]})]})})}};var f,h,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
      user: {
        label: '',
        value: ''
      },
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
                <div style={{
              width: '100%'
            }}>
                  <FormInput name="firstName" label="First name" placeholder="First name" required reserveSpaceForError onChange={e => {
                setValue('firstName', capitalizeWords(e.target.value));
              }} />
                </div>
                <div style={{
              width: '100%'
            }}>
                  <FormInput name="lastName" label="Last name" placeholder="Last name" required reserveSpaceForError onChange={e => {
                setValue('lastName', capitalizeWords(e.target.value));
              }} />
                </div>
              </div>
              <FormInput name="email" label="Email" placeholder="E-mail" required reserveSpaceForError />
              {/* <FormSelect
                name="user"
                label="User"
                required
                reserveSpaceForError
                options={[
                  { value: 'user-1', label: 'User 1' },
                  { value: 'user-2', label: 'User 2' },
                  { value: 'user-3', label: 'User 3' },
                  { value: 'user-4', label: 'User 4' },
                ]}
               /> */}
              <FormInput name="password" label="Password" placeholder="Password" type="password" passwordToggle required reserveSpaceForError />
              {/* <FormRadio name="formRadioExample" reserveSpaceForError isInline>
                <RadioOption value="option_1" label="Label 1" />
                <RadioOption value="option_2" label="Label 2" />
                <RadioOption value="option_3" label="Label 3" />
                <RadioOption value="option_4" label="Label 4" disabled />
               </FormRadio>
               <FormCheckbox name="notification" reserveSpaceForError label="Get notified" /> */}
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
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const L=["Default"];export{s as Default,L as __namedExportsOrder,T as default};
