(this["webpackJsonpmedals-a-react"]=this["webpackJsonpmedals-a-react"]||[]).push([[0],{51:function(e,n,t){},58:function(e,n,t){},60:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(16),o=t.n(c),i=(t(51),t(31)),l=t(12),s=t(13),d=t(15),u=t(14),m=t(79),p=t(76),j=t(78),h=t(77),b=t(5),g=t(82),f=t(81),O=t(42),x=t.n(O),v=t(43),y=t.n(v),C=t(3),M=function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,n=e.medal,t=e.country,a=e.onIncrement,r=e.onDecrement,c=e.classes;return Object(C.jsxs)("div",{className:c.countryMedal,children:[Object(C.jsx)(g.a,{style:{backgroundColor:n.RGBColor},className:c.medalAvatar,children:t[n.name+"MedalCount"]}),Object(C.jsxs)("span",{className:c.medalName,children:[n.name," Medals"]}),Object(C.jsx)(f.a,{onClick:function(){return a(t.id,n.name)},className:c.iconButton,color:"primary","aria-label":"increment gold",children:Object(C.jsx)(x.a,{fontSize:"large"})}),Object(C.jsx)(f.a,{onClick:function(){return r(t.id,n.name)},className:c.iconButton,color:"secondary","aria-label":"decrement gold",children:Object(C.jsx)(y.a,{fontSize:"large"})})]})}}]),t}(a.Component),T=Object(b.a)({countryMedal:{marginTop:"10px",display:"flex",alignItems:"center"},medalAvatar:{color:"black"},medalName:{fontSize:"1.4em",paddingLeft:"10px",width:"130px",textTransform:"capitalize"},iconButton:{padding:"2px"}},{withTheme:!0})(M),B=function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"getMedalsTotal",value:function(e,n){var t=0;return n.forEach((function(n){t+=e[n.name+"MedalCount"]})),t}},{key:"render",value:function(){var e=this.props,n=e.classes,t=e.country,a=e.medals,r=e.onIncrement,c=e.onDecrement;return Object(C.jsxs)(p.a,{elevation:4,className:n.country,children:[Object(C.jsx)(h.a,{badgeContent:this.getMedalsTotal(t,a),color:"primary",children:Object(C.jsx)("div",{className:n.countryName,children:t.name})}),Object(C.jsx)(j.a,{className:n.divider}),a.map((function(e){return Object(C.jsx)(T,{country:t,medal:e,onIncrement:r,onDecrement:c},e.id)}))]})}}]),t}(a.Component),N=Object(b.a)({country:{marginLeft:"auto",marginRight:"auto",marginTop:10,padding:18,width:260},divider:{marginTop:5,marginBottom:10},countryName:{fontSize:"1.8em",paddingRight:"8px"}},{withTheme:!0})(B),k=function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,n=e.countries,t=e.medals,a=e.onIncrement,r=e.onDecrement;return Object(C.jsx)(m.a,{spacing:2,justifyContent:"center",container:!0,children:n.map((function(e){return Object(C.jsx)(m.a,{item:!0,children:Object(C.jsx)(N,{country:e,medals:t,onIncrement:a,onDecrement:r})},e.id)}))})}}]),t}(a.Component),I=t(80),z=(t(58),function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={countries:[{id:1,name:"United States",goldMedalCount:2,silverMedalCount:2,bronzeMedalCount:3},{id:2,name:"China",goldMedalCount:3,silverMedalCount:1,bronzeMedalCount:0},{id:3,name:"Germany",goldMedalCount:0,silverMedalCount:2,bronzeMedalCount:2}],medals:[{id:1,name:"gold",RGBColor:"#ffc107"},{id:2,name:"silver",RGBColor:"#c4cacc"},{id:3,name:"bronze",RGBColor:"#cd7f32"}]},e.handleIncrement=function(n,t){var a=Object(i.a)(e.state.countries),r=a.findIndex((function(e){return e.id===n}));a[r][t+"MedalCount"]+=1,e.setState({countries:a})},e.handleDecrement=function(n,t){var a=Object(i.a)(e.state.countries),r=a.findIndex((function(e){return e.id===n}));0!==a[r][t+"MedalCount"]&&(a[r][t+"MedalCount"]-=1,e.setState({countries:a}))},e.getMedalTotal=function(n){return e.state.countries.reduce((function(e,t){return e+t[n+"MedalCount"]}),0)},e}return Object(s.a)(t,[{key:"getAllMedalsTotal",value:function(){var e=this,n=0;return this.state.medals.forEach((function(t){n+=e.getMedalTotal(t.name)})),n}},{key:"render",value:function(){var e=this.props.classes;return Object(C.jsxs)(r.a.Fragment,{children:[Object(C.jsx)("div",{className:e.appHeading,children:Object(C.jsx)(h.a,{className:e.appHeadingBadge,badgeContent:this.getAllMedalsTotal(),color:"primary",children:Object(C.jsx)("div",{className:e.appHeadingText,children:"Olympic Medals"})})}),Object(C.jsx)(I.a,{fixed:!0,style:{paddingTop:"70px",paddingBottom:"20px"},children:Object(C.jsx)(k,{countries:this.state.countries,medals:this.state.medals,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement})})]})}}]),t}(a.Component)),w=Object(b.a)({appHeading:{textAlign:"center",margin:0,backgroundColor:"#BBBBF1",position:"fixed",width:"100%",paddingTop:"15px",paddingBottom:"4px",zIndex:"1000",opacity:".95"},appHeadingBadge:{fontSize:"2.0em",fontFamily:"Teko, sans-serif"},appHeadingText:{paddingRight:"8px"}},{withTheme:!0})(z),S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,83)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(w,{})}),document.getElementById("root")),S()}},[[60,1,2]]]);
//# sourceMappingURL=main.14c69695.chunk.js.map