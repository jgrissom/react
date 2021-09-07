(this["webpackJsonpmedals-a-react"]=this["webpackJsonpmedals-a-react"]||[]).push([[0],{81:function(e,n,t){},87:function(e,n,t){},88:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),i=t(10),r=t.n(i),o=(t(81),t(33)),d=t(37),l=t(146),s=t(131),m=t(64),j=t.n(m),u=t(65),b=t.n(u),f=t(127),p=t(6),x=Object(f.a)({countryMedal:{marginTop:"10px",display:"flex",alignItems:"center"},medalAvatar:{color:"black"},medalName:{fontSize:"1.4em",paddingLeft:"10px",width:"130px",textTransform:"capitalize"},iconButton:{padding:"2px"}}),g=function(e){var n=x(),t=e.medal,a=e.country,c=e.onIncrement,i=e.onDecrement;return Object(p.jsxs)("div",{className:n.countryMedal,children:[Object(p.jsx)(l.a,{style:{backgroundColor:t.RGBColor},className:n.medalAvatar,children:a[t.name]}),Object(p.jsxs)("span",{className:n.medalName,children:[t.name," Medals"]}),Object(p.jsx)(s.a,{onClick:function(){return c(a.id,t.name)},className:n.iconButton,color:"primary","aria-label":"increment gold",children:Object(p.jsx)(j.a,{fontSize:"large"})}),Object(p.jsx)(s.a,{disabled:0===a[t.name],onClick:function(){return i(a.id,t.name)},className:n.iconButton,color:"secondary","aria-label":"decrement gold",children:Object(p.jsx)(b.a,{fontSize:"large"})})]})},O=t(132),h=t(135),y=t(134),v=t(133),C=t(66),B=t.n(C),N=Object(f.a)({country:{marginLeft:"auto",marginRight:"auto",marginTop:10,padding:18,width:260},divider:{marginTop:5,marginBottom:10},countryName:{fontSize:"1.8em",paddingRight:"8px"}}),z=function(e){var n=e.country,t=e.medals,a=e.onIncrement,c=e.onDecrement,i=e.onDelete,r=N();return Object(p.jsxs)(O.a,{elevation:4,className:r.country,children:[Object(p.jsxs)(v.a,{container:!0,spacing:0,children:[Object(p.jsx)(v.a,{item:!0,xs:10,children:Object(p.jsx)(y.a,{badgeContent:function(e,n){var t=0;return n.forEach((function(n){t+=e[n.name]})),t}(n,t),color:"primary",children:Object(p.jsx)("div",{className:r.countryName,children:n.name})})}),Object(p.jsx)(v.a,{item:!0,xs:2,children:Object(p.jsx)(s.a,{"aria-label":"delete",onClick:function(){return i(n.id)},style:{padding:6},children:Object(p.jsx)(B.a,{fontSize:"medium"})})})]}),Object(p.jsx)(h.a,{className:r.divider}),t.map((function(e){return Object(p.jsx)(g,{country:n,medal:e,onIncrement:a,onDecrement:c},e.id)}))]})},S=t(136),T=t(67),k=t.n(T),I=t(141),F=t(143),D=t(145),R=t(140),M=t(138),w=t(139),A=t(137),H=Object(f.a)({fab:{position:"fixed",bottom:"1em",right:"1em"}}),G=function(e){var n=H(),t=Object(a.useState)(!1),i=Object(d.a)(t,2),r=i[0],o=i[1],l=Object(a.useState)(""),s=Object(d.a)(l,2),m=s[0],j=s[1],u=e.onAdd,b=function(){return o(!1)};return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(S.a,{onClick:function(){o(!0),j("")},className:n.fab,size:"medium",color:"primary","aria-label":"add",children:Object(p.jsx)(k.a,{})}),Object(p.jsx)(D.a,{open:r,onClose:b,"aria-labelledby":"form-dialog-title",children:Object(p.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),u(m),o(!1)}(e)},children:[Object(p.jsx)(A.a,{id:"form-dialog-title",children:"Add Country"}),Object(p.jsxs)(M.a,{children:[Object(p.jsx)(w.a,{children:"To add a new country, enter the name"}),Object(p.jsx)(F.a,{onChange:function(e){return j(e.target.value)},autoFocus:!0,margin:"dense",id:"name",name:"name",value:m,label:"Country Name",type:"text",fullWidth:!0,autoComplete:"off",autoCapitalize:"off"})]}),Object(p.jsxs)(R.a,{children:[Object(p.jsx)(I.a,{onClick:b,color:"secondary",children:"Cancel"}),Object(p.jsx)(I.a,{disabled:0===m.trim().length,type:"submit",color:"primary",children:"Save"})]})]})})]})},E=t(142),L=(t(87),Object(f.a)({appHeading:{textAlign:"center",margin:0,backgroundColor:"#BBBBF1",position:"fixed",width:"100%",paddingTop:"15px",paddingBottom:"4px",zIndex:"1000",opacity:".95"},appHeadingBadge:{fontSize:"2.0em",fontFamily:"Teko, sans-serif"},appHeadingText:{paddingRight:"8px"}})),J=function(){var e=Object(a.useState)([]),n=Object(d.a)(e,2),t=n[0],i=n[1],r=Object(a.useRef)([{id:1,name:"gold",RGBColor:"#ffc107"},{id:2,name:"silver",RGBColor:"#c4cacc"},{id:3,name:"bronze",RGBColor:"#cd7f32"}]),l=L();Object(a.useEffect)((function(){i([{id:1,name:"United States",gold:2,silver:2,bronze:3},{id:2,name:"China",gold:3,silver:1,bronze:0},{id:3,name:"Germany",gold:0,silver:2,bronze:2}])}),[]);var s=function(e){i(Object(o.a)(t).filter((function(n){return n.id!==e})))},m=function(e,n){var a=t.findIndex((function(n){return n.id===e})),c=Object(o.a)(t);c[a][n]+=1,i(c)},j=function(e,n){var a=t.findIndex((function(n){return n.id===e})),c=Object(o.a)(t);c[a][n]-=1,i(c)};return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)("div",{className:l.appHeading,children:Object(p.jsx)(y.a,{className:l.appHeadingBadge,badgeContent:function(){var e=0;return r.current.forEach((function(n){e+=t.reduce((function(e,t){return e+t[n.name]}),0)})),e}(),color:"primary",children:Object(p.jsx)("div",{className:l.appHeadingText,children:"Olympic Medals"})})}),Object(p.jsxs)(E.a,{fixed:!0,style:{paddingTop:"70px",paddingBottom:"20px"},children:[Object(p.jsx)(G,{onAdd:function(e){var n=0===t.length?1:Math.max.apply(Math,Object(o.a)(t.map((function(e){return e.id}))))+1;i(Object(o.a)(t).concat({id:n,name:e,gold:0,silver:0,bronze:0}))}}),Object(p.jsx)(v.a,{spacing:2,justifyContent:"center",container:!0,children:t.map((function(e){return Object(p.jsx)(v.a,{item:!0,children:Object(p.jsx)(z,{country:e,medals:r.current,onDelete:s,onIncrement:m,onDecrement:j})},e.id)}))})]})]})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,148)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(J,{})}),document.getElementById("root")),P()}},[[88,1,2]]]);
//# sourceMappingURL=main.a9e5b918.chunk.js.map