(this["webpackJsonpmedals-b-react"]=this["webpackJsonpmedals-b-react"]||[]).push([[0],{24:function(e,n,t){},45:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t.n(r),a=t(19),o=t.n(a),i=(t(24),t(9)),s=t(3),u=t.n(s),d=t(6),l=t(10),m=t(7),f=t.n(m),j=t(0),b=function(e){var n=e.medal,t=e.country,r=e.onIncrement,c=e.onDecrement;return Object(j.jsxs)("div",{className:"medals",children:[n.name," Medals: ",t[n.name],Object(j.jsx)("button",{onClick:function(){return r(t.id,n.name)},children:"+"}),Object(j.jsx)("button",{disabled:0===t[n.name],onClick:function(){return c(t.id,n.name)},children:"-"})]})},p=function(e){var n=e.country,t=e.medals,r=e.onIncrement,c=e.onDecrement,a=e.onDelete;return Object(j.jsxs)("div",{className:"country",children:[Object(j.jsxs)("div",{className:"name",children:[n.name,Object(j.jsx)("span",{className:"badge",children:function(e,n){var t=0;return n.forEach((function(n){t+=e[n.name]})),t}(n,t)})]}),t.map((function(e){return Object(j.jsx)(b,{country:n,medal:e,onIncrement:r,onDecrement:c},e.id)})),Object(j.jsx)("button",{onClick:function(){return a(n.id)},children:"delete"}),Object(j.jsx)("hr",{})]})},h=function(e){var n=e.onAdd;return Object(j.jsx)("div",{className:"newCountryButton",children:Object(j.jsx)("button",{onClick:function(){var e=prompt("Enter country name");e.trim().length>0?n(e):alert("Country name cannot be 0 length")},children:"New Country"})})},v=(t(45),function(){var e=Object(r.useState)([]),n=Object(l.a)(e,2),t=n[0],a=n[1],o=Object(r.useState)([]),s=Object(l.a)(o,2),m=s[0],b=s[1],v="https://medalsapi.azurewebsites.net/api/country";Object(r.useEffect)((function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){var n,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(v);case 2:n=e.sent,t=n.data,a(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}b([{id:1,name:"gold"},{id:2,name:"silver"},{id:3,name:"bronze"}]),function(){e.apply(this,arguments)}()}),[]);var O=function(){var e=Object(d.a)(u.a.mark((function e(n){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post(v,{name:n});case 2:r=e.sent,c=r.data,a(t.concat(c));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(u.a.mark((function e(n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t,a(t.filter((function(e){return e.id!==n}))),e.prev=2,e.next=5,f.a.delete("".concat(v,"/").concat(n));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),e.t0.response&&404===e.t0.response.status?console.log("The record does not exist - it may have already been deleted"):(alert("An error occurred while deleting"),a(r));case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(n){return e.apply(this,arguments)}}(),y=function(e,n){var r=t.findIndex((function(n){return n.id===e})),c=Object(i.a)(t);c[r][n]+=1,a(c)},g=function(e,n){var r=t.findIndex((function(n){return n.id===e})),c=Object(i.a)(t);c[r][n]-=1,a(c)};return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsxs)("div",{className:"appHeading",children:["Olympic Medals",Object(j.jsx)("span",{className:"badge",children:function(){var e=0;return m.forEach((function(n){e+=t.reduce((function(e,t){return e+t[n.name]}),0)})),e}()})]}),Object(j.jsx)("div",{className:"countries",children:t.map((function(e){return Object(j.jsx)(p,{country:e,medals:m,onDelete:x,onIncrement:y,onDecrement:g},e.id)}))}),Object(j.jsx)(h,{onAdd:O})]})}),O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),O()}},[[46,1,2]]]);
//# sourceMappingURL=main.67b30a22.chunk.js.map