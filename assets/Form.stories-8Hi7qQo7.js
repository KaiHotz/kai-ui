import{R as e}from"./index-CDs2tPxN.js";import{F as b,c as m,a as r,d as g}from"./Form-BuIgr2gz.js";import{B as u}from"./Button-ZLkBMCvJ.js";import{F as o}from"./FormInput-C138-dVK.js";import"./getCSSVariable-Dab2ZoWK.js";import"./clsx-B-dksMZM.js";import"./Input-Dpq5PwE2.js";import"./index-BpAWt-Gq.js";import"./Hint-CwrnwYvC.js";import"./Label-5g4jD_uN.js";const p=l=>l.split(" ").map(a=>a.match(/^[A-Za-z]/)?a[0].toUpperCase()+a.substring(1):a).join(" "),c=["onBlur","onChange","onSubmit","onTouched","all"],T={title:"Components/Forms/Form",component:b,args:{submitOnChange:!1,shouldValidateOnChange:!0,validationMode:"onChange"},argTypes:{children:{control:!1},validationSchema:{control:!1},defaultValues:{control:!1},onSubmit:{control:!1},onError:{control:!1},shouldValidateOnChange:{control:!1},validationMode:{options:c,control:{type:"select",labels:c}}}},i={render:l=>{const s=m({firstName:r().required("this field is required"),lastName:r().required("this field is required"),email:r().email().required("this field is required"),user:m({label:r().required("this field is required"),value:r().required("this field is required")}),password:r().required("this field is required"),formRadioExample:r(),notification:g()}).required(),d=(t,n)=>{console.log(t),n()},a=t=>{console.log(t)};return e.createElement(b,{...l,validationSchema:s,defaultValues:{firstName:"",lastName:"",email:"",user:{label:"",value:""},password:"",formRadioExample:"opt_1",notification:!1},onSubmit:d,onError:a},({setValue:t})=>e.createElement(e.Fragment,null,e.createElement("div",{style:{display:"flex",gap:"10px"}},e.createElement("div",{style:{width:"100%"}},e.createElement(o,{name:"firstName",label:"First name",placeholder:"First name",required:!0,reserveSpaceForError:!0,onChange:n=>{t("firstName",p(n.target.value))}})),e.createElement("div",{style:{width:"100%"}},e.createElement(o,{name:"lastName",label:"Last name",placeholder:"Last name",required:!0,reserveSpaceForError:!0,onChange:n=>{t("lastName",p(n.target.value))}}))),e.createElement(o,{name:"email",label:"Email",placeholder:"E-mail",required:!0,reserveSpaceForError:!0}),e.createElement(o,{name:"password",label:"Password",placeholder:"Password",type:"password",passwordToggle:!0,required:!0,reserveSpaceForError:!0}),e.createElement("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px"}},e.createElement(u,{type:"reset",variant:"secondary"},"Reset"),e.createElement(u,{type:"submit"},"Submit"))))}};var f,h,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const L=["Default"];export{i as Default,L as __namedExportsOrder,T as default};
