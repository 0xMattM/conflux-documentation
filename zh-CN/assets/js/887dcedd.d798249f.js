"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[5110],{10781:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var a=r(85893),s=r(11151);const c={title:"cfx_sendRawTransaction \u63a5\u53e3\u9519\u8bef",sidebar_position:7,description:"Cfx_sendRawTransaction\u7684\u5e38\u89c1\u9519\u8bef",displayed_sidebar:"coreSidebar",keywords:["cfx_sendRawTransaction","errors"],label:["cfx_sendRawTransaction","errors"]},d=void 0,i={id:"core/build/json-rpc/rpc-behaviour/cfx_sendTransaction-errors",title:"cfx_sendRawTransaction \u63a5\u53e3\u9519\u8bef",description:"Cfx_sendRawTransaction\u7684\u5e38\u89c1\u9519\u8bef",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core/build/json-rpc/rpc-behaviour/cfx_sendTransaction-errors.md",sourceDirName:"core/build/json-rpc/rpc-behaviour",slug:"/core/build/json-rpc/rpc-behaviour/cfx_sendTransaction-errors",permalink:"/zh-CN/docs/core/build/json-rpc/rpc-behaviour/cfx_sendTransaction-errors",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"cfx_sendRawTransaction \u63a5\u53e3\u9519\u8bef",sidebar_position:7,description:"Cfx_sendRawTransaction\u7684\u5e38\u89c1\u9519\u8bef",displayed_sidebar:"coreSidebar",keywords:["cfx_sendRawTransaction","errors"],label:["cfx_sendRawTransaction","errors"]},sidebar:"coreSidebar",previous:{title:"RPC Behaviour",permalink:"/zh-CN/docs/category/rpc-behaviour"},next:{title:"cfx_estimateGasAndCollatory \u884c\u4e3a",permalink:"/zh-CN/docs/core/build/json-rpc/rpc-behaviour/cfx_estimateGasAndCollateral-behaviour"}},o={},l=[{value:"\u4f59\u989d\u4e0d\u8db3",id:"\u4f59\u989d\u4e0d\u8db3",level:2},{value:"Nonce \u9519\u8bef",id:"nonce-\u9519\u8bef",level:2},{value:"\u4f7f\u7528\u5df2\u6267\u884c\u8fc7\u7684nonce",id:"\u4f7f\u7528\u5df2\u6267\u884c\u8fc7\u7684nonce",level:3},{value:"\u4f7f\u7528\u4e00\u4e2a\u5df2\u7ecf\u53d1\u9001\u5230\u4ea4\u6613\u6c60\u7684nonce",id:"\u4f7f\u7528\u4e00\u4e2a\u5df2\u7ecf\u53d1\u9001\u5230\u4ea4\u6613\u6c60\u7684nonce",level:3},{value:"\u4f7f\u7528\u8fc7\u5927\u7684nonce",id:"\u4f7f\u7528\u8fc7\u5927\u7684nonce",level:3},{value:"\u4e0egas\u76f8\u5173\u7684\u95ee\u9898",id:"\u4e0egas\u76f8\u5173\u7684\u95ee\u9898",level:2},{value:"Gas too small (<code>&lt;21000</code>) or too large (<code>&gt;15m</code>)",id:"gas-too-small-21000-or-too-large-15m",level:3},{value:"\u65e0\u6548\u7684gasPrice",id:"\u65e0\u6548\u7684gasprice",level:2},{value:"GasPrice\u4ef7\u683c\u8bbe\u7f6e\u4e3a0",id:"gasprice\u4ef7\u683c\u8bbe\u7f6e\u4e3a0",level:3},{value:"GasPrice\u4f4e\u4e8e\u6700\u4f4e\u7684gas\u4ef7\u683c",id:"gasprice\u4f4e\u4e8e\u6700\u4f4e\u7684gas\u4ef7\u683c",level:3},{value:"\u8d85\u8fc7\u6570\u636e\u5927\u5c0f\u9650\u5236",id:"\u8d85\u8fc7\u6570\u636e\u5927\u5c0f\u9650\u5236",level:2},{value:"epochHeight\u9519\u8bef",id:"epochheight\u9519\u8bef",level:2},{value:"chainId\u4e0d\u5339\u914d",id:"chainid\u4e0d\u5339\u914d",level:2},{value:"\u7f16\u7801\u6216\u8005\u7b7e\u540d\u9519\u8bef",id:"\u7f16\u7801\u6216\u8005\u7b7e\u540d\u9519\u8bef",level:2},{value:"\u4ea4\u6613\u6c60\u5df2\u6ee1",id:"\u4ea4\u6613\u6c60\u5df2\u6ee1",level:2},{value:"\u5904\u4e8e\u8ffd\u8d76\u6a21\u5f0f\u7684\u8282\u70b9",id:"\u5904\u4e8e\u8ffd\u8d76\u6a21\u5f0f\u7684\u8282\u70b9",level:2},{value:"\u5185\u90e8\u9519\u8bef",id:"\u5185\u90e8\u9519\u8bef",level:2}];function t(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["\u8fd9\u4e9b\u9519\u8bef\u662f\u7531 Conflux \u534f\u8bae\u7684\u5b98\u65b9\u5b9e\u73b0 ",(0,a.jsx)(n.a,{href:"https://github.com/Conflux-Chain/conflux-rust",children:"conflux-rust"}),"\u5b9a\u4e49\u7684\u3002"]}),"\n",(0,a.jsx)(n.p,{children:":::"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728Conflux Core\u7a7a\u95f4\u4e2d\u901a\u8fc7",(0,a.jsx)(n.code,{children:"cfx_sendRawTransaction"})," \u65b9\u6cd5\u53d1\u9001\u4ea4\u6613\u65f6,\u53ef\u80fd\u4f1a\u56e0\u4e3a\u4e0d\u6b63\u786e\u7684\u4ea4\u6613\u6784\u5efa\u6216\u5176\u4ed6\u95ee\u9898\u800c\u51fa\u73b0\u4e00\u4e9b\u9519\u8bef\u3002 \u672c\u6307\u5357\u6db5\u76d6\u4e86\u5e38\u89c1\u9519\u8bef\u53ca\u5176\u89e3\u51b3\u65b9\u6cd5\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u4f59\u989d\u4e0d\u8db3",children:"\u4f59\u989d\u4e0d\u8db3"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"Transaction 0xf34740b7f033b13b8670df91f24537e756700a32f17e5e09a7d297701cec6859 is discarded due to out of balance, needs 9000000000420000000000000 but account balance is 90095849479680000000000\\""\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"nonce-\u9519\u8bef",children:"Nonce \u9519\u8bef"}),"\n",(0,a.jsx)(n.h3,{id:"\u4f7f\u7528\u5df2\u6267\u884c\u8fc7\u7684nonce",children:"\u4f7f\u7528\u5df2\u6267\u884c\u8fc7\u7684nonce"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"Transaction 0x4a2cfa73267139d965ab86d41f2af16db09e62ff92a5abffd7f8e743f36f327c is discarded due to a too stale nonce\\""\n    }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"**\u89e3\u51b3\u65b9\u6848\uff1a**\u5c06nonce\u66f4\u6539\u4e3a\u7b2c\u4e00\u4e2a\u672a\u4f7f\u7528\u7684nonce\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u4f7f\u7528\u4e00\u4e2a\u5df2\u7ecf\u53d1\u9001\u5230\u4ea4\u6613\u6c60\u7684nonce",children:"\u4f7f\u7528\u4e00\u4e2a\u5df2\u7ecf\u53d1\u9001\u5230\u4ea4\u6613\u6c60\u7684nonce"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"tx already exist\\""\n    }\n  }\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u6216\u8005"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "Tx with same nonce already inserted. to replace it, you need to specify a gas price > {}"\n    }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"**\u89e3\u51b3\u65b9\u6848\uff1a**\u4ea4\u6613\u5df2\u7ecf\u53d1\u9001\u5230\u4ea4\u6613\u6c60\u3002 \u8bf7\u4f7f\u7528\u76f8\u540c\u7684nonce\u66f4\u65b0\u6216\u66ff\u6362\u5b83\uff0c\u540c\u65f6\u4fee\u6539\u76f8\u5e94\u7684\u5b57\u6bb5\uff0c\u5e76\u4f7f\u7528\u66f4\u9ad8\u7684gasPrice\u503c\u91cd\u65b0\u53d1\u9001\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u4f7f\u7528\u8fc7\u5927\u7684nonce",children:"\u4f7f\u7528\u8fc7\u5927\u7684nonce"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data":"\\"Transaction 0xc875a03e1ce01268931a1a428d8f8313714ab5eb9c2b626bd327af7e5c3e8c03 is discarded due to in too distant future\\""\n    }\n  }\n'})}),"\n",(0,a.jsx)(n.p,{children:"**\u89e3\u51b3\u65b9\u6848\uff1a**\u5c06nonce\u66f4\u6539\u4e3a\u7b2c\u4e00\u4e2a\u672a\u4f7f\u7528\u7684nonce\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u4e0egas\u76f8\u5173\u7684\u95ee\u9898",children:"\u4e0egas\u76f8\u5173\u7684\u95ee\u9898"}),"\n",(0,a.jsxs)(n.h3,{id:"gas-too-small-21000-or-too-large-15m",children:["Gas too small (",(0,a.jsx)(n.code,{children:"<21000"}),") or too large (",(0,a.jsx)(n.code,{children:">15m"}),")"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"NotEnoughBaseGas { required: 21000, got: 2000 }\\""\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["**\u89e3\u51b3\u65b9\u6cd5:**\u5c06",(0,a.jsx)(n.code,{children:"gas"}),"\u5b57\u6bb5\u6539\u4e3a\u6b63\u786e\u7684\u5b57\u6bb5\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"transaction gas 20000000 exceeds the maximum value 15000000, the half of pivot block gas limit\\""\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["**\u89e3\u51b3\u65b9\u6cd5:**\u5c06",(0,a.jsx)(n.code,{children:"gas"}),"\u5b57\u6bb5\u6539\u5c0f\u4e00\u70b9\u3002 \u6700\u5927\u503c\u4e3a1500\u4e07\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u65e0\u6548\u7684gasprice",children:"\u65e0\u6548\u7684gasPrice"}),"\n",(0,a.jsx)(n.h3,{id:"gasprice\u4ef7\u683c\u8bbe\u7f6e\u4e3a0",children:"GasPrice\u4ef7\u683c\u8bbe\u7f6e\u4e3a0"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": { \n      "code": -32602,\n      "message": "Invalid parameters: tx", \n      "data": "\\"ZeroGasPrice\\"" \n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u6cd5:"})," \u4f7f\u7528",(0,a.jsx)(n.code,{children:"cfx_gasPrice"}),"\u7684\u8fd4\u56de\u503c\u4f5c\u4e3a",(0,a.jsx)(n.code,{children:"gasPrice"}),"\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"gasprice\u4f4e\u4e8e\u6700\u4f4e\u7684gas\u4ef7\u683c",children:"GasPrice\u4f4e\u4e8e\u6700\u4f4e\u7684gas\u4ef7\u683c"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"transaction gas price 1 less than the minimum value 20000000000\\""\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u8d85\u8fc7\u6570\u636e\u5927\u5c0f\u9650\u5236",children:"\u8d85\u8fc7\u6570\u636e\u5927\u5c0f\u9650\u5236"}),"\n",(0,a.jsx)(n.p,{children:"\u4ea4\u6613\u7684\u5927\u5c0f\u6709\u9650\u5236\uff0c\u6700\u5927\u4e3a 200K\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"epochheight\u9519\u8bef",children:"epochHeight\u9519\u8bef"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"EpochHeightOutOfBound { block_height: 53800739, set: 0, transaction_epoch_bound: 100000 }\\""\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["**\u89e3\u51b3\u65b9\u6cd5:**\u4f7f\u7528",(0,a.jsx)(n.code,{children:"cfx_epochNumber"}),"\u7684\u8fd4\u56de\u503c\u4f5c\u4e3a",(0,a.jsx)(n.code,{children:"epochHeight"})]}),"\n",(0,a.jsx)(n.h2,{id:"chainid\u4e0d\u5339\u914d",children:"chainId\u4e0d\u5339\u914d"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"ChainIdMismatch { expected: 1, got: 2 }\\""\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u6cd5:"})," \u4f7f\u7528",(0,a.jsx)(n.code,{children:"cfx_status"}),"\u8fd4\u56de\u503c\u4e2d\u7684",(0,a.jsx)(n.code,{children:"chainId"}),"\u5b57\u6bb5\u4f5c\u4e3a",(0,a.jsx)(n.code,{children:"chainId"}),"\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u7f16\u7801\u6216\u8005\u7b7e\u540d\u9519\u8bef",children:"\u7f16\u7801\u6216\u8005\u7b7e\u540d\u9519\u8bef"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: raw",\n        "data": "\\"RlpIncorrectListLen\\""\n    }\n}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: raw",\n        "data": "\\"RlpExpectedToBeList\\""\n    }\n}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "Can not recover pubkey for Ethereum like tx"\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u6cd5:"})," \u786e\u4fdd\u4f60\u6b63\u786e\u5730\u4f7f\u7528SDK\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u4ea4\u6613\u6c60\u5df2\u6ee1",children:"\u4ea4\u6613\u6c60\u5df2\u6ee1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "txpool is full"\n    }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u6216\u8005"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "Failed imported to deferred pool: Transaction Pool is full"\n    }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"**\u89e3\u51b3\u65b9\u6848\uff1a**\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\u540e\u91cd\u65b0\u53d1\u9001\u4ea4\u6613\uff0c\u5e76\u63d0\u9ad8\u4ea4\u6613\u7684gasPrice\u4ee5\u589e\u52a0\u53d1\u9001\u7684\u673a\u4f1a\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u5904\u4e8e\u8ffd\u8d76\u6a21\u5f0f\u7684\u8282\u70b9",children:"\u5904\u4e8e\u8ffd\u8d76\u6a21\u5f0f\u7684\u8282\u70b9"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32077,\n        "message": "Request rejected due to still in the catch up mode",\n        "data": null\n    }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"**\u89e3\u51b3\u65b9\u6848\uff1a**\u5728\u53d1\u9001\u4e4b\u524d\uff0c\u7b49\u5f85\u8282\u70b9\u6570\u636e\u540c\u6b65\u5230\u6700\u65b0\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u5185\u90e8\u9519\u8bef",children:"\u5185\u90e8\u9519\u8bef"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "Failed to read account_cache from storage: {}"\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>d});var a=r(67294);const s={},c=a.createContext(s);function d(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);