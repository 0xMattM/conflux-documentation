"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[2455],{57506:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var s=c(85893),r=c(11151);const i={},l="v2.0",d={id:"general/hardforks/v2.0",title:"v2.0",description:"- - -",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/hardforks/v2.0.md",sourceDirName:"general/hardforks",slug:"/general/hardforks/v2.0",permalink:"/es/docs/general/hardforks/v2.0",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",frontMatter:{},sidebar:"generalSidebar",previous:{title:"Hard Forks",permalink:"/es/docs/general/hardforks/"},next:{title:"v2.1",permalink:"/es/docs/general/hardforks/v2.1"}},o={},a=[{value:"PoS",id:"pos",level:2},{value:"Conflux eSpace",id:"conflux-espace",level:2},{value:"New Added InternalContracts",id:"new-added-internalcontracts",level:2},{value:"RPC changes",id:"rpc-changes",level:2},{value:"cfx namespace RPC change",id:"cfx-namespace-rpc-change",level:3},{value:"trace RPC breaking change",id:"trace-rpc-breaking-change",level:3},{value:"New added namespace",id:"new-added-namespace",level:3},{value:"eSpace eth RPC",id:"espace-eth-rpc",level:3},{value:"Conflux-rust config file",id:"conflux-rust-config-file",level:2},{value:"Mainnet Upgrade schedule",id:"mainnet-upgrade-schedule",level:2},{value:"Testnet Upgrade schedule",id:"testnet-upgrade-schedule",level:2},{value:"Upgrade CIP list",id:"upgrade-cip-list",level:2},{value:"CIP-43",id:"cip-43",level:3},{value:"CIP-64",id:"cip-64",level:3},{value:"CIP-71",id:"cip-71",level:3},{value:"CIP-76",id:"cip-76",level:3},{value:"CIP-78",id:"cip-78",level:3},{value:"CIP-86",id:"cip-86",level:3},{value:"CIP-90",id:"cip-90",level:3},{value:"CIP-92",id:"cip-92",level:3}];function t(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"displayed_sidebar: generalSidebar"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h1,{id:"v20",children:"v2.0"}),"\n",(0,s.jsx)(n.p,{children:"In the Hydra hardfork (v2.0) Conflux will introduce serveral big upgrades through 8 CIPs (Conflux improvement proposal)."}),"\n",(0,s.jsx)(n.h2,{id:"pos",children:"PoS"}),"\n",(0,s.jsxs)(n.p,{children:["Through ",(0,s.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-43.md",children:"CIP-43"})," Hydra has introduced a PoS system to improve the finality of the whole Network. CFX holders can stake their CFX to PoS to protect high-value transactions and also earn CFX rewards of participating the PoS. For detail information, check ",(0,s.jsx)(n.a,{href:"/es/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/pos_overview",children:"PoS Overview"})," page."]}),"\n",(0,s.jsx)(n.h2,{id:"conflux-espace",children:"Conflux eSpace"}),"\n",(0,s.jsxs)(n.p,{children:["The CIP-90 has introduced a new fully EVM-compatible space. The new space is called eSpace, and the current space is called Core Space. The eSpace follows the same rule as EVM and supports eth rpc like eth_getBalance, so the tools (web3.js, ethers.js, hardhat and so on) from ethereum ecosystem can be used on Conflux directly. Check ",(0,s.jsx)(n.a,{href:"/conflux-doc/docs/EVM-Space/intro_of_evm_space",children:"eSpace documentation"})," for more info."]}),"\n",(0,s.jsx)(n.h2,{id:"new-added-internalcontracts",children:"New Added InternalContracts"}),"\n",(0,s.jsxs)(n.p,{children:["Hydra hardfork has intoduced three new ",(0,s.jsx)(n.a,{href:"/es/docs/core/core-space-basics/internal-contracts/",children:"InternalContracts"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ConfluxContext"})," (CIP-64)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PoSRegister"})," (CIP-43)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CrossSpaceCall"})," (CIP-90)"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"rpc-changes",children:"RPC changes"}),"\n",(0,s.jsx)(n.h3,{id:"cfx-namespace-rpc-change",children:"cfx namespace RPC change"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["New added methods: ",(0,s.jsx)(n.a,{href:"/conflux-doc/docs/json_rpc#cfx_getposrewardbyepoch",children:(0,s.jsx)(n.code,{children:"cfx_getPoSRewardByEpoch"})}),", ",(0,s.jsx)(n.a,{href:"/conflux-doc/docs/json_rpc#cfx_openedmethodgroups",children:(0,s.jsx)(n.code,{children:"cfx_openedMethodGroups"})}),", ",(0,s.jsx)(n.a,{href:"/conflux-doc/docs/json_rpc#cfx_getposeconomics",children:(0,s.jsx)(n.code,{children:"cfx_getPoSEconomics"})}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["New added EpochNumber tag: ",(0,s.jsx)(n.code,{children:"latest_finalized"})," indicating latest finalized (by PoS) epoch."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cfx_getStatus"})," reponse have two new field: ",(0,s.jsx)(n.code,{children:"latestFinalized"}),", ",(0,s.jsx)(n.code,{children:"ethereumSpaceChainId"})]}),"\n",(0,s.jsxs)(n.li,{children:["Block header new added field: ",(0,s.jsx)(n.code,{children:"posReference"})," which is the latest pos blockHash when the PoW block is mined."]}),"\n",(0,s.jsxs)(n.li,{children:["Block header's ",(0,s.jsx)(n.code,{children:"custom"})," field's type has changed from array of ",(0,s.jsx)(n.code,{children:"number array"})," to array of ",(0,s.jsx)(n.code,{children:"hex string"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// before\ncustom: [[1, 2]]\n// after \ncustom: ["0x12"]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note: CIP-90 will break some block field's verifiability for example: hash"})}),"\n",(0,s.jsx)(n.h3,{id:"trace-rpc-breaking-change",children:"trace RPC breaking change"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"trace"})," RPC methods have some ",(0,s.jsx)(n.a,{href:"/conflux-doc/docs/RPCs/trace_rpc#v20-trace-breaking-change",children:"big changes"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"new-added-namespace",children:"New added namespace"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/conflux-doc/docs/RPCs/txpool_rpc",children:(0,s.jsx)(n.code,{children:"txpool"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/conflux-doc/docs/RPCs/pos_rpc",children:(0,s.jsx)(n.code,{children:"pos"})})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"espace-eth-rpc",children:"eSpace eth RPC"}),"\n",(0,s.jsxs)(n.p,{children:["The eSpace has introduced the ",(0,s.jsx)(n.code,{children:"eth"})," namespace RPC, check the ",(0,s.jsx)(n.a,{href:"/conflux-doc/docs/EVM-Space/evm_space_rpc_compatibility",children:"RPC compatibility doc"})," for details"]}),"\n",(0,s.jsx)(n.h2,{id:"conflux-rust-config-file",children:"Conflux-rust config file"}),"\n",(0,s.jsxs)(n.p,{children:["The mainnet config file has been renamed from ",(0,s.jsx)(n.code,{children:"tethys.toml"})," to ",(0,s.jsx)(n.code,{children:"hydra.toml"}),", the ",(0,s.jsx)(n.code,{children:"bootnodes"})," has changed and several options are added:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"jsonrpc_http_eth_port = 8545"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"jsonrpc_ws_eth_port = 8546"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:'public_evm_rpc_apis = "evm"'})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"evm_chain_id = 1030"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"mainnet-upgrade-schedule",children:"Mainnet Upgrade schedule"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Conflux client program need to be updated before ",(0,s.jsx)(n.code,{children:"Epoch Number reaches 36935000"})," or ",(0,s.jsx)(n.code,{children:"Block Number reaches 92060600"})," (around 10:00 Feb.23th, 2022(GMT+8))"]}),"\n",(0,s.jsxs)(n.li,{children:["The PoS registration start at ",(0,s.jsx)(n.code,{children:"Block Number 92060600"})," (around Feb.23th at 12:00)"]}),"\n",(0,s.jsxs)(n.li,{children:["The PoS registration close at ",(0,s.jsx)(n.code,{children:"Block Number 92751800"})," (around Feb.25th at 12:00)"]}),"\n",(0,s.jsxs)(n.li,{children:["The deadline for adding pos_config is before ",(0,s.jsx)(n.code,{children:"Epoch Number reaches 37400000"})," (around Feb.28th 12:00). Hardfork upgrade completed at this time."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"testnet-upgrade-schedule",children:"Testnet Upgrade schedule"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Conflux client program need to be updated before ",(0,s.jsx)(n.code,{children:"Epoch Number reaches 55095000"})," or ",(0,s.jsx)(n.code,{children:"Block Number reaches 68845000"})," (around 10:00 Dec.9th, 2021(GMT+8))"]}),"\n",(0,s.jsxs)(n.li,{children:["The PoS registration start at ",(0,s.jsx)(n.code,{children:"Block Number 68845000"})," (around Dec.9th at 10:00)"]}),"\n",(0,s.jsxs)(n.li,{children:["The PoS registration close at ",(0,s.jsx)(n.code,{children:"Block Number 69245000"})," (around Dec.11 at 18:00)"]}),"\n",(0,s.jsxs)(n.li,{children:["The deadline for adding pos_config is before ",(0,s.jsx)(n.code,{children:"Epoch Number reaches 55665000"})," (around Dec.13th 15:00). Hardfork upgrade completed at this time."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For detail infomation check ",(0,s.jsx)(n.a,{href:"https://forum.conflux.fun/t/conflux-v2-0-0-testnet-hardfork-upgrade-announcement/12556",children:"Conflux v2.0.0-testnet Hardfork Upgrade Announcement"})]}),"\n",(0,s.jsx)(n.h2,{id:"upgrade-cip-list",children:"Upgrade CIP list"}),"\n",(0,s.jsx)(n.p,{children:"The following is a brief introduction of these CIPs."}),"\n",(0,s.jsx)(n.h3,{id:"cip-43",children:"CIP-43"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-43.md",children:"Detail link"})}),"\n",(0,s.jsxs)(n.p,{children:["In this ",(0,s.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-43.md",children:"CIP"}),", we propose introducing finality to the Conflux chain via voting among staked CFX holders. This will increase the confidence of high-value transactions happening on Conflux in the future and protect Conflux against potential 51% attacks from PoW."]}),"\n",(0,s.jsx)(n.h3,{id:"cip-64",children:"CIP-64"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-64.md",children:"Detail link"})}),"\n",(0,s.jsx)(n.p,{children:"Currently, transactions on Conflux have no direct access to the number of the epoch they are executed in. To maintain EVM compatibility, this CIP introduces a new internal contract that makes this information available to contracts."}),"\n",(0,s.jsx)(n.h3,{id:"cip-71",children:"CIP-71"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-71.md",children:"Detail link"})}),"\n",(0,s.jsx)(n.p,{children:"Fully disable the anti-reentrancy for their contract."}),"\n",(0,s.jsx)(n.h3,{id:"cip-76",children:"CIP-76"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-76.md",children:"Detail link"})}),"\n",(0,s.jsx)(n.p,{children:"We should remove VM-related constraints in syncing blocks, like requiring the transactions to have enough gas limit."}),"\n",(0,s.jsx)(n.h3,{id:"cip-78",children:"CIP-78"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-78.md",children:"Detail link"})}),"\n",(0,s.jsx)(n.p,{children:"Fix incorrect fields in transaction receipt."}),"\n",(0,s.jsx)(n.h3,{id:"cip-86",children:"CIP-86"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-86.md",children:"Detail link"})}),"\n",(0,s.jsx)(n.p,{children:"Reduce the period of difficulty adjustment and apply the simple moving average method."}),"\n",(0,s.jsx)(n.h3,{id:"cip-90",children:"CIP-90"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md",children:"Detail link"})}),"\n",(0,s.jsxs)(n.p,{children:["This CIP aims to introduce a new fully EVM-compatible space. The new space is called ",(0,s.jsx)(n.code,{children:"eSpace"}),", and the current space is called ",(0,s.jsx)(n.code,{children:"Core"})," Space. The eSpace follows the same rule as EVM and supports eth rpc like ",(0,s.jsx)(n.code,{children:"eth_getBalance"}),", so the tools from ethereum economics can be used on Conflux directly."]}),"\n",(0,s.jsx)(n.h3,{id:"cip-92",children:"CIP-92"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-92.md",children:"Detail link"})}),"\n",(0,s.jsxs)(n.p,{children:["Enable Blake2F builtin function in ",(0,s.jsx)(n.a,{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-152.md",children:"EIP-152"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>d,a:()=>l});var s=c(67294);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);