import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as m}from"./index-CDs2tPxN.js";import{r as x}from"./index-B-yFm4aN.js";import{l as C}from"./lodash-B2soob2o.js";import{o as g}from"./index-C0IPxtKF.js";import{c as j}from"./clsx-B-dksMZM.js";import"./ThemeProvider-BPSOSGFa.js";import{u as O,a as M}from"./useClickOutside-BLvw0xSg.js";import"./getCSSVariable-Dab2ZoWK.js";import{B as k}from"./Backdrop-Di-TbrWr.js";import{B as n}from"./Button-9aiuKYTr.js";const w={enter:"Enter",tab:"Tab",escape:"Escape",backspace:"Backspace",arrowUp:"ArrowUp",arrowDown:"ArrowDown",arrowLeft:"ArrowLeft",arrowRight:"ArrowRight",space:"Space"},y=s=>s?["textarea","input","select"].includes(s.tagName.toLowerCase())||!!(s!=null&&s.isContentEditable):!1,b=s=>{O("keydown",r=>{r.key===w.escape&&s()})},u=({size:s="small",onClose:o,disableCloseButton:r,disableBackdrop:a,disableCoseOnClickOutside:f,children:h})=>{const i=m.useRef(null);return b(()=>{y(document.activeElement)||o()}),M(i,f?C.noop:o),x.createPortal(e.jsxs(e.Fragment,{children:[!a&&e.jsx(k,{}),e.jsxs("div",{className:j("ui-modal",`ui-modal--${s}`),ref:i,children:[!r&&e.jsx("div",{className:"ui-modal__close-icon",children:e.jsx(n,{icon:e.jsx(g,{size:18}),iconPosition:"left",variant:"ghost",onClick:o})}),h]})]}),document.body)},B=()=>e.jsxs("div",{style:{display:"flex",fontFamily:"sans-serif",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20},children:[e.jsx("h1",{children:"Welcome"}),e.jsx("p",{children:"Get in touch for with us"}),e.jsx(n,{style:{width:180},children:"Sign Up"}),e.jsx(n,{style:{width:180},variant:"tertiary",children:"Contact Us"})]}),l={normalModal:e.jsx(B,{})},E={normalModal:"Simple Modal",largeModal:"Huge Modal with large Form"},_={title:"Components/Modal",component:u,argTypes:{children:{options:Object.keys(l),mapping:l,control:{type:"radio",labels:E}}}},t={render:function(o){const[r,a]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>a(!0),children:"Open Modal"}),r&&e.jsx(u,{...o,onClose:()=>a(!1),children:o.children})]})},args:{disableCloseButton:!1,disableBackdrop:!1,disableCoseOnClickOutside:!0,children:l.normalModal}};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const T=["Default"];export{t as Default,T as __namedExportsOrder,_ as default};
