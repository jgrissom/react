(this["webpackJsonpmedals-a-react"]=this["webpackJsonpmedals-a-react"]||[]).push([[0],{47:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),i=n.n(r),o=(n(47),n(23)),s=n(24),l=n(27),d=n(26),u=n(74),m=n(75),j=n(5),h=n(79),g=n(78),b=n(39),p=n.n(b),f=n(40),O=n.n(f),x=n(4),y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:e.props.country.name,gold:e.props.country.gold},e.handleIncrement=function(){return e.setState({gold:e.state.gold+1})},e.handleDecrement=function(){return e.setState({gold:e.state.gold-1})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.classes;return Object(x.jsxs)(u.a,{elevation:4,className:e.country,children:[Object(x.jsx)("div",{className:e.countryName,children:this.state.name}),Object(x.jsx)(m.a,{className:e.divider}),Object(x.jsxs)("div",{className:e.countryMedal,children:[Object(x.jsx)(h.a,{className:e.goldAvatar,children:this.state.gold}),Object(x.jsx)("span",{className:e.medalName,children:"Gold Medals"}),Object(x.jsx)(g.a,{onClick:this.handleIncrement,className:e.iconButton,color:"primary","aria-label":"increment gold",children:Object(x.jsx)(p.a,{fontSize:"large"})}),Object(x.jsx)(g.a,{disabled:0===this.state.gold,onClick:this.handleDecrement,className:e.iconButton,color:"secondary","aria-label":"decrement gold",children:Object(x.jsx)(O.a,{fontSize:"large"})})]})]})}}]),n}(a.Component),v=Object(j.a)({country:{marginLeft:"auto",marginRight:"auto",marginTop:10,padding:10,width:260},divider:{marginTop:5,marginBottom:10},countryName:{fontSize:"1.8em"},countryMedal:{marginTop:"5px",display:"flex",alignItems:"center"},goldAvatar:{color:"black",backgroundColor:"#ffc107"},medalName:{fontSize:"1.4em",paddingLeft:"10px",width:"130px"},iconButton:{padding:"2px"}},{withTheme:!0})(y),N=n(76),C=n(77),S=(n(54),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={countries:[{id:1,name:"United States",gold:2},{id:2,name:"China",gold:3},{id:3,name:"Germany",gold:0}]},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(x.jsx)(N.a,{fixed:!0,children:Object(x.jsx)(C.a,{spacing:2,justifyContent:"center",container:!0,children:this.state.countries.map((function(e){return Object(x.jsx)(C.a,{item:!0,children:Object(x.jsx)(v,{country:e})},e.id)}))})})}}]),n}(a.Component)),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root")),k()}},[[56,1,2]]]);
//# sourceMappingURL=main.6beb3918.chunk.js.map