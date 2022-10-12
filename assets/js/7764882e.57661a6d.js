"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9193],{3905:(e,a,n)=>{n.d(a,{Zo:()=>f,kt:()=>b});var t=n(7294);function c(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){c(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,c=function(e,a){if(null==e)return{};var n,t,c={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(c[n]=e[n]);return c}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=t.createContext({}),d=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},f=function(e){var a=d(e.components);return t.createElement(o.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,c=e.mdxType,r=e.originalType,o=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),p=d(n),b=c,u=p["".concat(o,".").concat(b)]||p[b]||s[b]||r;return n?t.createElement(u,l(l({ref:a},f),{},{components:n})):t.createElement(u,l({ref:a},f))}));function b(e,a){var n=arguments,c=a&&a.mdxType;if("string"==typeof e||c){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:c,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5250:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=n(7462),c=(n(7294),n(3905));const r={id:"trace_rpc",sidebar_position:5,title:"trace Namespace",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/RPCs/trace-rpc.md",keywords:["trace-rpc"]},l=void 0,i={unversionedId:"build/apis/JSON-RPC/trace_rpc",id:"build/apis/JSON-RPC/trace_rpc",title:"trace Namespace",description:"Through trace RPCs we can know the transaction executive details. To use these RPC Conflux archive node need set two additional config:",source:"@site/docs/build/apis/JSON-RPC/trace-rpc.md",sourceDirName:"build/apis/JSON-RPC",slug:"/build/apis/JSON-RPC/trace_rpc",permalink:"/docs/build/apis/JSON-RPC/trace_rpc",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/RPCs/trace-rpc.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"trace_rpc",sidebar_position:5,title:"trace Namespace",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/RPCs/trace-rpc.md",keywords:["trace-rpc"]},sidebar:"tutorialSidebar",previous:{title:"debug Namespace",permalink:"/docs/build/apis/JSON-RPC/debug_rpc"},next:{title:"Common RPC errors",permalink:"/docs/build/apis/JSON-RPC/common_rpc_error"}},o={},d=[{value:"Trace object",id:"trace-object",level:2},{value:"RPCs",id:"rpcs",level:2},{value:"trace_block",id:"trace_block",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"TransactionTrace",id:"transactiontrace",level:5},{value:"Returns",id:"returns-1",level:4},{value:"trace_transaction",id:"trace_transaction",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Note",id:"note",level:2},{value:"V2.0 trace breaking change",id:"v20-trace-breaking-change",level:2},{value:"New added field <code>valid</code>",id:"new-added-field-valid",level:3},{value:"Gas consume and refund trace was introduced",id:"gas-consume-and-refund-trace-was-introduced",level:3},{value:"Trace for storage collateral.",id:"trace-for-storage-collateral",level:3},{value:"Indicator for kill contract",id:"indicator-for-kill-contract",level:3},{value:"New added <code>space</code> field",id:"new-added-space-field",level:3},{value:"Four new field added to <code>internal_transfer_action</code>",id:"four-new-field-added-to-internal_transfer_action",level:3},{value:"Specification for pocket",id:"specification-for-pocket",level:4},{value:"Specification for space",id:"specification-for-space",level:4},{value:"Changes in integrity constraints",id:"changes-in-integrity-constraints",level:3},{value:"Before change",id:"before-change",level:4},{value:"After change",id:"after-change",level:4}],f={toc:d};function s(e){let{components:a,...n}=e;return(0,c.kt)("wrapper",(0,t.Z)({},f,n,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Through ",(0,c.kt)("inlineCode",{parentName:"p"},"trace")," RPCs we can know the transaction executive details. To use these RPC Conflux archive node need set two additional config:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-toml"},'executive_trace = true\npublic_rpc_apis = "safe,trace"  // or public_rpc_apis = "all"\n')),(0,c.kt)("p",null,"Note: An existing archive node need clear all blockchain data to open ",(0,c.kt)("inlineCode",{parentName:"p"},"executive_trace")," config."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Note"),": From Conflux-rust v2.0 trace RPC have some breaking change, ",(0,c.kt)("a",{parentName:"p",href:"#v20-trace-breaking-change"},"Read below")," for details."),(0,c.kt)("h2",{id:"trace-object"},"Trace object"),(0,c.kt)("p",null,"A ",(0,c.kt)("inlineCode",{parentName:"p"},"Trace")," trace object contain below field:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"type"),": ",(0,c.kt)("inlineCode",{parentName:"li"},"STRING")," - Type of trace. Avaliable value is ",(0,c.kt)("inlineCode",{parentName:"li"},"call"),", ",(0,c.kt)("inlineCode",{parentName:"li"},"create"),", ",(0,c.kt)("inlineCode",{parentName:"li"},"call_result"),", ",(0,c.kt)("inlineCode",{parentName:"li"},"create_result"),", ",(0,c.kt)("inlineCode",{parentName:"li"},"internal_transfer_action")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"action"),": ",(0,c.kt)("inlineCode",{parentName:"li"},"OBJECT")," - Trace's action info\uff0cdifferent type trace's action have different fields.")),(0,c.kt)("p",null,"Example:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "action": {\n    "callType": "call",\n    "from": "CFXTEST:TYPE.USER:AAJSUKECFVZF2MG8GZYR9GNAKZYSX9P6VU29DWZ6T2",\n    "gas": "0x171e2",\n    "input": "0x9c312cfd",\n    "to": "CFXTEST:TYPE.CONTRACT:ACE8BSDS7WN52KHYK29NEBZWFPVZ5RPPD28KCXETJ8",\n    "value": "0x1d6e3"\n  },\n  "type": "call"\n}\n')),(0,c.kt)("p",null,"Check this ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-doc/blob/master/docs/trace_introduction.md"},"document")," to get detail explanation of Conflux trace"),(0,c.kt)("h2",{id:"rpcs"},"RPCs"),(0,c.kt)("h3",{id:"trace_block"},"trace_block"),(0,c.kt)("p",null,"Get block traces by block hash"),(0,c.kt)("h4",{id:"parameters"},"Parameters"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"DATA, 32 Bytes - hash of a block")),(0,c.kt)("h4",{id:"returns"},"Returns"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"blockHash"),": ",(0,c.kt)("inlineCode",{parentName:"li"},"HASH")," - Hash of block"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"epochHash"),": ",(0,c.kt)("inlineCode",{parentName:"li"},"HASH")," - Hash of epoch"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"epochNumber"),": ",(0,c.kt)("inlineCode",{parentName:"li"},"QUANTITY")," - Number of epoch"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"transactionTraces"),": ",(0,c.kt)("inlineCode",{parentName:"li"},"Array")," -  Array of ",(0,c.kt)("inlineCode",{parentName:"li"},"TransactionTrace")," info")),(0,c.kt)("h5",{id:"transactiontrace"},"TransactionTrace"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"transactionHash"),": ",(0,c.kt)("inlineCode",{parentName:"li"},"HASH")," - Hash of transaction"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"transactionPosition"),": ",(0,c.kt)("inlineCode",{parentName:"li"},"QUANTITY")," - Position of transaction in block"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"traces"),": ",(0,c.kt)("inlineCode",{parentName:"li"},"Array")," - Array of ",(0,c.kt)("inlineCode",{parentName:"li"},"Trace"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'// Request\ncurl --location --request POST \'http://testnet-rpc:12537\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \' {\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "method": "trace_block",\n    "params": ["0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369"]\n  }\'\n\n// Response\n{\n    "jsonrpc": "2.0",\n    "result": {\n        "blockHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n        "epochHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n        "epochNumber": "0x28968d0",\n        "transactionTraces": [\n            {\n                "traces": [\n                    {\n                        "action": {\n                            "callType": "call",\n                            "from": "CFXTEST:TYPE.USER:AAJSUKECFVZF2MG8GZYR9GNAKZYSX9P6VU29DWZ6T2",\n                            "gas": "0x171e2",\n                            "input": "0x9c312cfd",\n                            "to": "CFXTEST:TYPE.CONTRACT:ACE8BSDS7WN52KHYK29NEBZWFPVZ5RPPD28KCXETJ8",\n                            "value": "0x1d6e3"\n                        },\n                        "type": "call"\n                    },\n                    {\n                        "action": {\n                            "callType": "call",\n                            "from": "CFXTEST:TYPE.CONTRACT:ACE8BSDS7WN52KHYK29NEBZWFPVZ5RPPD28KCXETJ8",\n                            "gas": "0x14ac7",\n                            "input": "0xb281a7bd00000000000000000000000089e0b86eec97bc24f44e3eb206b22b235db58c1e",\n                            "to": "CFXTEST:TYPE.CONTRACT:ACFNPY71HJHAMY075XYPS56124ZJE5154UX9NTE7VT",\n                            "value": "0x1d6e3"\n                        },\n                        "type": "call"\n                    },\n                    {\n                        "action": {\n                            "callType": "delegatecall",\n                            "from": "CFXTEST:TYPE.CONTRACT:ACFNPY71HJHAMY075XYPS56124ZJE5154UX9NTE7VT",\n                            "gas": "0x14157",\n                            "input": "0xb281a7bd00000000000000000000000089e0b86eec97bc24f44e3eb206b22b235db58c1e",\n                            "to": "CFXTEST:TYPE.CONTRACT:ACEMTZA4ZJN1FCUTZWN6P8EKDBF2X8DCZY4TEESNH8",\n                            "value": "0x1d6e3"\n                        },\n                        "type": "call"\n                    },\n                    {\n                        "action": {\n                            "callType": "staticcall",\n                            "from": "CFXTEST:TYPE.CONTRACT:ACFNPY71HJHAMY075XYPS56124ZJE5154UX9NTE7VT",\n                            "gas": "0x13464",\n                            "input": "0xf0940002",\n                            "to": "CFXTEST:TYPE.CONTRACT:ACE8BSDS7WN52KHYK29NEBZWFPVZ5RPPD28KCXETJ8",\n                            "value": "0x0"\n                        },\n                        "type": "call"\n                    },\n                    {\n                        "action": {\n                            "gasLeft": "0x11ae8",\n                            "outcome": "success",\n                            "returnData": "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001f00adf0308dce89889061254123a68747470733a2f2f6170692e62696e616e63652e636f6d2f6170692f76332f7469636b65722f70726963653f73796d626f6c3d434658555344541a168418778218646570726963658218571a000f4240185b1257123668747470733a2f2f7777772e6f6b65782e636f6d2f6170692f696e6465782f76332f4346582d5553442f636f6e7374697475656e74731a1d8518778218666464617461821864646c6173748218571a000f4240185b1247122e68747470733a2f2f646174612e676174656170692e696f2f617069322f312f7469636b65722f6366785f757364741a15841877821864646c6173748218571a000f4240185b1264123d68747470733a2f2f7777772e6d78632e636f6d2f6f70656e2f6170692f76322f6d61726b65742f7469636b65723f73796d626f6c3d4346585f555344541a23871877821861646461746182181800821867646c61737418728218571a000f4240185b125b123568747470733a2f2f6170692e626b65782e63632f76322f712f7469636b65722f70726963653f73796d626f6c3d4346585f555344541a228618778218616464617461821818008218646570726963658218571a000f4240185b1a0d0a0908051205fa3fc000001003220d0a0908051205fa3fc000001003100a186420012846308094ebdc0300000000000000000000000000000000"\n                        },\n                        "type": "call_result"\n                    },\n                    {\n                        "action": {\n                            "callType": "staticcall",\n                            "from": "CFXTEST:TYPE.CONTRACT:ACFNPY71HJHAMY075XYPS56124ZJE5154UX9NTE7VT",\n                            "gas": "0xce86",\n                            "input": "0x0adf0308dce89889061254123a68747470733a2f2f6170692e62696e616e63652e636f6d2f6170692f76332f7469636b65722f70726963653f73796d626f6c3d434658555344541a168418778218646570726963658218571a000f4240185b1257123668747470733a2f2f7777772e6f6b65782e636f6d2f6170692f696e6465782f76332f4346582d5553442f636f6e7374697475656e74731a1d8518778218666464617461821864646c6173748218571a000f4240185b1247122e68747470733a2f2f646174612e676174656170692e696f2f617069322f312f7469636b65722f6366785f757364741a15841877821864646c6173748218571a000f4240185b1264123d68747470733a2f2f7777772e6d78632e636f6d2f6f70656e2f6170692f76322f6d61726b65742f7469636b65723f73796d626f6c3d4346585f555344541a23871877821861646461746182181800821867646c61737418728218571a000f4240185b125b123568747470733a2f2f6170692e626b65782e63632f76322f712f7469636b65722f70726963653f73796d626f6c3d4346585f555344541a228618778218616464617461821818008218646570726963658218571a000f4240185b1a0d0a0908051205fa3fc000001003220d0a0908051205fa3fc000001003100a186420012846308094ebdc03",\n                            "to": "CFXTEST:TYPE.BUILTIN:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJK7B54454",\n                            "value": "0x0"\n                        },\n                        "type": "call"\n                    },\n                    {\n                        "action": {\n                            "gasLeft": "0xcd8a",\n                            "outcome": "success",\n                            "returnData": "0xdccb9be50637c331c1c66ef1b0c2779f0a1893661c017c530b641dcec02010dc"\n                        },\n                        "type": "call_result"\n                    },\n                    {\n                        "action": {\n                            "gasLeft": "0x8fe9",\n                            "outcome": "success",\n                            "returnData": "0x0000000000000000000000000000000000000000000000000000000000001662"\n                        },\n                        "type": "call_result"\n                    },\n                    {\n                        "action": {\n                            "gasLeft": "0x94d5",\n                            "outcome": "success",\n                            "returnData": "0x0000000000000000000000000000000000000000000000000000000000001662"\n                        },\n                        "type": "call_result"\n                    },\n                    {\n                        "action": {\n                            "gasLeft": "0x713e",\n                            "outcome": "success",\n                            "returnData": "0x"\n                        },\n                        "type": "call_result"\n                    }\n                ],\n                "transactionHash": "0x8437fd07e33ffaff9dc1b360cb8b0450847b15a164059b50736c65762e6629ad",\n                "transactionPosition": "0x0"\n            }\n        ]\n    },\n    "id": "15922956697249514502"\n}\n')),(0,c.kt)("h4",{id:"returns-1"},"Returns"),(0,c.kt)("h3",{id:"trace_transaction"},"trace_transaction"),(0,c.kt)("p",null,"Get transaction's trace by it's hash"),(0,c.kt)("h4",{id:"parameters-1"},"Parameters"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"DATA, 32 Bytes - hash of a transaction")),(0,c.kt)("h4",{id:"returns-2"},"Returns"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"type"),": ",(0,c.kt)("inlineCode",{parentName:"li"},"string")," - Avaliable value is ",(0,c.kt)("inlineCode",{parentName:"li"},"call"),", ",(0,c.kt)("inlineCode",{parentName:"li"},"create"),", ",(0,c.kt)("inlineCode",{parentName:"li"},"call_result"),", ",(0,c.kt)("inlineCode",{parentName:"li"},"create_result"),", ",(0,c.kt)("inlineCode",{parentName:"li"},"internal_transfer_action")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"transactionPosition"),": ",(0,c.kt)("inlineCode",{parentName:"li"},"QUANTITY")," - Position of transaction in block"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"transactionHash"),": ",(0,c.kt)("inlineCode",{parentName:"li"},"HASH")," - Hash of transaction"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"epochNumber"),": ",(0,c.kt)("inlineCode",{parentName:"li"},"QUANTITY")," - Number of epoch"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"epochHash"),": ",(0,c.kt)("inlineCode",{parentName:"li"},"HASH")," - Hash of epoch"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"blockHash"),": ",(0,c.kt)("inlineCode",{parentName:"li"},"HASH")," - Hash of block"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"action"),": ",(0,c.kt)("inlineCode",{parentName:"li"},"OBJECT")," - Trace info")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'// Request\ncurl --location --request POST \'http://testnet-rpc:12537\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \' {\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "method": "trace_transaction",\n    "params": ["0x8437fd07e33ffaff9dc1b360cb8b0450847b15a164059b50736c65762e6629ad"]\n  }\'\n\n// Response\n{\n    "jsonrpc": "2.0",\n    "result": [\n        {\n            "action": {\n                "callType": "call",\n                "from": "CFXTEST:TYPE.USER:AAJSUKECFVZF2MG8GZYR9GNAKZYSX9P6VU29DWZ6T2",\n                "gas": "0x171e2",\n                "input": "0x9c312cfd",\n                "to": "CFXTEST:TYPE.CONTRACT:ACE8BSDS7WN52KHYK29NEBZWFPVZ5RPPD28KCXETJ8",\n                "value": "0x1d6e3"\n            },\n            "blockHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n            "epochHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n            "epochNumber": "0x28968d0",\n            "transactionHash": "0x8437fd07e33ffaff9dc1b360cb8b0450847b15a164059b50736c65762e6629ad",\n            "transactionPosition": "0x0",\n            "type": "call"\n        },\n        {\n            "action": {\n                "callType": "call",\n                "from": "CFXTEST:TYPE.CONTRACT:ACE8BSDS7WN52KHYK29NEBZWFPVZ5RPPD28KCXETJ8",\n                "gas": "0x14ac7",\n                "input": "0xb281a7bd00000000000000000000000089e0b86eec97bc24f44e3eb206b22b235db58c1e",\n                "to": "CFXTEST:TYPE.CONTRACT:ACFNPY71HJHAMY075XYPS56124ZJE5154UX9NTE7VT",\n                "value": "0x1d6e3"\n            },\n            "blockHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n            "epochHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n            "epochNumber": "0x28968d0",\n            "transactionHash": "0x8437fd07e33ffaff9dc1b360cb8b0450847b15a164059b50736c65762e6629ad",\n            "transactionPosition": "0x0",\n            "type": "call"\n        },\n        {\n            "action": {\n                "callType": "delegatecall",\n                "from": "CFXTEST:TYPE.CONTRACT:ACFNPY71HJHAMY075XYPS56124ZJE5154UX9NTE7VT",\n                "gas": "0x14157",\n                "input": "0xb281a7bd00000000000000000000000089e0b86eec97bc24f44e3eb206b22b235db58c1e",\n                "to": "CFXTEST:TYPE.CONTRACT:ACEMTZA4ZJN1FCUTZWN6P8EKDBF2X8DCZY4TEESNH8",\n                "value": "0x1d6e3"\n            },\n            "blockHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n            "epochHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n            "epochNumber": "0x28968d0",\n            "transactionHash": "0x8437fd07e33ffaff9dc1b360cb8b0450847b15a164059b50736c65762e6629ad",\n            "transactionPosition": "0x0",\n            "type": "call"\n        },\n        {\n            "action": {\n                "callType": "staticcall",\n                "from": "CFXTEST:TYPE.CONTRACT:ACFNPY71HJHAMY075XYPS56124ZJE5154UX9NTE7VT",\n                "gas": "0x13464",\n                "input": "0xf0940002",\n                "to": "CFXTEST:TYPE.CONTRACT:ACE8BSDS7WN52KHYK29NEBZWFPVZ5RPPD28KCXETJ8",\n                "value": "0x0"\n            },\n            "blockHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n            "epochHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n            "epochNumber": "0x28968d0",\n            "transactionHash": "0x8437fd07e33ffaff9dc1b360cb8b0450847b15a164059b50736c65762e6629ad",\n            "transactionPosition": "0x0",\n            "type": "call"\n        },\n        {\n            "action": {\n                "gasLeft": "0x11ae8",\n                "outcome": "success",\n                "returnData": "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001f00adf0308dce89889061254123a68747470733a2f2f6170692e62696e616e63652e636f6d2f6170692f76332f7469636b65722f70726963653f73796d626f6c3d434658555344541a168418778218646570726963658218571a000f4240185b1257123668747470733a2f2f7777772e6f6b65782e636f6d2f6170692f696e6465782f76332f4346582d5553442f636f6e7374697475656e74731a1d8518778218666464617461821864646c6173748218571a000f4240185b1247122e68747470733a2f2f646174612e676174656170692e696f2f617069322f312f7469636b65722f6366785f757364741a15841877821864646c6173748218571a000f4240185b1264123d68747470733a2f2f7777772e6d78632e636f6d2f6f70656e2f6170692f76322f6d61726b65742f7469636b65723f73796d626f6c3d4346585f555344541a23871877821861646461746182181800821867646c61737418728218571a000f4240185b125b123568747470733a2f2f6170692e626b65782e63632f76322f712f7469636b65722f70726963653f73796d626f6c3d4346585f555344541a228618778218616464617461821818008218646570726963658218571a000f4240185b1a0d0a0908051205fa3fc000001003220d0a0908051205fa3fc000001003100a186420012846308094ebdc0300000000000000000000000000000000"\n            },\n            "blockHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n            "epochHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n            "epochNumber": "0x28968d0",\n            "transactionHash": "0x8437fd07e33ffaff9dc1b360cb8b0450847b15a164059b50736c65762e6629ad",\n            "transactionPosition": "0x0",\n            "type": "call_result"\n        },\n        {\n            "action": {\n                "callType": "staticcall",\n                "from": "CFXTEST:TYPE.CONTRACT:ACFNPY71HJHAMY075XYPS56124ZJE5154UX9NTE7VT",\n                "gas": "0xce86",\n                "input": "0x0adf0308dce89889061254123a68747470733a2f2f6170692e62696e616e63652e636f6d2f6170692f76332f7469636b65722f70726963653f73796d626f6c3d434658555344541a168418778218646570726963658218571a000f4240185b1257123668747470733a2f2f7777772e6f6b65782e636f6d2f6170692f696e6465782f76332f4346582d5553442f636f6e7374697475656e74731a1d8518778218666464617461821864646c6173748218571a000f4240185b1247122e68747470733a2f2f646174612e676174656170692e696f2f617069322f312f7469636b65722f6366785f757364741a15841877821864646c6173748218571a000f4240185b1264123d68747470733a2f2f7777772e6d78632e636f6d2f6f70656e2f6170692f76322f6d61726b65742f7469636b65723f73796d626f6c3d4346585f555344541a23871877821861646461746182181800821867646c61737418728218571a000f4240185b125b123568747470733a2f2f6170692e626b65782e63632f76322f712f7469636b65722f70726963653f73796d626f6c3d4346585f555344541a228618778218616464617461821818008218646570726963658218571a000f4240185b1a0d0a0908051205fa3fc000001003220d0a0908051205fa3fc000001003100a186420012846308094ebdc03",\n                "to": "CFXTEST:TYPE.BUILTIN:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJK7B54454",\n                "value": "0x0"\n            },\n            "blockHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n            "epochHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n            "epochNumber": "0x28968d0",\n            "transactionHash": "0x8437fd07e33ffaff9dc1b360cb8b0450847b15a164059b50736c65762e6629ad",\n            "transactionPosition": "0x0",\n            "type": "call"\n        },\n        {\n            "action": {\n                "gasLeft": "0xcd8a",\n                "outcome": "success",\n                "returnData": "0xdccb9be50637c331c1c66ef1b0c2779f0a1893661c017c530b641dcec02010dc"\n            },\n            "blockHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n            "epochHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n            "epochNumber": "0x28968d0",\n            "transactionHash": "0x8437fd07e33ffaff9dc1b360cb8b0450847b15a164059b50736c65762e6629ad",\n            "transactionPosition": "0x0",\n            "type": "call_result"\n        },\n        {\n            "action": {\n                "gasLeft": "0x8fe9",\n                "outcome": "success",\n                "returnData": "0x0000000000000000000000000000000000000000000000000000000000001662"\n            },\n            "blockHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n            "epochHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n            "epochNumber": "0x28968d0",\n            "transactionHash": "0x8437fd07e33ffaff9dc1b360cb8b0450847b15a164059b50736c65762e6629ad",\n            "transactionPosition": "0x0",\n            "type": "call_result"\n        },\n        {\n            "action": {\n                "gasLeft": "0x94d5",\n                "outcome": "success",\n                "returnData": "0x0000000000000000000000000000000000000000000000000000000000001662"\n            },\n            "blockHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n            "epochHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n            "epochNumber": "0x28968d0",\n            "transactionHash": "0x8437fd07e33ffaff9dc1b360cb8b0450847b15a164059b50736c65762e6629ad",\n            "transactionPosition": "0x0",\n            "type": "call_result"\n        },\n        {\n            "action": {\n                "gasLeft": "0x713e",\n                "outcome": "success",\n                "returnData": "0x"\n            },\n            "blockHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n            "epochHash": "0x4c4db64db7ddaf4fd6c9d0eb5398d4c7838252ceaefdfb6b1be27aa301428369",\n            "epochNumber": "0x28968d0",\n            "transactionHash": "0x8437fd07e33ffaff9dc1b360cb8b0450847b15a164059b50736c65762e6629ad",\n            "transactionPosition": "0x0",\n            "type": "call_result"\n        }\n    ],\n    "id": "15922956697249514502"\n}\n')),(0,c.kt)("h2",{id:"note"},"Note"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"One ",(0,c.kt)("inlineCode",{parentName:"li"},"call")," trace, will have one corresponding ",(0,c.kt)("inlineCode",{parentName:"li"},"call_result")," trace. A ",(0,c.kt)("inlineCode",{parentName:"li"},"create")," trace will also have one corresponding ",(0,c.kt)("inlineCode",{parentName:"li"},"create_result")," trace"),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("inlineCode",{parentName:"li"},"call")," trace's ",(0,c.kt)("inlineCode",{parentName:"li"},"result")," field have three possible value: ",(0,c.kt)("inlineCode",{parentName:"li"},"success"),", ",(0,c.kt)("inlineCode",{parentName:"li"},"fail"),", ",(0,c.kt)("inlineCode",{parentName:"li"},"revert")),(0,c.kt)("li",{parentName:"ol"},"Only traces which's ",(0,c.kt)("inlineCode",{parentName:"li"},"callType")," value is ",(0,c.kt)("inlineCode",{parentName:"li"},"call")," and have ",(0,c.kt)("inlineCode",{parentName:"li"},"success")," result status, that can indicate CFX transfer")),(0,c.kt)("h2",{id:"v20-trace-breaking-change"},"V2.0 trace breaking change"),(0,c.kt)("p",null,"From Conflux-rust v2.0 the trace RPC have imported some breaking change, below is a quick introduction of the updates, there also is ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/issues/88"},"detail document here")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Note: To use the new trace data, the fullnode data should be cleaned and resynchronization.")),(0,c.kt)("h3",{id:"new-added-field-valid"},"New added field ",(0,c.kt)("inlineCode",{parentName:"h3"},"valid")),(0,c.kt)("p",null,"A new field ",(0,c.kt)("inlineCode",{parentName:"p"},"valid")," is added to trace to indicate whether the corresponding trace is reverted."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Note: If the old trace data is not cleaned and resynchronization, the ",(0,c.kt)("inlineCode",{parentName:"strong"},"valid")," filed will always be true.")),(0,c.kt)("h3",{id:"gas-consume-and-refund-trace-was-introduced"},"Gas consume and refund trace was introduced"),(0,c.kt)("p",null,'Any transaction bumping nonce during execution will generate one or two traces with type "internal_transfer_action" to indicate gas payment and gas refund.'),(0,c.kt)("p",null,"Consider a transaction has gas limit 40000 and gas price 3 Drip."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "action": {\n        "from": <contract_address>,\n        "fromPocket": "sponsor_balance_for_gas",\n        "to": <zero_address>,\n        "toPocket": "gas_payment",\n        "value": 120000, \n    }\n    "type": "internal_transfer_action"\n    ......\n}\n')),(0,c.kt)("p",null,"If the transaction is not sponsored, the trace will be"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "action": {\n        "from": <sender_address>,\n        "fromPocket": "balance",\n        "to": <zero_address>,\n        "toPocket": "gas_payment",\n        "value": 120000, \n    }\n    "type": "internal_transfer_action"\n    ......\n}\n')),(0,c.kt)("p",null,"This should be the first trace of most transactions."),(0,c.kt)("p",null,"After execution, if this transaction costs 25000 gas, up to 1/4 of gas limit, i.e., 10000 gas (30000 Drip when gas price = 3) will be refunded, then it will generate a trace"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "action": {\n        "from": <zero_address>,\n        "fromPocket": "gas_payment",\n        "to": ...,\n        "toPocket": ...,\n        "value": 30000, \n    },\n    "type": "internal_transfer_action",\n    ...\n}\n')),(0,c.kt)("h3",{id:"trace-for-storage-collateral"},"Trace for storage collateral."),(0,c.kt)("p",null,"Consider a transaction collateralize 10 Drip (it can not happen in a real Conflux system, just for example)."),(0,c.kt)("p",null,"If the transaction is sponsored,"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "action": {\n        "from": <contract_address>,\n        "fromPocket": "sponsor_balance_for_collateral",\n        "to": <contract_address>,\n        "toPocket": "storage_collateral",\n        "value": 10, \n    },\n    "type": "internal_transfer_action",\n    ...\n}\n')),(0,c.kt)("p",null,"If the transaction is not sponsored,"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "action": {\n        "from": <sender_address>,\n        "fromPocket": "balance",\n        "to": <sender_address>,\n        "toPocket": "storage_collateral",\n        "value": 10, \n    },\n    "type": "internal_transfer_action",\n    ...\n}\n')),(0,c.kt)("p",null,"When releasing storage, the value will be returned to the same route."),(0,c.kt)("h3",{id:"indicator-for-kill-contract"},"Indicator for kill contract"),(0,c.kt)("p",null,"Each time a contract is killed, it will produce such a trace,"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "action": {\n        "from": <contract_address>,\n        "fromPocket": "balance",\n        "to": <zero_address>, \n        "toPocket": "mint_burn",\n        "value": ...,\n        ...\n    },\n    "type": "internal_transfer_action",\n    ...\n}\n')),(0,c.kt)("h3",{id:"new-added-space-field"},"New added ",(0,c.kt)("inlineCode",{parentName:"h3"},"space")," field"),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"call")," and ",(0,c.kt)("inlineCode",{parentName:"p"},"create")," type action will add a new field ",(0,c.kt)("inlineCode",{parentName:"p"},"space")," indicate wich space the trace is occured, the possible value are:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"native")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"ethereum")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"none"))),(0,c.kt)("h3",{id:"four-new-field-added-to-internal_transfer_action"},"Four new field added to ",(0,c.kt)("inlineCode",{parentName:"h3"},"internal_transfer_action")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"fromPocket")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"toPocket")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"fromSpace")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"toSpace"))),(0,c.kt)("h4",{id:"specification-for-pocket"},"Specification for pocket"),(0,c.kt)("p",null,"In Conflux, each account could have several pockets to store CFX."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"balance")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"staking_balance")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"storage_collateral")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"sponsor_balance_for_gas")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"sponsor_balance_for_collateral"))),(0,c.kt)("p",null,"The fromPocket field and toPocket field could be one of them."),(0,c.kt)("p",null,'Besides these five values, the "pocket" could be two special values ',(0,c.kt)("inlineCode",{parentName:"p"},"mint_burn")," and ",(0,c.kt)("inlineCode",{parentName:"p"},"gas_payment"),"."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"fromPocket = ",(0,c.kt)("inlineCode",{parentName:"li"},"mint_burn"),": mint CFX, e.g., generate staking interest"),(0,c.kt)("li",{parentName:"ul"},"toPocket = ",(0,c.kt)("inlineCode",{parentName:"li"},"mint_burn"),": burn CFX, e.g., when a contract is killed, its staking balance will be burnt."),(0,c.kt)("li",{parentName:"ul"},"fromPocket = ",(0,c.kt)("inlineCode",{parentName:"li"},"gas_payment"),": gas payment, usually equals to gas_price * gas_limit"),(0,c.kt)("li",{parentName:"ul"},"toPocket = ",(0,c.kt)("inlineCode",{parentName:"li"},"gas_payment"),": gas refund after transaction execution.")),(0,c.kt)("h4",{id:"specification-for-space"},"Specification for space"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"native"),(0,c.kt)("li",{parentName:"ul"},"evm"),(0,c.kt)("li",{parentName:"ul"},"none")),(0,c.kt)("h3",{id:"changes-in-integrity-constraints"},"Changes in integrity constraints"),(0,c.kt)("h4",{id:"before-change"},"Before change"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},'The balance increasing (or decreasing) of an address (except the internal contract) during transaction execution corresponds to a trace whose "to" (or "from") is this address.')),(0,c.kt)("h4",{id:"after-change"},"After change"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},'The balance increasing (or decreasing) of an address (all the address) during transaction execution corresponds to a trace whose "to" (or "from") is this address and "toPocket" (or "fromPocket") is "balance". (Note: for trace type except "interal_transfer_action", the "fromPocket" and "toPocket" equal to "balance" implicitly.)'),(0,c.kt)("li",{parentName:"ul"},'The staking balance/collateral balance/sponsor balance for gas/sponsor balance for collateral increasing (or decreasing) of an address during transaction execution corresponds to an internal_transfer type trace whose "to" (or "from") is this address and "toPocket" (or "fromPocket") is "sponsor_balance"/"storage_collateral"/"sponsor_balance_for_gas"/"sponsor_balance_for_collateral".')))}s.isMDXComponent=!0}}]);