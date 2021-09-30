(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{450:function(a,s,t){"use strict";t.r(s);var r=t(6),e=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"slashing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#slashing"}},[a._v("#")]),a._v(" Slashing")]),a._v(" "),t("h2",{attrs:{id:"query"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[a._v("#")]),a._v(" Query")]),a._v(" "),t("h3",{attrs:{id:"signing-info"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#signing-info"}},[a._v("#")]),a._v(" Signing Info")]),a._v(" "),t("p",[a._v("To retrieve a validator's signing info:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terracli query slashing signing-info "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator-pubkey"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[a._v("#")]),a._v(" Parameters")]),a._v(" "),t("p",[a._v("You can get the current slashing parameters via:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terracli query slashing params\n")])])]),t("p",[a._v("The reported parameters will be of the following format:")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("signed_blocks_window")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("min_signed_per_window")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.500000000000000000"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("downtime_jail_duration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 10m0s\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("slash_fraction_double_sign")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.050000000000000000"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("slash_fraction_downtime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.010000000000000000"')]),a._v("\n")])])]),t("h2",{attrs:{id:"transaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transaction"}},[a._v("#")]),a._v(" Transaction")]),a._v(" "),t("h3",{attrs:{id:"unjail-validator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unjail-validator"}},[a._v("#")]),a._v(" Unjail Validator")]),a._v(" "),t("p",[a._v("To unjail your jailed validator")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terracli tx slashing unjail --from"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator-operator-addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);