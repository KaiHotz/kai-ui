import{r as o,R as n}from"./index-CDs2tPxN.js";import{D as d,f as u,a as m}from"./Datepicker-CIkzBTMV.js";import"./clsx-B-dksMZM.js";import"./index-B-yFm4aN.js";import"./floating-ui.dom-5jwf2x9o.js";import"./index-BpAWt-Gq.js";import"./Input-Dpq5PwE2.js";import"./Button-ZLkBMCvJ.js";import"./Hint-CwrnwYvC.js";import"./Label-5g4jD_uN.js";const _={title:"Components/Datepicker",component:d,argTypes:{dropdownMode:{description:"type for year and month dropdown"}},args:{label:"",placeholder:"Select a date",hintText:"",errorMsg:"",required:!1,disabled:!1,reserveSpaceForError:!1,showMonthDropdown:!1,showYearDropdown:!1,showMonthYearPicker:!1,showFullMonthYearPicker:!1,showTimeSelect:!1,showTimeInput:!1,showPopperArrow:!1,dropdownMode:"select",autoComplete:"off",dateFormat:"d MMMM, yyyy"}},l={render:function(s){const[e,r]=o.useState(null);return n.createElement("div",{style:{padding:"10px 10px 250px 10px"}},n.createElement(d,{...s,selected:e,onChange:t=>r(t)}))}},c={render:function(s){const[e,r]=o.useState(null),[t,D]=o.useState(null);let a=e?u(e,"d MMMM, yyyy"):void 0;return t&&(a=`${a} - ${u(t,"d MMMM, yyyy")}`),n.createElement("div",{style:{padding:"10px 10px 250px 10px"}},n.createElement(d,{...s,selected:t||e,onChange:k=>{const[v,C]=k;r(v),D(C)},placeholder:"Select dates",selectsRange:!0,startDate:e,excludeDates:[m(new Date,1),m(new Date,5)],endDate:t,monthsShown:2,shouldCloseOnSelect:!!e&&!t,value:a}))}},p={render:function(s){const[e,r]=o.useState(null),[t,D]=o.useState(null);return n.createElement("div",{style:{padding:"10px 10px 250px 10px",display:"flex",gap:"10px"}},n.createElement(d,{...s,label:"Start Date",selectsStart:!0,monthsShown:2,selected:e,startDate:e,endDate:t,onChange:a=>{r(a)}}),n.createElement(d,{...s,label:"End Date",selectsEnd:!0,monthsShown:2,selected:t,startDate:e,endDate:t,minDate:e,onChange:a=>D(a)}))}};var h,g,S;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: function useDatepicker(args) {
    const [date, setDate] = useState<Date | null>(null);
    return <div style={{
      padding: '10px 10px 250px 10px'
    }}>
        <Datepicker {...args} selected={date} onChange={date => setDate(date)} />
      </div>;
  }
}`,...(S=(g=l.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var x,y,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(y=c.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var M,w,E;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(E=(w=p.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const q=["Default","RangeDatepicker","AsRangePicker"];export{p as AsRangePicker,l as Default,c as RangeDatepicker,q as __namedExportsOrder,_ as default};
