(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(74382)}])},74382:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return e1}});var i=n(85893),s=n(36465),a=n.n(s),l=n(77314),o=n(67294),r=n(2734),c=n(92301),_=n.n(c);function d(e){let{children:t,value:n,index:s,...a}=e;return(0,i.jsx)("div",{role:"tabpanel",hidden:n!==s,id:"full-width-tabpanel-".concat(s),"aria-labelledby":"full-width-tab-".concat(s),...a,children:n===s&&(0,i.jsxs)("div",{className:_().tab_wrapper,children:[(0,i.jsxs)("div",{className:_().title,children:["箱A - 第",s+1,"层"]}),(0,i.jsx)("img",{src:"/icon@4x/observation.png"})]})})}function x(e){let t=(0,r.Z)(),[n,s]=(0,o.useState)(0),a=e=>{s(e)};return(0,i.jsxs)("div",{className:_().container,children:[(0,i.jsxs)(l.ZP,{axis:"rtl"===t.direction?"x-reverse":"x",index:n,onChangeIndex:a,children:[(0,i.jsx)(d,{value:n,index:0,dir:t.direction,children:"Item One"}),(0,i.jsx)(d,{value:n,index:1,dir:t.direction,children:"Item Two"}),(0,i.jsx)(d,{value:n,index:2,dir:t.direction,children:"Item Three"})]}),(0,i.jsx)("div",{className:_().arrow_left,onClick:e=>0!=n&&s((n+2)%3),children:(0,i.jsx)("img",{src:"/icon@4x/arrow_left.png"})}),(0,i.jsx)("div",{className:_().arrow_right,onClick:e=>2!=n&&s((n+1)%3),children:(0,i.jsx)("img",{src:"/icon@4x/arrow_right.png"})})]})}var v=n(10316),u=n.n(v);function h(e){let{active:t=!1,borderColor:n,color:s}=e;return(0,i.jsx)("div",{className:[u().container,t?u().active:""].join(" "),style:{borderColor:n,backgroundColor:s},onClick:e.onClick,children:e.children})}function m(e){let[t,n]=(0,o.useState)(0);return(0,o.useEffect)(()=>{window.$bioStreamStir||(window.$bioStreamStir=e=>{n(e.pv_stir)})},[]),(0,i.jsx)(h,{active:!0,color:"#2C5B8C",borderColor:"#7B98B6",onClick:null,children:(0,i.jsxs)("div",{style:{fontSize:"1.4rem"},children:[(0,i.jsx)("div",{style:{fontSize:"1.4rem"},children:"搅拌"}),(0,i.jsx)("div",{style:{width:"4rem",height:2,backgroundColor:"white"}}),(0,i.jsxs)("div",{style:{fontSize:"1.2rem"},children:[t," RPM"]})]})})}function j(e){let{}=e,[t,n]=(0,o.useState)(!1),s=e=>{console.log(e),n(e),e||console.log("System starting...")};return t?(0,i.jsx)(h,{active:!0,color:"#289998",borderColor:"#208383",onClick:e=>s(!1),children:(0,i.jsx)("div",{style:{fontSize:"1.8rem"},children:"START"})}):(0,i.jsx)(h,{active:!1,color:"#B21119",borderColor:"#D13732",onClick:e=>s(!0),children:(0,i.jsx)("div",{style:{fontSize:"1.8rem"},children:"STOP"})})}var p=n(16095),f=n.n(p);function g(e){let{tag:t,enable:n=!1,active:s=!1,name:a,value:l,unit:o}=e,r=()=>{e.onSelected&&e.onSelected(s?null:t)};return(0,i.jsx)("div",{className:f().container,onClick:r,children:n?(0,i.jsxs)("div",{className:[f().enabled_container,s?f().container_active:f().container_inactive].join(" "),children:[(0,i.jsx)("div",{className:[f().bottle_text_wrapper,s?f().bottle_text_active:""].join(" "),children:(0,i.jsxs)("span",{children:[(0,i.jsx)("div",{style:{fontSize:"1.0rem",color:"#728dad",textAlign:"center"},children:l}),(0,i.jsx)("div",{style:{fontSize:"0.9rem",color:"#728dad"},children:o})]})}),(0,i.jsx)("div",{className:f().title,children:a})]}):(0,i.jsxs)("div",{className:[f().disabled_container,s?f().container_active:f().container_inactive].join(" "),children:[(0,i.jsx)("div",{className:[f().bottle_text_wrapper,s?f().bottle_text_active:""].join(" "),children:(0,i.jsx)("span",{style:{writingMode:"vertical-rl",fontSize:"1.2rem",color:"#999"},children:"未开启"})}),(0,i.jsx)("div",{className:f().title,children:a})]})})}var b=n(63875),N=n.n(b);function S(e){let{activetag:t,onActiveChange:n}=e,[s,a]=(0,o.useState)(0),[l,r]=(0,o.useState)(0),[c,_]=(0,o.useState)(0),[d,x]=(0,o.useState)(0),[v,u]=(0,o.useState)(!1),[h,m]=(0,o.useState)(!1),[j,p]=(0,o.useState)(!1),[f,b]=(0,o.useState)(!1);(0,o.useEffect)(()=>{window.$bioStreamGas||(window.$bioStreamGas=e=>{a(e.pv_air),r(e.pv_co2),_(e.pv_n2),x(e.pv_o2),u(!!e.ison_air),m(!!e.ison_co2),p(!!e.ison_n2),b(!!e.ison_o2)})},[]);let S=e=>{n&&n(e)};return(0,i.jsxs)("div",{className:N().container,children:[(0,i.jsx)(g,{tag:"gas_1",enable:v,value:s,unit:"LPM",onSelected:S,active:"gas_1"==t,name:(0,i.jsx)("div",{children:"Air"})}),(0,i.jsx)(g,{tag:"gas_2",enable:h,value:l,unit:"LPM",onSelected:S,active:"gas_2"==t,name:(0,i.jsxs)("div",{children:["CO",(0,i.jsx)("span",{style:{fontSize:"0.8rem"},children:"2"})]})}),(0,i.jsx)(g,{tag:"gas_3",enable:j,value:c,unit:"%",onSelected:S,active:"gas_3"==t,name:(0,i.jsxs)("div",{children:["N",(0,i.jsx)("span",{style:{fontSize:"0.8rem"},children:"2"})]})}),(0,i.jsx)(g,{tag:"gas_4",enable:f,value:d,unit:"LPM",onSelected:S,active:"gas_4"==t,name:(0,i.jsxs)("div",{children:["O",(0,i.jsx)("span",{style:{fontSize:"0.8rem"},children:"2"})]})})]})}var C=n(11069),w=n.n(C);let k=e=>{let t=0;return e>0?(t=parseInt(e/500*200)+55)>255?[255,0,0,1]:[t/1.2,0,0,t/255+.2]:(t=parseInt(-e/500*200)+55)>255?[0,0,255,1]:[0,0,t/3,t/255+.2]},y={};function M(e){let{tag:t,active:n=!1,size:s="normal",title:a,velocity:l=0}=e,r="normal"==s,c=r?"6rem":"7rem",_=r?"1.9rem":"2.4rem",[d,x]=(0,o.useState)(null),[v,u]=(0,o.useState)([0,0,0,.4]),[h,m]=(0,o.useState)(0);(0,o.useEffect)(()=>{let e=h;y[t]&&(clearInterval(y[t]),y[t]=null),y[t]=setInterval(()=>{let t=e-l;if(8>Math.abs(t)){m(l);return}t>0?e-=8:e+=8,u(k(e))},16)},[l]);let j="rgba(".concat(v[0],", ").concat(v[1],", ").concat(v[2],", ").concat(v[3],")");return(0,i.jsxs)("div",{className:[w().container,n?w().active:null].join(" "),children:[n&&(0,i.jsx)("div",{className:w().triangle}),(0,i.jsx)("div",{className:[w().title,n?w().active_title:null].join(" "),style:n?r?{transform:"rotate(-45deg) translateY(-1.9rem) translateX(0.1rem)"}:{transform:"rotate(-45deg) translateY(-2.3rem) translateX(0.4rem)"}:{},children:a}),(0,i.jsx)("div",{className:w().motor,style:{width:c,backgroundColor:j},children:(0,i.jsx)("img",{style:{width:c,scale:"1.02"},src:"/icon@4x/motor.png"})}),(0,i.jsx)("div",{className:w().footer,style:{width:c},children:d?(0,i.jsx)("div",{children:"Error"}):(0,i.jsxs)("div",{className:w().velocity_container,style:{height:_,color:j},children:[(0,i.jsx)("span",{className:w().velocity_text,children:l}),(0,i.jsx)("div",{className:[w().direction].join(" "),style:0==l?{width:_,backgroundColor:j}:l>0?{animation:"".concat(w().rotation_r," ").concat(6/l,"s infinite linear"),width:_,backgroundColor:j}:{animation:"".concat(w().rotation_l," ").concat(0-6/l,"s infinite linear"),width:_,backgroundColor:j},children:(0,i.jsx)("img",{style:{width:_,scale:"1.04"},src:l>0?"/icon@4x/direction_clockwise.png":"/icon@4x/direction_counterclock.png"})})]})})]})}function P(e){let{tag:t,title:n,active:s,onClick:a,velocity:l}=e;return(0,i.jsx)("div",{onClick:e=>{a&&a(e)},children:(0,i.jsx)(M,{tag:t,active:s,title:n,velocity:l,size:"large"})})}var L=n(76106),O=n.n(L);function B(e){let{activetag:t,onActiveChange:n}=e,[s,a]=(0,o.useState)(0),[l,r]=(0,o.useState)(0);(0,o.useEffect)(()=>{window.$bioStreamLiquidMotor1||(window.$bioStreamLiquidMotor1=e=>{e.isOn?a((e.d?1:-1)*e.v):a(0)}),window.$bioStreamLiquidMotor2||(window.$bioStreamLiquidMotor2=e=>{e.isOn?r((e.d?1:-1)*e.v):r(0)})},[]);let c=e=>{n&&n(e)};return(0,i.jsxs)("div",{className:O().wrapper,children:[(0,i.jsxs)("div",{className:O().left_line_1,children:[(0,i.jsx)("span",{className:O().left_line_1_a_1}),(0,i.jsxs)("div",{className:O().left_line_text_container,children:[(0,i.jsx)("span",{className:O().left_line_text,children:"换液"}),(0,i.jsx)("span",{className:O().left_line_hint,children:"(ml/min)"})]}),(0,i.jsx)("span",{className:O().left_line_1_a_2}),(0,i.jsx)("span",{className:O().left_line_1_b})]}),(0,i.jsxs)("div",{className:O().container,children:[(0,i.jsx)(P,{tag:"liquid-in",title:"换进",velocity:s,active:"liquid_in"==t,onClick:e=>c("liquid_in")}),(0,i.jsx)(P,{tag:"liquid-out",title:"换出",velocity:l,active:"liquid_out"==t,onClick:e=>c("liquid_out")})]})]})}function F(e){let{tag:t,title:n,active:s,onClick:a,velocity:l}=e;return(0,i.jsx)("div",{onClick:e=>{a&&a(e)},children:(0,i.jsx)(M,{tag:t,active:s,title:n,velocity:l,size:"normal"})})}var A=n(8267),D=n.n(A);function q(e){let{activetag:t,onActiveChange:n}=e,[s,a]=(0,o.useState)(0),[l,r]=(0,o.useState)(0),[c,_]=(0,o.useState)(0),[d,x]=(0,o.useState)(0),[v,u]=(0,o.useState)(0),[h,m]=(0,o.useState)(0);(0,o.useEffect)(()=>{window.$bioStreamPulseMotor||(window.$bioStreamPulseMotor=e=>{let t=e.isOn?(e.d?1:-1)*e.v:0;switch(e.tag){case"a1":a(t);break;case"a2":r(t);break;case"a3":_(t);break;case"b1":x(t);break;case"b2":u(t);break;case"b3":m(t)}})},[]);let j=e=>{n&&n(e)};return(0,i.jsxs)("div",{className:D().wrapper,children:[(0,i.jsxs)("div",{className:D().left_line_1,children:[(0,i.jsx)("span",{className:D().left_line_1_b}),(0,i.jsx)("span",{className:D().left_line_1_a_1}),(0,i.jsxs)("div",{className:D().left_line_text_container,children:[(0,i.jsx)("span",{className:D().left_line_text,children:"脉搏"}),(0,i.jsx)("span",{className:D().left_line_hint,children:"(ml/min)"})]}),(0,i.jsx)("span",{className:D().left_line_1_a_2})]}),(0,i.jsxs)("div",{className:D().container,children:[(0,i.jsx)(F,{tag:"a1",title:"A1层",velocity:s,active:"motor_a1"==t,onClick:e=>j("motor_a1")}),(0,i.jsx)(F,{tag:"a2",title:"A2层",velocity:l,active:"motor_a2"==t,onClick:e=>j("motor_a2")}),(0,i.jsx)(F,{tag:"a3",title:"A3层",velocity:c,active:"motor_a3"==t,onClick:e=>j("motor_a3")}),(0,i.jsx)(F,{tag:"b1",title:"B1层",velocity:d,active:"motor_b1"==t,onClick:e=>j("motor_b1")}),(0,i.jsx)(F,{tag:"b2",title:"B2层",velocity:v,active:"motor_b2"==t,onClick:e=>j("motor_b2")}),(0,i.jsx)(F,{tag:"b3",title:"B3层",velocity:h,active:"motor_b3"==t,onClick:e=>j("motor_b3")})]})]})}var E=n(23900),z=n.n(E);function G(e){let{pref:t,tag:n,active:s=!1,title:a,icon:l,children:o}=e;return(0,i.jsxs)("div",{ref:t,className:[z().container,s?z().active:""].join(" "),style:e.style,onClick:e.onClick,children:[(0,i.jsxs)("div",{className:z().header,children:[(0,i.jsx)("div",{className:z().title,children:a}),(0,i.jsx)("div",{className:z().icon,children:l})]}),(0,i.jsx)("div",{className:z().divider}),(0,i.jsx)("div",{className:z().content,children:o})]})}var I=n(57118),T=n.n(I);function W(e){return(0,i.jsx)("div",{children:(0,i.jsx)(G,{pref:null,title:"日志",icon:(0,i.jsxs)("div",{className:T().box,children:[(0,i.jsx)("span",{className:T().pub,children:"启动时间"}),(0,i.jsx)("span",{className:T().sub,children:"2023-04-26 12:00"})]}),children:(0,i.jsx)("div",{className:T().content,children:(0,i.jsxs)("p",{children:[(0,i.jsx)("span",{children:"12:03"}),"Hello!"]})})})})}var Z=n(55203),$=n.n(Z);function H(e){return(0,i.jsx)("div",{className:$().container,children:"60%"})}var K=n(26328),R=n.n(K),Y=n(58271),X=n(66178),U=n(95751);let V=(0,Y.ZP)(X.ZP)({color:"rgb(123, 156, 198)",height:4,"& .MuiSlider-track":{border:"none"},"& .MuiSlider-thumb":{height:16,width:16,backgroundColor:"#333",border:"2px solid #FFF","&:focus, &:hover, &.Mui-active, &.Mui-focusVisible":{boxShadow:"inherit"},"&.Mui-active":{borderWidth:2,height:28,width:28},"&:before":{display:"none"}},"& .MuiSlider-valueLabel":{backgroundColor:"rgb(123, 156, 198)",lineHeight:1.2,fontSize:12}});function Q(e){let{title:t="",unit:n="",min:s=0,max:a=100,value:l,decimal:o=!1,onChange:r}=e,c=(e,t)=>{r&&r(t)},_=e=>{r&&r(e.target.value)};return(0,i.jsxs)("div",{className:R().container,children:[(0,i.jsx)("div",{className:R().label,children:t}),(0,i.jsxs)("div",{className:R().slider,children:[(0,i.jsx)(V,{valueLabelDisplay:"auto","aria-label":"pretto slider",size:"small",value:l,max:a,min:s,step:o?.01:1,onChange:c,color:"secondary"}),(0,i.jsx)(U.Z,{id:"outlined-number",label:"",size:"small",style:{width:120,color:"#333"},InputLabelProps:{shrink:!0},variant:"standard",InputProps:{type:"number",inputProps:{inputMode:"decimal",style:{textAlign:"center",padding:0}},value:l,endAdornment:(0,i.jsx)("div",{children:n}),style:{color:"#333",borderBottom:"1px #2C5B8C solid",fontSize:14,marginBottom:4}},onChange:_})]})]})}var J=n(48681),ee=n(56880),et=n(3023),en=n(75358),ei=n(11703),es=n(40044);let ea=e=>{let{x:t,y:n,stroke:s,payload:a}=e;return(0,i.jsx)("g",{transform:"translate(".concat(t,",").concat(n,")"),children:(0,i.jsx)("text",{x:12,y:0,dy:16,textAnchor:"end",fill:"#fff",transform:"rotate(-25)",children:a.value})})};function el(e){let{tag:t,data:n=[],domain:s=[0,100],range:a=[0,100]}=e,[l,r]=(0,o.useState)(300),c=(0,o.useRef)(null),[_,d]=(0,o.useState)(1);(0,o.useEffect)(()=>{let e=c.current||{},t=e.offsetWidth;e.offsetHeight,r(t-8)},[e]);let x=(e,t)=>{d(t)};return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{marginBottom:2},children:(0,i.jsxs)(ei.Z,{value:_,onChange:x,"aria-label":"period selection",indicatorColor:"secondary",textColor:"inherit",variant:"fullWidth",centered:!0,children:[(0,i.jsx)(es.Z,{label:"最近一天",value:1}),(0,i.jsx)(es.Z,{label:"最近一周",value:7}),(0,i.jsx)(es.Z,{label:"最近一月",value:30}),(0,i.jsx)(es.Z,{label:"最近三月",value:90})]})}),(0,i.jsx)("div",{ref:c,style:{background:"#195A8F80"},children:(0,i.jsxs)(J.w,{width:l,height:180,data:n,margin:{top:20,right:20,left:-30,bottom:0},children:[(0,i.jsx)(ee.x,{type:"monotone",dataKey:"pv",stroke:"#FFF",dot:null,isAnimationActive:!1}),(0,i.jsx)(ee.x,{type:"monotone",dataKey:"sv",stroke:"#FFF",dot:null,isAnimationActive:!1}),(0,i.jsx)(et.K,{dataKey:"t",tickCount:4,tickSize:3,domain:s,stroke:"#FFF",tick:(0,i.jsx)(ea,{})}),(0,i.jsx)(en.B,{type:"number",interval:1,domain:a,tickCount:7,stroke:"#FFF"})]},"rcx_".concat(n.length))})]})}var eo=n(45650),er=n.n(eo),ec=n(90410),e_=n.n(ec);function ed(e){let{value:t,onChange:n}=e,s=e=>{n&&n(e)};return(0,i.jsxs)("div",{className:e_().container,children:[(0,i.jsx)("div",{className:e_().label,children:"方向"}),(0,i.jsx)("div",{className:e_().selector,children:t?(0,i.jsxs)("div",{className:e_().option_tag,onClick:e=>s(!1),children:["顺时针",(0,i.jsx)("img",{src:"/icon@4x/direction_clockwise.png"})]}):(0,i.jsxs)("div",{className:e_().option_tag,onClick:e=>s(!0),children:["逆时针",(0,i.jsx)("img",{src:"/icon@4x/direction_counterclock.png"})]})})]})}var ex=n(80794),ev=n.n(ex);function eu(e){let{value:t,onChange:n}=e,s=e=>{n&&n(e)};return(0,i.jsxs)("div",{className:ev().container,children:[(0,i.jsx)("div",{className:ev().label,children:"开关"}),(0,i.jsx)("div",{className:ev().selector,children:t?(0,i.jsx)("div",{className:ev().option_tag_on,onClick:e=>s(!1)}):(0,i.jsx)("div",{className:ev().option_tag_off,onClick:e=>s(!0)})})]})}var eh=n(70892),em=n.n(eh);function ej(e){let{pv:t,sv:n,unit:s,onSVChange:a}=e,l=(0,o.useRef)(null),r=e=>{a&&a(e.target.value)};return(0,i.jsxs)("div",{className:em().container,children:[(0,i.jsxs)("div",{className:em().topper,children:[(0,i.jsxs)("div",{className:em().value_pv,children:[t,(0,i.jsx)("div",{className:em().pv_unit,children:s})]}),(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:em().triangle})})]}),(0,i.jsxs)("div",{className:em().bottom,children:[(0,i.jsx)("div",{className:em().label_sv,children:"SV"}),(0,i.jsxs)("div",{className:em().value_sv,children:[(0,i.jsx)(U.Z,{ref:l,id:"outlined-number",label:"",size:"small",style:{width:40,color:"#333"},InputLabelProps:{shrink:!0},variant:"standard",InputProps:{type:"number",inputProps:{inputMode:"decimal",style:{textAlign:"center",padding:0,color:"#195A8F"}},value:n,style:{color:"#195A8F",borderBottom:"1px #195A8F solid",fontSize:"2.4rem",marginBottom:4,width:40}},onChange:r}),(0,i.jsx)("div",{className:em().sv_unit,children:s}),(0,i.jsx)("img",{onClick:e=>{var t,n,i;null==l||null===(t=l.current)||void 0===t||null===(n=t.firstChild)||void 0===n||null===(i=n.firstChild)||void 0===i||i.focus()},src:"/icon@4x/edit_icon.png"})]})]})]})}var ep=n(83321);let ef=e=>fetch("/local-api/control-config/".concat(e)),eg=(e,t)=>fetch("/local-api/control-config/".concat(e),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}),eb=e=>fetch("/local-api/clear-dosage/".concat(e),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"}});function eN(e){let t=e.tag,[n,s]=(0,o.useState)({v1:0,t1:0,d1:!1,v2:0,t2:0,d2:!1,pv:0,sv:0,isOn:!1});(0,o.useEffect)(()=>{ef(t).then(e=>{200===e.status&&e.json().then(e=>{s(e)})})},[]);let a=(e,t)=>{let i="".concat(t);"false"==i||"true"==i?s({...n,[e]:"true"==i}):i.indexOf(".")>-1?s({...n,[e]:parseFloat(i)}):s({...n,[e]:parseInt(i)}),console.log(n)},l=()=>{eg(t,n).then(e=>{201===e.status&&window.$bioDialog&&window.$bioDialog("配置更新成功")})};return(0,i.jsxs)("div",{className:er().container,children:[(0,i.jsx)("div",{className:er().chart,children:(0,i.jsx)(el,{data:[]})}),(0,i.jsxs)("div",{className:er().editor,children:[(0,i.jsx)(eu,{value:n.isOn||!1,onChange:e=>a("isOn",e)}),(0,i.jsx)("div",{className:er().line}),(0,i.jsx)("div",{className:er().group_title,children:"周期1"}),(0,i.jsx)(ed,{value:n.d1||!1,onChange:e=>a("d1",e)}),(0,i.jsx)(Q,{title:"速度",unit:"rpm",min:0,max:1e3,value:n.v1||0,onChange:e=>a("v1",e)}),(0,i.jsx)(Q,{title:"时长",unit:"ms",min:0,max:1e4,value:n.t1||0,onChange:e=>a("t1",e)}),(0,i.jsx)("div",{className:er().line}),(0,i.jsx)("div",{className:er().group_title,children:"周期2"}),(0,i.jsx)(ed,{value:n.d2||!1,onChange:e=>a("d2",e)}),(0,i.jsx)(Q,{title:"速度",unit:"rpm",min:0,max:1e3,value:n.v2||0,onChange:e=>a("v2",e)}),(0,i.jsx)(Q,{title:"时长",unit:"ms",min:0,max:1e4,value:n.t2||0,onChange:e=>a("t2",e)}),(0,i.jsx)(ep.Z,{variant:"contained",fullWidth:!0,color:"secondary",className:er().done_button,onClick:l,children:"完 成"})]})]},"motor"+t)}function eS(e){let t=e.tag,[n,s]=(0,o.useState)({v:0,t:0,d:!1,pv:0,sv:0,isOn:!1});(0,o.useEffect)(()=>{ef(t).then(e=>{200===e.status&&e.json().then(e=>{s(e)})})},[]);let a=(e,t)=>{let i="".concat(t);"false"==i||"true"==i?s({...n,[e]:"true"==i}):i.indexOf(".")>-1?s({...n,[e]:parseFloat(i)}):s({...n,[e]:parseInt(i)}),console.log(n)},l=()=>{eg(t,n).then(e=>{201===e.status&&window.$bioDialog&&window.$bioDialog("配置更新成功")})};return(0,i.jsxs)("div",{className:er().container,children:[(0,i.jsx)("div",{className:er().chart,children:(0,i.jsx)(el,{data:[]})}),(0,i.jsxs)("div",{className:er().editor,children:[(0,i.jsx)(eu,{value:n.isOn||!1,onChange:e=>a("isOn",e)}),(0,i.jsx)("div",{className:er().line}),(0,i.jsx)(ed,{value:n.d||!1,onChange:e=>a("d",e)}),(0,i.jsx)(Q,{title:"速度",unit:"rpm",min:0,max:1e3,value:n.v||0,onChange:e=>a("v",e)}),(0,i.jsx)(Q,{title:"时长",unit:"ms",min:0,max:1e4,value:n.t||0,onChange:e=>a("t",e)}),(0,i.jsx)("div",{className:er().line}),(0,i.jsx)(ep.Z,{variant:"contained",fullWidth:!0,color:"secondary",className:er().done_button,onClick:l,children:"完 成"})]})]},t)}function eC(e){return(0,i.jsx)("div",{children:(0,i.jsx)("img",{style:{width:"100%",padding:"0 12rem"},src:"/icon@4x/logo.png"})})}var ew=n(15975),ek=n.n(ew);function ey(e){let t=e.tag,[n,s]=(0,o.useState)({kp:0,ki:0,kd:0,pv:0,sv:0,isOn:!1});(0,o.useEffect)(()=>{ef(t).then(e=>{200===e.status&&e.json().then(e=>{s(e)})})},[]);let a=(e,t)=>{let i="".concat(t);"false"==i||"true"==i?s({...n,[e]:"true"==i}):i.indexOf(".")>-1?s({...n,[e]:parseFloat(i)}):s({...n,[e]:parseInt(i)})},l=()=>{eg(t,n).then(e=>{201===e.status&&window.$bioDialog&&window.$bioDialog("配置更新成功")})};return(0,i.jsxs)("div",{className:er().container,children:[(0,i.jsx)("div",{className:er().chart,children:(0,i.jsx)(el,{data:[]})}),(0,i.jsxs)("div",{className:er().editor,children:[(0,i.jsx)(eu,{value:n.isOn||!1,onChange:e=>a("isOn",e)}),(0,i.jsx)("div",{className:er().line}),(0,i.jsx)(ej,{unit:"",sv:n.sv||0,pv:n.pv||0,onSVChange:e=>a("sv",e)}),(0,i.jsx)("div",{className:er().line}),(0,i.jsx)(Q,{title:"Kp",unit:"",min:0,max:1e3,value:n.kp||0,onChange:e=>a("kp",e)}),(0,i.jsx)(Q,{title:"Ti",unit:"",min:0,max:1e3,value:n.ki||0,onChange:e=>a("ki",e)}),(0,i.jsx)(Q,{title:"Td",unit:"",min:0,max:1e3,value:n.kd||0,onChange:e=>a("kd",e)}),(0,i.jsx)(ep.Z,{variant:"contained",fullWidth:!0,color:"secondary",className:er().done_button,onClick:l,children:"完 成"})]})]},t)}function eM(e){let t=e.tag,[n,s]=(0,o.useState)({kp:0,ki:0,kd:0,pv:0,sv:0,isOn:!1});(0,o.useEffect)(()=>{ef(t).then(e=>{200===e.status&&e.json().then(e=>{s(e)})})},[]);let a=(e,t)=>{let i="".concat(t);"false"==i||"true"==i?s({...n,[e]:"true"==i}):i.indexOf(".")>-1?s({...n,[e]:parseFloat(i)}):s({...n,[e]:parseInt(i)})},l=()=>{eg(t,n).then(e=>{201===e.status&&window.$bioDialog&&window.$bioDialog("配置更新成功")})};return(0,i.jsxs)("div",{className:er().container,children:[(0,i.jsx)("div",{className:er().chart,children:(0,i.jsx)(el,{data:[]})}),(0,i.jsxs)("div",{className:er().editor,children:[(0,i.jsx)(eu,{value:n.isOn||!1,onChange:e=>a("isOn",e)}),(0,i.jsx)("div",{className:er().line}),(0,i.jsx)(ej,{unit:"",sv:n.sv||0,pv:n.pv||0,onSVChange:e=>a("sv",e)}),(0,i.jsx)("div",{className:er().line}),(0,i.jsx)(Q,{title:"Kp",unit:"",min:0,max:1e3,value:n.kp||0,onChange:e=>a("kp",e)}),(0,i.jsx)(Q,{title:"Ti",unit:"",min:0,max:1e3,value:n.ki||0,onChange:e=>a("ki",e)}),(0,i.jsx)(Q,{title:"Td",unit:"",min:0,max:1e3,value:n.kd||0,onChange:e=>a("kd",e)}),(0,i.jsx)(ep.Z,{variant:"contained",fullWidth:!0,color:"secondary",className:er().done_button,onClick:l,children:"完 成"})]})]},t)}function eP(e){let t=e.tag,[n,s]=(0,o.useState)({kp:0,ki:0,kd:0,pv:0,sv:0,isOn:!1});(0,o.useEffect)(()=>{ef(t).then(e=>{200===e.status&&e.json().then(e=>{s(e)})})},[]);let a=(e,t)=>{let i="".concat(t);"false"==i||"true"==i?s({...n,[e]:"true"==i}):i.indexOf(".")>-1?s({...n,[e]:parseFloat(i)}):s({...n,[e]:parseInt(i)})},l=()=>{eg(t,n).then(e=>{201===e.status&&window.$bioDialog&&window.$bioDialog("配置更新成功")})};return(0,i.jsxs)("div",{className:er().container,children:[(0,i.jsx)("div",{className:er().chart,children:(0,i.jsx)(el,{data:[]})}),(0,i.jsxs)("div",{className:er().editor,children:[(0,i.jsx)(eu,{value:n.isOn||!1,onChange:e=>a("isOn",e)}),(0,i.jsx)("div",{className:er().line}),(0,i.jsx)(ej,{unit:"\xb0C",sv:n.sv||0,pv:n.pv||0,onSVChange:e=>a("sv",e)}),(0,i.jsx)("div",{className:er().line}),(0,i.jsx)(Q,{title:"Kp",unit:"",min:0,max:1e3,value:n.kp||0,onChange:e=>a("kp",e)}),(0,i.jsx)(Q,{title:"Ti",unit:"",min:0,max:1e3,value:n.ki||0,onChange:e=>a("ki",e)}),(0,i.jsx)(Q,{title:"Td",unit:"",min:0,max:1e3,value:n.kd||0,onChange:e=>a("kd",e)}),(0,i.jsx)(ep.Z,{variant:"contained",fullWidth:!0,color:"secondary",className:er().done_button,onClick:l,children:"完 成"})]})]},t)}function eL(e){let t=e.tag,[n,s]=(0,o.useState)({total:0,pv:0,sv:0,isOn:!1});(0,o.useEffect)(()=>{ef(t).then(e=>{200===e.status&&e.json().then(e=>{s(e)})})},[e.tag]);let a=(e,t)=>{let i="".concat(t);"false"==i||"true"==i?s({...n,[e]:"true"==i}):i.indexOf(".")>-1?s({...n,[e]:parseFloat(i)}):s({...n,[e]:parseInt(i)})},l=()=>{eg(t,n).then(e=>{201===e.status&&window.$bioDialog&&window.$bioDialog("配置更新成功")})},r=()=>{eb(t).then(e=>{201===e.status&&window.$bioDialog&&window.$bioDialog("流量累计已清零")})};return(0,i.jsxs)("div",{className:er().container,children:[(0,i.jsx)("div",{className:er().chart,children:(0,i.jsx)(el,{data:[]})}),(0,i.jsxs)("div",{className:er().editor,children:[(0,i.jsx)(eu,{value:n.isOn||!1,onChange:e=>a("isOn",e)}),(0,i.jsx)("div",{className:er().line}),(0,i.jsx)(ej,{unit:"gas_3"==t?"%":"LPM",sv:n.sv||0,pv:n.pv||0,onSVChange:e=>a("sv",e)}),(0,i.jsx)("div",{className:er().line}),(0,i.jsxs)("div",{className:er().flex_container,children:["累计：",n.total||0," L",(0,i.jsx)(ep.Z,{variant:"contained",color:"secondary",className:er().done_button,style:{width:"8rem"},onClick:r,children:"清 零"})]}),(0,i.jsx)(ep.Z,{variant:"contained",fullWidth:!0,color:"secondary",className:er().done_button,onClick:l,children:"完 成"})]})]},t)}let eO=e=>{if(console.log({tag:e}),!e)return{title:"柔脉医疗",children:(0,i.jsx)(eC,{})};switch(e){case"sensor_ph":return{title:"控制（PH）",children:(0,i.jsx)(ey,{tag:e})};case"sensor_do":return{title:"控制（DO）",children:(0,i.jsx)(eM,{tag:e})};case"sensor_temp":return{title:"控制（温度）",children:(0,i.jsx)(eP,{tag:e})};case"sensor_level":return{title:"控制（液位）",children:(0,i.jsx)("div",{children:"液位"})};case"stir":return{title:"搅拌",children:(0,i.jsx)("div",{children:"搅拌"})};case"motor_a1":case"motor_a2":case"motor_a3":case"motor_b1":case"motor_b2":case"motor_b3":return{title:"脉搏 - "+e.replace("motor_","").toUpperCase(),children:(0,i.jsx)(eN,{tag:e},e)};case"liquid_in":case"liquid_out":return{title:"换液（".concat("liquid_in"==e?"进":"出","）"),children:(0,i.jsx)(eS,{tag:e},e)};case"gas_1":return{title:(0,i.jsx)("div",{children:"进气（Air）"}),children:(0,i.jsx)(eL,{tag:e},e)};case"gas_2":return{title:(0,i.jsxs)("div",{children:["进气（CO ",(0,i.jsx)("span",{className:ek().subtext,children:"2"}),"）"]}),children:(0,i.jsx)(eL,{tag:e})};case"gas_3":return{title:(0,i.jsxs)("div",{children:["进气（N ",(0,i.jsx)("span",{className:ek().subtext,children:"2"}),"）"]}),children:(0,i.jsx)(eL,{tag:e})};case"gas_4":return{title:(0,i.jsxs)("div",{children:["进气（O ",(0,i.jsx)("span",{className:ek().subtext,children:"2"}),"）"]}),children:(0,i.jsx)(eL,{tag:e})}}return{title:"柔脉医疗",children:(0,i.jsx)(eC,{})}};function eB(e){let{activetag:t}=e,n=eO(t);return(0,i.jsxs)("div",{className:ek().container,children:[(0,i.jsxs)("div",{className:ek().lines,children:[(0,i.jsxs)("div",{className:ek().left_line_1,children:[(0,i.jsx)("span",{className:ek().left_line_1_a_1}),(0,i.jsx)("div",{className:ek().left_line_text_container,children:(0,i.jsx)("span",{className:ek().left_line_text,children:n.title})}),(0,i.jsx)("span",{className:ek().left_line_1_a_2}),(0,i.jsx)("span",{className:ek().left_line_1_b})]}),(0,i.jsxs)("div",{className:ek().left_line_2,children:[(0,i.jsx)("span",{className:ek().left_line_1_a_1}),(0,i.jsx)("span",{className:ek().left_line_1_a_2})]})]}),(0,i.jsx)("div",{className:ek().content,children:n.children})]})}var eF=n(10165),eA=n.n(eF);let eD=e=>{let{x:t,y:n,stroke:s,payload:a}=e;return(0,i.jsx)("g",{transform:"translate(".concat(t,",").concat(n,")"),children:(0,i.jsx)("text",{x:12,y:0,dy:16,textAnchor:"end",fill:"#fff",transform:"rotate(-25)",children:a.value})})};function eq(e){let{tag:t,active:n,data:s,title:a,pv:l,sv:r,domain:c=[0,100],range:_=[0,100]}=e,[d,x]=(0,o.useState)(300),v=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let e=v.current||{},t=e.offsetWidth;e.offsetHeight,x(t-8)},[e]),(0,i.jsx)(G,{pref:v,title:a,tag:t,active:n,icon:(0,i.jsxs)("div",{className:eA().box,children:[(0,i.jsx)("span",{className:eA().pub,children:null==l?"-":l}),(0,i.jsx)("span",{className:eA().div,children:"/"}),(0,i.jsx)("span",{className:eA().sub,children:null==r?"-":r})]}),onClick:e.onClick,children:(0,i.jsxs)(J.w,{width:d,height:128,data:s,margin:{top:20,right:20,left:-30,bottom:0},children:[(0,i.jsx)(ee.x,{type:"monotone",dataKey:"pv",stroke:"#FFF",dot:null,isAnimationActive:!1}),(0,i.jsx)(ee.x,{type:"monotone",dataKey:"sv",stroke:"#FFF",dot:null,isAnimationActive:!1}),(0,i.jsx)(et.K,{dataKey:"t",tickCount:4,tickSize:3,domain:c,stroke:"#FFF",tick:(0,i.jsx)(eD,{})}),(0,i.jsx)(en.B,{type:"number",interval:1,domain:_,tickCount:7,stroke:"#FFF"})]},"rc_".concat(s.length))})}var eE=n(18759),ez=n.n(eE);function eG(e){let{tag:t,active:n,data:s,title:a,pv:l,sv:o}=e;return(0,i.jsx)(G,{title:a,tag:t,active:n,icon:(0,i.jsx)("div",{className:eA().box,children:l&&(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:"/icon@4x/liquid_level_high.png"})})}),style:l?{backgroundColor:"#c92b2b"}:{},onClick:e.onClick,children:(0,i.jsx)("div",{className:eA().alert_box,style:l?{backgroundColor:"#c92b2b"}:{},children:l?"HIGH":"LOW"})})}let eI=e=>{let t=new Date(e);return"".concat(t.getMinutes(),":").concat(t.getSeconds())};function eT(e){let{activetag:t,onActiveChange:n}=e,[s,a]=(0,o.useState)([0,60]),[l,r]=(0,o.useState)([]),[c,_]=(0,o.useState)([]),[d,x]=(0,o.useState)([]),[v,u]=(0,o.useState)(!1),[h,m]=(0,o.useState)([0,0]),[j,p]=(0,o.useState)([0,0]),[f,g]=(0,o.useState)([0,0]),[b,N]=(0,o.useState)([!1,!1]);(0,o.useEffect)(()=>{window.$bioStreamSensor||(window.$bioStreamSensor=e=>{m([e.pv_ph,e.sv_ph]),p([e.pv_do,e.sv_do]),g([e.pv_temp,e.sv_temp]),N([e.pv_level,e.sv_level]),l.push({t:eI(e.timestamp),pv:e.pv_ph,sv:e.sv_ph}),c.push({t:eI(e.timestamp),pv:e.pv_do,sv:e.sv_do}),d.push({t:eI(e.timestamp),pv:e.pv_temp,sv:e.sv_temp}),l.length>60&&l.splice(0,1),c.length>60&&c.splice(0,1),d.length>60&&d.splice(0,1),r(l),_(c),x(d),u(e.pv_level)})},[]);let S=e=>{n&&n(e==t?null:e)};return(0,i.jsxs)("div",{className:ez().sensor_grid_container,children:[(0,i.jsx)(eq,{tag:"ph",title:"PH",domain:s,range:[4,10],pv:h[0],sv:h[1],data:l,active:"sensor_ph"==t,onClick:e=>S("sensor_ph")}),(0,i.jsx)(eq,{tag:"do",title:"DO",domain:s,range:[4,10],pv:j[0],sv:j[1],data:c,active:"sensor_do"==t,onClick:e=>S("sensor_do")}),(0,i.jsx)(eq,{tag:"temp",title:"温度",domain:s,range:[30,40],pv:f[0],sv:f[1],data:d,active:"sensor_temp"==t,onClick:e=>S("sensor_temp")}),(0,i.jsx)(eG,{tag:"level",title:"液位",pv:b[0],sv:b[1],active:"sensor_level"==t,onClick:e=>S("sensor_level")})]})}var eW=n(43454),eZ=n.n(eW);function e$(e){let[t,n]=(0,o.useState)(null),s=e=>{n(e),console.log({active:e})};return(0,i.jsxs)("div",{className:eZ().content,children:[(0,i.jsxs)("div",{className:eZ().content_left,children:[(0,i.jsx)("div",{className:eZ().swipe_box,children:(0,i.jsx)(x,{})}),(0,i.jsx)("div",{className:eZ().sensor_grid_container,children:(0,i.jsx)(eT,{activetag:t,onActiveChange:s})}),(0,i.jsxs)("div",{className:eZ().left_line_1,children:[(0,i.jsx)("span",{className:eZ().left_line_1_a}),(0,i.jsx)("span",{className:eZ().left_line_1_b})]}),(0,i.jsxs)("div",{className:eZ().left_bottom_ctrl,children:[(0,i.jsx)(j,{}),(0,i.jsx)(m,{})]})]}),(0,i.jsxs)("div",{className:eZ().content_right,children:[(0,i.jsxs)("div",{className:eZ().content_right_level_1,children:[(0,i.jsxs)("div",{className:eZ().gas_liquid_container,children:[(0,i.jsx)(S,{activetag:t,onActiveChange:s}),(0,i.jsx)(B,{activetag:t,onActiveChange:s})]}),(0,i.jsxs)("div",{className:eZ().log_motor_container,children:[(0,i.jsxs)("div",{className:eZ().log_container,children:[(0,i.jsx)(H,{}),(0,i.jsx)(W,{})]}),(0,i.jsx)(q,{activetag:t,onActiveChange:s})]})]}),(0,i.jsx)("div",{className:eZ().content_right_level_2,children:(0,i.jsx)(eB,{activetag:t,onActiveChange:s})})]})]})}function eH(e){let[t,n]=(0,o.useState)("");return(0,o.useEffect)(()=>{setInterval(()=>{let e=new Date,i="".concat(e.getFullYear()," 年 ").concat(e.getMonth()+1," 月 ").concat(e.getDate()," 日  ").concat(e.getHours(),":").concat(e.getMinutes());i!=t&&n(i)},1e3)},[]),(0,i.jsx)("div",{children:t})}var eK=n(11102),eR=n.n(eK);let eY=[{key:"history",name:"历史记录"},{key:"dashboard",name:"控制面板"},{key:"craft",name:"工艺设置"}];function eX(e){let[t,n]=(0,o.useState)(e.active||eY[1].key),s=t=>{e.onSelected&&e.onSelected(t),n(t)};return(0,i.jsx)("div",{className:eR().container,children:eY.map(e=>{let n=t==e.key;return(0,i.jsx)("div",{className:[eR().item,n?eR().item_active:eR().item_normal].join(" "),onClick:t=>s(e.key),children:e.name},e.key)})})}var eU=n(81941),eV=n.n(eU);function eQ(e){return(0,i.jsx)("div",{className:eV().container,children:(0,i.jsx)("img",{src:e.image})})}var eJ=n(60863),e0=n.n(eJ);function e1(){return(0,i.jsxs)("div",{className:"jsx-68b3a319e21ecf19 "+(e0().container||""),children:[(0,i.jsxs)("main",{className:"jsx-68b3a319e21ecf19 flex min-h-screen flex-col items-center",children:[(0,i.jsxs)("header",{className:"jsx-68b3a319e21ecf19 "+(e0().header||""),children:[(0,i.jsxs)("div",{className:"jsx-68b3a319e21ecf19 "+(e0().header_col_left||""),children:[(0,i.jsx)(eQ,{image:"/icon@4x/status_bar_help.png"}),(0,i.jsx)(eQ,{image:"/icon@4x/status_bar_liquid_level_normal.png"})]}),(0,i.jsxs)("div",{className:"jsx-68b3a319e21ecf19 "+(e0().header_col_right||""),children:[(0,i.jsx)("div",{className:"jsx-68b3a319e21ecf19 "+(e0().header_col_menus||""),children:(0,i.jsx)(eX,{active:"dashboard",onSelected:null})}),(0,i.jsxs)("div",{className:"jsx-68b3a319e21ecf19 "+(e0().header_col_icons||""),children:[(0,i.jsx)(eQ,{image:"/icon@4x/status_bar_switch.png"}),(0,i.jsx)(eQ,{image:"/icon@4x/status_bar_setting.png"}),(0,i.jsx)(eQ,{image:"/icon@4x/status_bar_help.png"}),(0,i.jsx)(eQ,{image:"/icon@4x/status_bar_lock.png"})]}),(0,i.jsx)("div",{className:"jsx-68b3a319e21ecf19 "+(e0().header_col_time||""),children:(0,i.jsx)(eH,{})})]})]}),(0,i.jsx)("div",{className:"jsx-68b3a319e21ecf19 "+(e0().content||""),children:(0,i.jsx)(e$,{})})]}),(0,i.jsx)(a(),{id:"68b3a319e21ecf19",children:"main.jsx-68b3a319e21ecf19{}"})]})}},92301:function(e){e.exports={container:"SwipeBox_container__yLWXA",arrows:"SwipeBox_arrows__epYW9",arrow_left:"SwipeBox_arrow_left__uTdcE",arrow_right:"SwipeBox_arrow_right__3iUw8",tab_wrapper:"SwipeBox_tab_wrapper__q2aj_",title:"SwipeBox_title___wkyI"}},10316:function(e){e.exports={container:"CircleButton_container__V6puP"}},43454:function(e){e.exports={content:"dashboard_content__3nLAD",content_left:"dashboard_content_left__3vOlm",content_right:"dashboard_content_right__YmxAb",swipe_box:"dashboard_swipe_box__YmEb9",left_line_1:"dashboard_left_line_1__lrW8Z",left_line_1_a:"dashboard_left_line_1_a__N2qQs",left_line_1_b:"dashboard_left_line_1_b___OlW_",left_bottom_ctrl:"dashboard_left_bottom_ctrl__QgvmG",content_right_level_1:"dashboard_content_right_level_1__OAPit",gas_liquid_container:"dashboard_gas_liquid_container__CHC7W",log_motor_container:"dashboard_log_motor_container__TblDF",log_container:"dashboard_log_container__vaR11",content_right_level_2:"dashboard_content_right_level_2__vg8Yl"}},90410:function(e){e.exports={container:"DirectionSelect_container__mTFeU",label:"DirectionSelect_label__0qwla",option_tag:"DirectionSelect_option_tag__DDZEV"}},70892:function(e){e.exports={container:"PvSv_container__LWCXG",topper:"PvSv_topper__FUh9N",value_pv:"PvSv_value_pv__1GRDn",pv_unit:"PvSv_pv_unit__KYOkv",triangle:"PvSv_triangle__YwB6W",bottom:"PvSv_bottom__pTT6H",label_sv:"PvSv_label_sv__EjWUb",value_sv:"PvSv_value_sv__AIGlG",sv_unit:"PvSv_sv_unit__b_2dF"}},26328:function(e){e.exports={container:"RangeInput_container__pRYqH",label:"RangeInput_label__ybX2K",slider:"RangeInput_slider__lZYzj"}},80794:function(e){e.exports={container:"Switch_container__ric_0",label:"Switch_label__WoeQH",option_tag_on:"Switch_option_tag_on___xen_",option_tag_off:"Switch_option_tag_off__AKSQm"}},16095:function(e){e.exports={container:"GasBottle_container___JMs4",enabled_container:"GasBottle_enabled_container__LalWK",disabled_container:"GasBottle_disabled_container__oGpv_",container_inactive:"GasBottle_container_inactive__jsnct",bottle_scale_fade:"GasBottle_bottle_scale_fade__iXxiC",container_active:"GasBottle_container_active__dR8sG",bottle_scale:"GasBottle_bottle_scale__lz687",bottle_text_wrapper:"GasBottle_bottle_text_wrapper__8vbTe",bottle_text_active:"GasBottle_bottle_text_active__6shaU",title:"GasBottle_title__N236C"}},63875:function(e){e.exports={container:"GasBottleList_container__LTCGa"}},11102:function(e){e.exports={container:"Docker_container__8v6M9",item:"Docker_item__R3SNQ",item_active:"Docker_item_active__2juqF",item_normal:"Docker_item_normal__3LOtu"}},81941:function(e){e.exports={container:"IconInk_container___co_M"}},76106:function(e){e.exports={wrapper:"LiquidMotorList_wrapper__qxGuC",container:"LiquidMotorList_container__Uxcnv",left_line_1:"LiquidMotorList_left_line_1__aHjD_",left_line_1_a_1:"LiquidMotorList_left_line_1_a_1__0k_ci",left_line_1_a_2:"LiquidMotorList_left_line_1_a_2__jB8ew",left_line_1_b:"LiquidMotorList_left_line_1_b__nlOlG",left_line_text_container:"LiquidMotorList_left_line_text_container__E9u1W",left_line_text:"LiquidMotorList_left_line_text__F_CLu",left_line_hint:"LiquidMotorList_left_line_hint__vmz9w"}},57118:function(e){e.exports={box:"LogBox_box__DRUta",pub:"LogBox_pub__hdCqN",sub:"LogBox_sub__76yf_",content:"LogBox_content__0HVt8"}},55203:function(e){e.exports={container:"ProgressBox_container__iJ_ne"}},11069:function(e){e.exports={container:"Motor_container__KqxXZ",motor:"Motor_motor__bjjrf",direction:"Motor_direction__L41vW",title:"Motor_title__q37VV",footer:"Motor_footer__gatCF",velocity_container:"Motor_velocity_container__eqb9O",velocity_text:"Motor_velocity_text__EWcic",rotate_l:"Motor_rotate_l__sr6AZ",rotation_l:"Motor_rotation_l__2Pn3Q",rotate_r:"Motor_rotate_r__tkAcL",rotation_r:"Motor_rotation_r__y8zwX",active:"Motor_active__nrhOG",active_title:"Motor_active_title__9G8Yb",triangle:"Motor_triangle__X6WM8"}},45650:function(e){e.exports={container:"EditCommon_container__SWyp6",chart:"EditCommon_chart__Ny5Yk",editor:"EditCommon_editor__rLMYQ",line:"EditCommon_line__fmNmd",group_title:"EditCommon_group_title__THNyj",done_button:"EditCommon_done_button__S3KYC",flex_container:"EditCommon_flex_container__vJrDd"}},15975:function(e){e.exports={container:"Panel_container__DL1_g",lines:"Panel_lines__O2Gfw",left_line_1:"Panel_left_line_1__8vbgb",left_line_2:"Panel_left_line_2__hD8RC",left_line_1_a_1:"Panel_left_line_1_a_1__nZRUf",left_line_1_a_2:"Panel_left_line_1_a_2__5Yvl2",left_line_1_b:"Panel_left_line_1_b__8qNiZ",left_line_text_container:"Panel_left_line_text_container__YHHe0",left_line_text:"Panel_left_line_text__tvU_K",subtext:"Panel_subtext__BNWNn",content:"Panel_content__TkCx0"}},8267:function(e){e.exports={wrapper:"PulseMotorList_wrapper__Ir_BH",container:"PulseMotorList_container__4Ryzd",left_line_1:"PulseMotorList_left_line_1__j5pRj",left_line_1_a_1:"PulseMotorList_left_line_1_a_1__iRn36",left_line_1_a_2:"PulseMotorList_left_line_1_a_2__euqlO",left_line_1_b:"PulseMotorList_left_line_1_b__ZUWFP",left_line_text_container:"PulseMotorList_left_line_text_container__fyjvc",left_line_text:"PulseMotorList_left_line_text__gK24S",left_line_hint:"PulseMotorList_left_line_hint__C0Z05"}},23900:function(e){e.exports={container:"SensorBox_container__DSpY9",active:"SensorBox_active__d3X_u",header:"SensorBox_header__dHrr6",divider:"SensorBox_divider__g7b2I",content:"SensorBox_content__lbiOK",title:"SensorBox_title__BK5k3",icon:"SensorBox_icon__G_uSJ"}},10165:function(e){e.exports={box:"SensorCommon_box__D97iT",pub:"SensorCommon_pub__4jQeO",sub:"SensorCommon_sub__z_Tiz",div:"SensorCommon_div__uBn25",alert_box:"SensorCommon_alert_box__sw_py"}},18759:function(e){e.exports={sensor_grid_container:"SensorGrid_sensor_grid_container__OFh2B"}},60863:function(e){e.exports={container:"styles_container__Nwnoi",main:"styles_main__luRPU",header:"styles_header__KTjn4",header_col_left:"styles_header_col_left__zAy1A",header_col_right:"styles_header_col_right__P0vXc",header_col_menus:"styles_header_col_menus__1unFs",header_col_icons:"styles_header_col_icons__OQeHi",header_col_time:"styles_header_col_time__CBHxy"}}},function(e){e.O(0,[486,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);