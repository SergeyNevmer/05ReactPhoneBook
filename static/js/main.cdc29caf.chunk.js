(this["webpackJsonp05-phonebook-animation"]=this["webpackJsonp05-phonebook-animation"]||[]).push([[0],{11:function(t,e,n){t.exports={container:"App_container__8k_h3",title:"App_title__1bDrg"}},12:function(t,e,n){t.exports={container:"ContactFound_container__2l4fm",text:"ContactFound_text__395zO"}},13:function(t,e,n){t.exports={container:"FindContacts_container__3QN9E",containerForInfo:"FindContacts_containerForInfo__3S80k"}},17:function(t,e,n){t.exports={enter:"fade_enter__1FCEe",enterActive:"fade_enterActive__1-Cwt",exit:"fade_exit__3cNnH",exitActive:"fade_exitActive__EBqwJ"}},18:function(t,e,n){t.exports={container:"ContactsList_container__1a-xF"}},19:function(t,e,n){t.exports={enter:"pop_enter__1MlPi",enterActive:"pop_enterActive__28jN6",exit:"pop_exit__2swTV",exitActive:"pop_exitActive__3IYzf"}},2:function(t,e,n){t.exports={container:"ContactsListItem_container__F0nYD",containerForInfo:"ContactsListItem_containerForInfo__3i_mF",name:"ContactsListItem_name__3llI0",btn:"ContactsListItem_btn__3Z-ZY",number:"ContactsListItem_number__1iPTc",btnClose:"ContactsListItem_btnClose__1b7zd"}},33:function(t,e,n){"use strict";n.r(e);var a=n(5),c=n.n(a),r=n(20),i=n(14),o=n(15),s=n(16),u=n(22),l=n(21),m=n(1),b=n.n(m),d=n(11),_=n.n(d),j=n(7),h=n.n(j),p=n(0),x=function(t){var e=t.name,n=t.number,a=t.onChange,c=t.onSubmit;return Object(p.jsxs)("form",{className:h.a.container,onSubmit:c,children:[Object(p.jsxs)("div",{className:h.a.containerForInput,children:[Object(p.jsxs)("label",{className:h.a.input,children:["Name",Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:a})]}),Object(p.jsxs)("label",{className:h.a.input,children:["Number",Object(p.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:a})]})]}),Object(p.jsx)("button",{type:"submit",className:h.a.btn,children:"Add contact"})]})},f=n(12),O=n.n(f),v=function(){return Object(p.jsx)("div",{className:O.a.container,children:Object(p.jsx)("p",{className:O.a.text,children:"Contact already exists"})})},C=n(23),N=n(34),F=n(17),g=n.n(F),A=n(2),I=n.n(A),w=function(t){var e=t.name,n=t.number,a=t.deleteContact,c=t.id;return Object(p.jsx)("li",{className:I.a.container,children:Object(p.jsxs)("div",{className:I.a.containerForInfo,children:[Object(p.jsx)("p",{className:I.a.name,children:e}),Object(p.jsx)("p",{className:I.a.number,children:n}),Object(p.jsx)("button",{className:I.a.btn,onClick:function(){return a(c)},children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:I.a.btnClose,width:"40",height:"40",viewBox:"0 0 16 16",children:Object(p.jsx)("path",{d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"})})})]})})},L=n(18),S=n.n(L),y=n(35),k=n(19),z=n.n(k),E=function(t){var e=t.arr\u0421ontacts,n=t.deleteContact;return Object(p.jsx)(y.a,{className:S.a.container,component:"ul",children:e.map((function(t){return Object(p.jsx)(N.a,{timeout:200,unmountOnExit:!0,classNames:z.a,children:Object(p.jsx)(w,{name:t.name,number:t.number,deleteContact:n,id:t.id})},t.id)}))})},Z=n(13),B=n.n(Z),D=function(t){var e=t.value,n=t.onChange;return Object(p.jsx)("div",{className:B.a.container,children:Object(p.jsxs)("label",{className:B.a.containerForInfo,children:["Find contacts by name",Object(p.jsx)("input",{type:"text",value:e,onChange:n})]})})};var J=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",contacts:[],isOpen:!1,filter:""},t.handleChange=function(e){t.setState(Object(i.a)({},e.target.name,e.target.value))},t.handleFilter=function(e){t.setState({filter:e.target.value})},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;if(n.contacts.find((function(t){return t.name===a})))return t.setState({isOpen:!0}),void setTimeout((function(){t.setState({isOpen:!1})}),1e3);t.setState((function(t){return{contacts:[].concat(Object(r.a)(t.contacts),[{id:Object(C.a)(),name:a,number:c}])}})),t.reset()},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.reset=function(){t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=t.isOpen,c=t.contacts,r=t.filter,i=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(c,r);return Object(p.jsxs)("div",{className:_.a.container,children:[Object(p.jsx)("h1",{className:_.a.title,children:"Phonebook"}),Object(p.jsx)(N.a,{in:a,timeout:1e3,unmountOnExit:!0,classNames:g.a,children:Object(p.jsx)(v,{})}),Object(p.jsx)(x,{name:e,number:n,onChange:this.handleChange,onSubmit:this.handleSubmit}),c.length>=2&&Object(p.jsx)(D,{value:r,onChange:this.handleFilter}),c.length>0&&Object(p.jsx)(E,{"arr\u0421ontacts":i,deleteContact:this.deleteContact})]})}}]),n}(b.a.Component),M=document.getElementById("root");c.a.render(Object(p.jsx)(J,{}),M)},7:function(t,e,n){t.exports={container:"NameAndNumberForm_container__1MWfy",containerForInput:"NameAndNumberForm_containerForInput__3eDFH",input:"NameAndNumberForm_input___FxaV",btn:"NameAndNumberForm_btn__KyLSI"}}},[[33,1,2]]]);
//# sourceMappingURL=main.cdc29caf.chunk.js.map