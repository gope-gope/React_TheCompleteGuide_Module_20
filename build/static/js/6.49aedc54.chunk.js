(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{41:function(e,t,c){e.exports={card:"Card_card__3okKd"}},42:function(e,t,c){e.exports={form:"QuoteForm_form__3-5mt",loading:"QuoteForm_loading__2jNiz",control:"QuoteForm_control__2RhSW",actions:"QuoteForm_actions__3lPap"}},55:function(e,t,c){"use strict";c.r(t);var o=c(0),n=c(37),s=c(2),r=c(41),a=c.n(r),u=c(1),i=function(e){return Object(u.jsx)("div",{className:a.a.card,children:e.children})},l=c(14),d=c(42),j=c.n(d),b=function(e){var t=Object(o.useRef)(),c=Object(o.useRef)(),r=Object(o.useState)(!1),a=Object(n.a)(r,2),d=a[0],b=a[1];return Object(u.jsxs)(o.Fragment,{children:[Object(u.jsx)(s.a,{when:d,message:function(e){return"Are you sure you want to leave? All your data will be lost."}}),Object(u.jsx)(i,{children:Object(u.jsxs)("form",{onFocus:function(){console.log("focused."),b(!0)},className:j.a.form,onSubmit:function(o){o.preventDefault();var n=t.current.value,s=c.current.value;e.onAddQuote({author:n,text:s})},children:[e.isLoading&&Object(u.jsx)("div",{className:j.a.loading,children:Object(u.jsx)(l.a,{})}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:t})]}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:c})]}),Object(u.jsx)("div",{className:j.a.actions,children:Object(u.jsx)("button",{onClick:function(){b(!1)},className:"btn",children:"Add Quote"})})]})})]})},h=c(35),f=c(36);t.default=function(){var e=Object(h.a)(f.b),t=e.sendRequest,c=e.status,n=Object(s.h)();Object(o.useEffect)((function(){"completed"===c&&n.push("/quotes")}),[c,n]);return Object(u.jsx)("div",{children:Object(u.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){t(e),n.push("/quotes")}})})}}}]);
//# sourceMappingURL=6.49aedc54.chunk.js.map