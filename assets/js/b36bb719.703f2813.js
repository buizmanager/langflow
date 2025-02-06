"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[6949],{39189:(e,i,t)=>{t.r(i),t.d(i,{contentTitle:()=>n,default:()=>o,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"type":"api","id":"update-variable","title":"Update Variable","description":"","slug":"/update-variable","frontMatter":{},"api":{"tags":["Variables"],"description":"Update a variable.","operationId":"update_variable_api_v1_variables__variable_id__patch","security":[{"OAuth2PasswordBearer":[]},{"API key query":[]},{"API key header":[]}],"parameters":[{"name":"variable_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Variable Id"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"id":{"type":"string","format":"uuid","title":"Id"},"name":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Name","description":"Name of the variable"},"value":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Value","description":"Encrypted value of the variable"},"default_fields":{"anyOf":[{"items":{"type":"string"},"type":"array"},{"type":"null"}],"title":"Default Fields","description":"Default fields for the variable"}},"type":"object","required":["id"],"title":"VariableUpdate"}}}},"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"properties":{"id":{"type":"string","format":"uuid","title":"Id"},"name":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Name","description":"Name of the variable"},"type":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Type","description":"Type of the variable"},"value":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Value","description":"Encrypted value of the variable"},"default_fields":{"anyOf":[{"items":{"type":"string"},"type":"array"},{"type":"null"}],"title":"Default Fields","description":"Default fields for the variable"}},"type":"object","required":["id"],"title":"VariableRead"}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError"}}}}},"method":"patch","path":"/api/v1/variables/{variable_id}","securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"api/v1/login"}}},"API key query":{"type":"apiKey","in":"query","name":"x-api-key"},"API key header":{"type":"apiKey","in":"header","name":"x-api-key"}},"jsonRequestBodyExample":{"id":"3fa85f64-5717-4562-b3fc-2c963f66afa6"},"info":{"title":"Langflow","version":"1.1.4"},"postman":{"name":"Update Variable","description":{"content":"Update a variable.","type":"text/plain"},"url":{"path":["api","v1","variables",":variable_id"],"host":["{{baseUrl}}"],"query":[],"variable":[{"disabled":false,"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<uuid>","key":"variable_id"}]},"header":[{"key":"Content-Type","value":"application/json"},{"key":"Accept","value":"application/json"}],"method":"PATCH","body":{"mode":"raw","raw":"{\\n  \\"id\\": \\"<uuid>\\",\\n  \\"name\\": \\"<string>\\",\\n  \\"value\\": \\"<string>\\",\\n  \\"default_fields\\": [\\n    \\"<string>\\",\\n    \\"<string>\\"\\n  ]\\n}","options":{"raw":{"language":"json"}}},"auth":{"type":"oauth2","oauth2":[{"type":"any","value":"api/v1/login","key":"accessTokenUrl"},{"type":"any","value":"password_credentials","key":"grant_type"}]}}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/api/update-variable","previous":{"title":"Create Variable","permalink":"/api/create-variable"},"next":{"title":"Delete Variable","permalink":"/api/delete-variable"}}');var l=t(74848),r=t(28453);const s={},n="Update Variable",d=[];function c(e){const i={h1:"h1",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"update-variable",children:"Update Variable"})}),"\n",(0,l.jsx)(i.p,{children:"Update a variable."}),"\n",(0,l.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,l.jsx)("tbody",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"variable_id"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" uuid"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})})})]}),"\n",(0,l.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("th",{style:{textAlign:"left"},children:[(0,l.jsx)("span",{children:"Request Body "}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,l.jsx)("div",{})]})})}),(0,l.jsxs)("tbody",{children:[(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"id"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" uuid"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"name"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Name"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)(i.p,{children:"Name of the variable"})})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"value"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Value"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)(i.p,{children:"Encrypted value of the variable"})})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"default_fields"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Default Fields"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)(i.p,{children:"Default fields for the variable"})})]})})]})]}),"\n",(0,l.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,l.jsxs)("tbody",{children:[(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)("code",{children:"200"})}),(0,l.jsx)("div",{children:(0,l.jsx)(i.p,{children:"Successful Response"})})]}),(0,l.jsx)("div",{children:(0,l.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("th",{style:{textAlign:"left"},children:[(0,l.jsx)("span",{children:"Schema "}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{})]})})}),(0,l.jsxs)("tbody",{children:[(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"id"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" uuid"})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"name"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Name"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)(i.p,{children:"Name of the variable"})})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"type"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Type"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)(i.p,{children:"Type of the variable"})})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"value"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Value"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)(i.p,{children:"Encrypted value of the variable"})})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"default_fields"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Default Fields"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)(i.p,{children:"Default fields for the variable"})})]})})]})]})})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)("code",{children:"422"})}),(0,l.jsx)("div",{children:(0,l.jsx)(i.p,{children:"Validation Error"})})]}),(0,l.jsx)("div",{children:(0,l.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("th",{style:{textAlign:"left"},children:[(0,l.jsx)("span",{children:"Schema "}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{})]})})}),(0,l.jsx)("tbody",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"detail"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,l.jsxs)("tbody",{children:[(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"loc"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"msg"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"type"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function o(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>n});var a=t(96540);const l={},r=a.createContext(l);function s(e){const i=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function n(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(r.Provider,{value:i},e.children)}}}]);