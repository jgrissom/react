(this["webpackJsonpmedals-b-react"]=this["webpackJsonpmedals-b-react"]||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(8),i=t.n(c),o=(t(13),t(6)),s=t(2),l=t(3),u=t(5),d=t(4),m=t(0),h=function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props,n=e.medal,t=e.country,a=e.onIncrement,r=e.onDecrement;return Object(m.jsxs)("div",{className:"medals",children:[n.name," Medals: ",t[n.name],Object(m.jsx)("button",{onClick:function(){return a(t.id,n.name)},children:"+"}),Object(m.jsx)("button",{disabled:0===t[n.name],onClick:function(){return r(t.id,n.name)},children:"-"})]})}}]),t}(a.Component),j=function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"getMedalsTotal",value:function(e,n){var t=0;return n.forEach((function(n){t+=e[n.name]})),t}},{key:"render",value:function(){var e=this.props,n=e.country,t=e.medals,a=e.onIncrement,r=e.onDecrement,c=e.onDelete;return Object(m.jsxs)("div",{className:"country",children:[Object(m.jsxs)("div",{className:"name",children:[n.name,Object(m.jsx)("span",{className:"badge",children:this.getMedalsTotal(n,t)})]}),t.map((function(e){return Object(m.jsx)(h,{country:n,medal:e,onIncrement:a,onDecrement:r},e.id)})),Object(m.jsx)("button",{onClick:function(){return c(n.id)},children:"delete"}),Object(m.jsx)("hr",{})]})}}]),t}(a.Component),b=function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={},e.handleClick=function(){var n=prompt("Enter country name");n.trim().length>0?e.props.onAdd(n):alert("Country name cannot be 0 length")},e}return Object(l.a)(t,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"newCountryButton",children:Object(m.jsx)("button",{onClick:this.handleClick,children:"New Country"})})}}]),t}(a.Component),f=(t(15),function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={countries:[{id:1,name:"United States",gold:2,silver:2,bronze:3},{id:2,name:"China",gold:3,silver:1,bronze:0},{id:3,name:"Germany",gold:0,silver:2,bronze:2}],medals:[{id:1,name:"gold"},{id:2,name:"silver"},{id:3,name:"bronze"}]},e.handleAdd=function(n){var t=e.state.countries,a=0===t.length?1:Math.max.apply(Math,Object(o.a)(t.map((function(e){return e.id}))))+1,r=Object(o.a)(t).concat({id:a,name:n,gold:0,silver:0,bronze:0});e.setState({countries:r})},e.handleDelete=function(n){var t=e.state.countries,a=Object(o.a)(t).filter((function(e){return e.id!==n}));e.setState({countries:a})},e.handleIncrement=function(n,t){var a=Object(o.a)(e.state.countries),r=a.findIndex((function(e){return e.id===n}));a[r][t]+=1,e.setState({countries:a})},e.handleDecrement=function(n,t){var a=Object(o.a)(e.state.countries),r=a.findIndex((function(e){return e.id===n}));a[r][t]-=1,e.setState({countries:a})},e}return Object(l.a)(t,[{key:"getAllMedalsTotal",value:function(){var e=this,n=0;return this.state.medals.forEach((function(t){n+=e.state.countries.reduce((function(e,n){return e+n[t.name]}),0)})),n}},{key:"render",value:function(){var e=this;return Object(m.jsxs)(r.a.Fragment,{children:[Object(m.jsxs)("div",{className:"appHeading",children:["Olympic Medals",Object(m.jsx)("span",{className:"badge",children:this.getAllMedalsTotal()})]}),Object(m.jsx)("div",{className:"countries",children:this.state.countries.map((function(n){return Object(m.jsx)(j,{country:n,medals:e.state.medals,onDelete:e.handleDelete,onIncrement:e.handleIncrement,onDecrement:e.handleDecrement},n.id)}))}),Object(m.jsx)(b,{onAdd:this.handleAdd})]})}}]),t}(a.Component)),O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.987dc8ce.chunk.js.map