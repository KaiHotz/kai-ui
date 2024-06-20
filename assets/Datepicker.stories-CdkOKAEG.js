import{j as n}from"./jsx-runtime-qGIIFXMu.js";import{r as o}from"./index-CDs2tPxN.js";import{D as d,f as u,a as m}from"./Datepicker-Bg7vhx5W.js";import"./clsx-B-dksMZM.js";import"./index-B-yFm4aN.js";import"./floating-ui.dom-5jwf2x9o.js";import"./index-C0IPxtKF.js";import"./Input-DcAjtIlW.js";import"./Button-9aiuKYTr.js";import"./Hint-6Kt6kgG9.js";import"./Label-CtH19-Rh.js";const _={title:"Components/Datepicker",component:d,argTypes:{dropdownMode:{description:"type for year and month dropdown"}},args:{label:"",placeholder:"Select a date",hintText:"",errorMsg:"",required:!1,disabled:!1,reserveSpaceForError:!1,showMonthDropdown:!1,showYearDropdown:!1,showMonthYearPicker:!1,showFullMonthYearPicker:!1,showTimeSelect:!1,showTimeInput:!1,showPopperArrow:!1,dropdownMode:"select",autoComplete:"off",dateFormat:"d MMMM, yyyy"}},l={render:function(s){const[e,r]=o.useState(null);return n.jsx("div",{style:{padding:"10px 10px 250px 10px"},children:n.jsx(d,{...s,selected:e,onChange:t=>r(t)})})}},p={render:function(s){const[e,r]=o.useState(null),[t,D]=o.useState(null);let a=e?u(e,"d MMMM, yyyy"):void 0;return t&&(a=`${a} - ${u(t,"d MMMM, yyyy")}`),n.jsx("div",{style:{padding:"10px 10px 250px 10px"},children:n.jsx(d,{...s,selected:t||e,onChange:v=>{const[E,C]=v;r(E),D(C)},placeholder:"Select dates",selectsRange:!0,startDate:e,excludeDates:[m(new Date,1),m(new Date,5)],endDate:t,monthsShown:2,shouldCloseOnSelect:!!e&&!t,value:a})})}},c={render:function(s){const[e,r]=o.useState(null),[t,D]=o.useState(null);return n.jsxs("div",{style:{padding:"10px 10px 250px 10px",display:"flex",gap:"10px"},children:[n.jsx(d,{...s,label:"Start Date",selectsStart:!0,monthsShown:2,selected:e,startDate:e,endDate:t,onChange:a=>{r(a)}}),n.jsx(d,{...s,label:"End Date",selectsEnd:!0,monthsShown:2,selected:t,startDate:e,endDate:t,minDate:e,onChange:a=>D(a)})]})}};var x,h,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: function useDatepicker(args) {
    const [date, setDate] = useState<Date | null>(null);
    return <div style={{
      padding: '10px 10px 250px 10px'
    }}>
        <Datepicker {...args} selected={date} onChange={date => setDate(date)} />
      </div>;
  }
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,f,y;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: function useDatepicker(args) {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    let value = startDate ? format(startDate, 'd MMMM, yyyy') : undefined;
    if (endDate) {
      value = \`\${value} - \${format(endDate, 'd MMMM, yyyy')}\`;
    }
    return <div style={{
      padding: '10px 10px 250px 10px'
    }}>
        <Datepicker {...args} selected={endDate || startDate} onChange={dates => {
        //@ts-ignore
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
      }} placeholder="Select dates"
      //@ts-ignore
      selectsRange startDate={startDate} excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]} endDate={endDate} monthsShown={2} shouldCloseOnSelect={Boolean(startDate) && !endDate} value={value} />
      </div>;
  }
}`,...(y=(f=p.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var M,w,k;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: function useDatepicker(args) {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    return <div style={{
      padding: '10px 10px 250px 10px',
      display: 'flex',
      gap: '10px'
    }}>
        <Datepicker {...args} label="Start Date" selectsStart monthsShown={2} selected={startDate} startDate={startDate} endDate={endDate} onChange={(date: Date) => {
        setStartDate(date);
      }} />
        <Datepicker {...args} label="End Date" selectsEnd monthsShown={2} selected={endDate} startDate={startDate} endDate={endDate} minDate={startDate} onChange={(date: Date) => setEndDate(date)} />
      </div>;
  }
}`,...(k=(w=c.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const q=["Default","RangeDatepicker","AsRangePicker"];export{c as AsRangePicker,l as Default,p as RangeDatepicker,q as __namedExportsOrder,_ as default};
