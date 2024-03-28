"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9015],{61582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=n(85893),r=n(11151);const s={title:"Smart Contract Security",displayed_sidebar:"generalSidebar"},a=void 0,c={id:"general/build/smart-contracts/contract-security/contract-security",title:"Smart Contract Security",description:"Ensuring the security of smart contracts is crucial as they directly handle and store value, and are difficult to modify once deployed on a blockchain. To secure your smart contracts, follow these key steps and best practices:",source:"@site/docs/general/build/smart-contracts/contract-security/contract-security.md",sourceDirName:"general/build/smart-contracts/contract-security",slug:"/general/build/smart-contracts/contract-security/",permalink:"/es/docs/general/build/smart-contracts/contract-security/",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",frontMatter:{title:"Smart Contract Security",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Token Standards",permalink:"/es/docs/general/build/smart-contracts/token-standards"},next:{title:"Gas Optimization",permalink:"/es/docs/general/build/smart-contracts/gas-optimization/"}},o={},l=[{value:"Comprehensive Testing and Auditing",id:"comprehensive-testing-and-auditing",level:3},{value:"Adhere to Known Best Practices",id:"adhere-to-known-best-practices",level:3},{value:"Avoid Common Security Pitfalls",id:"avoid-common-security-pitfalls",level:3},{value:"Stay Informed",id:"stay-informed",level:3},{value:"Prepare Contingency Plans",id:"prepare-contingency-plans",level:3},{value:"More Detailed Tutorial of Smart Contract Security",id:"more-detailed-tutorial-of-smart-contract-security",level:3}];function d(e){const t={a:"a",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Ensuring the security of smart contracts is crucial as they directly handle and store value, and are difficult to modify once deployed on a blockchain. To secure your smart contracts, follow these key steps and best practices:"}),"\n",(0,i.jsx)(t.h3,{id:"comprehensive-testing-and-auditing",children:"Comprehensive Testing and Auditing"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Unit Testing"}),": Write tests for every function in your contract to ensure it works as expected under various conditions."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Integration Testing"}),": Test the interactions between contracts."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Fuzz Testing"}),": Use randomly generated input data to test your contracts, looking for vulnerabilities."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Security Audits"}),": Conducted by professional third parties, these audits scrutinize your contract's code for security vulnerabilities and poor programming practices."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"adhere-to-known-best-practices",children:"Adhere to Known Best Practices"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Limit Permissions"}),": Ensure only authorized users can execute critical functions."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Validate Inputs and Use Assertions"}),": Verify external inputs and contract states to ensure they meet expectations."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Prevent Reentrancy Attacks"}),": Use mutexes (e.g., state variables) or ",(0,i.jsx)(t.a,{href:"https://docs.openzeppelin.com/contracts/5.x/api/utils#ReentrancyGuard",children:"modifier"})," to prevent multiple calls within the same transaction."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Use Verified Libraries and Contracts"}),": Reduce errors and vulnerabilities by using open-source libraries and contracts that have been extensively tested and audited."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"avoid-common-security-pitfalls",children:"Avoid Common Security Pitfalls"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Integer Overflow and Underflow"}),": Use safe math libraries to prevent these issues, for example, ",(0,i.jsx)(t.a,{href:"https://docs.openzeppelin.com/contracts/5.x/api/utils#math",children:"openzepplin Math library"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Runtime Checks in Frontend"}),": Monitoring contract transactions through the frontend application can help detect abnormal behaviors early. This will serve as an additional layer of security, helping to quickly identify unusual patterns or suspicious activities, but it should also be noted that attackers always have the ability to directly call your contract."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Follow Coding Standards"}),": Adhering to coding standards, like Solidity's security guidelines, can minimize security risks."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"stay-informed",children:"Stay Informed"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Follow Security Bulletins"}),": The blockchain and smart contract ecosystem is evolving, and new vulnerabilities and attack vectors are continually discovered. Stay updated by subscribing to security bulletins."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Regular Audits"}),": As contract logic and the ecosystem change, regular security audits are necessary."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"prepare-contingency-plans",children:"Prepare Contingency Plans"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Upgradability"}),": While contracts on the blockchain are immutable, you can implement contract upgradability through design patterns like the proxy pattern. Checkout ",(0,i.jsx)(t.a,{href:"https://docs.openzeppelin.com/contracts/5.x/upgradeable",children:"Using with Upgrades"})," for safe implementations."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Incident Response"}),": Have a plan in place for potential security events, including notifying users and freezing contract operations."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Security is an ongoing process, not a one-time task. Continuously updating and reviewing your smart contracts is vital for maintaining their security as blockchain technology evolves and new attack techniques emerge."}),"\n",(0,i.jsx)(t.h3,{id:"more-detailed-tutorial-of-smart-contract-security",children:"More Detailed Tutorial of Smart Contract Security"})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var i=n(67294);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);