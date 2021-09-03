(this["webpackJsonpmedals-b-react"]=this["webpackJsonpmedals-b-react"]||[]).push([[0],{24:function(e,n,t){},45:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t.n(r),a=t(19),o=t.n(a),s=(t(24),t(7)),i=t(3),u=t.n(i),d=t(5),l=t(10),m=t(6),f=t.n(m),j=t(0),p=function(e){var n=e.medal,t=e.country,r=e.onIncrement,c=e.onDecrement;return Object(j.jsxs)("div",{className:"medals",children:[t[n.name].current!==t[n.name].saved?Object(j.jsxs)("span",{className:"delta",children:[n.name," Medals: ",t[n.name].current]}):Object(j.jsxs)("span",{children:[n.name," Medals: ",t[n.name].current]}),Object(j.jsx)("button",{onClick:function(){return r(t.id,n.name)},children:"+"}),Object(j.jsx)("button",{disabled:0===t[n.name].current,onClick:function(){return c(t.id,n.name)},children:"-"})]})},b=function(e){var n=e.country,t=e.medals,r=e.onIncrement,a=e.onDecrement,o=e.onDelete,s=e.onUpdate,i=e.onReset;return Object(j.jsxs)("div",{className:"country",children:[Object(j.jsxs)("div",{className:"name",children:[n.name,Object(j.jsx)("span",{className:"badge",children:function(e,n){var t=0;return n.forEach((function(n){t+=e[n.name].current})),t}(n,t)})]}),t.map((function(e){return Object(j.jsx)(p,{country:n,medal:e,onIncrement:r,onDecrement:a},e.id)})),Object(j.jsx)("button",{onClick:function(){return o(n.id)},children:"delete"}),function(){var e=!1;return t.forEach((function(t){n[t.name].current!==n[t.name].saved&&(e=!0)})),e}()&&Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("button",{style:{marginLeft:"8px"},onClick:function(){return s(n.id)},children:"save"}),Object(j.jsx)("button",{style:{marginLeft:"8px"},onClick:function(){return i(n.id)},children:"reset"})]}),Object(j.jsx)("hr",{})]})},h=function(e){var n=e.onAdd;return Object(j.jsx)("div",{className:"newCountryButton",children:Object(j.jsx)("button",{onClick:function(){var e=prompt("Enter country name");e.trim().length>0?n(e):alert("Country name cannot be 0 length")},children:"New Country"})})},v=(t(45),function(){var e=Object(r.useState)([]),n=Object(l.a)(e,2),t=n[0],a=n[1],o=Object(r.useState)([]),i=Object(l.a)(o,2),m=i[0],p=i[1],v="https://medalsapi.azurewebsites.net/api/country";Object(r.useEffect)((function(){var e=[{id:1,name:"gold"},{id:2,name:"silver"},{id:3,name:"bronze"}];function n(){return(n=Object(d.a)(u.a.mark((function n(){var t,r,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.get(v);case 2:t=n.sent,r=t.data,c=[],r.forEach((function(n){var t={id:n.id,name:n.name};e.forEach((function(e){var r=n[e.name];t[e.name]={current:r,saved:r}})),c.push(t)})),a(c);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}p(e),function(){n.apply(this,arguments)}()}),[]);var x=function(){var e=Object(d.a)(u.a.mark((function e(n){var r,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post(v,{name:n});case 2:r=e.sent,c=r.data,o={id:c.id,name:c.name},m.forEach((function(e){var n=c[e.name];o[e.name]={current:n,saved:n}})),a(t.concat(o));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(u.a.mark((function e(n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t,a(t.filter((function(e){return e.id!==n}))),e.prev=2,e.next=5,f.a.delete("".concat(v,"/").concat(n));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),e.t0.response&&404===e.t0.response.status?console.log("The record does not exist - it may have already been deleted"):(alert("An error occurred while deleting"),a(r));case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(n){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(u.a.mark((function e(n){var r,c,o,i,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t,c=t.findIndex((function(e){return e.id===n})),o=Object(s.a)(t),i=o[c],d=[],m.forEach((function(e){i[e.name].current!==i[e.name].saved&&(d.push({op:"replace",path:e.name,value:i[e.name].current}),i[e.name].saved=i[e.name].current)})),console.log("json patch for id: ".concat(n,": ").concat(JSON.stringify(d))),a(o),e.prev=8,e.next=11,f.a.patch("".concat(v,"/").concat(n),d);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(8),e.t0.response&&404===e.t0.response.status?console.log("The record does not exist - it may have already been deleted"):(alert("An error occurred while updating"),a(r));case 16:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(n){return e.apply(this,arguments)}}(),g=function(e){var n=t.findIndex((function(n){return n.id===e})),r=Object(s.a)(t),c=r[n];m.forEach((function(e){c[e.name].current=c[e.name].saved})),a(r)},w=function(e,n){var r=t.findIndex((function(n){return n.id===e})),c=Object(s.a)(t);c[r][n].current+=1,a(c)},k=function(e,n){var r=t.findIndex((function(n){return n.id===e})),c=Object(s.a)(t);c[r][n].current-=1,a(c)};return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsxs)("div",{className:"appHeading",children:["Olympic Medals",Object(j.jsx)("span",{className:"badge",children:function(){var e=0;return m.forEach((function(n){e+=t.reduce((function(e,t){return e+t[n.name].current}),0)})),e}()})]}),Object(j.jsx)("div",{className:"countries",children:t.map((function(e){return Object(j.jsx)(b,{country:e,medals:m,onDelete:O,onUpdate:y,onReset:g,onIncrement:w,onDecrement:k},e.id)}))}),Object(j.jsx)(h,{onAdd:x})]})}),x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),x()}},[[46,1,2]]]);
//# sourceMappingURL=main.ab1693a4.chunk.js.map