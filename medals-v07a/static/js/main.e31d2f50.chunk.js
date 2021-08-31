(this["webpackJsonpmedals-a-react"]=this["webpackJsonpmedals-a-react"]||[]).push([[0],{118:function(e,n,t){},119:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(10),o=t.n(c),i=(t(93),t(27)),s=t.n(i),l=t(50),d=t(55),u=t(35),m=t(162),j=t(164),f=t(163),b=t(160),p=t(78),x=t.n(p),h=t(161),O=t(176),g=t(76),y=t.n(g),v=t(77),C=t.n(v),N=t(4),k=t(7),w=Object(N.a)({countryMedal:{marginTop:"10px",display:"flex",alignItems:"center"},medalAvatar:{color:"black"},medalName:{fontSize:"1.4em",paddingLeft:"10px",width:"130px",textTransform:"capitalize"},iconButton:{padding:"2px"}},{withTheme:!0})((function(e){var n=e.medal,t=e.country,a=e.onIncrement,r=e.onDecrement,c=e.classes;return Object(k.jsxs)("div",{className:c.countryMedal,children:[Object(k.jsx)(O.a,{style:{backgroundColor:n.RGBColor},className:c.medalAvatar,children:t[n.name+"MedalCount"]}),Object(k.jsxs)("span",{className:c.medalName,children:[n.name," Medals"]}),Object(k.jsx)(b.a,{onClick:function(){return a(t.id,n.name)},className:c.iconButton,color:"primary","aria-label":"increment gold",children:Object(k.jsx)(y.a,{fontSize:"large"})}),Object(k.jsx)(b.a,{onClick:function(){return r(t.id,n.name)},className:c.iconButton,color:"secondary","aria-label":"decrement gold",children:Object(k.jsx)(C.a,{fontSize:"large"})})]})})),S=Object(h.a)({country:{marginLeft:"auto",marginRight:"auto",marginTop:10,padding:18,width:260},divider:{marginTop:5,marginBottom:10},countryName:{fontSize:"1.8em",paddingRight:"4px"}}),B=function(e){var n=S(),t=e.country,a=e.medals,r=e.onIncrement,c=e.onDecrement,o=e.onDelete;return Object(k.jsxs)(m.a,{elevation:4,className:n.country,children:[Object(k.jsx)(f.a,{badgeContent:function(e,n){var t=0;return n.forEach((function(n){t+=e[n.name+"MedalCount"]})),t}(t,a),color:"primary",children:Object(k.jsxs)("div",{className:n.countryName,children:[t.name,Object(k.jsx)(b.a,{"aria-label":"delete",onClick:function(){return o(t.id)},children:Object(k.jsx)(x.a,{fontSize:"medium"})})]})}),Object(k.jsx)(j.a,{className:n.divider}),a.map((function(e){return Object(k.jsx)(w,{country:t,medal:e,onIncrement:r,onDecrement:c},e.id)}))]})},z=t(171),M=t(172),T=[{id:1,name:"gold",RGBColor:"#ffc107"},{id:2,name:"silver",RGBColor:"#c4cacc"},{id:3,name:"bronze",RGBColor:"#cd7f32"}];function I(){return T}var F=t(165),A=t(79),D=t.n(A),R=t(170),E=t(173),G=t(175),H=t(169),L=t(167),J=t(168),P=t(166),W=Object(h.a)({fab:{position:"fixed",bottom:"20px",right:"20px"}}),q=function(e){var n=W(),t=Object(a.useState)(!1),c=Object(u.a)(t,2),o=c[0],i=c[1],s=Object(a.useState)(""),l=Object(u.a)(s,2),d=l[0],m=l[1],j=e.onAdd,f=function(){return i(!1)};return Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsx)(F.a,{onClick:function(){i(!0),m("")},className:n.fab,size:"medium",color:"primary","aria-label":"add",children:Object(k.jsx)(D.a,{})}),Object(k.jsxs)(G.a,{open:o,onClose:f,"aria-labelledby":"form-dialog-title",children:[Object(k.jsx)(P.a,{id:"form-dialog-title",children:"Add Country"}),Object(k.jsxs)(L.a,{children:[Object(k.jsx)(J.a,{children:"To add a new country, enter the name"}),Object(k.jsx)(E.a,{onChange:function(e){return m(e.target.value)},autoFocus:!0,margin:"dense",id:"name",name:"name",value:d,label:"Country Name",type:"text",fullWidth:!0,autoComplete:"off",autoCapitalize:"off"})]}),Object(k.jsxs)(H.a,{children:[Object(k.jsx)(R.a,{onClick:f,color:"primary",children:"Cancel"}),Object(k.jsx)(R.a,{disabled:0===d.trim().length,onClick:function(){j(d),i(!1)},color:"primary",children:"Save"})]})]})]})},K=t(51),Q=t.n(K),U=(t(118),Object(h.a)({appHeading:{textAlign:"center",marginTop:"15px"},appHeadingBadge:{fontSize:"2.0em",fontFamily:"Teko, sans-serif"}})),V=function(){var e=U(),n=Object(a.useState)([]),t=Object(u.a)(n,2),c=t[0],o=t[1],i=Object(a.useState)(I()),m=Object(u.a)(i,2),j=m[0],b=m[1],p="https://medalsapi.azurewebsites.net/api/country",x=function(e,n){var t=Object(d.a)(c),a=t.findIndex((function(n){return n.id===e}));t[a][n+"MedalCount"]+=1,o(t)},h=function(e,n){var t=Object(d.a)(c),a=t.findIndex((function(n){return n.id===e}));0!==t[a][n+"MedalCount"]&&(t[a][n+"MedalCount"]-=1,o(t))},O=function(){var e=Object(l.a)(s.a.mark((function e(n){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.a.post(p,{name:n});case 2:t=e.sent,a=t.data,o(c.concat(a));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(s.a.mark((function e(n){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c,o(c.filter((function(e){return e.id!==n}))),e.prev=2,e.next=5,Q.a.delete("".concat(p,"/").concat(n));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),e.t0.response&&404===e.t0.response.status?console.log("The record does not exist - it may have already been deleted"):(alert("An error occurred while deleting"),o(t));case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.a.get(p);case 2:n=e.sent,t=n.data,o(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}b(I()),function(){e.apply(this,arguments)}()}),[]),Object(k.jsx)(z.a,{children:Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsx)(q,{onAdd:O}),Object(k.jsx)("div",{className:e.appHeading,children:Object(k.jsx)(f.a,{className:e.appHeadingBadge,badgeContent:function(){var e=0;return j.forEach((function(n){e+=function(e){return c.reduce((function(n,t){return n+t[e+"MedalCount"]}),0)}(n.name)})),e}(),color:"primary",children:"Olympic Medals"})}),Object(k.jsx)(M.a,{justifyContent:"center",container:!0,children:c.map((function(e){return Object(k.jsx)(M.a,{style:{margin:"10px"},item:!0,children:Object(k.jsx)(B,{country:e,medals:j,onIncrement:x,onDecrement:h,onDelete:g})},e.id)}))})]})})},X=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,178)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(V,{})}),document.getElementById("root")),X()},93:function(e,n,t){}},[[119,1,2]]]);
//# sourceMappingURL=main.e31d2f50.chunk.js.map