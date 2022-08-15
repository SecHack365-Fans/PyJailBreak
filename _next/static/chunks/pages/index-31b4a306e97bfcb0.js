(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(82256)}])},48204:function(e,r,t){"use strict";t.d(r,{A:function(){return v}});var n=t(85893),i=t(9008),o=t.n(i),a=function(e){var r=e.title,t=e.description;return(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:r||"PyJailBreak"}),(0,n.jsx)("meta",{name:"description",content:t||"Black box automated vulnerability scanning tool for Python socket servers"}),(0,n.jsx)("link",{rel:"icon",href:"/PyJailBreak/favicon.ico"}),(0,n.jsx)("meta",{name:"og:title",content:r}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{property:"og:image",content:"https://pbs.twimg.com/card_img/1551139193656844288/N9ApjUm4?format=jpg&name=orig"})]})},s=t(41664),c=t.n(s),l=t(26447),d=t(83321),u=t(54970),p=t(25449),f=t(43068),x=t.n(f),h=function(){return(0,n.jsxs)(l.Z,{spacing:1,direction:"row",className:x().navbar,children:[(0,n.jsxs)("span",{className:x().left,children:[(0,n.jsx)(c(),{href:"/",passHref:!0,children:(0,n.jsx)(d.Z,{variant:"text",className:x().button,children:(0,n.jsx)("img",{src:"/PyJailBreak/logo_horizontal_cleanness.png",alt:"top page",className:x().logo})})}),(0,n.jsx)(c(),{href:"/openapi",passHref:!0,children:(0,n.jsxs)(d.Z,{variant:"text",className:x().button,children:[(0,n.jsx)(u.Z,{className:x().icon})," API"]})})]}),(0,n.jsx)("span",{className:x().right,children:(0,n.jsx)("a",{href:"https://github.com/SecHack365-Fans/PyJailBreak",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(d.Z,{variant:"text",className:x().button,children:(0,n.jsx)(p.Z,{className:x().icon})})})})]})},v=function(e){var r=e.children,t=e.title,i=e.description,o=e.styles;return(0,n.jsxs)("main",{className:o,children:[(0,n.jsx)(a,{title:t,description:i}),(0,n.jsx)(h,{}),(0,n.jsx)("div",{style:{padding:"15px"},children:r})]})}},82256:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return $}});var n=t(85893),i=t(48204),o=t(214),a=t.n(o),s=t(70603),c=t(67294),l=t(82670),d=t(41799),u=t(1604),p=u.z.enum(["safe","warning","critical","executing"]).optional(),f=u.z.object({payload:u.z.string(),expected:u.z.string(),severity:p}),x=u.z.array(f.merge(u.z.object({id:u.z.number()}))),h=t(52300),v=function(e){return"string"===typeof e?e:(0,l.Z)(e,ArrayBuffer)?String.fromCharCode.apply("",new Uint16Array(e)):void 0},g=t(47568),m=t(69396),j=t(34051),_=t.n(j),y=t(83321),b=t(26307),Z=t(86501),N=t(584),k=t(97337),w=t(9473),P=(function(){var e=(0,g.Z)(_().mark((function e(r,t,n,i,o,a){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z.ZP.success("Attack started"),e.next=3,o();case 3:a(1);case 4:case"end":return e.stop()}}),e)})))}(),function(e,r,t,n){var i=!1;return""===e&&(Z.ZP.error("Please enter an Endpoint for PyJailBreak Server"),i=!0),""===r&&(Z.ZP.error("Please enter an Endpoint for Target Server"),i=!0),0===t.length?(Z.ZP.error("Please add at least one payload"),i=!0):0===n.length&&(Z.ZP.error("Please select at least one payload"),i=!0),i}),C=function(e,r){return e.map((function(e){return e.id in r?{id:e.id,payload:e.payload,expected:e.expected,severity:void 0}:e}))},S=function(e,r){var t=r.id,n=r.severity;return e.map((function(e){return e.id===t?(0,m.Z)((0,d.Z)({},e),{severity:n}):e}))},E=function(){var e=(0,w.v9)(N.fE),r=(0,w.v9)(N.WV),t=(0,w.v9)(k.S1),i=(0,w.v9)(k.rH),o=(0,w.I0)();(function(){var e=(0,g.Z)(_().mark((function e(){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o((0,k.A6)(C(t,i)));case 2:case"end":return e.stop()}}),e)})))})(),function(){var e=(0,g.Z)(_().mark((function e(r){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o((0,k.A6)(S(t,{id:r,severity:"executing"})));case 2:case"end":return e.stop()}}),e)})))}();return(0,n.jsxs)("div",{style:{margin:"1em"},children:[(0,n.jsx)(Z.x7,{}),(0,n.jsx)(y.Z,{variant:"outlined",size:"large",endIcon:(0,n.jsx)(b.Z,{}),onClick:(0,g.Z)(_().mark((function n(){var a;return _().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(P(e,r,t,i)){n.next=5;break}return a=C(t,i),n.next=4,o((0,k.A6)(a));case 4:setInterval((function(){var e=function(e,r){return Math.floor(Math.random()*(r-e+1)+e)},r=e(0,a.length-1),t=function(){switch(a[r].severity){case"executing":return e(0,1)?"safe":"critical";case void 0:return"executing";default:return a[r].severity}}();a=S(a,{id:r,severity:t}),o((0,k.A6)(S(a,{id:r,severity:t})))}),2e3);case 5:case"end":return n.stop()}}),n)}))),sx:{width:"15em",height:"3em",boxShadow:"0 10px 25px 0 rgba(0, 0, 0, .5)",color:"#eee",backgroundColor:"#282b30",borderColor:"#eee","&:hover":{backgroundColor:"#353a40",borderColor:"#ddd"}},children:"Execute!"})]})},B=t(61903),A=t(87357),z=t(34386),I=t(68359),O=t(87918),R=t(78878),J=t(62026),M=t(82989),U=t(53298),H=t(95113),D=t(52725),F=t.n(D),W=function(e){return{executing:{priority:0,chip:(0,n.jsx)(O.Z,{variant:"outlined",color:"info",label:e,icon:(0,n.jsx)(R.Z,{className:F().rotateIcon})})},safe:{priority:1,chip:(0,n.jsx)(O.Z,{variant:"outlined",color:"success",label:e,icon:(0,n.jsx)(J.Z,{}),sx:{fontWeight:"bold",borderWidth:"2px"}})},warning:{priority:2,chip:(0,n.jsx)(O.Z,{variant:"outlined",color:"warning",label:e,icon:(0,n.jsx)(M.Z,{})})},critical:{priority:3,chip:(0,n.jsx)(O.Z,{variant:"outlined",color:"error",label:e,icon:(0,n.jsx)(U.Z,{})})}}},q=t(34588),L=t.n(q),T=t(57091),X=t(49718),K=t(51209),Q=t(17627),V=[{field:"payload",headerName:"Payload",flex:1,editable:!0,renderCell:function(e){return(0,n.jsx)("p",{className:L().scroll,children:e.row.payload})}},{field:"expected",headerName:"Expected Output",flex:1,editable:!0,renderCell:function(e){return(0,n.jsx)("p",{className:L().scroll,children:e.row.expected})}},{field:"severity",headerName:"Scan Result",flex:1,renderCell:function(e){return function(e){var r=W(e);return"undefined"!==typeof e&&e in r?r[e]:{priority:4,chip:(0,n.jsx)(O.Z,{variant:"outlined",color:"info",label:"Not Finished",icon:(0,n.jsx)(H.Z,{})})}}(e.row.severity).chip},sortComparator:function(e,r){if("undefined"===typeof e)return 1;if("undefined"===typeof r)return-1;var t=W(e)[e].priority,n=W(r)[r].priority;return t===n?0:t<n?-1:t>n?1:void 0}}],Y=function(e){var r=(0,s.Z)(c.useState(!0),2),t=r[0],i=r[1],o=(0,w.v9)(Q.Y9),a=(0,w.I0)(),l=function(e){a((0,Q.yA)(e)),setTimeout((function(){i(!1)}),500)};return(0,n.jsxs)(A.Z,{sx:{p:1,display:"flex"},children:[(0,n.jsx)(z.Z,{title:"Upload Payloads",children:(0,n.jsxs)(y.Z,{component:"label",sx:{color:"#eee"},children:[(0,n.jsx)(T.Z,{}),(0,n.jsx)("input",{type:"file",hidden:!0,accept:".json",onChange:function(e){!function(e,r,t){if(t(null),e.target.files&&e.target.files[0]){var n=e.target.files[0],i=new FileReader;i.onload=function(e){if(v(e.target.result).startsWith("data:application/json;base64,")){var n=h.DS.decode(v(e.target.result).split(",")[1]);console.log("Read: ",n);var i=[{}];try{i=JSON.parse(n)}catch(s){return void t("json\u306e\u30d1\u30fc\u30b9\u306b\u5931\u6557\u3057\u307e\u3057\u305f")}try{var o=i.map((function(e,r){return(0,d.Z)({id:r},e)})),a=x.parse(o);r(a)}catch(c){t("\u30da\u30a4\u30ed\u30fc\u30c9\u30d5\u30a1\u30a4\u30eb\u306e\u5f62\u5f0f\u304c\u4e0d\u6b63\u3067\u3059")}}else t("json\u5f62\u5f0f\u306e\u30d5\u30a1\u30a4\u30eb\u3067\u306f\u3042\u308a\u307e\u305b\u3093")},i.readAsDataURL(n)}else t("Unexpected Error!")}(e,k.A6,l),e.target.value=""}})]})}),(0,n.jsx)(z.Z,{title:"Download Payloads",children:(0,n.jsx)(y.Z,{component:"label",sx:{color:"#eee"},onClick:function(){!function(e,r){var t=new Blob([JSON.stringify(e,null,"  ")],{type:"application/json"}),n=URL.createObjectURL(t),i=document.createElement("a");i.href=n,i.download=r,i.click(),URL.revokeObjectURL(n)}(e.map((function(e){return{payload:e.payload,expected:e.expected,severity:e.severity}})),"payloads.json")},children:(0,n.jsx)(X.Z,{})})}),o&&(0,n.jsxs)(K.II,{active:t,fixed:!0,className:L().errMsg,children:["Error: ",o]})]})},G=function(){var e=(0,w.I0)(),r=(0,w.v9)(N.fE),t=(0,w.v9)(N.WV),i=(0,w.v9)(k.S1),o={width:"40%",maxWidth:"600px",m:"1em 2px 1em 2px","& label":{color:"#eee"},"& .MuiInputBase-input":{color:"#ccc"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#ccc"},"&:hover fieldset":{borderColor:"#ddd"}}};return(0,n.jsxs)("div",{className:L().body,children:[(0,n.jsx)(B.Z,{required:!0,label:"Endpoint for PyJailBreak Server",variant:"outlined",placeholder:"https://localhost:8080",value:r,onChange:function(r){e((0,N.$C)(r.target.value))},sx:o}),(0,n.jsx)(B.Z,{required:!0,label:"Endpoint for Target Server",variant:"outlined",placeholder:"https://this.is.vulnable.server:8000",value:t,onChange:function(r){e((0,N.D7)(r.target.value))},sx:o}),(0,n.jsx)("div",{style:{height:400,width:"100%"},children:(0,n.jsx)(I._,{rows:i,columns:V,checkboxSelection:!0,disableSelectionOnClick:!0,onSelectionModelChange:function(r){return e((0,k.RU)(r))},components:{Footer:function(){return Y(i)}},sx:{color:"#eee"}})}),(0,n.jsx)(E,{})]})},$=function(){return(0,n.jsxs)(i.A,{children:[(0,n.jsxs)("div",{className:a().description_section,children:[(0,n.jsx)("div",{className:a().logo,children:(0,n.jsx)("img",{src:"/PyJailBreak/PyJailBreak.png",alt:"title logo"})}),(0,n.jsxs)("div",{className:a().description,children:[(0,n.jsx)("img",{src:"/PyJailBreak/logo_horizontal_cleanness.png",alt:"PyJailBreak",className:a().logo_hirizontal})," ","is a ",(0,n.jsx)("br",{}),(0,n.jsx)("b",{children:"Black box automated vulnerability scanning tool"}),(0,n.jsx)("br",{}),"for Python socket servers."]})]}),(0,n.jsx)("div",{children:(0,n.jsx)(G,{})})]})}},43068:function(e){e.exports={navbar:"Navigator_navbar__1D91M",logo:"Navigator_logo__shimR",button:"Navigator_button__W2T1X",icon:"Navigator_icon__pG1Z1",left:"Navigator_left__6lj_E",right:"Navigator_right__OcvPs"}},34588:function(e){e.exports={body:"RequestForm_body__80_lQ",scroll:"RequestForm_scroll__5sdD0",errMsg:"RequestForm_errMsg__MpQL_"}},52725:function(e){e.exports={rotateIcon:"statusChip_rotateIcon__hgZYP",spin:"statusChip_spin__g7Kih"}},214:function(e){e.exports={logo:"Home_logo__27_tb",logo_hirizontal:"Home_logo_hirizontal__KeDOO",description_section:"Home_description_section__SySiq",description:"Home_description__41Owk"}}},function(e){e.O(0,[264,234,112,774,888,179],(function(){return r=48312,e(e.s=r);var r}));var r=e.O();_N_E=r}]);