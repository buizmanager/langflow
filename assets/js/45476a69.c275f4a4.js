"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[8921],{49479:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"type":"api","id":"create-folder","title":"Create Folder","description":"","slug":"/create-folder","frontMatter":{},"api":{"tags":["Folders"],"operationId":"create_folder_api_v1_folders__post","requestBody":{"content":{"application/json":{"schema":{"properties":{"name":{"type":"string","title":"Name"},"description":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Description"},"components_list":{"anyOf":[{"items":{"type":"string","format":"uuid"},"type":"array"},{"type":"null"}],"title":"Components List"},"flows_list":{"anyOf":[{"items":{"type":"string","format":"uuid"},"type":"array"},{"type":"null"}],"title":"Flows List"}},"type":"object","required":["name"],"title":"FolderCreate"}}},"required":true},"responses":{"201":{"description":"Successful Response","content":{"application/json":{"schema":{"properties":{"name":{"type":"string","title":"Name"},"description":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Description"},"id":{"type":"string","format":"uuid","title":"Id"},"parent_id":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Parent Id"}},"type":"object","required":["name","id","parent_id"],"title":"FolderRead"}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError"}}}}},"security":[{"OAuth2PasswordBearer":[]},{"API key query":[]},{"API key header":[]}],"description":"Create Folder","method":"post","path":"/api/v1/folders/","parameters":[],"securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"api/v1/login"}}},"API key query":{"type":"apiKey","in":"query","name":"x-api-key"},"API key header":{"type":"apiKey","in":"header","name":"x-api-key"}},"jsonRequestBodyExample":{"name":"string"},"info":{"title":"Langflow","version":"1.1.4"},"postman":{"name":"Create Folder","description":{"type":"text/plain"},"url":{"path":["api","v1","folders",""],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Content-Type","value":"application/json"},{"key":"Accept","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\\n  \\"name\\": \\"<string>\\",\\n  \\"description\\": \\"<string>\\",\\n  \\"components_list\\": [\\n    \\"<uuid>\\",\\n    \\"<uuid>\\"\\n  ],\\n  \\"flows_list\\": [\\n    \\"<uuid>\\",\\n    \\"<uuid>\\"\\n  ]\\n}","options":{"raw":{"language":"json"}}},"auth":{"type":"oauth2","oauth2":[{"type":"any","value":"api/v1/login","key":"accessTokenUrl"},{"type":"any","value":"password_credentials","key":"grant_type"}]}}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/api/create-folder","previous":{"title":"Read Folders","permalink":"/api/read-folders"},"next":{"title":"Read Folder","permalink":"/api/read-folder"}}');var n=i(74848),r=i(28453);const l={},d="Create Folder",a=[];function o(e){const t={h1:"h1",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"create-folder",children:"Create Folder"})}),"\n",(0,n.jsx)(t.p,{children:"Create Folder"}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Request Body "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,n.jsx)("div",{})]})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"description"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Description"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"components_list"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Components List"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"flows_list"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Flows List"})]})})]})]}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"201"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"Successful Response"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Name"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"description"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Description"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" uuid"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"parent_id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Parent Id"})]})})]})]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"422"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"Validation Error"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"detail"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"loc"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"msg"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"type"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>d});var s=i(96540);const n={},r=s.createContext(n);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);