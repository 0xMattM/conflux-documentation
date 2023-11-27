"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[6675],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",A={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||A[d]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>A,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(4137));const o={sidebar_position:3,title:"Developer Quickstart",keywords:["Quickstart"]},l=void 0,i={unversionedId:"espace/DeveloperQuickstart",id:"espace/DeveloperQuickstart",title:"Developer Quickstart",description:"With Conflux eSpace, your favorite tools for building and testing smart contracts just work.",source:"@site/docs/espace/DeveloperQuickstart.md",sourceDirName:"espace",slug:"/espace/DeveloperQuickstart",permalink:"/docs/espace/DeveloperQuickstart",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/espace/DeveloperQuickstart.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Developer Quickstart",keywords:["Quickstart"]},sidebar:"tutorialSidebar",previous:{title:"User Guide",permalink:"/docs/espace/UserGuide"},next:{title:"Tutorials",permalink:"/docs/espace/tutorials/"}},c={},s=[{value:"Acquiring CFX",id:"acquiring-cfx",level:2},{value:"Network Configuration",id:"network-configuration",level:2},{value:"eSpace Mainnet",id:"espace-mainnet",level:3},{value:"eSpace Testnet",id:"espace-testnet",level:3},{value:"Configure your tooling",id:"configure-your-tooling",level:2},{value:"Hardhat",id:"hardhat",level:3},{value:"Foundry",id:"foundry",level:3},{value:"Remix Web IDE",id:"remix-web-ide",level:3},{value:"Truffle",id:"truffle",level:3},{value:"Brownie",id:"brownie",level:3},{value:"ethers.js",id:"ethersjs",level:3},{value:"scaffold-eth",id:"scaffold-eth",level:3},{value:"Configure Hardhat",id:"configure-hardhat",level:4},{value:"Configure the Frontend",id:"configure-the-frontend",level:4}],p={toc:s},u="wrapper";function A(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With Conflux eSpace, your favorite tools for building and testing smart contracts just work."),(0,r.kt)("p",null,"Since eSpace is EVM-Compatible, you\u2019ll just need to point your favorite builder tools at a Conflux eSpace RPC Provider."),(0,r.kt)("h2",{id:"acquiring-cfx"},"Acquiring CFX"),(0,r.kt)("p",null,"eSpace also uses CFX as its native currency, which will be needed to pay transaction fees for deploying and interacting with the network."),(0,r.kt)("p",null,"To start building on eSpace, we suggest you begin with using eSpace testnet. You'll first need to acquire some testnet CFX through ",(0,r.kt)("a",{parentName:"p",href:"https://efaucet.confluxnetwork.org/"},"faucet"),"."),(0,r.kt)("p",null,"Once you're ready to deploy on eSpace's mainnet, if you only have Core CFX, you can bridge over CFX from Core Space using ",(0,r.kt)("a",{parentName:"p",href:"./"},"our space bridge"),"."),(0,r.kt)("h2",{id:"network-configuration"},"Network Configuration"),(0,r.kt)("h3",{id:"espace-mainnet"},"eSpace Mainnet"),(0,r.kt)("p",null,"Use the table below to configure your Ethereum tools to the eSpace mainnet."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Network Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Conflux eSpace"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RPC URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://evm.confluxrpc.com"},"https://evm.confluxrpc.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chain ID"),(0,r.kt)("td",{parentName:"tr",align:null},"1030")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Currency Symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"CFX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block Explorer URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://evm.confluxscan.io"},"https://evm.confluxscan.io"))))),(0,r.kt)("h3",{id:"espace-testnet"},"eSpace Testnet"),(0,r.kt)("p",null,"Use the table below to configure your Ethereum tools to the eSpace Testnet."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Network Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Conflux eSpace Testnet"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RPC URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://evmtestnet.confluxrpc.com"},"https://evmtestnet.confluxrpc.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chain ID"),(0,r.kt)("td",{parentName:"tr",align:null},"71")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Currency Symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"CFX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block Explorer URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://evmtestnet.confluxscan.io"},"https://evmtestnet.confluxscan.io"))))),(0,r.kt)("h2",{id:"configure-your-tooling"},"Configure your tooling"),(0,r.kt)("p",null,"For setting up tooling to verify a smart contract deployment, see ",(0,r.kt)("a",{parentName:"p",href:"./"},"Verifying Smart\nContracts"),"."),(0,r.kt)("h3",{id:"hardhat"},"Hardhat"),(0,r.kt)("p",null,"Modify your Hardhat config file ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.ts")," to point at the eSpace Testnet public RPC."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'...\n\nconst config: HardhatUserConfig = {\n  ...\n  networks: {\n    eSpaceTestnet: {\n      url: "https://evmtestnet.confluxrpc.com" || "",\n      accounts:\n        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],\n    },\n  },\n};\n\n...\n')),(0,r.kt)("p",null,"A complete workflow for using Hardhat deploy contract is shown ",(0,r.kt)("a",{parentName:"p",href:"/docs/espace/tutorials/deployContract/hardhatAndFoundry"},"here")),(0,r.kt)("h3",{id:"foundry"},"Foundry"),(0,r.kt)("p",null,"To deploy using the eSpace Testnet Public RPC, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"forge create ... --rpc-url=https://evmtestnet.confluxrpc.com --legacy\n")),(0,r.kt)("p",null,"A complete workflow for using foundry deploy contract is shown ",(0,r.kt)("a",{parentName:"p",href:"/docs/espace/tutorials/deployContract/hardhatAndFoundry"},"here")),(0,r.kt)("h3",{id:"remix-web-ide"},"Remix Web IDE"),(0,r.kt)("p",null,"After compiling your contracts, the easiest way to deploy using Remix is by ",(0,r.kt)("a",{parentName:"p",href:"/docs/espace/UserGuide"},"setting up Metamask"),", then selecting the ",(0,r.kt)("strong",{parentName:"p"},"Conflux eSpace Testnet")," network."),(0,r.kt)("p",null,"Now, in the \u201cDeploy and Run Transactions\u201d tab, use the \u201cEnvironment\u201d drop-down and select \u201cInjected Provider - MetaMask.\u201d"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9352).Z})),(0,r.kt)("p",null,"Connect your wallet and select the Conflux eSpace Testnet. Your account should be selected automatically in Remix, and you can click \u201cDeploy.\u201d A complete workflow for Remix usage is shown ",(0,r.kt)("a",{parentName:"p",href:"/docs/espace/tutorials/deployContract/remix"},"here")),(0,r.kt)("h3",{id:"truffle"},"Truffle"),(0,r.kt)("p",null,"Assuming you already have a Truffle environment setup, go to the Truffle ",(0,r.kt)("a",{parentName:"p",href:"https://trufflesuite.com/docs/truffle/reference/configuration/"},"configuration file"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"truffle.js"),". Make sure to have installed HDWalletProvider: ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install @truffle/hdwallet-provider@1.4.0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const HDWalletProvider = require("@truffle/hdwallet-provider")\n...\nmodule.exports = {\n  networks: {\n    eSpaceTestnet: {\n      provider: () =>\n        new HDWalletProvider(process.env.PRIVATE_KEY, "https://evmtestnet.confluxrpc.com"),\n      network_id: \'*\',\n    },\n  }\n}\n')),(0,r.kt)("h3",{id:"brownie"},"Brownie"),(0,r.kt)("p",null,"To add the eSpace Testnet, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brownie networks add Ethereum confluxEspace host=https://evmtestnet.confluxrpc.com chainid=71\n")),(0,r.kt)("p",null,"To set this as your default network, add the following in your project config file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"networks:\n  default: confluxEspace\n")),(0,r.kt)("p",null,"Another way to add the eSpace Testnet is to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," file and run a command to add it."),(0,r.kt)("p",null,"This is an example of a yaml file called ",(0,r.kt)("inlineCode",{parentName:"p"},"network-config.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"live:\n- name: Ethereum\n networks:\n - chainid: 71\n   explorer: https://evmtestnet.confluxscan.io\n   host: https://evmtestnet.confluxrpc.com\n   id: confluxEspace\n   name: Conflux eSpace\n")),(0,r.kt)("p",null,"To add the eSpace Testnet to the network list, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brownie networks import ./network-config.yaml\n")),(0,r.kt)("p",null,"To deploy on eSpace, run the following command. In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"token.py")," is the script to deploy the smart contract. Replace this with the name of your script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brownie run token.py --network confluxEspace\n")),(0,r.kt)("h3",{id:"ethersjs"},"ethers.js"),(0,r.kt)("p",null,"Setting up a eSpace Testnet provider in an ",(0,r.kt)("inlineCode",{parentName:"p"},"ethers")," script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { ethers } from "ethers"\n\nconst provider = new ethers.providers.JsonRpcProvider("https://evmtestnet.confluxrpc.com")\n')),(0,r.kt)("h3",{id:"scaffold-eth"},"scaffold-eth"),(0,r.kt)("p",null,"To deploy using Scaffold-eth, you\u2019ll need to point both your Hardhat and React settings at the eSpace Testnet."),(0,r.kt)("h4",{id:"configure-hardhat"},"Configure Hardhat"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/hardhat/hardhat.config.js")," file, you\u2019ll add the network and select it as the default network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'...\n//\n// Select the network you want to deploy to here:\n//\nconst defaultNetwork = "eSpaceTestnet";\n...\nmodule.exports = {\n...\n    networks: {\n...\n          eSpaceTestnet: {\n            url: "https://evmtestnet.confluxrpc.com",\n            accounts: {\n              mnemonic: mnemonic(),\n            },\n          },\n    }\n...\n}\n')),(0,r.kt)("p",null,"Be sure to fund the deployment wallet as well! Run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn generate")," to create the wallet and ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn account")," to check its funds. Once funded, run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn deploy --network eSpaceTestnet")," to deploy on the eSpace testnet."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"On some project forks, you'll want to disable the contract verification, which relies on Etherscan. This can be\ncommented out in ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/hardhat/deploy/00_deploy_your_contract.js"))),(0,r.kt)("h4",{id:"configure-the-frontend"},"Configure the Frontend"),(0,r.kt)("p",null,"To configure your frontend, you need to add the eSpace Testnet as a network option, then select it as default."),(0,r.kt)("p",null,"To add the network, modify ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/react-app/src/constants.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'...\nexport const NETWORKS = {\n...\n  eSpaceTestnet: {\n    name: "eSpaceTestnet",\n    color: "#e9d0b8",\n    chainId: 71,\n    rpcUrl: "https://evmtestnet.confluxrpc.com",\n    blockExplorer: "https://evmtestnet.confluxscan.io",\n  },\n...\n}\n')),(0,r.kt)("p",null,"Next, in ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/react-app/src/App.jsx")," modify"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"...\n/// \ud83d\udce1 What chain are your contracts deployed to?\nconst initialNetwork = NETWORKS.eSpaceTestnet;\n...\n")))}A.isMDXComponent=!0},9352:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/avif;base64,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"}}]);