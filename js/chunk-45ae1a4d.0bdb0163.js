(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45ae1a4d"],{"0cb2":function(e,t,n){var r=n("7b0b"),a=Math.floor,c="".replace,o=/\$([$&'`]|\d\d?|<[^>]*>)/g,u=/\$([$&'`]|\d\d?)/g;e.exports=function(e,t,n,l,i,s){var f=n+e.length,d=l.length,p=u;return void 0!==i&&(i=r(i),p=o),c.call(s,p,(function(r,c){var o;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(f);case"<":o=i[c.slice(1,-1)];break;default:var u=+c;if(0===u)return r;if(u>d){var s=a(u/10);return 0===s?r:s<=d?void 0===l[s-1]?c.charAt(1):l[s-1]+c.charAt(1):r}o=l[u-1]}return void 0===o?"":o}))}},"0dee":function(e,t,n){"use strict";var r=n("eeb9"),a=n.n(r),c="/api/users",o={Authorization:"Bearer ".concat(localStorage.getItem("token"))};t["a"]={filterUsers:function(e){return a.a.post("".concat(c,"/query"),e,o)},createUsers:function(e){return a.a.post("".concat(c),e,o)},getUserById:function(e){return a.a.get("".concat(c,"/").concat(e),o)},updateUser:function(e,t){return a.a.put("".concat(c,"/").concat(t),e,o)},deleteUser:function(e){return a.a.delete("".concat(c,"/").concat(e),o)}}},"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var c=n.call(e,t);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},3675:function(e,t,n){},5319:function(e,t,n){"use strict";var r=n("d784"),a=n("825a"),c=n("50c4"),o=n("a691"),u=n("1d80"),l=n("8aa5"),i=n("0cb2"),s=n("14c3"),f=Math.max,d=Math.min,p=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var b=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=r.REPLACE_KEEPS_$0,h=b?"$":"$0";return[function(n,r){var a=u(this),c=void 0==n?void 0:n[e];return void 0!==c?c.call(n,a,r):t.call(String(a),n,r)},function(e,r){if(!b&&m||"string"===typeof r&&-1===r.indexOf(h)){var u=n(t,e,this,r);if(u.done)return u.value}var v=a(e),g=String(this),O="function"===typeof r;O||(r=String(r));var x=v.global;if(x){var j=v.unicode;v.lastIndex=0}var _=[];while(1){var E=s(v,g);if(null===E)break;if(_.push(E),!x)break;var y=String(E[0]);""===y&&(v.lastIndex=l(g,c(v.lastIndex),j))}for(var R="",U=0,I=0;I<_.length;I++){E=_[I];for(var S=String(E[0]),A=f(d(o(E.index),g.length),0),w=[],N=1;N<E.length;N++)w.push(p(E[N]));var P=E.groups;if(O){var V=[S].concat(w,A,g);void 0!==P&&V.push(P);var k=String(r.apply(void 0,V))}else k=i(S,g,A,w,P,r);A>=U&&(R+=g.slice(U,A)+k,U=A+S.length)}return R+g.slice(U)}]}))},"55fc":function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),a=Object(r["fb"])("data-v-58de3f4c");Object(r["H"])("data-v-58de3f4c");var c=Object(r["m"])("Home Page"),o=Object(r["m"])("User Access Control"),u=Object(r["m"])("User Edit"),l=Object(r["n"])("h1",{span:3,class:"user-title"},"Edit User",-1),i=Object(r["m"])("Cancel"),s=Object(r["m"])("SUMMIT");Object(r["F"])();var f=a((function(e,t,n,f,d,p){var b=Object(r["N"])("el-breadcrumb-item"),m=Object(r["N"])("el-breadcrumb"),h=Object(r["N"])("el-input"),v=Object(r["N"])("el-form-item"),g=Object(r["N"])("el-option"),O=Object(r["N"])("el-select"),x=Object(r["N"])("el-col"),j=Object(r["N"])("el-row"),_=Object(r["N"])("el-button"),E=Object(r["N"])("el-form");return Object(r["E"])(),Object(r["i"])(r["b"],null,[Object(r["n"])(m,{"separator-class":"el-icon-arrow-right"},{default:a((function(){return[Object(r["n"])(b,{to:{path:"/"},class:"active-breadcrumb"},{default:a((function(){return[c]})),_:1}),Object(r["n"])(b,{"separator-class":"el-icon-arrow-right"},{default:a((function(){return[o]})),_:1}),Object(r["n"])(b,null,{default:a((function(){return[u]})),_:1})]})),_:1}),Object(r["n"])(E,{"label-position":d.labelPosition,"label-width":"100px",model:e.formLabelAlign,class:"form-body"},{default:a((function(){return[l,Object(r["n"])(j,{span:16},{default:a((function(){return[Object(r["n"])(x,{span:10,offset:1},{default:a((function(){return[Object(r["n"])(v,{label:"Name"},{default:a((function(){return[Object(r["n"])(h,{modelValue:d.form.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.form.name=e})},null,8,["modelValue"])]})),_:1}),Object(r["n"])(v,{label:"Email"},{default:a((function(){return[Object(r["n"])(h,{modelValue:d.form.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return d.form.email=e})},null,8,["modelValue"])]})),_:1}),Object(r["n"])(v,{label:"Role"},{default:a((function(){return[Object(r["n"])(O,{modelValue:d.form.roles,"onUpdate:modelValue":t[3]||(t[3]=function(e){return d.form.roles=e}),filterable:"",multiple:"",placeholder:"Select",style:{width:"397px"}},{default:a((function(){return[(Object(r["E"])(!0),Object(r["i"])(r["b"],null,Object(r["L"])(d.roles,(function(e){return Object(r["E"])(),Object(r["i"])(g,{key:e.id,label:e.title,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),Object(r["n"])(x,{span:10,offset:1},{default:a((function(){return[Object(r["n"])(v,{label:"Phone Number"},{default:a((function(){return[Object(r["n"])(h,{modelValue:d.form.phone_number,"onUpdate:modelValue":t[4]||(t[4]=function(e){return d.form.phone_number=e})},null,8,["modelValue"])]})),_:1}),Object(r["n"])(v,{label:"NRC"},{default:a((function(){return[Object(r["n"])(h,{modelValue:d.form.nrc,"onUpdate:modelValue":t[5]||(t[5]=function(e){return d.form.nrc=e})},null,8,["modelValue"])]})),_:1}),Object(r["n"])(v,{label:"Address"},{default:a((function(){return[Object(r["n"])(h,{type:"textarea",modelValue:d.form.address,"onUpdate:modelValue":t[6]||(t[6]=function(e){return d.form.address=e})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["n"])(j,null,{default:a((function(){return[Object(r["n"])(x,{span:2,offset:17},{default:a((function(){return[Object(r["n"])(_,{type:"text",class:"cancel_button"},{default:a((function(){return[i]})),_:1})]})),_:1}),Object(r["n"])(x,{span:2},{default:a((function(){return[Object(r["n"])(_,{onClick:p.userUpdate,class:"submit_button"},{default:a((function(){return[s]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1},8,["label-position","model"])],64)})),d=(n("d81d"),n("ac1f"),n("5319"),n("96cf"),n("1da1")),p=n("5530"),b=n("ba7d"),m=n("0dee"),h=n("e9e0"),v={beforeMount:function(){this.getUserDetail(this.$route.path),this.getRoles(Object(p["a"])(Object(p["a"])(Object(p["a"])({},Object(b["e"])("id","asc")),Object(b["d"])(1,1e4)),Object(p["a"])({},Object(b["a"])([],"AND"))))},methods:{getRoles:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].filterRoles(t).then((function(e){n.roles=e.data.data})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getUserDetail:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m["a"].getUserById(Object(b["c"])(t)).then((function(e){n.form=e.data.data,n.form.roles=e.data.data.roles.map((function(e){return e.id}))}));case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),userUpdate:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.payload.name=this.form.name,this.payload.email=this.form.email,this.payload.email_verified_at=this.form.email_verified_at,this.payload.nrc=this.form.nrc,this.payload.phone_number=this.form.phone_number,this.payload.account_status=this.form.account_status,this.payload.roles=this.form.roles,e.next=9,m["a"].updateUser(this.payload,Object(b["c"])(this.$route.path)).then((function(){t.$router.replace({name:"uac"})})).catch((function(e){console.log(e)}));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},data:function(){return{labelPosition:"top",form:{name:"",email:"",roles:"",address:"",phone_number:"",nrc:""},payload:{name:null,email:null,email_verified_at:null,nrc:null,phone_number:null,account_status:null,roles:null},roles:[]}}};n("d2c5");v.render=f,v.__scopeId="data-v-58de3f4c";t["default"]=v},6547:function(e,t,n){var r=n("a691"),a=n("1d80"),c=function(e){return function(t,n){var c,o,u=String(a(t)),l=r(n),i=u.length;return l<0||l>=i?e?"":void 0:(c=u.charCodeAt(l),c<55296||c>56319||l+1===i||(o=u.charCodeAt(l+1))<56320||o>57343?e?u.charAt(l):c:e?u.slice(l,l+2):o-56320+(c-55296<<10)+65536)}};e.exports={codeAt:c(!1),charAt:c(!0)}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),a=n("9f7f"),c=RegExp.prototype.exec,o=String.prototype.replace,u=c,l=function(){var e=/a/,t=/b*/g;return c.call(e,"a"),c.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),i=a.UNSUPPORTED_Y||a.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],f=l||s||i;f&&(u=function(e){var t,n,a,u,f=this,d=i&&f.sticky,p=r.call(f),b=f.source,m=0,h=e;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(b="(?: "+b+")",h=" "+h,m++),n=new RegExp("^(?:"+b+")",p)),s&&(n=new RegExp("^"+b+"$(?!\\s)",p)),l&&(t=f.lastIndex),a=c.call(d?n:f,h),d?a?(a.input=a.input.slice(m),a[0]=a[0].slice(m),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:l&&a&&(f.lastIndex=f.global?a.index+a[0].length:t),s&&a&&a.length>1&&o.call(a[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(a[u]=void 0)})),a}),e.exports=u},"9f7f":function(e,t,n){"use strict";var r=n("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ba7d:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"c",(function(){return l}));n("baa5");var r=function(e,t){return{paginationParam:{pageNumber:e,pageSize:t}}},a=function(e,t){return{sortingParams:{key:e,sortType:t}}},c=function(e,t,n){return{filterExpression:e,key:t,textValue:{value:n}}},o=function(e,t){return{filter:{filterParams:e,filterLogic:t}}},u=function(e){return{Authorization:"Bearer ".concat(e)}},l=function(e){return e.substring(e.lastIndexOf("/")+1)}},baa5:function(e,t,n){var r=n("23e7"),a=n("e58c");r({target:"Array",proto:!0,forced:a!==[].lastIndexOf},{lastIndexOf:a})},d2c5:function(e,t,n){"use strict";n("3675")},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),c=n("b622"),o=n("9263"),u=n("9112"),l=c("species"),i=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),f=c("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var b=c(e),m=!a((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),h=m&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[b]=/./[b]),n.exec=function(){return t=!0,null},n[b](""),!t}));if(!m||!h||"replace"===e&&(!i||!s||d)||"split"===e&&!p){var v=/./[b],g=n(b,""[e],(function(e,t,n,r,a){return t.exec===o?m&&!a?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),O=g[0],x=g[1];r(String.prototype,e,O),r(RegExp.prototype,b,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}f&&u(RegExp.prototype[b],"sham",!0)}},d81d:function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").map,c=n("1dde"),o=n("ae40"),u=c("map"),l=o("map");r({target:"Array",proto:!0,forced:!u||!l},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},e58c:function(e,t,n){"use strict";var r=n("fc6a"),a=n("a691"),c=n("50c4"),o=n("a640"),u=n("ae40"),l=Math.min,i=[].lastIndexOf,s=!!i&&1/[1].lastIndexOf(1,-0)<0,f=o("lastIndexOf"),d=u("indexOf",{ACCESSORS:!0,1:0}),p=s||!f||!d;e.exports=p?function(e){if(s)return i.apply(this,arguments)||0;var t=r(this),n=c(t.length),o=n-1;for(arguments.length>1&&(o=l(o,a(arguments[1]))),o<0&&(o=n+o);o>=0;o--)if(o in t&&t[o]===e)return o||0;return-1}:i},e9e0:function(e,t,n){"use strict";var r=n("eeb9"),a=n.n(r),c="/api/roles",o={Authorization:"Bearer ".concat(localStorage.getItem("token"))};t["a"]={filterRoles:function(e){return a.a.post("".concat(c,"/query"),e,o)}}}}]);
//# sourceMappingURL=chunk-45ae1a4d.0bdb0163.js.map