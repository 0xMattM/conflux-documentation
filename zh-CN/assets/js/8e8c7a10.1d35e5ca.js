"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7715],{88995:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=i(85893),a=i(11151);const o={title:"Gas Optimization",displayed_sidebar:"generalSidebar"},s=void 0,r={id:"general/build/smart-contracts/gas-optimization/gas-optimization",title:"Gas Optimization",description:"Some Tips to Make Gas Fee Lower",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/build/smart-contracts/gas-optimization/gas-optimization.md",sourceDirName:"general/build/smart-contracts/gas-optimization",slug:"/general/build/smart-contracts/gas-optimization/",permalink:"/zh-CN/docs/general/build/smart-contracts/gas-optimization/",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",frontMatter:{title:"Gas Optimization",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Token \u6807\u51c6",permalink:"/zh-CN/docs/general/build/smart-contracts/token-standards"},next:{title:"Constant vs Immutable",permalink:"/zh-CN/docs/general/build/smart-contracts/gas-optimization/constant"}},l={},d=[{value:"Some Tips to Make Gas Fee Lower",id:"some-tips-to-make-gas-fee-lower",level:2},{value:"Optimize Data Storage",id:"optimize-data-storage",level:3},{value:"Optimize Function Execution",id:"optimize-function-execution",level:3},{value:"Efficient Loops and Conditions",id:"efficient-loops-and-conditions",level:3},{value:"Use Libraries and Delegate Calls",id:"use-libraries-and-delegate-calls",level:3},{value:"Efficient Event Logging",id:"efficient-event-logging",level:3},{value:"Testing and Optimization Tools",id:"testing-and-optimization-tools",level:3},{value:"Upgradeable Contracts",id:"upgradeable-contracts",level:3},{value:"More Detailed Tutorial of Gas Optimization",id:"more-detailed-tutorial-of-gas-optimization",level:3}];function c(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"some-tips-to-make-gas-fee-lower",children:"Some Tips to Make Gas Fee Lower"}),"\n",(0,n.jsx)(t.h3,{id:"optimize-data-storage",children:"Optimize Data Storage"}),"\n",(0,n.jsx)(t.p,{children:"Use Tight Variable Packing: Group smaller data types together in a single storage slot to take advantage of Solidity's storage packing. For example, use uint8, uint16, or bool together in a struct to fit them into a single 32-byte storage slot."}),"\n",(0,n.jsx)(t.p,{children:"Minimize State Variables: Only store essential data on-chain. Consider off-chain storage solutions (like IPFS) for larger data, and store hashes on-chain if integrity is needed."}),"\n",(0,n.jsx)(t.p,{children:"Use bytes32 over string: If possible, use bytes32 for fixed-size strings, as it is more gas-efficient than the dynamically-sized string type."}),"\n",(0,n.jsx)(t.h3,{id:"optimize-function-execution",children:"Optimize Function Execution"}),"\n",(0,n.jsx)(t.p,{children:"Use view and pure Functions: Mark functions that do not modify state with view (if they read the state) or pure (if they don't read the state) to reduce gas cost when called externally."}),"\n",(0,n.jsx)(t.p,{children:"Limit Visibility: Use the most restrictive visibility (private or internal) for functions and variables, as operations are cheaper when they are internal to a contract."}),"\n",(0,n.jsx)(t.p,{children:"Reuse Computed Values: Store computed values in local variables if they are used multiple times within a function to avoid redundant computation costs."}),"\n",(0,n.jsx)(t.h3,{id:"efficient-loops-and-conditions",children:"Efficient Loops and Conditions"}),"\n",(0,n.jsx)(t.p,{children:"Avoid Loops When Possible: Loops can significantly increase gas costs, especially if their iteration count can grow. Consider alternatives like mapping for direct access."}),"\n",(0,n.jsx)(t.p,{children:"Short-Circuit Evaluation: In if statements and logical expressions, order conditions by likelihood or cost. Solidity evaluates conditions from left to right and stops as soon as the result is determined."}),"\n",(0,n.jsx)(t.h3,{id:"use-libraries-and-delegate-calls",children:"Use Libraries and Delegate Calls"}),"\n",(0,n.jsx)(t.p,{children:"Libraries for Reusable Code: Deploy reusable code as libraries. Libraries can be deployed once and then used by many contracts, reducing the deployment and execution gas costs.\nDelegate Calls: Use delegate calls for modular architecture. This can reduce the amount of bytecode in a contract, lowering deployment and execution costs."}),"\n",(0,n.jsx)(t.h3,{id:"efficient-event-logging",children:"Efficient Event Logging"}),"\n",(0,n.jsx)(t.p,{children:"Use Events for Data Not Requiring Immediate Retrieval: Instead of storing information that doesn't need to be immediately retrieved in storage variables, emit events. Logs cost significantly less gas than storage."}),"\n",(0,n.jsx)(t.h3,{id:"testing-and-optimization-tools",children:"Testing and Optimization Tools"}),"\n",(0,n.jsx)(t.p,{children:"Use Gas Reporting Tools: Tools like Hardhat and Truffle can report gas usage for contract functions. Identify high-gas functions for optimization.\nUse Remix IDE: It provides detailed gas consumption for transactions and can help identify expensive operations."}),"\n",(0,n.jsx)(t.h3,{id:"upgradeable-contracts",children:"Upgradeable Contracts"}),"\n",(0,n.jsx)(t.p,{children:"Consider Proxy Patterns: Using proxies allows for the logic contract to be upgraded without redeploying the entire contract, saving gas on deploying large contracts."}),"\n",(0,n.jsx)(t.h3,{id:"more-detailed-tutorial-of-gas-optimization",children:"More Detailed Tutorial of Gas Optimization"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/general/build/smart-contracts/gas-optimization/constant",children:"Constant VS Immutable"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>s});var n=i(67294);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);