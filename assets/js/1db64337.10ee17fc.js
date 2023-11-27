"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[1372],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(4137));const o={sidebar_position:1,title:"Overview"},i="Documentation Overview",s={unversionedId:"overview",id:"overview",title:"Overview",description:"Welcome to the Conflux Network Developer Portal! This comprehensive portal is designed to guide you through the complexities of the Conflux Network, a high-performance, decentralized blockchain network. Here, you'll find detailed summaries of the platform's foundational concepts, tools, and guidelines.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",next:{title:"eSpace",permalink:"/docs/espace/"}},l={},c=[{value:"<strong>Understanding the Conflux Network</strong>",id:"understanding-the-conflux-network",level:2},{value:"<strong>Build with Conflux Network</strong>",id:"build-with-conflux-network",level:2},{value:"One more thing",id:"one-more-thing",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"documentation-overview"},"Documentation Overview"),(0,r.kt)("p",null,"Welcome to the Conflux Network Developer Portal! This comprehensive portal is designed to guide you through the complexities of the Conflux Network, a high-performance, decentralized blockchain network. Here, you'll find detailed summaries of the platform's foundational concepts, tools, and guidelines."),(0,r.kt)("h2",{id:"understanding-the-conflux-network"},(0,r.kt)("strong",{parentName:"h2"},"Understanding the Conflux Network")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"./general/conflux-basics/consensus-mechanisms"},(0,r.kt)("strong",{parentName:"a"},"Consensus Mechanism")),": Discover Conflux's hybrid PoW-PoS consensus mechanism, combining Proof of Work with Proof of Stake for enhanced security and performance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"./general/conflux-basics/spaces"},(0,r.kt)("strong",{parentName:"a"},"Spaces")),":\nExplore the dual space ecosystem of Conflux, facilitating seamless integration of Conflux-format and Ethereum-format transactions within one network.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"./general/conflux-basics/accounts"},(0,r.kt)("strong",{parentName:"a"},"Accounts")),":\nLearn about network accounts, capable of holding balances and initiating transactions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"./core/learn/core-space-basics/addresses"},(0,r.kt)("strong",{parentName:"a"},"Core Space Addresses")),":\nUnderstand how Conflux accounts are identified by addresses, with Core Space using a base32 encoding format.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"./general/conflux-basics/transactions"},(0,r.kt)("strong",{parentName:"a"},"Transactions")),":\nExplore the transactions \u2013 transfers and other actions that modify Conflux's state. Notably, this section also elucidates the unique aspects of the Conflux transaction lifecycle, distinct from Ethereum's model.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"./core/learn/core-space-basics/transaction_explain#differences-between-conflux-and-ethereum"},(0,r.kt)("strong",{parentName:"a"},"Transactions(core space)")),":\nUnderstand the nuances differentiating Conflux Core Space transactions from Ethereum transactions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"./general/conflux-basics/gas"},(0,r.kt)("strong",{parentName:"a"},"Gas")),":\nLearn about the gas mechanism in Conflux, which is utilized to compute transaction costs and incentivize network operations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"./core/learn/core-space-basics/storage"},(0,r.kt)("strong",{parentName:"a"},"Storage(core space)")),":\nUnderstand Conflux's Collateral for Storage (CFS) mechanism, the pricing method for using storage in Conflux ",(0,r.kt)("strong",{parentName:"p"},"core space"),", which is more fair and reasonable than Ethereum.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"./core/learn/core-space-basics/internal-contracts/"},(0,r.kt)("strong",{parentName:"a"},"Internal Contracts(core space)")),":\nConflux introduces several built-in internal contracts for better system maintenance and on-chain governance in core space: ",(0,r.kt)("inlineCode",{parentName:"p"},"AdminControl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SponsorWhitelistControl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Staking"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfluxContext"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PoSRegister"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"ParamsControl"),". This section provides a comprehensive look at the internal contracts in Conflux that provide foundational functionality for the network here."))),(0,r.kt)("h2",{id:"build-with-conflux-network"},(0,r.kt)("strong",{parentName:"h2"},"Build with Conflux Network")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"./general/run-a-node/"},(0,r.kt)("strong",{parentName:"a"},"Run a Node")),":\nFamiliarize yourself with the process of setting up and operating a Conflux node, becoming an integral part of the network.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"./core/tutorials/getting-started/"},(0,r.kt)("strong",{parentName:"a"},"Getting Started with Core Space")),":\nBegin your journey in Conflux's Core space, understanding its fundamental concepts and operations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"./category/sdks-and-tools"},(0,r.kt)("strong",{parentName:"a"},"SDKs & Tools")),":\nAccess a suite of software development kits and tools tailored for seamless integration and development on Conflux core space.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"./core/learn/core-space-basics/internal-contracts/sponsor-whitelist-control"},(0,r.kt)("strong",{parentName:"a"},"Sponsorship Tutorial")),":\nDiscover Conflux\u2019s gas sponsorship mechanism, which facilitates smart contract usage without gas costs, allowing sponsored contract executions even by new, zero-balance accounts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"./core/build/sdks-and-tools/conflux_rpcs"},(0,r.kt)("strong",{parentName:"a"},"Core Space Network Endpoints"))," & ",(0,r.kt)("a",{parentName:"p",href:"./espace/network-endpoints"},(0,r.kt)("strong",{parentName:"a"},"eSpace Network Endpoints")),":\nFind the list of network endpoints for both Conflux's Core Space and eSpace.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"./core/build/json-rpc/"},(0,r.kt)("strong",{parentName:"a"},"Core Space JSON-RPC"))," & ",(0,r.kt)("a",{parentName:"p",href:"/docs/espace/build/jsonrpc-compatibility"},(0,r.kt)("strong",{parentName:"a"},"eSpace JSON-RPC")),":\nLearn about the JSON-RPC protocols in the Core Space or eSpace for remote procedures.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"./espace/build/evm-compatibility"},(0,r.kt)("strong",{parentName:"a"},"EVM Compatibility")),":\nLearn about Conflux's compatibility with the Ethereum Virtual Machine (EVM), helping to deploy evm-compatible smart contracts and dapps to Conflux."))),(0,r.kt)("h2",{id:"one-more-thing"},"One more thing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./general/CONTRIBUTING"},(0,r.kt)("strong",{parentName:"a"},"Contributing")),":\nLearn how you can contribute to improving the Conflux Network documentation portal, sharing expertise, and collaborating with the community.")))}m.isMDXComponent=!0}}]);