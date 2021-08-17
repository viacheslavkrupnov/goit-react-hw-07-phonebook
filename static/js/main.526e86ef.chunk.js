(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={button:"ContactForm_button__1MLZK",form:"ContactForm_form__1fuOn"}},20:function(t,e,n){t.exports={list:"ContactsList_list__2RiYd",contacts:"ContactsList_contacts__1CdsV",button:"ContactsList_button__2RjNg"}},25:function(t,e,n){t.exports={label:"Filter_label__3DcZT",filter:"Filter_filter__1E5tH"}},26:function(t,e,n){t.exports={section:"Section_section__Ap5Zy",title:"Section_title__2S6oE"}},36:function(t,e,n){t.exports={cotainer:"Container_cotainer__1k7pl"}},43:function(t,e,n){},77:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(10),o=n.n(r),s=(n(42),n(43),n(7)),i=n(27),u=n(23),l=n.n(u),b=(n(52),n(12)),d=n.n(b),j=n(5),f=n(8),p=n.n(f),O=n(19),h=n(13),m=n.n(h),v=n(2),x=Object(v.b)("contacts/fetchContactsRequest"),C=Object(v.b)("contacts/fetchContactsSuccess"),_=Object(v.b)("contacts/fetchContactsError"),g=Object(v.b)("contacts/addContactRequest"),y=Object(v.b)("contacts/addContactSuccess"),k=Object(v.b)("contacts/addContactError"),w=Object(v.b)("contacts/deleteContactRequest"),N=Object(v.b)("contacts/deleteContactSuccess"),R=Object(v.b)("contacts/deleteContactError"),S=Object(v.b)("contacts/changeFilter");m.a.defaults.baseURL="http://localhost:3000";var E={fetchContacts:function(){return function(){var t=Object(O.a)(p.a.mark((function t(e){var n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(x()),t.prev=1,t.next=4,m.a.get("/contacts");case 4:n=t.sent,c=n.data,e(C(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(_(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t,e){return function(){var n=Object(O.a)(p.a.mark((function n(c){var a,r,o;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={name:t,number:e},c(g()),n.prev=2,n.next=5,m.a.post("/contacts",a);case 5:r=n.sent,o=r.data,c(y(o)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),c(k(n.t0));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(O.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(w()),e.prev=1,e.next=4,m.a.delete("/contacts/".concat(t));case 4:n(N(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(R(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}},q=n(16),A=function(t){return t.contacts.items},F=function(t){return t.contacts.filter},L=Object(q.a)([A,F],(function(t,e){return function(t){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(t)})),Z=n(1);var z=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),u=o[0],b=o[1],f=l.a.generate(),p=l.a.generate(),O=Object(j.b)(),h=Object(j.c)(A),m=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":b(c);break;default:s.b.error('There are no type input "'.concat(n,'"'))}},v=function(){a(""),b("")};return Object(Z.jsxs)("form",{className:d.a.form,onSubmit:function(t){return t.preventDefault(),h.find((function(t){return t.name===n}))?(s.b.error("".concat(n," Contact already exists")),void v()):""===n?s.b.error("Please enter contact name"):""===u?s.b.error("Please enter contact number"):(O(E.addContact(n,u)),void v())},children:[Object(Z.jsx)("label",{htmlFor:f,children:Object(Z.jsx)("input",{className:d.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Enter name",value:n,onChange:m,id:f})}),Object(Z.jsx)("label",{htmlFor:p,children:Object(Z.jsx)("input",{className:d.a.input,type:"tell",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"Enter phone number",value:u,onChange:m,id:p})}),Object(Z.jsxs)("button",{className:d.a.button,type:"submit",children:[" ","Add Contact"," "]})]})},T=n(6),J=n.n(T),M=n(20),P=n.n(M),B=function(){var t=Object(j.b)();Object(c.useEffect)((function(){t(E.fetchContacts())}),[t]);var e=Object(j.c)(L);return 0===e.length?null:Object(Z.jsx)("div",{className:P.a.contacts,children:Object(Z.jsx)("ul",{className:P.a.list,children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(Z.jsxs)("li",{children:[Object(Z.jsxs)("p",{children:[c,": ",a]}),Object(Z.jsx)("button",{className:P.a.button,type:"button",onClick:function(){return function(e){return t(E.deleteContact(e))}(n)},children:"delete"})]},n)}))})})};B.protoTypes={contacts:J.a.arrayOf(J.a.shape({id:J.a.string.isRequired,name:J.a.string.isRequired,number:J.a.string.isRequired})).isRequired,onRemove:J.a.func.isRequired};var D=B,H=n(25),I=n.n(H),K=function(){var t=Object(j.c)(F),e=Object(j.b)();return Object(Z.jsxs)("label",{className:I.a.label,children:["Find contacts by name",Object(Z.jsx)("input",{className:I.a.input,type:"text",name:"filter",value:t,onChange:function(t){return e(S(t.target.value))},placeholder:"Enter name for Search"})]})},U=n(36),V=n.n(U);var Y=function(t){var e=t.children;return Object(Z.jsx)("div",{className:V.a.container,children:e})},$=n(26),G=n.n($);var Q=function(t){var e=t.title,n=t.children;return Object(Z.jsxs)("section",{className:G.a.section,children:[Object(Z.jsx)("h2",{className:G.a.title,children:e}),n]})};var W,X=function(){return Object(Z.jsxs)(Y,{children:[Object(Z.jsx)(Q,{title:"Phonebook",children:Object(Z.jsx)(z,{})}),Object(Z.jsxs)(Q,{title:"Contacts",children:[Object(Z.jsx)(K,{}),Object(Z.jsx)(D,{}),Object(Z.jsx)(s.a,{autoClose:3e3})]})]})},tt=n(18),et=n(9),nt=n(37),ct=n.n(nt),at=n(14),rt=n(3),ot=Object(v.c)([],(W={},Object(at.a)(W,C,(function(t,e){return e.payload})),Object(at.a)(W,y,(function(t,e){var n=e.payload;return[].concat(Object(tt.a)(t),[n])})),Object(at.a)(W,N,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),W)),st=Object(v.c)("",Object(at.a)({},S,(function(t,e){return e.payload}))),it=Object(rt.b)({items:ot,filter:st}),ut=[].concat(Object(tt.a)(Object(v.d)({serializableCheck:{ignoredActions:[et.a,et.f,et.b,et.c,et.d,et.e]}})),[ct.a]),lt=Object(v.a)({reducer:{contacts:it},middleware:ut,devTools:!1});o.a.render(Object(Z.jsx)(a.a.StrictMode,{children:Object(Z.jsx)(j.a,{store:lt,children:Object(Z.jsx)(X,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.526e86ef.chunk.js.map