(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{402:function(e,a,t){"use strict";t.r(a);var o=t(5),r=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"the-terra-protocol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-terra-protocol"}},[e._v("#")]),e._v(" The Terra protocol")]),e._v(" "),t("p",[e._v("The Terra protocol is the leading decentralized and open-source public blockchain protocol for "),t("RouterLink",{attrs:{to:"/Concepts/glossary.html#algorithmic-stablecoin"}},[e._v("algorithmic stablecoins")]),e._v(". Using a combination of open market "),t("RouterLink",{attrs:{to:"/Concepts/glossary.html#arbitrage"}},[e._v("arbitrage")]),e._v(" incentives and decentralized oracle voting, the Terra protocol creates stablecoins that consistently track the price of any fiat currency. Users can spend, save, trade, or exchange Terra stablecoins instantly, all on the Terra blockchain. Luna provides its holders with staking rewards and governance power. The Terra ecosystem is a quickly expanding network of decentralized applications, creating a stable demand for Terra and increasing the price of Luna.")],1),e._v(" "),t("h2",{attrs:{id:"terra-and-luna"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#terra-and-luna"}},[e._v("#")]),e._v(" Terra and Luna")]),e._v(" "),t("p",[e._v("The protocol consists of two main tokens, Terra and Luna.")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Terra")]),e._v(": Stablecoins that track the price of fiat currencies. Users mint new Terra by burning Luna. Stablecoins are named for their fiat counterparts. For example, the base Terra stablecoin tracks the price of the IMF’s SDR, named TerraSDR, or SDT. Other stablecoin denominations include TerraUSD or UST, and TerraKRW or  KRT. All Terra denominations exist in the same pool.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Luna")]),e._v(": The Terra protocol’s native staking token that absorbs the price volatility of Terra. Luna is used for governance and in mining. Users stake Luna to validators who record and verify transactions on the blockchain in exchange for rewards from transaction fees. The more Terra is used, the more Luna is worth.")])])]),e._v(" "),t("h2",{attrs:{id:"how-the-terra-protocol-works"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-the-terra-protocol-works"}},[e._v("#")]),e._v(" How the Terra protocol works")]),e._v(" "),t("h3",{attrs:{id:"stablecoin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stablecoin"}},[e._v("#")]),e._v(" Stablecoin")]),e._v(" "),t("p",[e._v("Stablecoins are the main feature of the Terra protocol: crypto assets that track the price of an underlying currency. As a digital form of currency, Terra stablecoins can be used just like fiat currency with blockchain's added benefits: an unchangeable public ledger, instant transactions, faster settlement times, and fewer fees.")]),e._v(" "),t("p",[e._v("Stablecoins are only valuable to users if they maintain their price peg. The Terra protocol uses the basic market forces of supply and demand to maintain the price of Terra. When the demand for Terra is high and the supply is limited, the price of Terra increases. When the demand for Terra is low and the supply is too large, the price of Terra decreases. The protocol ensures the supply and demand of Terra is always balanced, leading to a stable price.")]),e._v(" "),t("h3",{attrs:{id:"expansion-and-contraction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expansion-and-contraction"}},[e._v("#")]),e._v(" Expansion and contraction")]),e._v(" "),t("p",[e._v("Imagine the whole Terra economy as two pools: one for Terra and one for Luna. To maintain the price of Terra, the Luna supply pool adds to or subtracts from Terra’s supply. Users burn Luna to mint Terra and burn Terra to mint Luna, all incentivized by the protocol's algorithmic "),t("RouterLink",{attrs:{to:"/Reference/Terra-core/Module-specifications/spec-market.html"}},[e._v("market module")]),e._v(".")],1),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Expansion")]),e._v(": When the price of Terra is high relative to its peg, supply is too small and demand is too high. The protocol incentivizes users to burn Luna and mint Terra. The new supply of Terra makes its pool larger, balancing supply with demand. Users mint more Terra from burned Luna until Terra reaches its target price. The Luna pool gets smaller in this process, increasing the price of Luna.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Contraction")]),e._v(": When the price of Terra is too low relative to its peg, supply is too large and demand is too low. The protocol incentives users to burn Terra and mint Luna. The decrease in Terra’s supply causes scarcity, and the price of Terra increases. More Luna is minted from burned Terra until Terra reaches its target price. The Luna pool increases and lowers in price.")])])]),e._v(" "),t("p",[e._v("Luna is the variable counterpart to the stable asset Terra. By modulating supply, Luna's price increases as the demand for stablecoins increases.")]),e._v(" "),t("h3",{attrs:{id:"the-market-module-and-arbitrage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-market-module-and-arbitrage"}},[e._v("#")]),e._v(" The market module and arbitrage")]),e._v(" "),t("p",[e._v("The price stability of Terra is achieved by the protocol's algorithmic "),t("RouterLink",{attrs:{to:"/reference/terra-core/module-specifications/spec-market.html"}},[e._v("market module")]),e._v(", which incentivizes the minting or burning of Terra through arbitrage opportunities. Arbitrage occurs when a user profits from price differences between markets.")],1),e._v(" "),t("p",[e._v("The Terra protocol's market module enables users to always trade 1 USD worth of Luna for 1 UST, and vice versa, incentivizing users to maintain the price of Terra. This same principle is true for all Terra stablecoin denominations.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Example")]),t("br"),e._v("\nIf 1 UST is trading at 1.01 USD, users can use the market swap feature of Terra Station to trade 1 USD of Luna for 1 UST. The market burns 1 USD of Luna and mints 1 UST. Users can then sell their 1 UST for 1.01 USD, profiting .01 USD through arbitrage, adding to the UST pool. This arbitrage continues until UST price falls back to match the price of USD, maintaining Terra's peg.")])]),e._v(" "),t("p",[e._v("The same arbitrage mechanism works in reverse for contraction.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Example")]),t("br"),e._v("\nIf 1 UST is trading at .99 USD, users can buy 1 UST for .99 USD. Users then utilize Terra Station's market swap function to trade 1 UST for 1 USD of Luna. The swap burns 1 UST and mints 1 USD of Luna. Users profit .01 UST from the swap. This arbitrage continues, and UST is burned to mint Luna until the price of UST rises back to 1 USD.")])]),e._v(" "),t("h3",{attrs:{id:"scalability"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scalability"}},[e._v("#")]),e._v(" Scalability")]),e._v(" "),t("p",[e._v("The Terra protocol is scalable: it is designed to maintain Terra's price stability regardless of market size, volatility, or demand. The monetary policies encoded into the protocol ensure its durability and resilience in all market fluctuations.")]),e._v(" "),t("h3",{attrs:{id:"seigniorage-and-deflation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#seigniorage-and-deflation"}},[e._v("#")]),e._v(" Seigniorage and deflation")]),e._v(" "),t("p",[e._v("Seigniorage is the value of a coin minus the cost of its production. In early versions of the Terra protocol, seigniorage was diverted to fund various community projects. While seigniorage can create enormous value, it also creates inflation in the system.\nAll seigniorage in the Terra protocol is burned, making Luna deflationary in nature.")]),e._v(" "),t("h2",{attrs:{id:"validators"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validators"}},[e._v("#")]),e._v(" Validators")]),e._v(" "),t("p",[e._v("Validators are the miners of the Terra "),t("RouterLink",{attrs:{to:"/Concepts/glossary.html#blockchain"}},[e._v("blockchain")]),e._v(". They are responsible for securing the Terra blockchain and ensuring its accuracy. Validators run programs called full nodes which allow them to verify each transaction made on the Terra network. Validators propose blocks, vote on their validity, and add each new block to the chain in exchange for staking rewards from transaction fees. Users can stake their Luna to validators in exchange for staking rewards. Validators also play an important role in the governance of the Terra protocol.")],1),e._v(" "),t("p",[e._v("For more information on validators, visit the "),t("RouterLink",{attrs:{to:"/How-to/Manage-a-Terra-validator/faq.html"}},[e._v("Validator FAQ")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"consensus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consensus"}},[e._v("#")]),e._v(" Consensus")]),e._v(" "),t("p",[e._v("The Terra blockchain is a proof-of-stake blockchain, powered by the "),t("a",{attrs:{href:"https://cosmos.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK"),t("OutboundLink")],1),e._v(" and secured by a system of verification called the Tendermint consensus.")]),e._v(" "),t("p",[e._v("The following process explains how Tendermint consensus works. For more information on the Tendermint consensus, visit the "),t("a",{attrs:{href:"https://docs.tendermint.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("official Tendermint documentation"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("ol",[t("li",[e._v("A validator called a "),t("strong",[e._v("proposer")]),e._v(" is chosen to submit a new block of transactions.")]),e._v(" "),t("li",[e._v("Validators vote in two rounds on whether they accept or reject the proposed block. If a block is rejected, a new proposer is selected and the process starts again.")]),e._v(" "),t("li",[e._v("If accepted, the block is signed and added to the chain.")]),e._v(" "),t("li",[e._v("The transaction fees from the block are distributed as staking rewards to validators and delegators. Proposers get rewarded extra for their participation.")])]),e._v(" "),t("p",[e._v("This process repeats, adding new blocks of transactions to the chain. Each validator has a copy of all transactions made on the network, which they compare against the proposed block of transactions before voting. Because multiple independent validators take place in consensus voting, it is infeasible for any false block to be accepted. In this way, validators protect the integrity of the Terra blockchain and ensure the validity of each transaction.")]),e._v(" "),t("h3",{attrs:{id:"staking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#staking"}},[e._v("#")]),e._v(" Staking")]),e._v(" "),t("p",[e._v("Staking is the process of bonding Luna to a validator in exchange for staking rewards.")]),e._v(" "),t("p",[e._v("The Terra protocol only allows the top 130 validators to participate in consensus. A validator's rank is determined by their stake or the total amount of Luna bonded to them. Although validators can bond Luna to themselves, they mainly amass larger stakes from delegators. Validators with larger stakes get chosen more often to propose new blocks and earn proportionally more rewards.")]),e._v(" "),t("h3",{attrs:{id:"delegators"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delegators"}},[e._v("#")]),e._v(" Delegators")]),e._v(" "),t("p",[e._v("Delegators are users who want to receive rewards from consensus without running a full node. Any user that stakes Luna is a delegator. Delegators stake their Luna to a validator, adding to a validator’s weight, or total stake. In return, delegators receive a portion of transaction fees as staking rewards.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Who owns staked Luna?")]),e._v(" "),t("p",[e._v("Staked Luna never leaves the possession of the delegator. Even though it can’t be traded freely, staked Luna is never owned by a validator. For more information, visit the "),t("RouterLink",{attrs:{to:"/How-to/Manage-a-Terra-validator/faq.html#can-a-validator-run-away-with-a-delegators-luna"}},[e._v("Validator FAQ")])],1)]),e._v(" "),t("h3",{attrs:{id:"phases-of-luna"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phases-of-luna"}},[e._v("#")]),e._v(" Phases of Luna")]),e._v(" "),t("p",[e._v("To start receiving rewards, delegators bond their Luna to a validator. The bonding process adds a delegator's Luna to a validator's stake, which helps validators to participate in consensus.")]),e._v(" "),t("p",[e._v("Luna exists in the following three phrases:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Unbonded")]),e._v(": Luna that can be freely traded and is not staked to a validator.")]),e._v(" "),t("li",[t("strong",[e._v("Bonded")]),e._v(": Luna that is staked to a validator. Bonded Luna accrues staking rewards. Although Luna bonded to validators in Terra Station can’t be traded freely, bLuna is a token that represents bonded Luna that can be traded freely or used as collateral on other protocols in the Terra network, such as "),t("a",{attrs:{href:"https://anchorprotocol.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Anchor"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://mirror.finance/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mirror"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[t("strong",[e._v("Unbonding")]),e._v(": Luna that is in the process of becoming unbonded from a validator and does not accrue rewards. This process takes 21 days to complete.")])]),e._v(" "),t("h3",{attrs:{id:"bonding-staking-and-delegating"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bonding-staking-and-delegating"}},[e._v("#")]),e._v(" Bonding, staking, and delegating")]),e._v(" "),t("p",[e._v("Generally, the terms bonding, staking, and delegating can be used interchangeably, as they happen in the same step. A delegator delegates Luna to a validator, the Luna gets bonded to the validator, and the bonded Luna gets added to the validator's stake.")]),e._v(" "),t("p",[e._v("Delegators can bond Luna to any validator in the "),t("RouterLink",{attrs:{to:"/Concepts/glossary.html#active-set"}},[e._v("active set")]),e._v(" using the delegate function in Terra Station. Delegators start earning staking rewards the moment they bond or stake to a validator.")],1),e._v(" "),t("h3",{attrs:{id:"unbonding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unbonding"}},[e._v("#")]),e._v(" Unbonding")]),e._v(" "),t("p",[e._v("Delegators can unbond or unstake their Luna using the undelegate function in Terra Station. The unbonding process takes 21 days to complete. During this period, the unbonding Luna can't be traded, and no staking rewards accrue.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Warning")]),e._v(" "),t("p",[e._v("Once started, the delegating or undelegating processes can't be stopped.\nUndelegating takes 21 days to complete. The only way to undo a delegating or undelegating transaction is to wait for the unbonding process to pass. Alternatively, you can redelegate staked Luna to a different validator without waiting 21 days.")])]),e._v(" "),t("p",[e._v("The 21-day unbonding process helps the long-term stability of the Terra protocol. The unbonding period discourages volatility by locking staked Luna in the system for at least 21 days. In exchange, delegators receive staking rewards, further incentivizing network stability.")]),e._v(" "),t("h3",{attrs:{id:"redelegation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redelegation"}},[e._v("#")]),e._v(" Redelegation")]),e._v(" "),t("p",[e._v("Redelegating instantly sends staked Luna from one validator to another. Instead of waiting for the 21-day unstaking period, a user can redelegate their staked Luna at any time using Terra Station's redelegate function. Validators receiving redelegations are barred from further redelegating any amount of Luna to any validator for 21 days.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Warning")]),e._v(" "),t("p",[e._v("When a user redelegates staked Luna from one validator to another, the validator receiving the staked Luna is barred from making further redelegation transactions for 21 days. This requirement only applies to the wallet that made the redelegation transaction.")])]),e._v(" "),t("h3",{attrs:{id:"rewards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rewards"}},[e._v("#")]),e._v(" Rewards")]),e._v(" "),t("p",[e._v("The Terra protocol incentivizes validators and delegators with staking rewards. Staking rewards come from two sources: gas fees and stability fees.")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Gas fees")]),e._v(": Compute fees added on to each transaction to avoid spamming. Validators set minimum gas prices and reject transactions that have implied gas prices below this threshold.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Stability fees")]),e._v(": Fees added on to each transaction to provide stability in the market. The fee for swapping Terra stablecoin denominations is called a Tobin tax. Exchanges between Terra and Luna are subject to a spread fee.")])])]),e._v(" "),t("p",[e._v("At the end of every block, all transaction fees are distributed to each validator and their delegators proportional to their staked amount. Validators can keep a portion of rewards to pay for their services. This portion is called commission. The rest of the rewards are distributed to delegators according to their staked amounts.\nStaking rewards also play a key role in the stability of the Terra protocol. During periods of volatility, the Terra protocol modulates tax rates to maintain a stable mining incentive. This mechanism is described in detail in the "),t("RouterLink",{attrs:{to:"/Reference/Terra-core/Module-specifications/spec-treasury.html"}},[e._v("treasury module")]),e._v(". Steady rewards regardless of market volatility ensure steady demand for staking. Staking locks value in the system, ensuring long- and short-term stability for the price of Terra.")],1),e._v(" "),t("h3",{attrs:{id:"slashing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#slashing"}},[e._v("#")]),e._v(" Slashing")]),e._v(" "),t("p",[e._v("Running a validator is a big responsibility. Validators must meet strict standards and constantly monitor and participate in the consensus process. Slashing is the penalty for misbehaving validators. When a validator gets slashed, they lose a small portion of their stake as well as a small portion of their delegator's stake. Slashed validators also get jailed, or excluded, from consensus for a period of time.")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("The risks of staking")]),e._v(" "),t("p",[e._v("Slashing affects validators and delegators. When a validator gets slashed, delegators who stake to that validator also get slashed. Slashing is proportional to a delegator's staked amount. Though slashing is rare and usually results in a small penalty, it does occur. Delegators should monitor their validators closely, do their research, and understand the risks of staking Luna.")])]),e._v(" "),t("p",[e._v("Slashing occurs under the following conditions:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Double signing")]),e._v(": When a validator signs two different blocks with the same chain ID at the same height.")]),e._v(" "),t("li",[t("strong",[e._v("Downtime")]),e._v(": When a validator is unresponsive or can't be reached for a period of time.")]),e._v(" "),t("li",[t("strong",[e._v("Missed votes")]),e._v(": When a validator misses votes in consensus or fails to vote correctly in the oracle process.")])]),e._v(" "),t("p",[e._v("Validators monitor each other closely and can submit evidence of misbehavior. Once discovered, the misbehaving validator will have a small portion of their funds slashed. Offending validators will also be jailed or excluded from consensus for a period of time. Even simple issues such as malfunctions or downtimes from upgrading can lead to slashing.")]),e._v(" "),t("p",[e._v("For more information on slashing, visit the "),t("RouterLink",{attrs:{to:"/Reference/Terra-core/Module-specifications/spec-slashing.html"}},[e._v("slashing module")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"governance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#governance"}},[e._v("#")]),e._v(" Governance")]),e._v(" "),t("p",[e._v("The Terra protocol is a decentralized public "),t("RouterLink",{attrs:{to:"/Concepts/glossary.html#blockchain"}},[e._v("blockchain")]),e._v(" governed by community members. Governance is the democratic process that allows users and validators to make changes to the Terra protocol. Community members submit, vote, and implement proposals.")],1),e._v(" "),t("h3",{attrs:{id:"proposals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proposals"}},[e._v("#")]),e._v(" Proposals")]),e._v(" "),t("p",[e._v("Proposals start as ideas within the community. A community member drafts and submits a proposal alongside an initial deposit.")]),e._v(" "),t("p",[e._v("The most common proposal types include:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("ParameterChangeProposal")]),e._v(": To change the parameters defined in each module.")]),e._v(" "),t("li",[t("code",[e._v("TaxRateUpdateProposal")]),e._v(": To update tax rate monetary policy lever.")]),e._v(" "),t("li",[t("code",[e._v("RewardWeightUpdateProposal")]),e._v(": To update the reward weight monetary policy lever")]),e._v(" "),t("li",[t("code",[e._v("CommunityPoolSpendProposal")]),e._v(": To spend funds in the community pool")])]),e._v(" "),t("p",[e._v("Other issues like large directional changes or any decision requiring manual implementation are submitted as a "),t("code",[e._v("TextProposal")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"voting-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#voting-process"}},[e._v("#")]),e._v(" Voting process")]),e._v(" "),t("p",[e._v("Community members vote with their staked Luna. One staked Luna equals one vote. If a user fails to specify a vote, their vote defaults to the validator they are staked to. Validators vote with their entire stake unless specified by delegators. For this reason, it is very important that each delegator votes according to their preferences.")]),e._v(" "),t("p",[e._v("The following is a basic outline of the governance process. Visit the "),t("RouterLink",{attrs:{to:"/Reference/Terra-core/Module-specifications/spec-governance.html"}},[e._v("governance module")]),e._v(" for more details.")],1),e._v(" "),t("ol",[t("li",[e._v("A user submits a proposal and a two-week deposit period begins.")]),e._v(" "),t("li",[e._v("Users deposit Luna as collateral to back the proposal. This period ends once a minimum threshold of 512 Luna is deposited. Deposits are to protect against spam.")]),e._v(" "),t("li",[e._v("The two-week vote period begins.\nThe voting options are:\n"),t("ul",[t("li",[t("code",[e._v("Yes")]),e._v(": In favor.")]),e._v(" "),t("li",[t("code",[e._v("No")]),e._v(": Not in favor.")]),e._v(" "),t("li",[t("code",[e._v("NoWithVeto")]),e._v(": Not in favor, the deposit should be burned.")]),e._v(" "),t("li",[t("code",[e._v("Abstain")]),e._v(": Voter abstains.")])])]),e._v(" "),t("li",[e._v("The votes are tallied.\nProposals pass if they meet three conditions:\n"),t("ul",[t("li",[t("code",[e._v("Quorum")]),e._v(" is met: at least 40% of all staked Luna must vote.")]),e._v(" "),t("li",[e._v("The total number of "),t("code",[e._v("NoWithVeto")]),e._v(" votes is less than 33.4% of the total vote.")]),e._v(" "),t("li",[e._v("The number of "),t("code",[e._v("Yes")]),e._v(" votes reaches a 50% majority.\nIf the previous conditions are not met, the proposal is rejected.")])])]),e._v(" "),t("li",[e._v("Accepted proposals get put into effect.")]),e._v(" "),t("li",[e._v("Deposits get refunded or burned.")])]),e._v(" "),t("p",[e._v("Once accepted, the changes described in a governance proposal are automatically put into effect by the proposal handler. Generic proposals, such as a passed "),t("code",[e._v("TextProposal")]),e._v(", must be reviewed by the Terra team and community, and they must be manually implemented.")]),e._v(" "),t("h3",{attrs:{id:"deposits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deposits"}},[e._v("#")]),e._v(" Deposits")]),e._v(" "),t("p",[e._v("Deposits protect against unnecessary proposals and spam. Users can veto any proposal they deem to be spam by voting "),t("code",[e._v("NoWithVeto")]),e._v(".")]),e._v(" "),t("p",[e._v("Deposits get refunded if all of the following conditions are met:")]),e._v(" "),t("ul",[t("li",[e._v("The minimum deposit of 512 Luna is reached within the two-week deposit period.")]),e._v(" "),t("li",[t("code",[e._v("Quorum")]),e._v(" is met: the number of total votes is greater than 40% of all staked Luna")]),e._v(" "),t("li",[e._v("The total number of "),t("code",[e._v("NoWithVeto")]),e._v(" votes is less than 33.4% of the total vote.")]),e._v(" "),t("li",[e._v("A vote returns a majority of "),t("code",[e._v("Yes")]),e._v(" or "),t("code",[e._v("No")]),e._v(" votes.")])]),e._v(" "),t("p",[e._v("Deposits are burned under any of the following conditions:")]),e._v(" "),t("ul",[t("li",[e._v("The minimum deposit of 512 Luna is not reached within the two-week deposit period.")]),e._v(" "),t("li",[t("code",[e._v("Quorum")]),e._v(" is not met: the number of total votes after the two-week voting period is less than 40% of all staked Luna.")]),e._v(" "),t("li",[e._v("the number of "),t("code",[e._v("NoWithVeto")]),e._v(" votes is above 33.4% of the total vote.")])])])}),[],!1,null,null,null);a.default=r.exports}}]);