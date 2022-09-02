(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(76686)}])},48204:function(e,n,r){"use strict";r.d(n,{A:function(){return v}});var t=r(85893),o=r(9008),a=r.n(o),i=function(e){var n=e.title,r=e.description;return(0,t.jsxs)(a(),{children:[(0,t.jsx)("title",{children:n||"PyJailBreak"}),(0,t.jsx)("meta",{name:"description",content:r||"Black box automated vulnerability scanning tool for Python socket servers"}),(0,t.jsx)("link",{rel:"icon",href:"/PyJailBreak/favicon.ico"}),(0,t.jsx)("meta",{name:"og:title",content:n}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,t.jsx)("meta",{property:"og:image",content:"https://pbs.twimg.com/card_img/1551139193656844288/N9ApjUm4?format=jpg&name=orig"})]})},l=r(41664),s=r.n(l),c=r(26447),d=r(83321),u=r(54970),p=r(25449),x=r(43068),f=r.n(x),h=function(){return(0,t.jsxs)(c.Z,{spacing:1,direction:"row",className:f().navbar,children:[(0,t.jsxs)("span",{className:f().left,children:[(0,t.jsx)(s(),{href:"/",passHref:!0,children:(0,t.jsx)(d.Z,{variant:"text",className:f().button,children:(0,t.jsx)("img",{src:"/PyJailBreak/logo_horizontal_cleanness.png",alt:"top page",className:f().logo})})}),(0,t.jsx)(s(),{href:"/openapi",passHref:!0,children:(0,t.jsxs)(d.Z,{variant:"text",className:f().button,children:[(0,t.jsx)(u.Z,{className:f().icon})," API"]})})]}),(0,t.jsx)("span",{className:f().right,children:(0,t.jsx)("a",{href:"https://github.com/SecHack365-Fans/PyJailBreak",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(d.Z,{variant:"text",className:f().button,children:(0,t.jsx)(p.Z,{className:f().icon})})})})]})},v=function(e){var n=e.children,r=e.title,o=e.description,a=e.styles;return(0,t.jsxs)("main",{className:a,children:[(0,t.jsx)(i,{title:r,description:o}),(0,t.jsx)(h,{}),(0,t.jsx)("div",{style:{padding:"15px"},children:n})]})}},76686:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return fe}});var t=r(85893),o=r(48204),a=r(214),i=r.n(a),l=r(41799),s=r(69396),c=r(29815),d=r(67294),u=r(47568),p=r(34051),x=r.n(p),f=r(83321),h=r(26307),v=r(86501),g=r(584),y=r(97337),j=r(9473),m=function(){var e=(0,u.Z)(x().mark((function e(n,r,t,o,a){var i,l,s,c,d,u,p;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.ZP.success("Scan Started!"),i=!0,l=!1,s=void 0,e.prev=2,c=o[Symbol.iterator]();case 4:if(i=(d=c.next()).done){e.next=18;break}if(u=d.value,console.log("selectedId: ",u),"undefined"!==typeof(p=t.find((function(e){return e.id===u})))){e.next=10;break}return e.abrupt("continue",15);case 10:return t=_(t,{id:u,severity:"executing"}),a((0,y.A6)(t)),e.next=15,fetch("".concat(n,"/scan"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({payload:p.payload,unexpected:p.unexpected,severity:p.severity,endpoint:{domain:r.split(":")[0],port:r.split(":")[1]}})}).then((function(e){return e.json()})).then((function(e){console.log("API response: ",e);var n={id:u,severity:e.severity};t=_(t,n),a((0,y.A6)(t))}));case 15:i=!0,e.next=4;break;case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(2),l=!0,s=e.t0;case 24:e.prev=24,e.prev=25,i||null==c.return||c.return();case 27:if(e.prev=27,!l){e.next=30;break}throw s;case 30:return e.finish(27);case 31:return e.finish(24);case 32:case"end":return e.stop()}}),e,null,[[2,20,24,32],[25,,27,31]])})));return function(n,r,t,o,a){return e.apply(this,arguments)}}(),Z=function(e,n,r,t){var o=!1;return""===e&&(v.ZP.error("Please enter an Endpoint for PyJailBreak Server"),o=!0),""===n&&(v.ZP.error("Please enter an Endpoint for Target Server"),o=!0),0===r.length?(v.ZP.error("Please add at least one payload"),o=!0):0===t.length&&(v.ZP.error("Please select at least one payload"),o=!0),o},_=function(e,n){var r=n.id,t=n.severity;return e.map((function(e){return e.id===r?(0,s.Z)((0,l.Z)({},e),{result:t}):e}))},b=function(){var e=(0,j.v9)(g.fE),n=(0,j.v9)(g.WV),r=(0,j.v9)(y.S1),o=(0,j.v9)(y.rH),a=(0,j.I0)();return(0,t.jsxs)("div",{style:{margin:"1em"},children:[(0,t.jsx)(v.x7,{}),(0,t.jsx)(f.Z,{variant:"outlined",size:"large",endIcon:(0,t.jsx)(h.Z,{}),onClick:function(){Z(e,n,r,o)||m(e,n,r,o,a)},sx:{width:"15em",height:"3em",boxShadow:"0 10px 25px 0 rgba(0, 0, 0, .5)",color:"#eee",backgroundColor:"#282b30",borderColor:"#eee","&:hover":{backgroundColor:"#353a40",borderColor:"#ddd"}},children:"Execute!"})]})},k=r(828),C=r(50657),N=r(37645),P=r(6514),w=r(61903),S=r(93946),A=r(87109),E=r(78462),O=r(70891),I=r(46761),B=r(72428),z=r(79746),J=function(e){var n=(0,k.Z)(d.useState(""),2),r=n[0],o=n[1],a=(0,j.I0)(),i=(0,j.v9)(y.S1),u=(0,j.v9)(z.eM),p=(0,j.v9)(z.rd),x=(0,j.v9)(z.Vm),f=function(e){return"payload"===e?"Payload":"Unexpected Output"};return(0,t.jsxs)(C.Z,{open:u,onClose:function(){o(""),e.handleClose(p)},fullWidth:!0,maxWidth:"sm",children:[(0,t.jsxs)(N.Z,{children:["Change ",f(x)," #",p]}),(0,t.jsx)(P.Z,{children:(0,t.jsxs)(E.Z,{children:[i[p][x].map((function(e,n){return(0,t.jsx)(O.ZP,{children:(0,t.jsx)(w.Z,{label:"".concat(f(x)," ").concat(n),value:e,fullWidth:!0,variant:"standard",autoComplete:"off",onChange:function(e){var r=(0,c.Z)(i.slice(0,p)).concat([(0,s.Z)((0,l.Z)({},i[p]),{payload:(0,c.Z)(i[p][x].slice(0,n)).concat([e.target.value],(0,c.Z)(i[p][x].slice(n+1)))})],(0,c.Z)(i.slice(p+1)));a((0,y.A6)(r))},InputProps:{endAdornment:(0,t.jsx)(A.Z,{position:"end",children:(0,t.jsx)(S.Z,{edge:"end",onClick:function(){var e=(0,c.Z)(i.slice(0,p)).concat([(0,s.Z)((0,l.Z)({},i[p]),{payload:"payload"===x?(0,c.Z)(i[p].payload.slice(0,n)).concat((0,c.Z)(i[p].payload.slice(n+1))):i[p].payload,unexpected:"unexpected"===x?(0,c.Z)(i[p].unexpected.slice(0,n)).concat((0,c.Z)(i[p].unexpected.slice(n+1))):i[p].unexpected})],(0,c.Z)(i.slice(p+1)));a((0,y.A6)(e))},children:(0,t.jsx)(I.Z,{})})})}})},n)})),(0,t.jsx)(O.ZP,{children:(0,t.jsx)(w.Z,{fullWidth:!0,variant:"standard",autoComplete:"off",label:"Add new ".concat(f(x)),value:r,onChange:function(e){return o(e.target.value)},InputProps:{endAdornment:(0,t.jsx)(A.Z,{position:"end",children:(0,t.jsx)(S.Z,{edge:"end",onClick:function(){if(""!=r){var e=(0,c.Z)(i.slice(0,p)).concat([(0,s.Z)((0,l.Z)({},i[p]),{payload:"payload"===x?i[p].payload.concat([r]):i[p].payload,unexpected:"unexpected"===x?i[p].unexpected.concat([r]):i[p].unexpected})],(0,c.Z)(i.slice(p+1)));a((0,y.A6)(e)),o("")}},children:(0,t.jsx)(B.Z,{})})})}})})]})})]})},R=r(87918),M=r(32220),U=r(78878),W=r(62026),D=r(82989),H=r(53298),T=r(42056),F=r(95113),q=r(52725),L=r.n(q),X=function(e){return{executing:{priority:0,chip:(0,t.jsx)(R.Z,{variant:"outlined",color:"info",label:e,icon:(0,t.jsx)(U.Z,{className:L().rotateIcon})})},safe:{priority:1,chip:(0,t.jsx)(R.Z,{variant:"outlined",color:"success",label:e,icon:(0,t.jsx)(W.Z,{}),sx:{fontWeight:"bold",borderWidth:"2px"}})},warning:{priority:2,chip:(0,t.jsx)(R.Z,{variant:"outlined",color:"warning",label:e,icon:(0,t.jsx)(D.Z,{})})},critical:{priority:3,chip:(0,t.jsx)(R.Z,{variant:"outlined",color:"error",label:e,icon:(0,t.jsx)(H.Z,{})})},serverError:{priority:4,chip:(0,t.jsx)(R.Z,{variant:"outlined",color:"error",label:"Server Error",icon:(0,t.jsx)(T.Z,{})})}}},V=function(e){var n=X(e);return"undefined"!==typeof e&&e in n?n[e]:{priority:5,chip:(0,t.jsx)(R.Z,{variant:"outlined",color:"info",label:"Not Finished",icon:(0,t.jsx)(F.Z,{})})}},G=function(e,n){if("undefined"===typeof e)return 1;if("undefined"===typeof n)return-1;var r=X(e)[e].priority,t=X(n)[n].priority;return r===t?0:r<t?-1:r>t?1:void 0},K=r(34588),Q=r.n(K),Y=r(82670),$=r(1604),ee=$.z.enum(["safe","warning","critical","executing","serverError"]),ne=$.z.object({payload:$.z.string().array(),unexpected:$.z.string().array(),severity:ee,result:ee.optional()}),re=$.z.array(ne.and($.z.object({id:$.z.number()}))),te=r(52300),oe=function(e){return"string"===typeof e?e:(0,Y.Z)(e,ArrayBuffer)?String.fromCharCode.apply("",new Uint16Array(e)):void 0},ae=r(87357),ie=r(34386),le=r(57091),se=r(49718),ce=r(51209),de=r(17627),ue=function(e){var n=(0,k.Z)(d.useState(!0),2),r=n[0],o=n[1],a=(0,j.v9)(de.Y9),i=(0,j.I0)(),s=function(e){i((0,de.yA)(e)),setTimeout((function(){o(!1)}),500)};return(0,t.jsxs)(ae.Z,{sx:{p:1,display:"flex"},children:[(0,t.jsx)(ie.Z,{title:"Upload Payloads",children:(0,t.jsxs)(f.Z,{component:"label",sx:{color:"#eee"},children:[(0,t.jsx)(le.Z,{}),(0,t.jsx)("input",{type:"file",hidden:!0,accept:".json",onChange:function(e){!function(e,n,r){if(r(null),e.target.files&&e.target.files[0]){var t=e.target.files[0],o=new FileReader;o.onload=function(e){if(oe(e.target.result).startsWith("data:application/json;base64,")){var t=te.DS.decode(oe(e.target.result).split(",")[1]);console.log("Read: ",t);var o=[{}];try{o=JSON.parse(t)}catch(s){return void r("json\u306e\u30d1\u30fc\u30b9\u306b\u5931\u6557\u3057\u307e\u3057\u305f")}try{var a=o.map((function(e,n){return(0,l.Z)({id:n},e)})),i=re.parse(a);n(i)}catch(c){r("\u30da\u30a4\u30ed\u30fc\u30c9\u30d5\u30a1\u30a4\u30eb\u306e\u5f62\u5f0f\u304c\u4e0d\u6b63\u3067\u3059")}}else r("json\u5f62\u5f0f\u306e\u30d5\u30a1\u30a4\u30eb\u3067\u306f\u3042\u308a\u307e\u305b\u3093")},o.readAsDataURL(t)}else r("Unexpected Error!")}(e,y.A6,s),e.target.value=""}})]})}),(0,t.jsx)(ie.Z,{title:"Download Payloads",children:(0,t.jsx)(f.Z,{component:"label",sx:{color:"#eee"},onClick:function(){!function(e,n){var r=new Blob([JSON.stringify(e,null,"  ")],{type:"application/json"}),t=URL.createObjectURL(r),o=document.createElement("a");o.href=t,o.download=n,o.click(),URL.revokeObjectURL(t)}(e.map((function(e){return{payload:e.payload,expected:e.unexpected,severity:e.severity}})),"payloads.json")},children:(0,t.jsx)(se.Z,{})})}),a&&(0,t.jsxs)(ce.II,{active:r,fixed:!0,className:Q().errMsg,children:["Error: ",a]})]})},pe=function(e){var n={margin:"0 2px",p:"0 5px","& .MuiChip-label":{color:"#ccc",overflowX:"scroll",textOverflow:"clip",scrollbarWidth:"none",msOverflowStyle:"none","&::-webkit-scrollbar":{display:"none"}}};return[{field:"payload",headerName:"Payload",flex:1,renderCell:function(e){return(0,t.jsx)("span",{className:Q().scroll,style:{padding:"2px"},children:e.row.payload.map((function(e,r){return(0,t.jsx)(R.Z,{variant:"outlined",label:e,sx:n},r)}))})}},{field:"unexpected",headerName:"Unexpected Output",flex:1,renderCell:function(e){return(0,t.jsx)("span",{className:Q().scroll,style:{padding:"2px"},children:e.row.unexpected.map((function(e,r){return(0,t.jsx)(R.Z,{variant:"outlined",label:e,sx:n},r)}))})}},{field:"severity",headerName:"Expected Severity",headerAlign:"center",flex:1,align:"center",renderCell:function(e){return V(e.row.severity).chip},sortComparator:G},{field:"result",headerName:"Scan Result",headerAlign:"center",flex:1,align:"center",renderCell:function(e){return V(e.row.result).chip},sortComparator:G}]},xe=function(){var e=(0,j.I0)(),n=(0,j.v9)(g.fE),r=(0,j.v9)(g.WV),o=(0,j.v9)(y.S1),a={width:"40%",maxWidth:"600px",m:"1em 2px 1em 2px","& label":{color:"#eee"},"& .MuiInputBase-input":{color:"#ccc"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#ccc"},"&:hover fieldset":{borderColor:"#ddd"}}},i=function(n,r){e((0,z.A_)(!0)),e((0,z.mn)(n)),e((0,z.PM)(r))};return(0,t.jsxs)("div",{className:Q().body,children:[(0,t.jsx)(w.Z,{required:!0,label:"Endpoint for PyJailBreak Server",variant:"outlined",placeholder:"https://localhost:8080",value:n,onChange:function(n){e((0,g.$C)(n.target.value))},sx:a}),(0,t.jsx)(w.Z,{required:!0,label:"Endpoint for Target Server",variant:"outlined",placeholder:"this.is.vulnable.server:8000",value:r,onChange:function(n){e((0,g.D7)(n.target.value))},sx:a}),(0,t.jsx)("div",{style:{height:400,width:"100%"},children:(0,t.jsx)(M._,{rows:o,columns:pe(i),checkboxSelection:!0,disableSelectionOnClick:!0,onSelectionModelChange:function(n){return e((0,y.RU)(n))},components:{Footer:function(){return ue(o)}},sx:{color:"#eee","& .MuiDataGrid-cell":{padding:"2px"}},onCellClick:function(e){"payload"!==e.field&&"unexpected"!==e.field||i(e.id,e.field)}})}),(0,t.jsx)(b,{}),(0,t.jsx)(J,{handleClose:function(n){e((0,z.A_)(!1));var r=(0,c.Z)(o.slice(0,n)).concat([(0,s.Z)((0,l.Z)({},o[n]),{payload:o[n].payload.filter((function(e){return""!==e}))})],(0,c.Z)(o.slice(n+1)));e((0,y.A6)(r))}})]})},fe=function(){return(0,t.jsxs)(o.A,{children:[(0,t.jsxs)("div",{className:i().description_section,children:[(0,t.jsx)("div",{className:i().logo,children:(0,t.jsx)("img",{src:"/PyJailBreak/PyJailBreak.png",alt:"title logo"})}),(0,t.jsxs)("div",{className:i().description,children:[(0,t.jsx)("img",{src:"/PyJailBreak/logo_horizontal_cleanness.png",alt:"PyJailBreak",className:i().logo_hirizontal})," ","is a ",(0,t.jsx)("br",{}),(0,t.jsx)("b",{children:"Black box automated vulnerability scanning tool"}),(0,t.jsx)("br",{}),"for Python socket servers."]})]}),(0,t.jsx)("div",{children:(0,t.jsx)(xe,{})})]})}},43068:function(e){e.exports={navbar:"Navigator_navbar__1D91M",logo:"Navigator_logo__shimR",button:"Navigator_button__W2T1X",icon:"Navigator_icon__pG1Z1",left:"Navigator_left__6lj_E",right:"Navigator_right__OcvPs"}},34588:function(e){e.exports={body:"RequestForm_body__80_lQ",scroll:"RequestForm_scroll__5sdD0",errMsg:"RequestForm_errMsg__MpQL_"}},52725:function(e){e.exports={rotateIcon:"statusChip_rotateIcon__hgZYP",spin:"statusChip_spin__g7Kih"}},214:function(e){e.exports={logo:"Home_logo__27_tb",logo_hirizontal:"Home_logo_hirizontal__KeDOO",description_section:"Home_description_section__SySiq",description:"Home_description__41Owk"}}},function(e){e.O(0,[264,234,912,774,888,179],(function(){return n=48312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);