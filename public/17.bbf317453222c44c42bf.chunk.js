(this.webpackJsonp=this.webpackJsonp||[]).push([[17,25,26],{43:function(t,e,i){"use strict";function a(t,e){return e?t.forEach(t=>t.setAttribute("disabled","true")):t.forEach(t=>t.removeAttribute("disabled")),()=>a(t,!e)}i.d(e,"a",(function(){return a}))},44:function(t,e,i){"use strict";i.r(e);var a=i(2),n=i(15),s=i(8),r=i(31),o=function(t,e,i,a){return new(i||(i=Promise))((function(n,s){function r(t){try{c(a.next(t))}catch(t){s(t)}}function o(t){try{c(a.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,o)}c((a=a.apply(t,e||[])).next())}))};const c=new r.a("page-chats",!1,()=>(n.default.pushToState("authState",{_:"authStateSignedIn"}),Promise.resolve().then(i.bind(null,10)).then(t=>{t.default.broadcast("im_mount")}),s.default.requestedServerLanguage||s.default.getCacheLangPack().then(t=>{t.local&&s.default.getLangPack(t.lang_code)}),Object(a.a)(),new Promise(t=>{window.requestAnimationFrame(()=>{Promise.all([i.e(1),i.e(3),i.e(5),i.e(14)]).then(i.bind(null,80)).finally(()=>o(void 0,void 0,void 0,(function*(){t()})))})})));e.default=c},55:function(t,e,i){"use strict";var a=i(9),n=i(23),s=i(14);const r=new class{getState(){return s.a.invokeApi("account.getPassword").then(t=>t)}updateSettings(t={}){return this.getState().then(e=>{let i,a;const n={password:null,new_settings:{_:"account.passwordInputSettings",hint:t.hint,email:t.email}};i=t.currentPassword?s.a.computeSRP(t.currentPassword,e):Promise.resolve({_:"inputCheckPasswordEmpty"});const r=e.new_algo,o=new Uint8Array(r.salt1.length+32);return o.randomize(),o.set(r.salt1,0),r.salt1=o,a=t.newPassword?s.a.computeSRP(t.newPassword,e,!0):Promise.resolve(new Uint8Array),Promise.all([i,a]).then(t=>(n.password=t[0],n.new_settings.new_algo=r,n.new_settings.new_password_hash=t[1],s.a.invokeApi("account.updatePasswordSettings",n)))})}check(t,e,i={}){return s.a.computeSRP(t,e).then(t=>s.a.invokeApi("auth.checkPassword",{password:t},i).then(t=>("auth.authorization"===t._&&(n.a.saveApiUser(t.user),s.a.setUserAuth(t.user.id)),t)))}confirmPasswordEmail(t){return s.a.invokeApi("account.confirmPasswordEmail",{code:t})}resendPasswordEmail(){return s.a.invokeApi("account.resendPasswordEmail")}cancelPasswordEmail(){return s.a.invokeApi("account.cancelPasswordEmail")}};a.a.passwordManager=r,e.a=r},61:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var a=i(8);class n{constructor(t){this.element=document.body.querySelector("."+t.className),this.container=document.createElement("div"),this.container.className="container center-align",this.imageDiv=document.createElement("div"),this.imageDiv.className="auth-image",this.title=document.createElement("h4"),t.titleLangKey&&this.title.append(Object(a.i18n)(t.titleLangKey)),this.subtitle=document.createElement("p"),this.subtitle.className="subtitle",t.subtitleLangKey&&this.subtitle.append(Object(a.i18n)(t.subtitleLangKey)),this.container.append(this.imageDiv,this.title,this.subtitle),t.withInputWrapper&&(this.inputWrapper=document.createElement("div"),this.inputWrapper.className="input-wrapper",this.container.append(this.inputWrapper)),this.element.append(this.container)}}},68:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i(11),n=i(26);class s extends n.b{constructor(t={}){super(Object.assign({plainText:!0},t)),this.passwordVisible=!1,this.onVisibilityClick=t=>{Object(a.a)(t),this.passwordVisible=!this.passwordVisible,this.toggleVisible.classList.toggle("eye-hidden",this.passwordVisible),this.input.type=this.passwordVisible?"text":"password",this.onVisibilityClickAdditional&&this.onVisibilityClickAdditional()};const e=this.input;e.type="password",e.setAttribute("required",""),e.autocomplete="off";const i=document.createElement("input");i.classList.add("stealthy"),i.tabIndex=-1,i.type="password",e.parentElement.prepend(i),e.parentElement.insertBefore(i.cloneNode(),e.nextSibling);const n=this.toggleVisible=document.createElement("span");n.classList.add("toggle-visible","tgico"),this.container.classList.add("input-field-password"),this.container.append(n),n.addEventListener("click",this.onVisibilityClick),n.addEventListener("touchend",this.onVisibilityClick)}}},73:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var a=i(28);class n{constructor(t,e){this.passwordInputField=t,this.size=e,this.needFrame=0,this.container=document.createElement("div"),this.container.classList.add("media-sticker-wrapper")}load(){return this.loadPromise?this.loadPromise:this.loadPromise=a.b.loadAnimationFromURL({container:this.container,loop:!1,autoplay:!1,width:this.size,height:this.size,noCache:!0},"assets/img/TwoFactorSetupMonkeyPeek.tgs").then(t=>(this.animation=t,this.animation.addEventListener("enterFrame",t=>{(1===this.animation.direction&&t>=this.needFrame||-1===this.animation.direction&&t<=this.needFrame)&&(this.animation.setSpeed(1),this.animation.pause())}),this.passwordInputField.onVisibilityClickAdditional=()=>{this.passwordInputField.passwordVisible?(this.animation.setDirection(1),this.animation.curFrame=0,this.needFrame=16,this.animation.play()):(this.animation.setDirection(-1),this.animation.curFrame=16,this.needFrame=0,this.animation.play())},a.b.waitForFirstFrame(t)))}remove(){this.animation&&this.animation.remove()}}},75:function(t,e,i){"use strict";i.r(e);var a=i(20),n=i(21),s=i(15),r=i(55),o=i(31),c=i(44),l=i(16),d=i(68),u=i(73),h=i(17),p=i(8),m=i(61),w=i(11),b=i(12),g=i(86),v=i(27),f=i(43);let y;const P=new o.a("page-password",!0,()=>{const t=new m.a({className:"page-password",withInputWrapper:!0,titleLangKey:"Login.Password.Title",subtitleLangKey:"Login.Password.Subtitle"}),e=Object(l.a)("btn-primary btn-color-primary"),i=new p.default.IntlElement({key:"Login.Next"});e.append(i.element);const s=new d.a({label:"LoginPassword",name:"password"});let o;y=s.input,t.inputWrapper.append(s.container,e);let P,k=()=>(o||(o=window.setInterval(k,1e4)),r.a.getState().then(t=>{P=t,P.hint?Object(v.a)(s.label,Object(g.a)(h.b.wrapEmojiText(P.hint))):s.setLabel()}));const L=t=>{if(t&&Object(w.a)(t),!y.value.length)return void y.classList.add("error");const n=Object(f.a)([y,e],!0);let l=y.value;i.update({key:"PleaseWait"});const d=Object(a.f)(e);r.a.check(l,P).then(t=>{switch(t._){case"auth.authorization":clearInterval(o),c.default.mount(),S&&S.remove();break;default:e.removeAttribute("disabled"),i.update({key:t._}),d.remove()}}).catch(t=>{n(),s.input.classList.add("error"),t.type,i.update({key:"PASSWORD_HASH_INVALID"}),y.select(),d.remove(),k()})};Object(b.b)(e,L),y.addEventListener("keypress",(function(t){if(this.classList.remove("error"),i.update({key:"Login.Next"}),"Enter"===t.key)return L()}));const E=n.b.isMobile?100:166,S=new u.a(s,E);return t.imageDiv.append(S.container),Promise.all([S.load(),k()])},null,()=>{y.focus(),s.default.pushToState("authState",{_:"authStatePassword"})});e.default=P}}]);
//# sourceMappingURL=17.bbf317453222c44c42bf.chunk.js.map