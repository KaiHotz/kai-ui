import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as f}from"./index-CDs2tPxN.js";import{c as u}from"./clsx-B-dksMZM.js";import{L as v}from"./Label-CtH19-Rh.js";import{H as k}from"./Hint-6Kt6kgG9.js";const i=f.forwardRef(({name:h,label:t,required:s,disabled:a,hintText:c,checked:r,labelPosition:l="right",errorMsg:o,variant:d="checkmark",reserveSpaceForError:b,...C},_)=>{const g=!!(b||o||c);return e.jsxs("div",{className:u("ui-checkbox",{"ui-checkbox--disabled":a,"ui-checkbox--square-checked":r&&d==="square","ui-checkbox--checkmark-checked":r&&d==="checkmark"}),children:[e.jsx("div",{className:"ui-checkbox__wrapper",children:e.jsx(v,{text:t,required:s,disabled:a,className:u("ui-checkbox__label",{"ui-checkbox__label--left":l==="left"}),children:e.jsxs("div",{className:"ui-checkbox__input-wrapper",children:[e.jsx("input",{id:h,required:s,disabled:a,checked:r,ref:_,...C,type:"checkbox","aria-hidden":"true"}),e.jsx("div",{className:"ui-checkbox__icon"})]})})}),g&&e.jsxs("div",{className:"ui-checkbox__validation-wrapper",children:[o&&e.jsx(k,{variant:"error",children:o}),!o&&c&&e.jsx(k,{children:c})]})]})});i.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{labelPosition:{defaultValue:{value:"'right'",computed:!1},required:!1},variant:{defaultValue:{value:"'checkmark'",computed:!1},required:!1}}};const S={title:"Components/Checkbox",component:i,args:{label:"Get notified",labelPosition:"right",hintText:"",errorMsg:"",required:!1,disabled:!1,variant:"checkmark",reserveSpaceForError:!1},argTypes:{checked:{control:!1}}},n={render:function(t){const[s,a]=f.useState(!1),c=r=>{const{checked:l}=r.target;a(l)};return e.jsx("div",{children:e.jsx(i,{...t,name:"checkboxExample",checked:s,onChange:c})})}};var m,x,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function useCheckbox(args) {
    const [checkedValue, setCheckedValue] = useState(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const {
        checked
      } = e.target;
      setCheckedValue(checked);
    };
    return <div>
        <Checkbox {...args} name="checkboxExample" checked={checkedValue} onChange={handleChange} />
      </div>;
  }
}`,...(p=(x=n.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};const q=["Default"];export{n as Default,q as __namedExportsOrder,S as default};
