"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[5697],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=o,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||n;return r?a.createElement(h,i(i({ref:t},s),{},{components:r})):a.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6795:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(7462),o=(r(7294),r(4137));const n={sidebar_position:3,title:"Deploying contract using thirdweb"},i=void 0,l={unversionedId:"espace/tutorials/deployContract/thirdweb",id:"espace/tutorials/deployContract/thirdweb",title:"Deploying contract using thirdweb",description:"Create Contract",source:"@site/docs/espace/tutorials/deployContract/thirdweb.md",sourceDirName:"espace/tutorials/deployContract",slug:"/espace/tutorials/deployContract/thirdweb",permalink:"/docs/espace/tutorials/deployContract/thirdweb",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/espace/tutorials/deployContract/thirdweb.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Deploying contract using thirdweb"},sidebar:"tutorialSidebar",previous:{title:"Deploying an ERC-20 Token using Remix IDE",permalink:"/docs/espace/tutorials/deployContract/remix"},next:{title:"Contract Verification",permalink:"/docs/espace/tutorials/VerifyContracts"}},p={},c=[{value:"Create Contract",id:"create-contract",level:2},{value:"Deploy Contract",id:"deploy-contract",level:2}],s={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-contract"},"Create Contract"),(0,o.kt)("p",null,"To create a new smart contract using thirdweb CLI, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your CLI run the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx thirdweb create contract\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Input your preferences for the command line prompts:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Give your project a name"),(0,o.kt)("li",{parentName:"ol"},"Choose your preferred framework: Hardhat or Foundry"),(0,o.kt)("li",{parentName:"ol"},"Name your smart contract"),(0,o.kt)("li",{parentName:"ol"},"Choose the type of base contract: Empty, ",(0,o.kt)("a",{parentName:"li",href:"https://portal.thirdweb.com/solidity/base-contracts/erc20base"},"ERC20"),", ",(0,o.kt)("a",{parentName:"li",href:"https://portal.thirdweb.com/solidity/base-contracts/erc721base"},"ERC721"),", or ",(0,o.kt)("a",{parentName:"li",href:"https://portal.thirdweb.com/solidity/base-contracts/erc1155base"},"ERC1155")),(0,o.kt)("li",{parentName:"ol"},"Add any desired ",(0,o.kt)("a",{parentName:"li",href:"https://portal.thirdweb.com/solidity/extensions"},"extensions")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once created, navigate to your project\u2019s directory and open in your preferred code editor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you open the ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts")," folder, you will find your smart contract; this is your smart contract written in Solidity."),(0,o.kt)("p",{parentName:"li"},"The following is code for an ERC721Base contract without specified extensions. It implements all of the logic inside the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/thirdweb-dev/contracts/blob/main/contracts/base/ERC721Base.sol"},(0,o.kt)("inlineCode",{parentName:"a"},"ERC721Base.sol"))," contract; which implements the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/thirdweb-dev/contracts/blob/main/contracts/eip/ERC721A.sol"},(0,o.kt)("inlineCode",{parentName:"a"},"ERC721A"))," standard."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport "@thirdweb-dev/contracts/base/ERC721Base.sol";\n\ncontract Contract is ERC721Base {\n    constructor(\n        string memory _name,\n        string memory _symbol,\n        address _royaltyRecipient,\n        uint128 _royaltyBps\n    ) ERC721Base(_name, _symbol, _royaltyRecipient, _royaltyBps) {}\n}\n')),(0,o.kt)("p",{parentName:"li"},"This contract inherits the functionality of ERC721Base through the following steps:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Importing the ERC721Base contract"),(0,o.kt)("li",{parentName:"ul"},"Inheriting the contract by declaring that our contract is an ERC721Base contract"),(0,o.kt)("li",{parentName:"ul"},"Implementing any required methods, such as the constructor."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After modifying your contract with your desired custom logic, you may deploy it to Conflux using ",(0,o.kt)("a",{parentName:"p",href:"https://portal.thirdweb.com/deploy"},"Deploy"),"."))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Alternatively, you can deploy a prebuilt contract for NFTs, tokens, or marketplace directly from the thirdweb Explore page:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the thirdweb Explore page: ",(0,o.kt)("a",{parentName:"p",href:"https://thirdweb.com/explore"},"https://thirdweb.com/explore")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"thirdweb Explore page",src:r(6817).Z,width:"2032",height:"1167"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose the type of contract you want to deploy from the available options: NFTs, tokens, marketplace, and more.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Follow the on-screen prompts to configure and deploy your contract."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more information on different contracts available on Explore, check out ",(0,o.kt)("a",{parentName:"p",href:"https://portal.thirdweb.com/pre-built-contracts"},"thirdweb\u2019s documentation."))),(0,o.kt)("h2",{id:"deploy-contract"},"Deploy Contract"),(0,o.kt)("p",null,"Deploy allows you to deploy a smart contract to any EVM compatible network without configuring RPC URLs, exposing your private keys, writing scripts, and other additional setup such as verifying your contract."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To deploy your smart contract using deploy, navigate to the root directory of your project and execute the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx thirdweb deploy\n")),(0,o.kt)("p",{parentName:"li"},"Executing this command will trigger the following actions:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Compiling all the contracts in the current directory."),(0,o.kt)("li",{parentName:"ul"},"Providing the option to select which contract(s) you wish to deploy."),(0,o.kt)("li",{parentName:"ul"},"Uploading your contract source code (ABI) to IPFS."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When it is completed, it will open a dashboard interface to finish filling out the parameters."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_name"),": contract name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_symbol"),': symbol or "ticker"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_royaltyRecipient"),": wallet address to receive royalties from secondary sales"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_royaltyBps"),": basis points (bps) that will be given to the royalty recipient for each secondary sale, e.g. 500 = 5%"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"TelosEvm")," as the network")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Manage additional settings on your contract\u2019s dashboard as needed such as uploading NFTs, configuring permissions, and more."))),(0,o.kt)("p",null,"For additional information on Deploy, please reference ",(0,o.kt)("a",{parentName:"p",href:"https://portal.thirdweb.com/deploy"},"thirdweb\u2019s documentation"),"."),(0,o.kt)("p",null,"If you have any further questions or encounter any issues during the process, please reach out to thirdweb support at ",(0,o.kt)("a",{parentName:"p",href:"http://support.thirdweb.com/"},"support.thirdweb.com"),"."))}d.isMDXComponent=!0},6817:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/thirdweb-explore-ee9602c6ab8d6ea5e27779bef06b740c.png"}}]);