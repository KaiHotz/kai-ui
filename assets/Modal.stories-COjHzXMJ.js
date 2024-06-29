import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as f}from"./index-BP8_t0zE.js";import{r as C}from"./index-BxmsGmlx.js";import{l as y}from"./lodash-DZrcJQkD.js";import{l as O}from"./index-HCt5ZxLs.js";import{c as b}from"./clsx-B-dksMZM.js";import"./ThemeProvider-siUfK81O.js";import{u as g}from"./useClickOutside-BXqgUlJb.js";import{a as M}from"./useCloseByEscape-Czgrgqxy.js";import"./getCSSVariable-Dab2ZoWK.js";import{B as j}from"./Backdrop-CPNmybHE.js";import{B as n}from"./Button-DNiJI1Uu.js";const B=a=>a?["textarea","input","select"].includes(a.tagName.toLowerCase())||!!(a!=null&&a.isContentEditable):!1,t=({size:a="small",onClose:s,disableCloseButton:r,disableBackdrop:o,disableCoseOnClickOutside:h,hasFrozenBackdrop:d,children:x})=>{const c=f.useRef(null);return M(()=>{B(document.activeElement)||s()}),g(c,h?y.noop:s),C.createPortal(e.jsxs(e.Fragment,{children:[(!o||d)&&e.jsx(j,{isFrosted:d}),e.jsxs("div",{className:b("ui-modal",`ui-modal--${a}`),ref:c,children:[!r&&e.jsx("div",{className:"ui-modal__close-icon",children:e.jsx(n,{icon:e.jsx(O,{size:18}),iconPosition:"left",variant:"ghost",onClick:s})}),x]})]}),document.body)};try{t.displayName="Modal",t.__docgenInfo={description:"",displayName:"Modal",props:{size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"full-page"'}]}},disableBackdrop:{defaultValue:null,description:"",name:"disableBackdrop",required:!1,type:{name:"boolean"}},hasFrozenBackdrop:{defaultValue:null,description:"",name:"hasFrozenBackdrop",required:!1,type:{name:"boolean"}},disableCloseButton:{defaultValue:null,description:"",name:"disableCloseButton",required:!1,type:{name:"boolean"}},disableCoseOnClickOutside:{defaultValue:null,description:"",name:"disableCoseOnClickOutside",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const k=()=>e.jsxs("div",{style:{display:"flex",fontFamily:"sans-serif",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20},children:[e.jsx("h1",{children:"Welcome"}),e.jsx("p",{children:"Get in touch for with us"}),e.jsx(n,{style:{width:180},children:"Sign Up"}),e.jsx(n,{style:{width:180},variant:"tertiary",children:"Contact Us"})]}),i={normalModal:e.jsx(k,{})},v={normalModal:"Simple Modal",largeModal:"Huge Modal with large Form"},R={title:"Components/Modal",component:t,argTypes:{children:{options:Object.keys(i),mapping:i,control:{type:"radio",labels:v}}}},l={render:function(s){const[r,o]=f.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>o(!0),children:"Open Modal"}),r&&e.jsx(t,{...s,onClose:()=>o(!1),children:s.children})]})},args:{disableCloseButton:!1,disableBackdrop:!1,disableCoseOnClickOutside:!0,children:i.normalModal}};var u,p,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: function useModal(args: PropsWithChildren<Omit<IModalProps, 'onClose'>>) {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        {isOpen && <Modal {...args} onClose={() => setIsOpen(false)}>
            {args.children}
          </Modal>}
      </>;
  },
  args: {
    disableCloseButton: false,
    disableBackdrop: false,
    disableCoseOnClickOutside: true,
    children: childrenOptions.normalModal
  }
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const U=["Default"];export{l as Default,U as __namedExportsOrder,R as default};
