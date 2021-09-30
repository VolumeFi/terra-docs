(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{453:function(a,t,s){"use strict";s.r(t);var e=s(6),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"tx-search"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tx-search"}},[a._v("#")]),a._v(" TX Search")]),a._v(" "),s("h2",{attrs:{id:"matching-a-set-of-tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#matching-a-set-of-tags"}},[a._v("#")]),a._v(" Matching a set of tags")]),a._v(" "),s("p",[a._v("You can use the transaction search command to query for transactions that match a specific set of "),s("code",[a._v("tags")]),a._v(", which are added on every transaction.")]),a._v(" "),s("p",[a._v("Each tag is conformed by a key-value pair in the form of "),s("code",[a._v("<tag>:<value>")]),a._v(". Tags can also be combined to query for a more specific result using the "),s("code",[a._v("&")]),a._v(" symbol.")]),a._v(" "),s("p",[a._v("The command for querying transactions using a "),s("code",[a._v("tag")]),a._v(" is the following:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query txs --tags"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<tag>:<value>'")]),a._v("\n")])])]),s("p",[a._v("And for using multiple "),s("code",[a._v("tags")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query txs --tags"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<tag1>:<value1>&<tag2>:<value2>'")]),a._v("\n")])])]),s("p",[a._v("The pagination is supported as well via "),s("code",[a._v("page")]),a._v(" and "),s("code",[a._v("limit")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query txs --tags"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<tag>:<value>'")]),a._v(" --page"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" --limit"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("The action tag always equals the message type returned by the "),s("code",[a._v("Type()")]),a._v(" function of the relevant message.\nYou can find a list of available "),s("code",[a._v("tags")]),a._v(" on each module by looking at the /tags directory of each module.")])]),a._v(" "),s("h2",{attrs:{id:"matching-a-transaction-s-hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#matching-a-transaction-s-hash"}},[a._v("#")]),a._v(" Matching a transaction's hash")]),a._v(" "),s("p",[a._v("You can also query a single transaction by its hash using the following command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query tx "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);