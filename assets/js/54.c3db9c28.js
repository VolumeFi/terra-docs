(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{431:function(e,t,a){"use strict";a.r(t),a.d(t,"JSONView",(function(){return c}));var r=function(){return(r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var n=a(0);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e,t,a,r,n,o,i,c){var s,d=("function"==typeof a?a.options:a)||{};if(d.__file="JSONViewItem.vue",d.render||(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,n&&(d.functional=!0)),d._scopeId=r,t&&(s=function(e){t.call(this,i(e))}),void 0!==s)if(d.functional){var l=d.render;d.render=function(e,t){return s.call(t),l(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,s):[s]}return d}({render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"json-view-item"},["object"===e.data.type||"array"===e.data.type?a("div",[a("button",{staticClass:"data-key",attrs:{"aria-expanded":e.open?"true":"false"},on:{click:function(t){return t.stopPropagation(),e.toggleOpen(t)}}},[a("div",{class:e.classes}),e._v("\n      "+e._s(e.data.key)+":\n      "),a("span",{staticClass:"properties"},[e._v(e._s(e.lengthString))])]),e._v(" "),e._l(e.data.children,(function(t){return a("json-view-item",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],key:e.getKey(t),attrs:{data:t,maxDepth:e.maxDepth,canSelect:e.canSelect},on:{selected:e.bubbleSelected}})}))],2):e._e(),e._v(" "),"value"===e.data.type?a("div",{class:e.valueClasses,attrs:{role:e.canSelect?"button":void 0,tabindex:e.canSelect?"0":void 0},on:{click:function(t){return e.clickEvent(e.data)},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.clickEvent(e.data)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:e.clickEvent(e.data)}]}},[a("span",{staticClass:"value-key"},[e._v(e._s(e.data.key)+":")]),e._v(" "),a("span",{style:e.getValueStyle(e.data.value)},[e._v("\n      "+e._s(e.dataValue)+"\n    ")])]):e._e()])},staticRenderFns:[]},(function(e){e&&e("data-v-c45632d2_0",{source:".json-view-item[data-v-c45632d2]:not(.root-item){margin-left:15px}.value-key[data-v-c45632d2]{color:var(--vjc-valueKey-color);font-weight:600;margin-left:10px;border-radius:2px;white-space:nowrap;padding:5px 5px 5px 10px}.value-key.can-select[data-v-c45632d2]{cursor:pointer}.value-key.can-select[data-v-c45632d2]:hover{background-color:rgba(0,0,0,.08)}.value-key.can-select[data-v-c45632d2]:focus{outline:2px solid var(--vjc-hover-color)}.data-key[data-v-c45632d2]{font-size:100%;font-family:inherit;border:0;padding:0;background-color:transparent;width:100%;color:var(--vjc-key-color);display:flex;align-items:center;border-radius:2px;font-weight:600;cursor:pointer;white-space:nowrap;padding:5px}.data-key[data-v-c45632d2]:hover{background-color:var(--vjc-hover-color)}.data-key[data-v-c45632d2]:focus{outline:2px solid var(--vjc-hover-color)}.data-key[data-v-c45632d2]::-moz-focus-inner{border:0}.data-key .properties[data-v-c45632d2]{font-weight:300;opacity:.9;margin-left:4px;user-select:none}.chevron-arrow[data-v-c45632d2]{flex-shrink:0;border-right:4px solid var(--vjc-arrow-color);border-bottom:4px solid var(--vjc-arrow-color);width:var(--vjc-arrow-size);height:var(--vjc-arrow-size);margin-right:20px;margin-left:5px;transform:rotate(-45deg)}.chevron-arrow.opened[data-v-c45632d2]{margin-top:-3px;transform:rotate(45deg)}",map:void 0,media:void 0})}),n.a.extend({name:"json-view-item",data:function(){return{open:this.data.depth<this.maxDepth}},props:{data:{required:!0,type:Object},maxDepth:{type:Number,required:!1,default:1},canSelect:{type:Boolean,required:!1,default:!1}},methods:{toggleOpen:function(){this.open=!this.open},clickEvent:function(e){this.$emit("selected",{key:e.key,value:e.value,path:e.path})},bubbleSelected:function(e){this.$emit("selected",e)},getKey:function(e){return isNaN(e.key)?'"'+e.key+'":':e.key+":"},getValueStyle:function(e){switch(o(e)){case"string":return{color:"var(--vjc-string-color)"};case"number":return{color:"var(--vjc-number-color)"};case"boolean":return{color:"var(--vjc-boolean-color)"};case"object":case"undefined":return{color:"var(--vjc-null-color)"};default:return{color:"var(--vjc-valueKey-color)"}}}},computed:{classes:function(){return{"chevron-arrow":!0,opened:this.open}},valueClasses:function(){return{"value-key":!0,"can-select":this.canSelect}},lengthString:function(){return"array"===this.data.type?1===this.data.length?this.data.length+" element":this.data.length+" elements":1===this.data.length?this.data.length+" property":this.data.length+" properties"},dataValue:function(){return void 0===this.data.value?"undefined":JSON.stringify(this.data.value)}}}),"data-v-c45632d2",!1,0,(function e(){var t=document.head||document.getElementsByTagName("head")[0],a=e.styles||(e.styles={}),r="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(e,n){if(!document.querySelector('style[data-vue-ssr-id~="'+e+'"]')){var o=r?n.media||"default":e,i=a[o]||(a[o]={ids:[],parts:[],element:void 0});if(!i.ids.includes(e)){var c=n.source,s=i.ids.length;if(i.ids.push(e),n.map&&(c+="\n/*# sourceURL="+n.map.sources[0]+" */",c+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r&&(i.element=i.element||document.querySelector("style[data-group="+o+"]")),!i.element){var d=i.element=document.createElement("style");d.type="text/css",n.media&&d.setAttribute("media",n.media),r&&(d.setAttribute("data-group",o),d.setAttribute("data-next-index","0")),t.appendChild(d)}if(r&&(s=parseInt(i.element.getAttribute("data-next-index")),i.element.setAttribute("data-next-index",s+1)),i.element.styleSheet)i.parts.push(c),i.element.styleSheet.cssText=i.parts.filter(Boolean).join("\n");else{var l=document.createTextNode(c),u=i.element.childNodes;u[s]&&i.element.removeChild(u[s]),u.length?i.element.insertBefore(l,u[s]):i.element.appendChild(l)}}}}}));window.matchMedia("(prefers-color-scheme: dark)").matches;var c=function(e,t,a,r,n,o,i,c){var s,d=("function"==typeof a?a.options:a)||{};if(d.__file="JSONView.vue",d.render||(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,n&&(d.functional=!0)),d._scopeId=r,t&&(s=function(e){t.call(this,i(e))}),void 0!==s)if(d.functional){var l=d.render;d.render=function(e,t){return s.call(t),l(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,s):[s]}return d}({render:function(){var e=this.$createElement;return(this._self._c||e)("json-view-item",{class:[{"root-item":!0,dark:"dark"===this.colorScheme}],attrs:{data:this.parsed,maxDepth:this.maxDepth,canSelect:this.hasSelectedListener},on:{selected:this.itemSelected}})},staticRenderFns:[]},(function(e){e&&e("data-v-1c053202_0",{source:".root-item[data-v-1c053202]{--vjc-key-color:#0977e6;--vjc-valueKey-color:#073642;--vjc-string-color:#268bd2;--vjc-number-color:#2aa198;--vjc-boolean-color:#cb4b16;--vjc-null-color:#6c71c4;--vjc-arrow-size:6px;--vjc-arrow-color:#444;--vjc-hover-color:rgba(0, 0, 0, 0.2);margin-left:0;width:100%;height:auto}.root-item.dark[data-v-1c053202]{--vjc-key-color:#80d8ff;--vjc-valueKey-color:#fdf6e3;--vjc-hover-color:rgba(255, 255, 255, 0.2);--vjc-arrow-color:#fdf6e3}",map:void 0,media:void 0})}),n.a.extend({name:"json-view",props:{data:{required:!0},rootKey:{type:String,required:!1,default:"root"},maxDepth:{type:Number,required:!1,default:1},colorScheme:{type:String,required:!1,default:"light"}},components:{"json-view-item":i},methods:{build:function(e,t,a,r,n){if(this.isObject(t)){for(var o=[],i=0,c=Object.entries(t);i<c.length;i++){var s=c[i],d=s[0],l=s[1];o.push(this.build(d,l,a+1,n?""+r+e+".":""+r,!0))}return{key:e,type:"object",depth:a,path:r,length:o.length,children:o}}if(this.isArray(t)){o=[];for(var u=0;u<t.length;u++)o.push(this.build(u.toString(),t[u],a+1,n?""+r+e+"["+u+"].":""+r,!1));return{key:e,type:"array",depth:a,path:r,length:o.length,children:o}}return{key:e,type:"value",path:n?r+e:r.slice(0,-1),depth:a,value:t}},isObject:function(e){return"object"===o(e)&&null!==e&&!this.isArray(e)},isArray:function(e){return Array.isArray(e)},itemSelected:function(e){this.$emit("selected",e)}},computed:{parsed:function(){return"object"===o(this.data)?this.build(this.rootKey,r({},this.data),0,"",!0):{key:this.rootKey,type:"value",path:"",depth:0,value:this.data}},hasSelectedListener:function(){return Boolean(this.$listeners&&this.$listeners.selected)}}}),"data-v-1c053202",!1,0,(function e(){var t=document.head||document.getElementsByTagName("head")[0],a=e.styles||(e.styles={}),r="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(e,n){if(!document.querySelector('style[data-vue-ssr-id~="'+e+'"]')){var o=r?n.media||"default":e,i=a[o]||(a[o]={ids:[],parts:[],element:void 0});if(!i.ids.includes(e)){var c=n.source,s=i.ids.length;if(i.ids.push(e),n.map&&(c+="\n/*# sourceURL="+n.map.sources[0]+" */",c+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r&&(i.element=i.element||document.querySelector("style[data-group="+o+"]")),!i.element){var d=i.element=document.createElement("style");d.type="text/css",n.media&&d.setAttribute("media",n.media),r&&(d.setAttribute("data-group",o),d.setAttribute("data-next-index","0")),t.appendChild(d)}if(r&&(s=parseInt(i.element.getAttribute("data-next-index")),i.element.setAttribute("data-next-index",s+1)),i.element.styleSheet)i.parts.push(c),i.element.styleSheet.cssText=i.parts.filter(Boolean).join("\n");else{var l=document.createTextNode(c),u=i.element.childNodes;u[s]&&i.element.removeChild(u[s]),u.length?i.element.insertBefore(l,u[s]):i.element.appendChild(l)}}}}})),s={install:function(e,t){e.component("json-view",c)}};t.default=s}}]);