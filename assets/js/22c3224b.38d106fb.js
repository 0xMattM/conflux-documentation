"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[541],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>u});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},d=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return n?t.createElement(f,s(s({ref:r},d),{},{components:n})):t.createElement(f,s({ref:r},d))}));function u(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2552:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=n(7462),a=(n(7294),n(3905));const o={id:"common_rpc_error",sidebar_position:6,title:"Common RPC errors",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/RPCs/common-rpc-error.md",keywords:["rpc","error"]},s=void 0,i={unversionedId:"build/apis/JSON-RPC/common_rpc_error",id:"build/apis/JSON-RPC/common_rpc_error",title:"Common RPC errors",description:"Common errors",source:"@site/docs/build/apis/JSON-RPC/common-rpc-error.md",sourceDirName:"build/apis/JSON-RPC",slug:"/build/apis/JSON-RPC/common_rpc_error",permalink:"/docs/build/apis/JSON-RPC/common_rpc_error",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/RPCs/common-rpc-error.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"common_rpc_error",sidebar_position:6,title:"Common RPC errors",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/RPCs/common-rpc-error.md",keywords:["rpc","error"]},sidebar:"tutorialSidebar",previous:{title:"trace Namespace",permalink:"/docs/build/apis/JSON-RPC/trace_rpc"},next:{title:"cfx_sendRawTransaction errors",permalink:"/docs/build/apis/JSON-RPC/send_tx_error"}},c={},l=[{value:"Common errors",id:"common-errors",level:2},{value:"Method not found",id:"method-not-found",level:3},{value:"Lacking parameters",id:"lacking-parameters",level:3},{value:"Passing extra parameters",id:"passing-extra-parameters",level:3},{value:"Invalid base32 address passed",id:"invalid-base32-address-passed",level:3},{value:"Invalid block/transaction hash passed",id:"invalid-blocktransaction-hash-passed",level:3},{value:"Estimate error",id:"estimate-error",level:3}],d={toc:l};function p(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"common-errors"},"Common errors"),(0,a.kt)("h3",{id:"method-not-found"},"Method not found"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32601,\n        "message": "Method not found"\n    },\n    "id": "15922956697249514502"\n}\n')),(0,a.kt)("h3",{id:"lacking-parameters"},"Lacking parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Invalid params: invalid length 0, expected a tuple of size 1."\n    },\n    "id": "15922956697249514502"\n}\n')),(0,a.kt)("h3",{id:"passing-extra-parameters"},"Passing extra parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Invalid params: invalid length 2, expected fewer elements in array."\n    },\n    "id": "15922956697249514502"\n}\n')),(0,a.kt)("h3",{id:"invalid-base32-address-passed"},"Invalid base32 address passed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Invalid params: Invalid base32 address: input net8888:aak2rra2njvd77ezwjvx04kkds9fzagfe6xm1vavv4dd error invalid checksum (actual 1122 != 0)."\n    },\n    "id": "15922956697249514502"\n}\n')),(0,a.kt)("h3",{id:"invalid-blocktransaction-hash-passed"},"Invalid block/transaction hash passed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Invalid params: invalid length 65, expected a (both 0x-prefixed or not) hex string with length of 64."\n    },\n    "id": "15922956697249514502"\n}\n')),(0,a.kt)("h3",{id:"estimate-error"},"Estimate error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Can not estimate: transaction execution failed, all gas will be charged (execution error: VmError(OutOfGas))"\n    },\n    "id": "15922956697249514502"\n}\n')))}p.isMDXComponent=!0}}]);