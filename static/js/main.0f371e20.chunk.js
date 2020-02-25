(this.webpackJsonpreact_js_20=this.webpackJsonpreact_js_20||[]).push([[0],{11:function(t,e,n){t.exports={enter:"items_enter__22n_h",enterActive:"items_enterActive__WLmmZ",exit:"items_exit__1IlRo",exitActive:"items_exitActive__awcf9"}},13:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__OrlO3",formBtn:"ContactForm_formBtn__1YZTU",error_message:"ContactForm_error_message__-sRU0"}},14:function(t,e,n){t.exports={filter_form:"Filter_filter_form__349SC",title:"Filter_title__mtLuE",filterInput:"Filter_filterInput__u16Kg"}},18:function(t,e,n){t.exports={contactItem:"ContactList_contactItem__EQAbQ",contactList:"ContactList_contactList__3MzlG"}},21:function(t,e,n){},23:function(t,e,n){t.exports={title:"Phonebook_title__OJYud"}},34:function(t,e,n){t.exports=n(47)},46:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=n(3),u=n(48),i=n(23),m=n.n(i),s=n(11),f=n.n(s),_=n(24),p=n(25),b=n(26),h=n(31),E=n(27),d=n(32),C=n(12),v=n.n(C),g="ADD_CONTACT",y="DELETE_CONTACT",O="FILTER_CONTACT",N=n(13),j=n.n(N),F=n(28),w=function(t){return t.PhoneBook.contacts},I=function(t){return t.PhoneBook.filter},x=Object(F.a)([w,I],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),A=(n(21),function(t){function e(){var t,n;Object(p.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(t=Object(E.a)(e)).call.apply(t,[this].concat(r)))).state={name:"",number:"",showError:!1,message:""},n.handleChange=function(t){n.setState(Object(_.a)({},t.target.name,t.target.value))},n.handleSubmit=function(t){t.preventDefault();var e=n.state,a=e.name,r=e.number,c=n.props,o=c.contacts,l=c.onAddContact;if(o.find((function(t){return t.name.toLowerCase()===a.toLowerCase()})))return n.setState((function(){return{message:"".concat(a," is already in your contacts"),showError:!0}})),void setTimeout((function(){n.setState({showError:!1})}),2500);a&&r?l({name:a,number:r,id:v()()}):(n.setState((function(){return{message:"One of the fields is empty!",showError:!0}})),setTimeout((function(){n.setState({showError:!1})}),2500)),n.setState({name:"",number:""})},n}return Object(d.a)(e,t),Object(b.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=t.showError,c=t.message;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:j.a.contactForm},r.a.createElement("label",{htmlFor:v()()},"Name",r.a.createElement("input",{type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:v()()},"Number",r.a.createElement("input",{type:"number",placeholder:"Enter phone number",value:n,name:"number",onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:j.a.formBtn},"Add contact")),r.a.createElement(u.a,{in:a,unmountOnExit:!0,timeout:300,classNames:"alert"},r.a.createElement("div",{className:j.a.error_message},r.a.createElement("p",null,c))))}}]),e}(a.Component)),L=Object(l.b)((function(t){return{contacts:w(t)}}),(function(t){return{onAddContact:function(e){return t(function(t){return{type:g,payload:{contact:t}}}(e))}}}))(A),T=n(49),S=n(9),k=n.n(S),B=function(t){var e=t.name,n=t.number,a=t.onDeleteContact;return r.a.createElement("div",{className:k.a.contactItem},r.a.createElement("p",{className:k.a.contact_name},"Contact:",e),r.a.createElement("p",{className:k.a.contact_number},n),r.a.createElement("button",{type:"button",onClick:a,className:k.a.listBtn},"\u2718"))},D=n(18),P=n.n(D),R=Object(l.b)((function(t){return{contacts:x(t)}}),(function(t){return{onDeleteContact:function(e){return t(function(t){return{type:y,payload:{id:t}}}(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{component:"ul",className:P.a.contactList},e.map((function(t){return r.a.createElement(u.a,{key:t.id,timeout:250,classNames:f.a},r.a.createElement("li",{className:P.a.contactItem},r.a.createElement(B,{name:t.name,number:t.number,onDeleteContact:function(){return n(t.id)}})))}))))})),J=n(14),Q=n.n(J),H=Object(l.b)((function(t){return{filter:I(t)}}),(function(t){return{onChangeFilter:function(e){return t(function(t){return{type:O,payload:{value:t}}}(e))}}}))((function(t){var e=t.value,n=t.onChangeFilter;return r.a.createElement("div",{className:Q.a.filter_form},r.a.createElement("p",{className:Q.a.title},"Find contacts by name..."),r.a.createElement("input",{className:Q.a.filterInput,type:"text",placeholder:"Type to filter...",value:e,onChange:function(t){return n(t.target.value)}}))})),U=(n(46),Object(l.b)((function(t){return{contacts:w(t)}}))((function(t){var e=t.contacts;return r.a.createElement("div",null,r.a.createElement(u.a,{in:!0,timeout:500,classNames:"title",appear:!0},r.a.createElement("div",null,r.a.createElement("h2",{className:m.a.title},"Phonebook"))),r.a.createElement(L,null),e.length>1&&r.a.createElement(u.a,{timeout:250,classNames:f.a},r.a.createElement(H,null)),r.a.createElement(R,null))}))),Y=function(){return r.a.createElement(U,null)},Z=n(4),z=n(29),G=n(30),K=Object(Z.combineReducers)({contacts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case g:return[a.contact].concat(Object(G.a)(t));case y:return t.filter((function(t){return t.id!==a.id}));default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case O:return a.value;default:return t}}}),M=Object(Z.combineReducers)({PhoneBook:K}),W=Object(Z.createStore)(M,Object(z.devToolsEnhancer)());o.a.render(r.a.createElement(l.a,{store:W},r.a.createElement(Y,null)),document.getElementById("root"))},9:function(t,e,n){t.exports={listBtn:"ContactItem_listBtn__23lin",contactItem:"ContactItem_contactItem__5eHQm",contact_name:"ContactItem_contact_name__2ssgH",contact_number:"ContactItem_contact_number__3ySDE"}}},[[34,1,2]]]);
//# sourceMappingURL=main.0f371e20.chunk.js.map