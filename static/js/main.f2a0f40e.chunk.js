(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{42:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a,r,c,o,i,s=n(0),l=n.n(s),d=n(16),u=n.n(d),p=(n(37),n(4)),b=n(13),x=n(27),h=n(1),m=n(28),j=n(6),f=Object(m.a)({reducerPath:"contactsApi",baseQuery:Object(j.d)({baseUrl:"https://627522286d3bc09e106b01fe.mockapi.io/"}),tagTypes:["Contacts"],endpoints:function(e){return{fetchContacts:e.query({query:function(){return"contacts"},providesTags:function(e){return e?[].concat(Object(b.a)(e.map((function(e){return{type:"Contacts",id:e.id}}))),[{type:"Contacts",id:"LIST"}]):[{type:"Contacts",id:"LIST"}]}}),addContact:e.mutation({query:function(e){return{url:"contacts",method:"POST",body:e}},invalidatesTags:[{type:"Contacts",id:"LIST"}]}),deleteTodo:e.mutation({query:function(e){return{url:"contacts/".concat(e),method:"DELETE"}},invalidatesTags:[{type:"Contacts",id:"LIST"}]})}}}),g=f.useFetchContactsQuery,O=f.useDeleteTodoMutation,y=f.useAddContactMutation,w=Object(h.d)({name:"filter",initialState:{filter:""},reducers:{setFilter:function(e,t){e.filter=t.payload}}}),v=w.actions.setFilter,C=Object(h.a)({reducer:Object(x.a)({filter:w.reducer},f.reducerPath,f.reducer),middleware:function(e){return[].concat(Object(b.a)(e()),[f.middleware])}}),k=(n(42),n(19)),E=n.n(k),T=n(23),F=n.n(T),S=n(29),L=n(11),N=n(7),I=n(8),A=I.a.button(a||(a=Object(N.a)(["\n  border: none;\n  outline: none;\n  border-radius: 50px;\n  padding: 8px 10px;\n  margin-top: 10px;\n  margin-left: auto;\n  background-color: #f44336;\n  color: white;\n  font-weight: 500;\n  &:hover {\n    cursor: pointer;\n    transition: all 0.3s ease 0s;\n    transform: translateY(-2px);\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),\n      0 17px 50px 0 rgba(0, 0, 0, 0.19);\n  }\n"]))),P=I.a.form(r||(r=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  background-color: #e6d8b4;\n  padding: 10px;\n  width: 100%;\n  border-radius: 4px;\n  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 1px 3px rgba(0, 0, 0, 0.12);\n"]))),q=I.a.input(c||(c=Object(N.a)(["\n  width: 550px;\n  margin: 10px 0 30px 0;\n"]))),M=n(2),R=function(){var e=Object(s.useState)(""),t=Object(L.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(""),c=Object(L.a)(r,2),o=c[0],i=c[1],l=y(),d=Object(L.a)(l,1)[0],u=g().data,p=void 0===u?[]:u,b=function(){var e=Object(S.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!p.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))){e.next=4;break}return alert("".concat(n.toLocaleUpperCase()," is already in contacts!")),e.abrupt("return");case 4:return e.prev=4,e.next=7,d({name:n,number:o});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),console.log("ERROR");case 12:h();case 13:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}(),x=function(e){switch(e.target.name){case"name":a(e.target.value);break;case"number":i(e.target.value);break;default:return}},h=function(){a(""),i("")};return Object(M.jsxs)(P,{onSubmit:b,children:[Object(M.jsxs)("label",{children:["Name",Object(M.jsx)(q,{type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:x,required:!0})]}),Object(M.jsxs)("label",{children:["Number",Object(M.jsx)(q,{type:"tel",name:"number",value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:x,required:!0})]}),Object(M.jsx)(A,{type:"submit",children:"Add contact"})]})},z=function(e){return e.filter.filter},B=["title","titleId"];function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},D.apply(this,arguments)}function J(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Z(e,t){var n=e.title,a=e.titleId,r=J(e,B);return s.createElement("svg",D({id:"Layer_1",style:{enableBackground:"new 0 0 64 64"},viewBox:"0 0 64 64",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":a},r),n?s.createElement("title",{id:a},n):null,o||(o=s.createElement("style",{type:"text/css"},"\n\t.st0{fill:#fff;}\n")),i||(i=s.createElement("g",null,s.createElement("g",{id:"Icon-Trash",transform:"translate(232.000000, 228.000000)"},s.createElement("polygon",{className:"st0",id:"Fill-6",points:"-207.5,-205.1 -204.5,-205.1 -204.5,-181.1 -207.5,-181.1    "}),s.createElement("polygon",{className:"st0",id:"Fill-7",points:"-201.5,-205.1 -198.5,-205.1 -198.5,-181.1 -201.5,-181.1    "}),s.createElement("polygon",{className:"st0",id:"Fill-8",points:"-195.5,-205.1 -192.5,-205.1 -192.5,-181.1 -195.5,-181.1    "}),s.createElement("polygon",{className:"st0",id:"Fill-9",points:"-219.5,-214.1 -180.5,-214.1 -180.5,-211.1 -219.5,-211.1    "}),s.createElement("path",{className:"st0",d:"M-192.6-212.6h-2.8v-3c0-0.9-0.7-1.6-1.6-1.6h-6c-0.9,0-1.6,0.7-1.6,1.6v3h-2.8v-3     c0-2.4,2-4.4,4.4-4.4h6c2.4,0,4.4,2,4.4,4.4V-212.6",id:"Fill-10"}),s.createElement("path",{className:"st0",d:"M-191-172.1h-18c-2.4,0-4.5-2-4.7-4.4l-2.8-36l3-0.2l2.8,36c0.1,0.9,0.9,1.6,1.7,1.6h18     c0.9,0,1.7-0.8,1.7-1.6l2.8-36l3,0.2l-2.8,36C-186.5-174-188.6-172.1-191-172.1",id:"Fill-11"})))))}var Q,U,Y,V,X,$=s.forwardRef(Z),_=(n.p,function(e){var t=e.id,n=e.name,a=e.number,r=O(),c=Object(L.a)(r,2),o=c[0],i=c[1].isLoading;return Object(M.jsxs)(M.Fragment,{children:[n,": ",a,Object(M.jsx)(A,{type:"button",disabled:i,onClick:function(){return o(t)},children:i?Object(M.jsx)(E.a,{className:"loader",type:"Rings",color:"orange",height:25,width:25}):Object(M.jsx)($,{width:"25",height:"25"})})]})}),G=I.a.ul(Q||(Q=Object(N.a)(["\n  background-color: #e6d8b4;\n  margin-top: 10px;\n  padding: 10px;\n  width: 100%;\n  border-radius: 4px;\n  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 1px 3px rgba(0, 0, 0, 0.12);\n"]))),H=I.a.li(U||(U=Object(N.a)(["\n  display: flex;\n  align-items: flex-end;\n"]))),K=function(){var e=g().data,t=void 0===e?[]:e,n=Object(p.e)(z);return Object(M.jsx)(G,{children:t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.number.includes(n)})).sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e){var t=e.id,n=e.name,a=e.number;return Object(M.jsx)(H,{children:Object(M.jsx)(_,{name:n,number:a,id:t})},t)}))})},W=I.a.label(Y||(Y=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  background-color: #e6d8b4;\n  padding: 10px;\n  width: 100%;\n  border-radius: 4px;\n  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 1px 3px rgba(0, 0, 0, 0.12);\n"]))),ee=I.a.input(V||(V=Object(N.a)(["\n  width: 550px;\n  margin: 10px 0 30px 0;\n"]))),te=function(){var e=Object(p.d)();return Object(M.jsxs)(W,{children:["Find contacts by name or number",Object(M.jsx)(ee,{type:"text",name:"filter",onChange:function(t){return e(v(t.currentTarget.value))}})]})},ne=I.a.div(X||(X=Object(N.a)(["\n  width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),ae=function(e){var t=e.children;return Object(M.jsx)(ne,{children:t})},re=function(){var e=g(),t=e.data,n=void 0===t?[]:t,a=e.isFetching;return Object(M.jsxs)(ae,{children:[Object(M.jsx)("h1",{children:"Phonebook"}),Object(M.jsx)(R,{}),Object(M.jsx)("h2",{children:"Contacts"}),n.length>0&&Object(M.jsx)(te,{}),a&&0===n.length&&Object(M.jsx)(E.a,{className:"loader",type:"Rings",color:"orange",height:100,width:100}),0===n.length?Object(M.jsx)("p",{children:"You have no contacts yet"}):Object(M.jsx)(K,{})]})};u.a.render(Object(M.jsx)(l.a.StrictMode,{children:Object(M.jsx)(p.a,{store:C,children:Object(M.jsx)(re,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.f2a0f40e.chunk.js.map