(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{336:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return r})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return d})),n.d(e,"l",(function(){return f})),n.d(e,"c",(function(){return m})),n.d(e,"j",(function(){return v}));n(35),n(71),n(182),n(337),n(187),n(72),n(112),n(113),n(36),n(102),n(183);var a=/#.*$/,i=/\.(md|html)$/,r=/\/$/,s=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(a,"").replace(i,"")}function l(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;var e=t.match(a),n=e?e[0]:"",i=o(t);return r.test(i)?t:i+".html"+n}function p(t,e){var n=t.hash,i=function(t){var e=t.match(a);if(e)return e[0]}(e);return(!i||n===i)&&o(t.path)===o(e)}function d(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){var a=t.charAt(0);if("/"===a)return t;if("?"===a||"#"===a)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var r=t.replace(/^\//,"").split("/"),s=0;s<r.length;s++){var o=r[s];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var a=o(e),i=0;i<t.length;i++)if(o(t[i].regularPath)===a)return Object.assign({},t[i],{type:"page",path:h(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function f(t,e,n,a){var i=n.pages,r=n.themeConfig,s=a&&r.locales&&r.locales[a]||r;if("auto"===(t.frontmatter.sidebar||s.sidebar||r.sidebar))return function(t){var e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=s.sidebar||r.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(a=t,/(\.html|\/)$/.test(a)?a:a+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var a;return{}}(e,o),c=l.base,u=l.config;return u?u.map((function(t){return function t(e,n,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return d(n,e,a);if(Array.isArray(e))return Object.assign(d(n,e[0],a),{title:e[1]});i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var r=e.children||[];return 0===r.length&&e.path?Object.assign(d(n,e.path,a),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:r.map((function(e){return t(e,n,a,i+1)})),collapsable:!1!==e.collapsable}}(t,i,c)})):[]}return[]}function m(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},340:function(t,e,n){},343:function(t,e,n){},347:function(t,e,n){},348:function(t,e,n){},349:function(t,e,n){},350:function(t,e,n){},351:function(t,e,n){},353:function(t,e,n){},354:function(t,e,n){},355:function(t,e,n){},357:function(t,e,n){},358:function(t,e,n){},359:function(t,e,n){},360:function(t,e,n){},361:function(t,e,n){},363:function(t,e,n){"use strict";n.r(e);n(100);var a=n(336),i={name:"SidebarGroup",components:{DropdownTransition:n(364).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(363).default},methods:{isActive:a.e}},r=(n(391),n(5)),s=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(356),n(72);function o(t,e,n,a,i){var r={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:a,"sidebar-link":!0}};return i>2&&(r.style={"padding-left":i+"rem"}),t("RouterLink",r,n)}function l(t,e,n,i,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>r?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(a.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c,e.level-1),l(t,e.children,n,i,r,s+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,i=n.$page,r=(n.$site,n.$route),s=n.$themeConfig,c=n.$themeLocaleConfig,u=e.props,h=u.item,p=u.sidebarDepth,d=Object(a.e)(r,h.path),f="auto"===h.type?d||h.children.some((function(t){return Object(a.e)(r,h.basePath+"#"+t.slug)})):d,m="external"===h.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n])}(t,h.path,h.title||h.path):o(t,h.path,h.title||h.path,f),v=[i.frontmatter.sidebarDepth,p,c.sidebarDepth,s.sidebarDepth,1].find((function(t){return void 0!==t})),g=c.displayAllHeaders||s.displayAllHeaders;return"auto"===h.type?[m,l(t,h.children,h.basePath,r,v)]:(f||g)&&h.headers&&!a.d.test(h.path)?[m,l(t,Object(a.c)(h.headers),h.path,r,v)]:m}};n(392);function u(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?u(t,e):"page"===e.type&&Object(a.e)(t,e.path)}))}var h={name:"SidebarLinks",components:{SidebarGroup:s,SidebarLink:Object(r.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var a=e[n];if(u(t,a))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(a.e)(this.$route,t.regularPath)}}},p=Object(r.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,a){return n("li",{key:a},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:a===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(a)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=p.exports},364:function(t,e,n){"use strict";var a={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=(n(381),n(5)),r=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},369:function(t,e,n){"use strict";n(340)},375:function(t,e,n){"use strict";n(343)},380:function(t,e,n){"use strict";n(347)},381:function(t,e,n){"use strict";n(348)},382:function(t,e,n){"use strict";n(349)},383:function(t,e,n){"use strict";n(350)},384:function(t,e,n){"use strict";n(351)},385:function(t,e,n){"use strict";n(353)},387:function(t,e,n){"use strict";n(354)},388:function(t,e,n){"use strict";n(355)},389:function(t,e,n){"use strict";n(357)},390:function(t,e,n){"use strict";n(358)},391:function(t,e,n){"use strict";n(359)},392:function(t,e,n){"use strict";n(360)},393:function(t,e,n){"use strict";n(361)},398:function(t,e,n){"use strict";n.r(e);n(366),n(100),n(101);var a=n(336),i={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(a.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(a.g)(this.link)||Object(a.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(a.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(a.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""}},methods:{focusoutAction:function(){this.$emit("focusout")}}},r=n(5),s=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal&&this.$page.path.split("/").length<3?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v(t._s(t.item.text))]):t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v(t._s(t.item.text))]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t.item.icon?n("div",{staticClass:"nav-icon"},[n("img",{attrs:{src:t.item.icon}})]):n("div",[t._v(t._s(t.item.text))])])}),[],!1,null,null,null).exports,o={name:"Home",components:{NavLink:s},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(n(369),Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v(t._s(t.data.tagline||t.$description||"Welcome to your VuePress site"))]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,a){return n("div",{key:a,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v(t._s(t.data.footer))]):t._e()],1)}),[],!1,null,null,null).exports),c=(n(370),n(98)),u=(n(11),n(12),n(16),n(73),n(372),n(35),n(71),{name:"AlgoliaSearchBox",props:["options"],data:function(){return{placeholder:void 0}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}},mounted:function(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize:function(t,e){var a=this;Promise.all([Promise.all([n.e(0),n.e(2)]).then(n.t.bind(null,396,7)),Promise.all([n.e(0),n.e(2)]).then(n.t.bind(null,397,7))]).then((function(n){var i=Object(c.a)(n,1)[0];i=i.default;var r=t.algoliaOptions,s=void 0===r?{}:r;i(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:Object.assign({facetFilters:["lang:".concat(e)].concat(s.facetFilters||[])},s),handleSelected:function(t,e,n){var i=new URL(n.url),r=i.pathname,s=i.hash,o=r.replace(a.$site.base,"/");a.$router.push("".concat(o).concat(s))}}))}))},update:function(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}}}),h=(n(375),Object(r.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null).exports),p=n(395),d=(n(380),Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}})}),[],!1,null,null,null).exports),f=n(17),m=(n(72),n(182),n(345),n(188),n(364)),v=n(200),g=n.n(v),b={name:"DropdownLink",components:{NavLink:s,DropdownTransition:m.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return g()(e)===t}}},_=(n(382),{name:"NavLinks",components:{NavLink:s,DropdownLink:Object(r.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title language"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,a){return n("li",{key:e.link||a,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(a){return n("li",{key:a.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:a},on:{focusout:function(n){t.isLastItemOfArray(a,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,a=this.$router.options.routes,i=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(r){var s,o=e[r],l=i[r]&&i[r].label||o.lang;return o.lang===t.$lang?s=n:(s=n.replace(t.$localeConfig.path,r),a.some((function(t){return t.path===s}))||(s=r)),{text:l,link:s}}))};return[].concat(Object(f.a)(this.userNav),[r])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(a.j)(t),{items:(t.items||[]).map(a.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var a=e[n];if(new RegExp(a,"i").test(t))return a}return"Source"}}}}),k=(n(383),Object(r.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return this.userLinks.length||this.repoLink?e("nav",{staticClass:"nav-links"},this._l(this.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),0):this._e()}),[],!1,null,null,null).exports);function C(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var $={name:"Navbar",components:{SidebarButton:d,NavLinks:k,SearchBox:p.a,AlgoliaSearchBox:h},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(C(this.$el,"paddingLeft"))+parseInt(C(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},y=(n(384),Object(r.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[n("NavLinks",{staticClass:"can-hide"}),t._v(" "),t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e()],1)],1)}),[],!1,null,null,null).exports),x=n(352),L=n.n(x),w={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=L()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,a=e.docsDir,i=void 0===a?"":a,r=e.docsBranch,s=void 0===r?"master":r,o=e.docsRepo,l=void 0===o?n:o;return t&&l&&this.$page.relativePath?this.createEditLink(n,l,i,s,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,r){return/bitbucket.org/.test(t)?(a.i.test(e)?e:t).replace(a.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+r+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(a.i.test(e)?e:"https://github.com/".concat(e)).replace(a.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+r}}},O=(n(385),Object(r.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),S=n(386),T=n.n(S),j={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return I(E.PREV,this)},next:function(){return I(E.NEXT,this)}}};var E={NEXT:{resolveLink:function(t,e){return N(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return N(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function I(t,e){var n=e.$themeConfig,i=e.$page,r=e.$route,s=e.$site,o=e.sidebarItems,l=t.resolveLink,c=t.getThemeLinkConfig,u=t.getPageLinkConfig,h=c(n),p=u(i),d=L()(p)?h:p;return!1===d?void 0:T()(d)?Object(a.k)(s.pages,d,r.path):l(i,o)}function N(t,e,n){var a=[];!function t(e,n){for(var a=0,i=e.length;a<i;a++)"group"===e[a].type?t(e[a].children||[],n):n.push(e[a])}(e,a);for(var i=0;i<a.length;i++){var r=a[i];if("page"===r.type&&r.path===decodeURIComponent(t.path))return a[i+n]}}var P=j,A=(n(387),Object(r.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("div",{staticClass:"inner"},[t.prev?n("div",{staticClass:"prev"},["external"===t.prev.type?n("a",{attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.prev.title||t.prev.path))]):n("RouterLink",{attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))])],1):t._e(),t._v(" "),t.next?n("div",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.next.title||t.next.path))]):n("RouterLink",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))])],1):t._e()])]):t._e()}),[],!1,null,null,null).exports),D={name:"Footer"},R=(n(388),Object(r.a)(D,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-container"},[n("div",{staticClass:"company"},[n("div",{staticClass:"copyright"},[t._v("Terraform labs PTE.LTD")]),t._v(" "),n("div",{staticClass:"subscribe"},[n("div",{staticClass:"subscribe-title"},[t._v("Subscribe to get updates")]),t._v(" "),n("form",{staticClass:"validate",attrs:{action:"https://money.us17.list-manage.com/subscribe/post?u=8eca8dc5c91c2e30d69b1463e&id=1447662093",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",novalidate:""}},[n("input",{staticClass:"email",attrs:{type:"email",value:"",name:"EMAIL",id:"mce-EMAIL",placeholder:"Email address",required:""}}),t._v("\n        real people should not fill this in and expect good things - do not remove this or risk form bot\n        signups\n        "),n("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[n("input",{attrs:{type:"text",name:"b_8eca8dc5c91c2e30d69b1463e_1447662093",tabindex:"-1",value:""}})]),t._v(" "),n("button",{attrs:{type:"submit"}},[t._v("Submit")])])])]),t._v(" "),n("div",{staticClass:"links-container"},[n("ul",{staticClass:"learn"},[n("li",[t._v("Learn")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.terra.money/Terra_White_paper.pdf",target:"_blank"}},[t._v("\n          White\n          Paper\n        ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://certik.org/projects/terra",target:"_blank"}},[t._v("Security Audit")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://agora.terra.money/",target:"_blank"}},[t._v("Agora Discussions")])])]),t._v(" "),n("ul",{staticClass:"developers"},[n("li",[t._v("Tools")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://station.terra.money/",target:"_blank"}},[t._v("Terra Station")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://finder.terra.money/",target:"_blank"}},[t._v("Terra Finder")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://status.terra.money/",target:"_blank"}},[t._v("Status")])])]),t._v(" "),n("ul",{staticClass:"developers"},[n("li",[t._v("Luna")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://docs.terra.money/Concepts/Protocol.html#terra-and-luna",target:"_blank"}},[t._v("What is Luna?")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://docs.terra.money/Reference/integrations.html#exchanges",target:"_blank"}},[t._v("Exchanges")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://docs.terra.money/Reference/integrations.html#wallets",target:"_blank"}},[t._v("Wallets")])])]),t._v(" "),n("ul",{staticClass:"developers"},[n("li",[t._v("Foundation")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://terra.breezy.hr/",target:"_blank"}},[t._v("Careers")])])]),t._v(" "),n("ul",{staticClass:"developers"},[n("li",[t._v("Developers")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/terra-money",target:"_blank"}},[t._v("Github")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://docs.terra.money/",target:"_blank"}},[t._v("Documentation")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://docs.terra.money/#sdks-for-developers",target:"_blank"}},[t._v("SDKs")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/terra-money/TIPs",target:"_blank"}},[t._v("TIPs")])])]),t._v(" "),n("ul",{staticClass:"developers"},[n("li",[t._v("Validators")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://docs.terra.money/How-to/Manage-a-Terra-validator/Overview.html",target:"_blank"}},[t._v("Validator Guide")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/terra-money/validator-profiles",target:"_blank"}},[t._v("Profiles")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://discord.gg/ZHBuKda",target:"_blank"}},[t._v("Discord Channel")])])])]),t._v(" "),n("div",{staticClass:"sns-container"},[n("div",{staticClass:"logos"},[n("a",{attrs:{href:"https://discord.gg/e29HWwC2Mz",rel:"noopener",target:"_blank"}},[n("img",{attrs:{src:"https://www.terra.money/static/assets/images/icon_discord.png",alt:"link to Terra discord room"}})]),t._v(" "),n("a",{attrs:{href:"https://medium.com/terra-money",rel:"noopener",target:"_blank"}},[n("img",{attrs:{src:"https://www.terra.money/static/assets/images/icon_medium.png",alt:"link to Terra medium"}})]),t._v(" "),n("a",{attrs:{href:"https://twitter.com/terra_money",rel:"noopener",target:"_blank"}},[n("img",{attrs:{src:"https://www.terra.money/static/assets/images/icon_twitter.png",alt:"link to Terra twitter"}})]),t._v(" "),n("a",{attrs:{href:"https://www.youtube.com/channel/UCoV1RXZ9ZBGcuu_PMTTlM0g",rel:"noopener",target:"_blank"}},[n("img",{attrs:{src:"https://www.terra.money/static/assets/images/icon_youtube.png",alt:"link to Terra youtube"}})]),t._v(" "),n("a",{attrs:{href:"https://t.me/terra_announcements",rel:"noopener",target:"_blank"}},[n("img",{attrs:{src:"https://www.terra.money/static/assets/images/icon_telegram.png",alt:"link to Terra telegram room"}})])]),t._v(" "),n("a",{staticClass:"terramoney",attrs:{href:"https://www.terra.money",target:"_blank"}},[t._v("terra.money")])])])}],!1,null,null,null).exports),H=(n(337),n(356),{name:"Breadcrumb",computed:{bread:function(){var t=this.$page.path.split("/");t[t.length-1].length||t.pop();for(var e="",n=[],a=0;a<t.length;a++){e+=t[a];var i=this.$site.pages.find((function(t){return t.path===e||t.path===e+"/"}));e+="/",null!=i&&n.push({path:i.path,title:i.frontmatter.breadcrumb||i.title})}return n}}}),B=(n(389),{components:{PageEdit:O,PageNav:A,Footer:R,Breadcrumb:Object(r.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.bread.length>1?n("nav",{staticClass:"breadcrumb-container",attrs:{id:"breadcrumb"}},t._l(t.bread,(function(e){return n("router-link",{key:e.path,staticClass:"breadcrumb",attrs:{to:e.path}},[n("span",[t._v(t._s(e.title))])])})),1):t._e()}),[],!1,null,"7ebed944",null).exports},props:["sidebarItems"]}),U=(n(390),Object(r.a)(B,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Breadcrumb"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom"),t._v(" "),n("Footer")],2)}),[],!1,null,null,null).exports),W={name:"Sidebar",components:{SidebarLinks:n(363).default,NavLinks:k},props:["items"]},G=(n(393),{name:"Layout",components:{Home:l,Page:U,Sidebar:Object(r.a)(W,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom"),this._v(" "),e("div",{staticClass:"sidebar_footer"})],2)}),[],!1,null,null,null).exports,Navbar:y},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(a.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x,this.toggleSidebar(!1))}}}),M=Object(r.a)(G,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=M.exports}}]);