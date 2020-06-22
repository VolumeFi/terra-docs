(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{392:function(e,t,a){"use strict";a.r(t);var n=a(5),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"staking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staking"}},[e._v("#")]),e._v(" Staking")]),e._v(" "),a("p",[e._v("The Staking module enables Terra's Proof-of-Stake functionality by requiring validators to bond Luna, the native staking asset.")]),e._v(" "),a("h2",{attrs:{id:"transitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transitions"}},[e._v("#")]),e._v(" Transitions")]),e._v(" "),a("h3",{attrs:{id:"end-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#end-block"}},[e._v("#")]),e._v(" End-Block")]),e._v(" "),a("blockquote",[a("p",[e._v("This section was taken from the official Cosmos SDK docs, and placed here for your convenience to understand the Staking module's parameters.")])]),e._v(" "),a("p",[e._v("Each abci end block call, the operations to update queues and validator set\nchanges are specified to execute.")]),e._v(" "),a("h4",{attrs:{id:"validator-set-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator-set-changes"}},[e._v("#")]),e._v(" Validator Set Changes")]),e._v(" "),a("p",[e._v("The staking validator set is updated during this process by state transitions\nthat run at the end of every block. As a part of this process any updated\nvalidators are also returned back to Tendermint for inclusion in the Tendermint\nvalidator set which is responsible for validating Tendermint messages at the\nconsensus layer. Operations are as following:")]),e._v(" "),a("ul",[a("li",[e._v("the new validator set is taken as the top "),a("code",[e._v("params.MaxValidators")]),e._v(" number of\nvalidators retrieved from the ValidatorsByPower index")]),e._v(" "),a("li",[e._v("the previous validator set is compared with the new validator set:\n"),a("ul",[a("li",[e._v("missing validators begin unbonding and their "),a("code",[e._v("Tokens")]),e._v(" are transferred from the\n"),a("code",[e._v("BondedPool")]),e._v(" to the "),a("code",[e._v("NotBondedPool")]),e._v(" "),a("code",[e._v("ModuleAccount")])]),e._v(" "),a("li",[e._v("new validators are instantly bonded and their "),a("code",[e._v("Tokens")]),e._v(" are transferred from the\n"),a("code",[e._v("NotBondedPool")]),e._v(" to the "),a("code",[e._v("BondedPool")]),e._v(" "),a("code",[e._v("ModuleAccount")])])])])]),e._v(" "),a("p",[e._v("In all cases, any validators leaving or entering the bonded validator set or\nchanging balances and staying within the bonded validator set incur an update\nmessage which is passed back to Tendermint.")]),e._v(" "),a("h4",{attrs:{id:"queues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#queues"}},[e._v("#")]),e._v(" Queues")]),e._v(" "),a("p",[e._v("Within staking, certain state-transitions are not instantaneous but take place\nover a duration of time (typically the unbonding period). When these\ntransitions are mature certain operations must take place in order to complete\nthe state operation. This is achieved through the use of queues which are\nchecked/processed at the end of each block.")]),e._v(" "),a("h5",{attrs:{id:"unbonding-validators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unbonding-validators"}},[e._v("#")]),e._v(" Unbonding Validators")]),e._v(" "),a("p",[e._v('When a validator is kicked out of the bonded validator set (either through\nbeing jailed, or not having sufficient bonded tokens) it begins the unbonding\nprocess along with all its delegations begin unbonding (while still being\ndelegated to this validator). At this point the validator is said to be an\nunbonding validator, whereby it will mature to become an "unbonded validator"\nafter the unbonding period has passed.')]),e._v(" "),a("p",[e._v("Each block the validator queue is to be checked for mature unbonding validators\n(namely with a completion time <= current time). At this point any mature\nvalidators which do not have any delegations remaining are deleted from state.\nFor all other mature unbonding validators that still have remaining\ndelegations, the "),a("code",[e._v("validator.Status")]),e._v(" is switched from "),a("code",[e._v("sdk.Unbonding")]),e._v(" to\n"),a("code",[e._v("sdk.Unbonded")]),e._v(".")]),e._v(" "),a("h5",{attrs:{id:"unbonding-delegations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unbonding-delegations"}},[e._v("#")]),e._v(" Unbonding Delegations")]),e._v(" "),a("p",[e._v("Complete the unbonding of all mature "),a("code",[e._v("UnbondingDelegations.Entries")]),e._v(" within the\n"),a("code",[e._v("UnbondingDelegations")]),e._v(" queue with the following procedure:")]),e._v(" "),a("ul",[a("li",[e._v("transfer the balance coins to the delegator's wallet address")]),e._v(" "),a("li",[e._v("remove the mature entry from "),a("code",[e._v("UnbondingDelegation.Entries")])]),e._v(" "),a("li",[e._v("remove the "),a("code",[e._v("UnbondingDelegation")]),e._v(" object from the store if there are no\nremaining entries.")])]),e._v(" "),a("h5",{attrs:{id:"redelegations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redelegations"}},[e._v("#")]),e._v(" Redelegations")]),e._v(" "),a("p",[e._v("Complete the unbonding of all mature "),a("code",[e._v("Redelegation.Entries")]),e._v(" within the\n"),a("code",[e._v("Redelegations")]),e._v(" queue with the following procedure:")]),e._v(" "),a("ul",[a("li",[e._v("remove the mature entry from "),a("code",[e._v("Redelegation.Entries")])]),e._v(" "),a("li",[e._v("remove the "),a("code",[e._v("Redelegation")]),e._v(" object from the store if there are no\nremaining entries.")])]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[e._v("The subspace for the Staking module is "),a("code",[e._v("staking")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" Params "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\tUnbondingTime time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Duration "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('`json:"unbonding_time" yaml:"unbonding_time"`')]),e._v("\n\tMaxValidators "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint16")]),e._v("        "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('`json:"max_validators" yaml:"max_validators"`')]),e._v("\n\tMaxEntries    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint16")]),e._v("        "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('`json:"max_entries" yaml:"max_entries"`')]),e._v("\n\tBondDenom "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('`json:"bond_denom" yaml:"bond_denom"`')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h3",{attrs:{id:"unbondingtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unbondingtime"}},[e._v("#")]),e._v(" UnbondingTime")]),e._v(" "),a("p",[e._v("Time duration of unbonding, in nanoseconds.")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("time.Duration")])]),e._v(" "),a("li",[e._v("default value: "),a("code",[e._v("time.Hour * 24 * 7 * 3")]),e._v(" (3 weeks)")])]),e._v(" "),a("h3",{attrs:{id:"maxvalidators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxvalidators"}},[e._v("#")]),e._v(" MaxValidators")]),e._v(" "),a("p",[e._v("Maximum number of active validators.")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("uint16")])]),e._v(" "),a("li",[e._v("default value: "),a("code",[e._v("100")])])]),e._v(" "),a("h3",{attrs:{id:"maxentries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxentries"}},[e._v("#")]),e._v(" MaxEntries")]),e._v(" "),a("p",[e._v("Max entries for either unbonding delegation or redelegation (per pair/trio). We need to be a bit careful about potential overflow here, since this is user-determined.")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("uint16")])]),e._v(" "),a("li",[e._v("default value: "),a("code",[e._v("7")])])]),e._v(" "),a("h3",{attrs:{id:"bonddenom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bonddenom"}},[e._v("#")]),e._v(" BondDenom")]),e._v(" "),a("p",[e._v("Defines the denomination of the asset required for staking.")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("default value: "),a("code",[e._v("uluna")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);