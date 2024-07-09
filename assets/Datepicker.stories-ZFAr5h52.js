import{j as a}from"./jsx-runtime-CexXSJP5.js";import{r as o}from"./index-BP8_t0zE.js";import{b,c as j}from"./index-YfRCopfe.js";import{D as d,f as D}from"./Datepicker-DnjZmKpe.js";import{a as u}from"./subDays-CLJy5PLW.js";import"./clsx-B-dksMZM.js";import"./index-BxmsGmlx.js";import"./floating-ui.dom-5jwf2x9o.js";import"./Input-DF4M-RAo.js";import"./Label-U7w9Tf6e.js";import"./Hint-BgND6QIn.js";import"./PasswordInput-CU2BcwYp.js";import"./Button-C0GdinNN.js";const m={none:void 0,searchIcon:a.jsx(b,{size:13}),infoIcon:a.jsx(j,{size:13})},I={none:"None",searchIcon:"Search",infoIcon:"Information"},V={title:"Components/Datepicker",component:d,argTypes:{dropdownMode:{description:"type for year and month dropdown"},labelEndAdornment:{options:Object.keys(m),mapping:m,control:{type:"select",labels:I}}},args:{label:"",labelPosition:"top",labelEndAdornment:"none",placeholder:"Select a date",hintText:"",errorMsg:"",isValid:!1,required:!1,disabled:!1,reserveSpaceForError:!1,showMonthDropdown:!1,showYearDropdown:!1,showMonthYearPicker:!1,showFullMonthYearPicker:!1,showTimeSelect:!1,showTimeInput:!1,showPopperArrow:!1,dropdownMode:"select",autoComplete:"off",dateFormat:"d MMMM, yyyy"}},l={render:s=>{const[e,r]=o.useState(null);return a.jsx("div",{style:{padding:"10px 10px 250px 10px"},children:a.jsx(d,{...s,selected:e,onChange:t=>r(t)})})}},p={render:s=>{const[e,r]=o.useState(null),[t,i]=o.useState(null);let n=e?D(e,"d MMMM, yyyy"):void 0;return t&&(n=`${n} - ${D(t,"d MMMM, yyyy")}`),a.jsx("div",{style:{padding:"10px 10px 250px 10px"},children:a.jsx(d,{...s,selected:t||e,onChange:E=>{const[k,C]=E;r(k),i(C)},placeholder:"Select dates",selectsRange:!0,startDate:e,excludeDates:[u(new Date,1),u(new Date,5)],endDate:t,monthsShown:2,shouldCloseOnSelect:!!e&&!t,value:n})})}},c={render:s=>{const[e,r]=o.useState(null),[t,i]=o.useState(null);return a.jsxs("div",{style:{padding:"10px 10px 250px 10px",display:"flex",gap:"10px"},children:[a.jsx(d,{...s,label:"Start Date",selectsStart:!0,monthsShown:2,selected:e,startDate:e,endDate:t,onChange:n=>{r(n)}}),a.jsx(d,{...s,label:"End Date",selectsEnd:!0,monthsShown:2,selected:t,startDate:e,endDate:t,minDate:e,onChange:n=>i(n)})]})}};var x,h,S;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = useState<Date | null>(null);
    return <div style={{
      padding: '10px 10px 250px 10px'
    }}>
        <Datepicker {...args} selected={date} onChange={date => setDate(date)} />
      </div>;
  }
}`,...(S=(h=l.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var g,y,f;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
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
}`,...(f=(y=p.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var M,w,v;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
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
}`,...(v=(w=c.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const G=["Default","RangeDatepicker","AsRangePicker"];export{c as AsRangePicker,l as Default,p as RangeDatepicker,G as __namedExportsOrder,V as default};
