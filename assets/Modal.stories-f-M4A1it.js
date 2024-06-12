import{r as p,R as e}from"./index-CDs2tPxN.js";import{r as h}from"./index-B-yFm4aN.js";import{l as C}from"./lodash-B2soob2o.js";import{o as g}from"./index-BpAWt-Gq.js";import{c as O}from"./clsx-B-dksMZM.js";import"./ThemeProvider-D1IB1Gcs.js";import{u as M,a as k}from"./useClickOutside-BLvw0xSg.js";import"./getCSSVariable-Dab2ZoWK.js";import{B as w}from"./Backdrop-D5fdojse.js";import{B as s}from"./Button-ZLkBMCvJ.js";const y={enter:"Enter",tab:"Tab",escape:"Escape",backspace:"Backspace",arrowUp:"ArrowUp",arrowDown:"ArrowDown",arrowLeft:"ArrowLeft",arrowRight:"ArrowRight",space:"Space"},b=t=>t?["textarea","input","select"].includes(t.tagName.toLowerCase())||!!(t!=null&&t.isContentEditable):!1,B=t=>{M("keydown",o=>{o.key===y.escape&&t()})},u=({size:t="small",onClose:a,disableCloseButton:o,disableBackdrop:n,disableCoseOnClickOutside:f,children:E})=>{const c=p.useRef(null);return B(()=>{b(document.activeElement)||a()}),k(c,f?C.noop:a),h.createPortal(e.createElement(e.Fragment,null,!n&&e.createElement(w,null),e.createElement("div",{className:O("ui-modal",`ui-modal--${t}`),ref:c},!o&&e.createElement("div",{className:"ui-modal__close-icon"},e.createElement(s,{icon:e.createElement(g,{size:18}),iconPosition:"left",variant:"ghost",onClick:a})),E)),document.body)},x=()=>e.createElement("div",{style:{display:"flex",fontFamily:"sans-serif",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20}},e.createElement("h1",null,"Welcome"),e.createElement("p",null,"Get in touch for with us"),e.createElement(s,{style:{width:180}},"Sign Up"),e.createElement(s,{style:{width:180},variant:"tertiary"},"Contact Us")),l={normalModal:e.createElement(x,null)},v={normalModal:"Simple Modal",largeModal:"Huge Modal with large Form"},_={title:"Components/Modal",component:u,argTypes:{children:{options:Object.keys(l),mapping:l,control:{type:"radio",labels:v}}}},r={render:function(a){const[o,n]=p.useState(!1);return e.createElement(e.Fragment,null,e.createElement(s,{onClick:()=>n(!0)},"Open Modal"),o&&e.createElement(u,{...a,onClose:()=>n(!1)},a.children))},args:{disableCloseButton:!1,disableBackdrop:!1,disableCoseOnClickOutside:!0,children:l.normalModal}};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const j=["Default"];export{r as Default,j as __namedExportsOrder,_ as default};
