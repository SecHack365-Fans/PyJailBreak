(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2677)}])},82180:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var o=n(85893),i=n(9008),r=n.n(i),s=function(e){var t=e.title,n=e.description;return(0,o.jsxs)(r(),{children:[(0,o.jsx)("title",{children:t||"PyJailBreak"}),(0,o.jsx)("meta",{name:"description",content:n||"Black box automated vulnerability scanning tool for Python socket servers"}),(0,o.jsx)("link",{rel:"icon",href:"/PyJailBreak/favicon.ico"}),(0,o.jsx)("meta",{name:"og:title",content:t}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{property:"og:image",content:"https://pbs.twimg.com/card_img/1551139193656844288/N9ApjUm4?format=jpg&name=orig"})]})},a=n(41664),l=n.n(a),c=n(26447),d=n(83321),p=n(54970),_=n(25449),u=n(89157),x=n.n(u),h=function(){return(0,o.jsxs)(c.Z,{spacing:1,direction:"row",className:x().navbar,children:[(0,o.jsxs)("span",{className:x().left,children:[(0,o.jsx)(l(),{href:"/",passHref:!0,children:(0,o.jsx)(d.Z,{variant:"text",className:x().button,children:(0,o.jsx)("img",{src:"/PyJailBreak/logo_horizontal_cleanness.png",alt:"top page",className:x().logo})})}),(0,o.jsx)(l(),{href:"/openapi",passHref:!0,children:(0,o.jsxs)(d.Z,{variant:"text",className:x().button,children:[(0,o.jsx)(p.Z,{className:x().icon})," API"]})})]}),(0,o.jsx)("span",{className:x().right,children:(0,o.jsx)("a",{href:"https://github.com/SecHack365-Fans/PyJailBreak",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(d.Z,{variant:"text",className:x().button,children:(0,o.jsx)(_.Z,{className:x().icon})})})})]})},m=function(e){var t=e.children,n=e.title,i=e.description,r=e.styles;return(0,o.jsxs)("main",{className:r,children:[(0,o.jsx)(s,{title:n,description:i}),(0,o.jsx)(h,{}),(0,o.jsx)("div",{style:{padding:"15px"},children:t})]})}},2677:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var o=n(85893),i=n(82180),r=n(214),s=n.n(r),a=n(51438),l=n(88029),c=n(41799),d=n(69396),p=n(16567),_=n(67294),u=n(87918),x=n(61903),h=n(77558),m=n(62026),g=n(82989),f=n(53298),j=n(95113),v=n(34588),y=n.n(v),b=function(e){(0,l.Z)(n,e);var t=(0,p.Z)(n);function n(e){var i;return(0,a.Z)(this,n),(i=t.call(this,e)).payloads=[{id:1,payload:"__import__('os').system('echo \"Expected String\"')",expected:"Expected String",severity:"Safe"},{id:2,payload:"__import__('os').system('echo \"Expected String is Toooooo Long\"')",expected:"Expected String is Toooooo Long",severity:"Warning"},{id:3,payload:"__import__('os').system('echo \"Dangerous\"')",expected:"Dangerous",severity:"Critical"},{id:4,payload:"print(1)",expected:"1",severity:void 0}],i.makeStatusChip=function(e){return"Safe"===e?(0,o.jsx)(u.Z,{variant:"outlined",color:"success",label:e,icon:(0,o.jsx)(m.Z,{})}):"Warning"===e?(0,o.jsx)(u.Z,{variant:"outlined",color:"warning",label:e,icon:(0,o.jsx)(g.Z,{})}):"Critical"===e?(0,o.jsx)(u.Z,{variant:"outlined",color:"error",label:e,icon:(0,o.jsx)(f.Z,{})}):(0,o.jsx)(u.Z,{variant:"outlined",color:"info",label:"Not Finished",icon:(0,o.jsx)(j.Z,{})})},i.scrollStyle={overflow:"scroll",scrollbarWidth:"none","-ms-overflow-style":"none","::-webkit-scrollbar":{display:"none"}},i.columns=[{field:"payload",headerName:"Payload",flex:1,editable:!0,renderCell:function(e){return(0,o.jsx)("p",{className:y().scroll,children:e.row.payload})}},{field:"expected",headerName:"Expected Output",flex:1,editable:!0,renderCell:function(e){return(0,o.jsx)("p",{className:y().scroll,children:e.row.expected})}},{field:"severity",headerName:"Scan Result",flex:1,renderCell:function(e){return i.makeStatusChip(e.row.severity)}}],i.state={endpoint:"",payloads:[],selections:[]},i}return n.prototype.render=function(){var e=this;return(0,o.jsxs)("div",{className:y().body,children:[(0,o.jsx)(x.Z,{label:"Endpoint",variant:"standard",placeholder:"https://localhost:8080",fullWidth:!0}),(0,o.jsx)("div",{style:{height:400,width:"100%"},children:(0,o.jsx)(h._,{rows:this.payloads,columns:this.columns,pageSize:5,checkboxSelection:!0,onSelectionModelChange:function(t){return e.setState((0,d.Z)((0,c.Z)({},e.state),{selections:t}))},sx:{color:"#eee"}})})]})},n}(_.Component),N=function(){return(0,o.jsxs)(i.Z,{children:[(0,o.jsxs)("div",{className:s().description_section,children:[(0,o.jsx)("div",{className:s().logo,children:(0,o.jsx)("img",{src:"/PyJailBreak/PyJailBreak.png",alt:"title logo"})}),(0,o.jsxs)("div",{className:s().description,children:[(0,o.jsx)("img",{src:"/PyJailBreak/logo_horizontal_cleanness.png",alt:"PyJailBreak",className:s().logo_hirizontal})," ","is a ",(0,o.jsx)("br",{}),(0,o.jsx)("b",{children:"Black box automated vulnerability scanning tool"}),(0,o.jsx)("br",{}),"for Python socket servers."]})]}),(0,o.jsx)("div",{children:(0,o.jsx)(b,{})})]})}},89157:function(e){e.exports={navbar:"Navigator_navbar__TyKcm",logo:"Navigator_logo__TO7WC",button:"Navigator_button__vPLKx",icon:"Navigator_icon__P7K8v",left:"Navigator_left__8C07h",right:"Navigator_right__zMory"}},34588:function(e){e.exports={body:"RequestForm_body__80_lQ",scroll:"RequestForm_scroll__5sdD0"}},214:function(e){e.exports={logo:"Home_logo__27_tb",logo_hirizontal:"Home_logo_hirizontal__KeDOO",description_section:"Home_description_section__SySiq",description:"Home_description__41Owk"}}},function(e){e.O(0,[264,510,774,888,179],(function(){return t=48312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);