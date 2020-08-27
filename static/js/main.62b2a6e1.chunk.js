(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=(a(16),a(10)),i=a(1),s=a(6),u=a.n(s);var m=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",src:u.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}))},d=a(7),f=a.n(d),p=a(8),_=a(9),h=new(function(){function e(t){Object(p.a)(this,e),this._baseURL=t.baseUrl,this._headers=t.headers}return Object(_.a)(e,[{key:"getInitialCards",value:function(){return fetch(this._baseURL+"/cards",{headers:this._headers}).then((function(e){if(e.ok)return e.json()})).catch((function(e){console.log(e)}))}},{key:"addCard",value:function(e,t){return fetch(this._baseURL+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){if(e.ok)return e.json()})).catch((function(e){console.log(e)}))}},{key:"getUserInfo",value:function(){return fetch(this._baseURL+"/users/me",{headers:this._headers}).then((function(e){if(e.ok)return e.json()})).catch((function(e){console.log(e)}))}},{key:"editUserInfo",value:function(e,t){return fetch(this._baseURL+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){if(e.ok)return e.json()})).catch((function(e){console.log(e)}))}},{key:"editAvatarInfo",value:function(e){return fetch(this._baseURL+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){if(e.ok)return e.json()})).catch((function(e){console.log(e)}))}},{key:"setLike",value:function(e){return fetch(this._baseURL+"/cards/likes/"+e,{method:"PUT",headers:this._headers}).then((function(e){if(e.ok)return e.json()})).catch((function(e){console.log(e)}))}},{key:"deleteLike",value:function(e){return fetch(this._baseURL+"/cards/likes/"+e,{method:"DELETE",headers:this._headers}).then((function(e){if(e.ok)return e.json()})).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch(this._baseURL+"/cards/"+e,{method:"DELETE",headers:this._headers}).then((function(e){if(e.ok)return e.json()})).catch((function(e){console.log(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-13",headers:{authorization:"02a3d997-e4eb-47bc-b832-a3089c38bc48","Content-Type":"application/json"}}),E=r.a.createContext();var b=function(e){var t=r.a.useContext(E),a=e.card.owner._id===t._id,n="element__delete-button ".concat(a?"":"element__delete-button_hidden"),c=e.card.likes.some((function(e){return e._id===t._id})),o="element__like-button ".concat(c?"element__like-button_active":"");return r.a.createElement("div",{className:"element",key:e.card._id},r.a.createElement("img",{className:"element__image",style:{backgroundImage:"url(".concat(e.card.link,")")},onClick:function(){e.onCardClick(e.card)}}),r.a.createElement("div",{className:"element__description"},r.a.createElement("p",{className:"element__heading"},e.card.name),r.a.createElement("div",{className:"element__like-container"},r.a.createElement("button",{type:"button",className:o,onClick:function(){e.onCardLike(e.card)}}),r.a.createElement("p",{className:"element__like-number"},e.card.likes.length))),r.a.createElement("button",{type:"button",className:n,onClick:function(){e.onCardDelete(e.card)}}))};var v=function(e){var t=r.a.useContext(E);return r.a.createElement("main",{className:"main"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__container"},r.a.createElement("img",{className:"profile__image",alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f",onClick:e.onEditAvatar,src:t?t.avatar:""}),r.a.createElement("img",{className:"profile__image-back",src:f.a})),r.a.createElement("div",{className:"profile__streamer"},r.a.createElement("div",{className:"profile__info"},r.a.createElement("h1",{className:"profile__author"},t?t.name:""),r.a.createElement("button",{type:"button",className:"profile__edit-button",onClick:e.onEditProfile})),r.a.createElement("p",{className:"profile__description"},t?t.about:"")),r.a.createElement("button",{type:"button",className:"profile__add-button",onClick:e.onAddPlace})),r.a.createElement("section",{className:"elements"},e.cards.map((function(t){return r.a.createElement(b,{card:t,key:t._id,handleDelete:e.handleDelete,onCardClick:e.onCardClick,onCardLike:e.handleCardLike,onCardDelete:e.handleCardDelete})}))))};var k=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020. \u041a\u0430\u0441\u0438\u0446\u043a\u0430\u044f \u0415\u043b\u0435\u043d\u0430"))};var g=function(e){return r.a.useEffect((function(){e.closeEscOverlay()}),[e.isOpen]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"popup popup_type_image ".concat(e.isOpen?"popup_opened":"")},r.a.createElement("div",{className:"popup__case"},r.a.createElement("img",{className:"popup__image",src:e.card?e.card.link:""}),r.a.createElement("p",{className:"popup__description"},e.card?e.card.name:""),r.a.createElement("button",{type:"button",className:"popup__close-button popup__close-button_type_image",onClick:e.onClose})),r.a.createElement("div",{className:"popup__overlay-black popup__overlay-black_type_image"})))};var O=function(e){return r.a.useEffect((function(){e.closeEscOverlay()}),[e.isOpen]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":"")},r.a.createElement("div",{className:"popup__container"},r.a.createElement("h2",{className:"popup__heading popup__heading_type_".concat(e.name)},e.title),r.a.createElement("form",{className:"form form_type_".concat(e.name),onSubmit:e.handleSubmit,noValidate:!0},e.children),r.a.createElement("button",{type:"button",className:"popup__close-button popup__close-button_type_".concat(e.name),onClick:e.onClose})),r.a.createElement("div",{className:"popup__overlay-black popup__overlay-black_type_".concat(e.name)})))};var A=function(e){var t=r.a.useContext(E),a=r.a.useState(""),n=Object(i.a)(a,2),c=n[0],o=n[1],l=r.a.useState(""),s=Object(i.a)(l,2),u=s[0],m=s[1];return r.a.useEffect((function(){null!==t&&(o(t.name),m(t.about))}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,handleSubmit:function(t){t.preventDefault(),e.onUpdateUser(c,u)},closeEscOverlay:e.closeEscOverlay},r.a.createElement("fieldset",{className:"form__set"},r.a.createElement("label",{className:"form__field"},r.a.createElement("input",{type:"text",className:"form__input form__input_name",id:"name-input",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",value:c,onChange:function(e){o(e.target.value)}}),r.a.createElement("span",{className:"form__input-error",id:"name-input-error"})),r.a.createElement("label",{className:"form__field"},r.a.createElement("input",{type:"text",className:"form__input form__input_description form__input_type_bottom",id:"description-input",placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",required:!0,minLength:"2",maxLength:"200",value:u,onChange:function(e){m(e.target.value)}}),r.a.createElement("span",{className:"form__input-error",id:"description-input-error"})),r.a.createElement("button",{className:"form__submit-button form__submit-button_type_profile"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))};var y=function(e){var t=r.a.useRef("");return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,handleSubmit:function(a){var n=t.current.value;a.preventDefault(),e.onUpdateAvatar(n)},closeEscOverlay:e.closeEscOverlay},r.a.createElement("fieldset",{className:"form__set"},r.a.createElement("label",{className:"form__field"},r.a.createElement("input",{type:"url",className:"form__input form__input_avatar",id:"avatar-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,ref:t}),r.a.createElement("span",{className:"form__input-error",id:"avatar-input-error"})),r.a.createElement("button",{className:"form__submit-button form__submit-button_type_avatar"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))};var C=function(e){var t=r.a.useState(""),a=Object(i.a)(t,2),n=a[0],c=a[1],o=r.a.useState(""),l=Object(i.a)(o,2),s=l[0],u=l[1];return r.a.useEffect((function(){c(""),u("")}),[e.isOpen]),r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,handleSubmit:function(t){t.preventDefault(),e.onAddPlace(n,s)},closeEscOverlay:e.closeEscOverlay},r.a.createElement("fieldset",{className:"form__set"},r.a.createElement("label",{className:"form__field"},r.a.createElement("input",{type:"text",className:"form__input form__input_title",id:"title-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30",value:n,onChange:function(e){c(e.target.value)}}),r.a.createElement("span",{className:"form__input-error",id:"title-input-error"})),r.a.createElement("label",{className:"form__field"},r.a.createElement("input",{type:"url",className:"form__input form__input_link",id:"link-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:s,onChange:function(e){u(e.target.value)}}),r.a.createElement("span",{className:"form__input-error",id:"link-input-error"})),r.a.createElement("button",{className:"form__submit-button form__submit-button_type_place"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))))};var N=function(){var e=r.a.useState(null),t=Object(i.a)(e,2),a=t[0],n=t[1],c=r.a.useState([]),o=Object(i.a)(c,2),s=o[0],u=o[1];r.a.useEffect((function(){Promise.all([h.getUserInfo(),h.getInitialCards()]).then((function(e){var t=Object(i.a)(e,2),a=t[0],r=t[1];n(a),u(r)}))}),[]);var d=r.a.useState(!1),f=Object(i.a)(d,2),p=f[0],_=f[1],b=r.a.useState(!1),O=Object(i.a)(b,2),N=O[0],j=O[1],L=r.a.useState(!1),w=Object(i.a)(L,2),U=w[0],S=w[1],R=r.a.useState(!1),D=Object(i.a)(R,2),P=D[0],x=D[1],M=r.a.useState(!1),J=Object(i.a)(M,2),T=J[0],z=J[1],B=r.a.useState(),G=Object(i.a)(B,2),I=G[0],H=G[1];function K(){_(!1),S(!1),j(!1),x(!1)}function Y(){function e(e){"Escape"===e.key&&K()}function t(e){e.target.classList.contains("popup__overlay-black")&&K()}return document.addEventListener("keydown",e),document.addEventListener("click",t),function(){document.removeEventListener("keydown",e),document.removeEventListener("click",t)}}return r.a.createElement("div",{className:"page"},r.a.createElement(E.Provider,{value:a},r.a.createElement(m,null),r.a.createElement(v,{onEditAvatar:function(){S(!U)},onEditProfile:function(){_(!p)},onAddPlace:function(){j(!N)},cards:s,handleDelete:function(){z(!T)},onCardClick:function(e){H(e),x(!P)},handleCardLike:function(e){e.likes.some((function(e){return e._id===a._id}))?h.deleteLike(e._id).then((function(t){var a=s.map((function(a){return a._id===e._id?t:a}));u(a)})):h.setLike(e._id).then((function(t){var a=s.map((function(a){return a._id===e._id?t:a}));u(a)}))},handleCardDelete:function(e){h.deleteCard(e._id).then((function(t){var a=s.filter((function(t){return t._id!==e._id}));u(a)}))}}),r.a.createElement(k,null),r.a.createElement(C,{isOpen:N,onClose:K,onAddPlace:function(e,t){h.addCard(e,t).then((function(e){u([e].concat(Object(l.a)(s))),K()}))},closeEscOverlay:Y}),r.a.createElement(A,{isOpen:p,onClose:K,onUpdateUser:function(e,t){h.editUserInfo(e,t).then((function(e){n(e),K()}))},closeEscOverlay:Y}),r.a.createElement(y,{isOpen:U,onClose:K,onUpdateAvatar:function(e){h.editAvatarInfo(e).then((function(e){n(e),K()}))},closeEscOverlay:Y}),r.a.createElement(g,{card:I,isOpen:P,onClose:K,closeEscOverlay:Y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t){e.exports="data:image/png;base64,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"},7:function(e,t,a){e.exports=a.p+"static/media/editbutton.6bfdb354.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.62b2a6e1.chunk.js.map