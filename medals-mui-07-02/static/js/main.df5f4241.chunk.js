(this["webpackJsonpmedals-a-react"]=this["webpackJsonpmedals-a-react"]||[]).push([[0],{122:function(e,n,a){},123:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(10),i=a.n(c),o=(a(96),a(52)),s=a(19),l=a.n(s),d=a(42),u=a(41),m=a(43),p=a.n(m),f=a(181),j=a(166),b=a(77),x=a.n(b),h=a(78),g=a.n(h),v=a(162),O=a(5),y=Object(v.a)({countryMedal:{marginTop:"10px",display:"flex",alignItems:"center"},medalAvatar:{color:"black"},medalName:{fontSize:"1.4em",paddingLeft:"10px",width:"130px",textTransform:"capitalize"},iconButton:{padding:"2px"},delta:{fontStyle:"italic",opacity:".7"}}),C=function(e){var n=y(),a=e.medal,t=e.country,r=e.onIncrement,c=e.onDecrement;return Object(O.jsxs)("div",{className:n.countryMedal,children:[Object(O.jsx)(f.a,{style:{backgroundColor:a.RGBColor},className:n.medalAvatar,children:t[a.name].page_value}),t[a.name].page_value!==t[a.name].saved_value?Object(O.jsxs)("span",{className:"".concat(n.medalName," ").concat(n.delta),children:[a.name," Medals"]}):Object(O.jsxs)("span",{className:n.medalName,children:[a.name," Medals"]}),Object(O.jsx)(j.a,{onClick:function(){return r(t.id,a.name)},className:n.iconButton,color:"primary","aria-label":"increment gold",children:Object(O.jsx)(x.a,{fontSize:"large"})}),Object(O.jsx)(j.a,{disabled:0===t[a.name].page_value,onClick:function(){return c(t.id,a.name)},className:n.iconButton,color:"secondary","aria-label":"decrement gold",children:Object(O.jsx)(g.a,{fontSize:"large"})})]})},N=a(167),_=a(170),k=a(169),S=a(168),B=a(81),w=a.n(B),z=a(79),T=a.n(z),I=a(80),E=a.n(I),F=Object(v.a)({country:{marginLeft:"auto",marginRight:"auto",marginTop:10,padding:18,width:260},divider:{marginTop:5,marginBottom:10},countryName:{fontSize:"1.8em",paddingRight:"8px"}}),R=function(e){var n=e.country,a=e.medals,t=e.onIncrement,c=e.onDecrement,i=e.onDelete,o=e.onSave,s=e.onReset,l=F();return Object(O.jsxs)(N.a,{elevation:4,className:l.country,children:[Object(O.jsxs)(S.a,{container:!0,spacing:0,children:[Object(O.jsx)(S.a,{item:!0,xs:8,children:Object(O.jsx)(k.a,{badgeContent:function(e,n){var a=0;return n.forEach((function(n){a+=e[n.name].page_value})),a}(n,a),color:"primary",children:Object(O.jsx)("div",{className:l.countryName,children:n.name})})}),Object(O.jsx)(S.a,{style:{textAlign:"right"},item:!0,xs:4,children:function(){var e=!1;return a.forEach((function(a){n[a.name].page_value!==n[a.name].saved_value&&(e=!0)})),e}()?Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)(j.a,{"aria-label":"save",onClick:function(){return o(n.id)},style:{padding:6},children:Object(O.jsx)(T.a,{fontSize:"medium",color:"primary"})}),Object(O.jsx)(j.a,{"aria-label":"undo",onClick:function(){return s(n.id)},style:{padding:6},children:Object(O.jsx)(E.a,{fontSize:"medium",color:"secondary"})})]}):Object(O.jsx)(j.a,{"aria-label":"delete",onClick:function(){return i(n.id)},style:{padding:6},children:Object(O.jsx)(w.a,{fontSize:"medium"})})})]}),Object(O.jsx)(_.a,{className:l.divider}),a.map((function(e){return Object(O.jsx)(C,{country:n,medal:e,onIncrement:t,onDecrement:c},e.id)}))]})},A=a(171),D=a(82),H=a.n(D),M=a(176),G=a(178),L=a(180),J=a(175),P=a(173),W=a(174),q=a(172),K=Object(v.a)({fab:{position:"fixed",bottom:"1em",right:"1em"}}),Q=function(e){var n=K(),a=Object(t.useState)(!1),c=Object(u.a)(a,2),i=c[0],o=c[1],s=Object(t.useState)(""),l=Object(u.a)(s,2),d=l[0],m=l[1],p=e.onAdd,f=function(){return o(!1)};return Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)(A.a,{onClick:function(){o(!0),m("")},className:n.fab,size:"medium",color:"primary","aria-label":"add",children:Object(O.jsx)(H.a,{})}),Object(O.jsx)(L.a,{open:i,onClose:f,"aria-labelledby":"form-dialog-title",children:Object(O.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),p(d),o(!1)}(e)},children:[Object(O.jsx)(q.a,{id:"form-dialog-title",children:"Add Country"}),Object(O.jsxs)(P.a,{children:[Object(O.jsx)(W.a,{children:"To add a new country, enter the name"}),Object(O.jsx)(G.a,{onChange:function(e){return m(e.target.value)},autoFocus:!0,margin:"dense",id:"name",name:"name",value:d,label:"Country Name",type:"text",fullWidth:!0,autoComplete:"off",autoCapitalize:"off"})]}),Object(O.jsxs)(J.a,{children:[Object(O.jsx)(M.a,{onClick:f,color:"secondary",children:"Cancel"}),Object(O.jsx)(M.a,{disabled:0===d.trim().length,type:"submit",color:"primary",children:"Save"})]})]})})]})},U=a(177),V=(a(122),Object(v.a)({appHeading:{textAlign:"center",margin:0,backgroundColor:"#BBBBF1",position:"fixed",width:"100%",paddingTop:"15px",paddingBottom:"4px",zIndex:"1000",opacity:".95"},appHeadingBadge:{fontSize:"2.0em",fontFamily:"Teko, sans-serif"},appHeadingText:{paddingRight:"8px"}})),X=function(){var e="https://medalsapi.azurewebsites.net/api/country",n=Object(t.useState)([]),a=Object(u.a)(n,2),c=a[0],i=a[1],s=Object(t.useRef)([{id:1,name:"gold",RGBColor:"#ffc107"},{id:2,name:"silver",RGBColor:"#c4cacc"},{id:3,name:"bronze",RGBColor:"#cd7f32"}]),m=V();Object(t.useEffect)((function(){function n(){return(n=Object(d.a)(l.a.mark((function n(){var a,t,r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.a.get(e);case 2:a=n.sent,t=a.data,r=[],t.forEach((function(e){var n={id:e.id,name:e.name};s.current.forEach((function(a){var t=e[a.name];n[a.name]={page_value:t,saved_value:t}})),r.push(n)})),i(r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]);var f=function(){var n=Object(d.a)(l.a.mark((function n(a){var t,r,o;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.a.post(e,{name:a});case 2:t=n.sent,r=t.data,o={id:r.id,name:r.name},s.current.forEach((function(e){var n=r[e.name];o[e.name]={page_value:n,saved_value:n}})),i(c.concat(o));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),j=function(){var n=Object(d.a)(l.a.mark((function n(a){var t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c,i(c.filter((function(e){return e.id!==a}))),n.prev=2,n.next=5,p.a.delete("".concat(e,"/").concat(a));case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),n.t0.response&&404===n.t0.response.status?console.log("The record does not exist - it may have already been deleted"):(alert("An error occurred while deleting"),i(t));case 10:case"end":return n.stop()}}),n,null,[[2,7]])})));return function(e){return n.apply(this,arguments)}}(),b=function(){var n=Object(d.a)(l.a.mark((function n(a){var t,r,d,u,m;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c,r=c.findIndex((function(e){return e.id===a})),d=Object(o.a)(c),u=d[r],m=[],s.current.forEach((function(e){u[e.name].page_value!==u[e.name].saved_value&&(m.push({op:"replace",path:e.name,value:u[e.name].page_value}),u[e.name].saved_value=u[e.name].page_value)})),console.log("json patch for id: ".concat(a,": ").concat(JSON.stringify(m))),i(d),n.prev=8,n.next=11,p.a.patch("".concat(e,"/").concat(a),m);case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(8),n.t0.response&&404===n.t0.response.status?console.log("The record does not exist - it may have already been deleted"):(alert("An error occurred while updating"),i(t));case 16:case"end":return n.stop()}}),n,null,[[8,13]])})));return function(e){return n.apply(this,arguments)}}(),x=function(e){var n=c.findIndex((function(n){return n.id===e})),a=Object(o.a)(c),t=a[n];s.current.forEach((function(e){t[e.name].page_value=t[e.name].saved_value})),i(a)},h=function(e,n){return v(e,n,1)},g=function(e,n){return v(e,n,-1)},v=function(e,n,a){var t=c.findIndex((function(n){return n.id===e})),r=Object(o.a)(c);r[t][n].page_value+=1*a,i(r)};return Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)("div",{className:m.appHeading,children:Object(O.jsx)(k.a,{className:m.appHeadingBadge,badgeContent:function(){var e=0;return s.current.forEach((function(n){e+=c.reduce((function(e,a){return e+a[n.name].page_value}),0)})),e}(),color:"primary",children:Object(O.jsx)("div",{className:m.appHeadingText,children:"Olympic Medals"})})}),Object(O.jsxs)(U.a,{fixed:!0,style:{paddingTop:"70px",paddingBottom:"20px"},children:[Object(O.jsx)(Q,{onAdd:f}),Object(O.jsx)(S.a,{spacing:2,justifyContent:"center",container:!0,children:c.map((function(e){return Object(O.jsx)(S.a,{item:!0,children:Object(O.jsx)(R,{country:e,medals:s.current,onDelete:j,onSave:b,onReset:x,onIncrement:h,onDecrement:g})},e.id)}))})]})]})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,183)).then((function(n){var a=n.getCLS,t=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;a(e),t(e),r(e),c(e),i(e)}))};i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(X,{})}),document.getElementById("root")),Y()},96:function(e,n,a){}},[[123,1,2]]]);
//# sourceMappingURL=main.df5f4241.chunk.js.map