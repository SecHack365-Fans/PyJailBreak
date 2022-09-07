(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(76686)}])},48204:function(e,n,t){"use strict";t.d(n,{A:function(){return f}});var r=t(85893),o=t(9008),a=t.n(o),i=function(e){var n=e.title,t=e.description,o="Black box automated vulnerability scanning tool for Python socket servers",i=null!==n&&void 0!==n?n:"PyJailBreak",l=null!==t&&void 0!==t?t:o;return(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"description",content:t||o}),(0,r.jsx)("link",{rel:"icon",href:"/PyJailBreak/favicon.ico"}),(0,r.jsx)("meta",{name:"og:url",content:"https://fans.sechack365.com/PyJailBreak/"}),(0,r.jsx)("meta",{name:"og:title",content:i}),(0,r.jsx)("meta",{name:"og:description",content:l}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"og:image",content:"https://raw.githubusercontent.com/SecHack365-Fans/PyJailBreak/main/assets/logo_readme_title.png"})]})},l=t(41664),c=t.n(l),s=t(26447),d=t(83321),u=t(54970),p=t(25449),x=t(43068),h=t.n(x),v=function(){return(0,r.jsxs)(s.Z,{spacing:1,direction:"row",className:h().navbar,children:[(0,r.jsxs)("span",{className:h().left,children:[(0,r.jsx)(c(),{href:"/",passHref:!0,children:(0,r.jsx)(d.Z,{variant:"text",className:h().button,children:(0,r.jsx)("img",{src:"/PyJailBreak/logo_horizontal_cleanness.png",alt:"top page",className:h().logo})})}),(0,r.jsx)(c(),{href:"/openapi",passHref:!0,children:(0,r.jsxs)(d.Z,{variant:"text",className:h().button,children:[(0,r.jsx)(u.Z,{className:h().icon})," API"]})})]}),(0,r.jsx)("span",{className:h().right,children:(0,r.jsx)("a",{href:"https://github.com/SecHack365-Fans/PyJailBreak",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(d.Z,{variant:"text",className:h().button,children:(0,r.jsx)(p.Z,{className:h().icon})})})})]})},f=function(e){var n=e.children,t=e.title,o=e.description,a=e.styles;return(0,r.jsxs)("main",{className:a,children:[(0,r.jsx)(i,{title:t,description:o}),(0,r.jsx)(v,{}),(0,r.jsx)("div",{style:{padding:"15px"},children:n})]})}},76686:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Pe}});var r=t(85893),o=t(48204),a=t(214),i=t.n(a),l=t(41799),c=t(69396),s=t(29815),d=t(67294),u=t(47568),p=t(34051),x=t.n(p),h=t(83321),v=t(26307),f=t(86501),j=t(584),g=t(97337),m=t(82586),y=t(9473),Z=t(1604),_=["safe","warning","critical","executing","unknown"],b=Z.z.enum(_),P=Z.z.object({payload:Z.z.string().array(),unexpected:Z.z.string().array(),severity:b,payload_option:Z.z.enum(["plain","eval"]).optional(),unexpected_option:Z.z.enum(["plain","eval","regex"]).optional(),result:b.optional()}),k=Z.z.array(P.and(Z.z.object({id:Z.z.number()}))),w=Z.z.object({success:Z.z.boolean(),severity:b,error:Z.z.string().optional()}),C=function(){var e=(0,u.Z)(x().mark((function e(n,t,r,o,a,i,l,c){var s,d,p,h,v,j,m,y,Z,_;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.ZP.success("Scan Started!"),s=!1,d=!0,p=!1,h=void 0,e.prev=3,v=l[Symbol.iterator]();case 5:if(d=(j=v.next()).done){e.next=40;break}if(m=j.value,"undefined"!==typeof(y=i.find((function(e){return e.id===m})))){e.next=10;break}return e.abrupt("continue",37);case 10:if(i=N(i,{id:m,severity:"executing"}),c((0,g.A6)(i)),e.prev=13,Z=function(){var e=(0,u.Z)(x().mark((function e(){var t,i,l;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(n,"/scan"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({payload:y.payload,unexpected:y.unexpected,severity:y.severity,endpoint:{protocol:r,domain:o,port:a},payload_option:y.payload_option,unexpected_option:y.unexpected_option})});case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("".concat(t.status," ").concat(t.statusText));case 5:return e.next=7,t.json();case 7:if(i=e.sent,console.log("API response: ",i),!1!==(l=w.safeParse(i)).success){e.next=13;break}throw console.error(l.error),new Error("Internal Server Error");case 13:if(i.success){e.next=15;break}throw new Error(i.error);case 15:return e.abrupt("return",i.severity);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t){e.next=21;break}return e.next=18,Z();case 18:e.t0=e.sent,e.next=24;break;case 21:return e.next=23,O();case 23:e.t0=e.sent;case 24:_=e.t0,i=N(i,{id:m,severity:_}),c((0,g.A6)(i)),e.next=37;break;case 30:e.prev=30,e.t1=e.catch(13),s||(f.ZP.error(e.t1.message),s=!0),console.error(e.t1),i=N(i,{id:m,severity:"unknown"}),c((0,g.A6)(i));case 37:d=!0,e.next=5;break;case 40:e.next=46;break;case 42:e.prev=42,e.t2=e.catch(3),p=!0,h=e.t2;case 46:e.prev=46,e.prev=47,d||null==v.return||v.return();case 49:if(e.prev=49,!p){e.next=52;break}throw h;case 52:return e.finish(49);case 53:return e.finish(46);case 54:case"end":return e.stop()}}),e,null,[[3,42,46,54],[13,30],[47,,49,53]])})));return function(n,t,r,o,a,i,l,c){return e.apply(this,arguments)}}(),S=function(e,n,t,r,o,a){var i=!1;return""===e&&(f.ZP.error("Please enter an Endpoint for PyJailBreak Server"),i=!0),""===n&&(f.ZP.error("Please select a Protocol for Target Server"),i=!0),""===t&&(f.ZP.error("Please enter a Domain for Target Server"),i=!0),"undefined"===typeof r&&(f.ZP.error("Please enter a Port for Target Server"),i=!0),0===o.length?(f.ZP.error("Please add at least one payload"),i=!0):0===a.length&&(f.ZP.error("Please select at least one payload"),i=!0),i},N=function(e,n){var t=n.id,r=n.severity;return e.map((function(e){return e.id===t?(0,c.Z)((0,l.Z)({},e),{result:r}):e}))},O=function(){var e=(0,u.Z)(x().mark((function e(){var n,t;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Math.floor(500*Math.random()+500),e.next=3,new Promise((function(e){return setTimeout(e,n)}));case 3:return t=_.slice(0,3)[Math.floor(3*Math.random())],e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=(0,y.v9)(j.fE),n=(0,y.v9)(m.$P),t=(0,y.v9)(j.Ev),o=(0,y.v9)(j.Jl),a=(0,y.v9)(j.RR),i=(0,y.v9)(g.S1),l=(0,y.v9)(g.rH),c=(0,y.I0)();return(0,r.jsxs)("div",{style:{margin:"1em"},children:[(0,r.jsx)(f.x7,{}),(0,r.jsx)(h.Z,{variant:"outlined",size:"large",endIcon:(0,r.jsx)(v.Z,{}),onClick:function(){S(e,t,o,a,i,l)||C(e,n,t,o,a,i,l,c)},sx:{width:"15em",height:"3em",boxShadow:"0 10px 25px 0 rgba(0, 0, 0, .5)",color:"#eee",backgroundColor:"#282b30",borderColor:"#eee","&:hover":{backgroundColor:"#353a40",borderColor:"#ddd"}},children:"Execute!"})]})},E=t(828),A=t(50657),z=t(37645),I=t(6514),M=t(55819),B=t(61903),J=t(93946),W=t(87109),D=t(78462),U=t(70891),R=t(46761),H=t(72428),F=t(13902),L=function(e){var n=(0,E.Z)(d.useState(""),2),t=n[0],o=n[1],a=(0,y.I0)(),i=(0,y.v9)(g.S1),u=(0,y.v9)(F.jG),p=(0,y.v9)(F.rd),x=(0,y.v9)(F.Vm),h=function(e){return"payload"===e?"Payload":"Unexpected Output"};return(0,r.jsxs)(A.Z,{open:u,onClose:function(){o(""),e.handleClose(p)},fullWidth:!0,maxWidth:"sm",children:[(0,r.jsxs)(z.Z,{children:["Change ",h(x)," #",p]}),(0,r.jsx)(I.Z,{children:(0,r.jsxs)(D.Z,{children:[i[p][x].map((function(e,n){return(0,r.jsx)(U.ZP,{children:(0,r.jsx)(B.Z,{label:"".concat(h(x)," ").concat(n),value:e,fullWidth:!0,variant:"standard",autoComplete:"off",onChange:function(e){var t=(0,s.Z)(i.slice(0,p)).concat([(0,c.Z)((0,l.Z)({},i[p]),{payload:(0,s.Z)(i[p][x].slice(0,n)).concat([e.target.value],(0,s.Z)(i[p][x].slice(n+1)))})],(0,s.Z)(i.slice(p+1)));a((0,g.A6)(t))},InputProps:{endAdornment:(0,r.jsx)(W.Z,{position:"end",children:(0,r.jsx)(J.Z,{edge:"end",onClick:function(){var e=(0,s.Z)(i.slice(0,p)).concat([(0,c.Z)((0,l.Z)({},i[p]),{payload:"payload"===x?(0,s.Z)(i[p].payload.slice(0,n)).concat((0,s.Z)(i[p].payload.slice(n+1))):i[p].payload,unexpected:"unexpected"===x?(0,s.Z)(i[p].unexpected.slice(0,n)).concat((0,s.Z)(i[p].unexpected.slice(n+1))):i[p].unexpected})],(0,s.Z)(i.slice(p+1)));a((0,g.A6)(e))},children:(0,r.jsx)(R.Z,{})})})}})},n)})),(0,r.jsx)(U.ZP,{children:(0,r.jsx)(B.Z,{fullWidth:!0,variant:"standard",autoComplete:"off",label:"Add new ".concat(h(x)),value:t,onChange:function(e){return o(e.target.value)},InputProps:{endAdornment:(0,r.jsx)(W.Z,{position:"end",children:(0,r.jsx)(J.Z,{edge:"end",onClick:function(){if(""!=t){var e=(0,s.Z)(i.slice(0,p)).concat([(0,c.Z)((0,l.Z)({},i[p]),{payload:"payload"===x?i[p].payload.concat([t]):i[p].payload,unexpected:"unexpected"===x?i[p].unexpected.concat([t]):i[p].unexpected})],(0,s.Z)(i.slice(p+1)));a((0,g.A6)(e)),o("")}},children:(0,r.jsx)(H.Z,{})})})}})})]})})]})},q=function(e){var n,t,o=(0,y.I0)(),a=(0,y.v9)(g.S1),i=(0,y.v9)(F.rL),l=(0,y.v9)(F.rd),c={maxWidth:"600px",m:"1em 2px 0.5em 2px"};return(0,r.jsxs)(A.Z,{open:i,onClose:function(){e.handleClose(l)},fullWidth:!0,maxWidth:"sm",sx:{textAlign:"center"},children:[(0,r.jsxs)(z.Z,{children:["Change Options #",l]}),(0,r.jsxs)(I.Z,{children:[(0,r.jsx)("h3",{children:"Payload Options"}),(0,r.jsxs)(B.Z,{select:!0,variant:"standard",label:"Payload Options",value:null!==(n=a[l].payload_option)&&void 0!==n?n:"none",onChange:function(e){return o((0,g.A6)(G(a,l,e.target.value)))},sx:Object.assign({},c,{width:"25%"}),children:[(0,r.jsx)(M.Z,{value:"none",children:"None"}),(0,r.jsx)(M.Z,{value:"eval",children:"eval"})]}),(0,r.jsx)("h3",{children:"Unexpected Options"}),(0,r.jsxs)(B.Z,{select:!0,variant:"standard",label:"Unexpected Options",value:null!==(t=a[l].unexpected_option)&&void 0!==t?t:"none",onChange:function(e){return o((0,g.A6)(X(a,l,e.target.value)))},sx:Object.assign({},c,{width:"25%"}),children:[(0,r.jsx)(M.Z,{value:"none",children:"None"}),(0,r.jsx)(M.Z,{value:"eval",children:"eval"}),(0,r.jsx)(M.Z,{value:"regex",children:"regex"})]})]})]})},G=function(e,n,t){return(0,s.Z)(e.slice(0,n)).concat([(0,c.Z)((0,l.Z)({},e[n]),{payload_option:"none"==t?void 0:t})],(0,s.Z)(e.slice(n+1)))},X=function(e,n,t){return(0,s.Z)(e.slice(0,n)).concat([(0,c.Z)((0,l.Z)({},e[n]),{unexpected_option:t})],(0,s.Z)(e.slice(n+1)))},$=t(87357),K=t(53457),Y=t(50480),Q=t(72852),V=t(34386),ee=t(87918),ne=t(75860),te=t(78878),re=t(62026),oe=t(82989),ae=t(53298),ie=t(42056),le=t(95113),ce=t(52725),se=t.n(ce),de=function(e){return{executing:{priority:0,chip:(0,r.jsx)(ee.Z,{variant:"outlined",color:"info",label:e,icon:(0,r.jsx)(te.Z,{className:se().rotateIcon})})},safe:{priority:1,chip:(0,r.jsx)(ee.Z,{variant:"outlined",color:"success",label:e,icon:(0,r.jsx)(re.Z,{}),sx:{fontWeight:"bold",borderWidth:"2px"}})},warning:{priority:2,chip:(0,r.jsx)(ee.Z,{variant:"outlined",color:"warning",label:e,icon:(0,r.jsx)(oe.Z,{})})},critical:{priority:3,chip:(0,r.jsx)(ee.Z,{variant:"outlined",color:"error",label:e,icon:(0,r.jsx)(ae.Z,{})})},unknown:{priority:4,chip:(0,r.jsx)(ee.Z,{variant:"outlined",color:"error",label:"Server Error",icon:(0,r.jsx)(ie.Z,{})})}}},ue=function(e){var n=de(e);return"undefined"!==typeof e&&e in n?n[e]:{priority:5,chip:(0,r.jsx)(ee.Z,{variant:"outlined",color:"info",label:"Not Finished",icon:(0,r.jsx)(le.Z,{})})}},pe=function(e,n){if("undefined"===typeof e)return 1;if("undefined"===typeof n)return-1;var t=de(e)[e].priority,r=de(n)[n].priority;return t===r?0:t<r?-1:t>r?1:void 0},xe=t(34588),he=t.n(xe),ve=t(82670),fe=t(52300),je=function(e){return"string"===typeof e?e:(0,ve.Z)(e,ArrayBuffer)?String.fromCharCode.apply("",new Uint16Array(e)):void 0},ge=t(57091),me=t(49718),ye=function(){var e=(0,y.I0)(),n=(0,y.v9)(g.S1),t=function(n){e((0,g.A6)(n))};return(0,r.jsxs)($.Z,{sx:{p:1,display:"flex"},children:[(0,r.jsx)(V.Z,{title:"Upload Payloads",children:(0,r.jsxs)(h.Z,{component:"label",sx:{color:"#eee"},children:[(0,r.jsx)(ge.Z,{}),(0,r.jsx)("input",{type:"file",hidden:!0,accept:".json",onChange:function(e){!function(e,n){if(e.target.files&&e.target.files[0]){var t=e.target.files[0],r=new FileReader;r.onload=function(e){if(je(e.target.result).startsWith("data:application/json;base64,")){var t=fe.DS.decode(je(e.target.result).split(",")[1]),r=[{}];try{r=JSON.parse(t)}catch(i){return void f.ZP.error("json\u306e\u30d1\u30fc\u30b9\u306b\u5931\u6557\u3057\u307e\u3057\u305f")}try{var o=r.map((function(e,n){return(0,l.Z)({id:n},e)}));console.log(o);var a=k.parse(o);n(a)}catch(c){console.error(c),f.ZP.error("\u30da\u30a4\u30ed\u30fc\u30c9\u30d5\u30a1\u30a4\u30eb\u306e\u5f62\u5f0f\u304c\u4e0d\u6b63\u3067\u3059")}}else f.ZP.error("json\u5f62\u5f0f\u306e\u30d5\u30a1\u30a4\u30eb\u3067\u306f\u3042\u308a\u307e\u305b\u3093")},r.readAsDataURL(t)}else f.ZP.error("Unexpected Error!")}(e,t),e.target.value=""}})]})}),(0,r.jsx)(V.Z,{title:"Download Payloads",children:(0,r.jsx)(h.Z,{component:"label",sx:{color:"#eee"},onClick:function(){!function(e,n){var t=new Blob([JSON.stringify(e,null,"  ")],{type:"application/json"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,o.click(),URL.revokeObjectURL(r)}(n.map((function(e){return{payload:e.payload,unexpected:e.unexpected,severity:e.severity,payload_option:e.payload_option,unexpected_option:e.unexpected_option}})),"payloads.json")},children:(0,r.jsx)(me.Z,{})})})]})},Ze=function(){var e={margin:"0 2px",p:"0 5px","& .MuiChip-label":{color:"#ccc"}};return[{field:"payload",headerName:"Payloads",flex:1,renderCell:function(n){return(0,r.jsx)("span",{className:he().scroll,style:{padding:"2px"},children:n.row.payload.map((function(n,t){return(0,r.jsx)(ee.Z,{variant:"outlined",label:n,sx:e},t)}))})}},{field:"unexpected",headerName:"Unexpected Output",flex:1,renderCell:function(n){return(0,r.jsx)("span",{className:he().scroll,style:{padding:"2px"},children:n.row.unexpected.map((function(n,t){return(0,r.jsx)(ee.Z,{variant:"outlined",label:n,sx:e},t)}))})}},{field:"severity",headerName:"Expected Severity",headerAlign:"center",flex:1,maxWidth:170,align:"center",renderCell:function(e){return ue(e.row.severity).chip},sortComparator:pe},{field:"result",headerName:"Scan Result",headerAlign:"center",flex:1,maxWidth:170,align:"center",renderCell:function(e){return ue(e.row.result).chip},sortComparator:pe},{field:"options",headerName:"Options",flex:1,maxWidth:170,renderCell:function(n){return(0,r.jsx)("span",{className:he().scroll,style:{padding:"2px"},children:[n.row.payload_option,n.row.unexpected_option].flatMap((function(n,t){return"undefined"===typeof n?[]:(0,r.jsx)(ee.Z,{variant:"outlined",label:"".concat(0===t?"payload":"unexpected",":").concat(n),sx:e},t)}))})}}]},_e=function(e){var n,t,o,a,i,l,c={color:"#aaa",margin:"3px 0 16px 0",fontSize:"0.75rem"},s={socket:"nc ".concat(e.vulnDomain," ").concat(null!==(n=e.vulnPort)&&void 0!==n?n:""),http_get:"curl http://".concat(e.vulnDomain,":").concat(null!==(t=e.vulnPort)&&void 0!==t?t:""),http_post:"curl -X POST http://".concat(e.vulnDomain,":").concat(null!==(o=e.vulnPort)&&void 0!==o?o:""),https_get:"curl https://".concat(e.vulnDomain,":").concat(null!==(a=e.vulnPort)&&void 0!==a?a:""),https_post:"curl -X POST https://".concat(e.vulnDomain,":").concat(null!==(i=e.vulnPort)&&void 0!==i?i:"")};return""===e.vulnDomain||""===e.protocol?(0,r.jsx)("p",{style:c}):(0,r.jsx)("p",{style:c,children:"Like this: ".concat(null!==(l=s[e.protocol])&&void 0!==l?l:"error")})},be=function(){var e=(0,y.I0)(),n=(0,y.v9)(j.fE),t=(0,y.v9)(m.$P),o=(0,y.v9)(j.Ev),a=(0,y.v9)(j.Jl),i=(0,y.v9)(j.RR),d=(0,y.v9)(g.S1),u={maxWidth:"600px",m:"1em 2px 0.5em 2px","& label":{color:"#eee"},"& .MuiInputBase-input":{color:"#ccc"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#ccc"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"#ddd"}}},p={minWidth:120,"& .MuiFormControl-root":{mb:0}},x=function(n,t,r){"payload"==n||"unexpected"==n?(e((0,F.Pl)(!0)),e((0,F.PM)(r))):"options"==n&&e((0,F._t)(!0)),e((0,F.mn)(t))};return(0,r.jsxs)("div",{className:he().body,children:[(0,r.jsxs)($.Z,{sx:{display:"flex",justifyContent:"center"},children:[(0,r.jsx)("div",{style:{width:"100%",maxWidth:"300px"},children:(0,r.jsx)(B.Z,{required:!0,label:"Endpoint for PyJailBreak Server",variant:"outlined",placeholder:"https://localhost:8080",value:n,onChange:function(n){e((0,j.$C)(n.target.value))},sx:Object.assign({},u,{width:"100%"})})}),(0,r.jsxs)("div",{style:{width:"100%"},children:[(0,r.jsxs)(B.Z,{select:!0,variant:"outlined",label:"Protocol",value:o,onChange:function(n){return e((0,j.pM)(n.target.value))},sx:Object.assign({},u,{width:"25%"}),children:[(0,r.jsx)(M.Z,{value:"socket",children:"Socket"}),(0,r.jsx)(M.Z,{value:"http_get",children:"HTTP (GET)"}),(0,r.jsx)(M.Z,{value:"http_post",children:"HTTP (POST)"}),(0,r.jsx)(M.Z,{value:"https_get",children:"HTTPS (GET)"}),(0,r.jsx)(M.Z,{value:"https_post",children:"HTTPS (POST)"})]}),(0,r.jsx)(B.Z,{required:!0,label:"Domain for Target Server",variant:"outlined",placeholder:"this.is.vulnable.server",value:a,onChange:function(n){e((0,j.CY)(n.target.value))},sx:Object.assign({},u,p,{width:"40%"})}),(0,r.jsx)(B.Z,{required:!0,label:"Port for Target Server",variant:"outlined",placeholder:"4000",value:i,onChange:function(n){var t=n.target.value;if(""===t)e((0,j.xU)(void 0));else{var r=Math.min(parseInt(t.substring(0,5).replace(/[^0-9]/g,"")),65536);e((0,j.xU)(r))}},sx:Object.assign({},u,p,{width:"20%"})}),(0,r.jsx)(_e,{protocol:o,vulnDomain:a,vulnPort:i})]})]}),(0,r.jsx)("div",{style:{height:400,width:"100%"},children:(0,r.jsx)(ne._,{rows:d,columns:Ze(),checkboxSelection:!0,disableSelectionOnClick:!0,onSelectionModelChange:function(n){return e((0,g.RU)(n))},components:{Footer:function(){return(0,r.jsx)(ye,{})}},sx:{color:"#eee","& .MuiDataGrid-cell":{padding:"2px"}},onCellClick:function(e){"payload"===e.field||"unexpected"===e.field?x(e.field,e.id,e.field):"options"===e.field&&x(e.field,e.id)}})}),(0,r.jsxs)(K.Z,{children:[(0,r.jsx)(T,{}),(0,r.jsx)(Y.Z,{control:(0,r.jsx)(Q.Z,{defaultChecked:!0}),label:(0,r.jsxs)(r.Fragment,{children:["Emulate Mode",(0,r.jsx)(V.Z,{title:"\u30b5\u30fc\u30d0\u3078\u5b9f\u969b\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u9001\u3089\u308c\u305a\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u9001\u3089\u308c\u305f\u6642\u306eUI\u3092\u30a8\u30df\u30e5\u30ec\u30fc\u30c8\u3059\u308b\u30e2\u30fc\u30c9\u3067\u3059",children:(0,r.jsx)(le.Z,{sx:{fontSize:"1em",ml:"2px"}})})]}),sx:{m:"0 auto","& .MuiTypography-root":{color:"#ccc"}},checked:t,onChange:function(n){return e((0,m.cN)(n.target.checked))}})]}),(0,r.jsx)(L,{handleClose:function(n){e((0,F.Pl)(!1));var t=(0,s.Z)(d.slice(0,n)).concat([(0,c.Z)((0,l.Z)({},d[n]),{payload:d[n].payload.filter((function(e){return""!==e}))})],(0,s.Z)(d.slice(n+1)));e((0,g.A6)(t))}}),(0,r.jsx)(q,{handleClose:function(n){e((0,F._t)(!1))}})]})},Pe=function(){return(0,r.jsxs)(o.A,{children:[(0,r.jsxs)("div",{className:i().description_section,children:[(0,r.jsx)("div",{className:i().logo,children:(0,r.jsx)("img",{src:"/PyJailBreak/PyJailBreak.png",alt:"title logo"})}),(0,r.jsxs)("div",{className:i().description,children:[(0,r.jsx)("img",{src:"/PyJailBreak/logo_horizontal_cleanness.png",alt:"PyJailBreak",className:i().logo_hirizontal})," ","is a ",(0,r.jsx)("br",{}),(0,r.jsx)("b",{children:"Black box automated vulnerability scanning tool"}),(0,r.jsx)("br",{}),"for Python socket servers."]})]}),(0,r.jsx)("div",{children:(0,r.jsx)(be,{})})]})}},43068:function(e){e.exports={navbar:"Navigator_navbar__1D91M",logo:"Navigator_logo__shimR",button:"Navigator_button__W2T1X",icon:"Navigator_icon__pG1Z1",left:"Navigator_left__6lj_E",right:"Navigator_right__OcvPs"}},34588:function(e){e.exports={body:"RequestForm_body__80_lQ",scroll:"RequestForm_scroll__5sdD0"}},52725:function(e){e.exports={rotateIcon:"statusChip_rotateIcon__hgZYP",spin:"statusChip_spin__g7Kih"}},214:function(e){e.exports={logo:"Home_logo__27_tb",logo_hirizontal:"Home_logo_hirizontal__KeDOO",description_section:"Home_description_section__SySiq",description:"Home_description__41Owk"}}},function(e){e.O(0,[264,234,444,774,888,179],(function(){return n=48312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);