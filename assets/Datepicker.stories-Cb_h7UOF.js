import{j as a}from"./jsx-runtime-CexXSJP5.js";import{r as o}from"./index-BP8_t0zE.js";import{b as j,c as I}from"./index-CNhk0B_H.js";import{D as d,f as u}from"./Datepicker-B5xk441a.js";import{a as m}from"./subDays-CLJy5PLW.js";import"./clsx-B-dksMZM.js";import"./index-BxmsGmlx.js";import"./floating-ui.dom-5jwf2x9o.js";import"./Input-HJ2U3O7s.js";import"./Label-Q9pw0DqB.js";import"./Button-C0GdinNN.js";import"./Hint-BgND6QIn.js";const x={none:void 0,searchIcon:a.jsx(j,{size:13}),infoIcon:a.jsx(I,{size:13})},R={none:"None",searchIcon:"Search",infoIcon:"Information"},G={title:"Components/Datepicker",component:d,argTypes:{dropdownMode:{description:"type for year and month dropdown"},labelEndAdornment:{options:Object.keys(x),mapping:x,control:{type:"select",labels:R}}},args:{label:"",labelPosition:"top",labelEndAdornment:"none",placeholder:"Select a date",hintText:"",errorMsg:"",required:!1,disabled:!1,reserveSpaceForError:!1,showMonthDropdown:!1,showYearDropdown:!1,showMonthYearPicker:!1,showFullMonthYearPicker:!1,showTimeSelect:!1,showTimeInput:!1,showPopperArrow:!1,dropdownMode:"select",autoComplete:"off",dateFormat:"d MMMM, yyyy"}},l={render:function(s){const[e,r]=o.useState(null);return a.jsx("div",{style:{padding:"10px 10px 250px 10px"},children:a.jsx(d,{...s,selected:e,onChange:t=>r(t)})})}},c={render:function(s){const[e,r]=o.useState(null),[t,i]=o.useState(null);let n=e?u(e,"d MMMM, yyyy"):void 0;return t&&(n=`${n} - ${u(t,"d MMMM, yyyy")}`),a.jsx("div",{style:{padding:"10px 10px 250px 10px"},children:a.jsx(d,{...s,selected:t||e,onChange:E=>{const[C,b]=E;r(C),i(b)},placeholder:"Select dates",selectsRange:!0,startDate:e,excludeDates:[m(new Date,1),m(new Date,5)],endDate:t,monthsShown:2,shouldCloseOnSelect:!!e&&!t,value:n})})}},p={render:function(s){const[e,r]=o.useState(null),[t,i]=o.useState(null);return a.jsxs("div",{style:{padding:"10px 10px 250px 10px",display:"flex",gap:"10px"},children:[a.jsx(d,{...s,label:"Start Date",selectsStart:!0,monthsShown:2,selected:e,startDate:e,endDate:t,onChange:n=>{r(n)}}),a.jsx(d,{...s,label:"End Date",selectsEnd:!0,monthsShown:2,selected:t,startDate:e,endDate:t,minDate:e,onChange:n=>i(n)})]})}};var h,f,S;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: function useDatepicker(args) {
    const [date, setDate] = useState<Date | null>(null);
    return <div style={{
      padding: '10px 10px 250px 10px'
    }}>
        <Datepicker {...args} selected={date} onChange={date => setDate(date)} />
      </div>;
  }
}`,...(S=(f=l.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var g,y,M;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(M=(y=c.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var w,k,v;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(v=(k=p.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const H=["Default","RangeDatepicker","AsRangePicker"];export{p as AsRangePicker,l as Default,c as RangeDatepicker,H as __namedExportsOrder,G as default};
