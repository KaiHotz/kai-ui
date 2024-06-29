import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as l}from"./index-BP8_t0zE.js";import{c}from"./clsx-B-dksMZM.js";import{m as v,n as N,o as k,p as q}from"./index-HCt5ZxLs.js";const d=({isDisabled:a=!1,page:n=0,icon:o,onClick:s,testId:r="ui-pagination-btn"})=>{const i=l.useCallback(()=>{a||s(n)},[a,s,n]);return e.jsx("div",{className:c("ui-pagination-btn",{"ui-pagination-btn--disabled":a}),onClick:i,role:"presentation","data-testid":r,children:o})};try{d.displayName="PaginationBtn",d.__docgenInfo={description:"",displayName:"PaginationBtn",props:{isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},page:{defaultValue:{value:"0"},description:"",name:"page",required:!1,type:{name:"number"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(page: number) => void"}},testId:{defaultValue:{value:"ui-pagination-btn"},description:"",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const f=({current:a=1,pages:n,onChange:o,small:s,fullPagination:r=!1,testId:i="ui-pagination"})=>{const u=s?14:16,t=l.useCallback(j=>{o(j)},[o]),P=l.useCallback(()=>{t(0)},[t]),y=l.useCallback(()=>{a>0&&t(a-1)},[a,t]),h=l.useCallback(()=>{a+1<n&&t(a+1)},[a,n,t]),C=l.useCallback(()=>{t(n-1)},[n,t]),p=a===0,g=a+1===Math.max(1,n);return e.jsxs("div",{className:c("ui-pagination",{"ui-pagination--small":s}),"data-testid":i,children:[r&&e.jsx(d,{icon:e.jsx(v,{size:u,className:c("ui-pagination__icon",{"ui-pagination__icon--disabled":p})}),isDisabled:p,onClick:P,testId:`${i}-first-btn`},"first_page"),e.jsx(d,{icon:e.jsx(N,{size:u,className:c("ui-pagination__icon",{"ui-pagination__icon--disabled":p})}),isDisabled:p,onClick:y,testId:`${i}-prev-btn`},"page_prev"),e.jsxs("div",{className:"ui-pagination__description",children:[e.jsx("span",{children:"Page"}),e.jsx("span",{className:"ui-pagination__number",children:`${a+1}`}),e.jsx("span",{children:"of"}),e.jsx("span",{className:"ui-pagination__number",children:`${n}`})]}),e.jsx(d,{icon:e.jsx(k,{size:u,className:c("ui-pagination__icon",{"ui-pagination__icon--disabled":g})}),isDisabled:g,onClick:h,testId:`${i}-next-btn`},"page_next"),r&&e.jsx(d,{icon:e.jsx(q,{size:u,className:c("ui-pagination__icon",{"ui-pagination__icon--disabled":g})}),isDisabled:g,onClick:C,testId:`${i}-last-btn`},"last_page")]})};try{f.displayName="Pagination",f.__docgenInfo={description:"",displayName:"Pagination",props:{current:{defaultValue:{value:"1"},description:"",name:"current",required:!1,type:{name:"number"}},pages:{defaultValue:null,description:"",name:"pages",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(page: number) => void"}},fullPagination:{defaultValue:{value:"false"},description:"",name:"fullPagination",required:!1,type:{name:"boolean"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},testId:{defaultValue:{value:"ui-pagination"},description:"",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const $={title:"components/Pagination",component:f,argTypes:{current:{control:!1},testId:{control:!1}}},m={render:function(n){const[o,s]=l.useState(3),r=i=>{s(i)};return e.jsx("div",{style:{padding:"20px"},children:e.jsx(f,{...n,current:o,onChange:r})})},args:{small:!1,pages:1e3,fullPagination:!1}};var _,b,x;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: function usePagination(args) {
    const [currentPage, setCurrentPage] = useState(3);
    const handleSetPage = (page: number) => {
      setCurrentPage(page);
    };
    return <div style={{
      padding: '20px'
    }}>
        <Pagination {...args} current={currentPage} onChange={handleSetPage} />
      </div>;
  },
  args: {
    small: false,
    pages: 1000,
    fullPagination: false
  }
}`,...(x=(b=m.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const z=["Default"];export{m as Default,z as __namedExportsOrder,$ as default};
