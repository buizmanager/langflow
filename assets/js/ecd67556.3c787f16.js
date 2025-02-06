"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[8188],{11232:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"type":"api","id":"custom-component-update","title":"Custom Component Update","description":"","slug":"/custom-component-update","frontMatter":{},"api":{"tags":["Base"],"description":"Update a custom component with the provided code request.\\n\\nThis endpoint generates the CustomComponentFrontendNode normally but then runs the `update_build_config` method\\non the latest version of the template.\\nThis ensures that every time it runs, it has the latest version of the template.\\n\\nArgs:\\n    code_request (CustomComponentRequest): The code request containing the updated code for the custom component.\\n    user (User, optional): The user making the request. Defaults to the current active user.\\n\\nReturns:\\n    dict: The updated custom component node.\\n\\nRaises:\\n    HTTPException: If there\'s an error building or updating the component\\n    SerializationError: If there\'s an error serializing the component to JSON","operationId":"custom_component_update_api_v1_custom_component_update_post","requestBody":{"content":{"application/json":{"schema":{"properties":{"code":{"type":"string","title":"Code"},"frontend_node":{"anyOf":[{"type":"object"},{"type":"null"}],"title":"Frontend Node"},"field":{"type":"string","title":"Field"},"field_value":{"anyOf":[{"type":"string"},{"type":"integer"},{"type":"number"},{"type":"boolean"},{"type":"object"},{"items":{},"type":"array"},{"type":"null"}],"title":"Field Value"},"template":{"type":"object","title":"Template"},"tool_mode":{"type":"boolean","title":"Tool Mode","default":false}},"type":"object","required":["code","field","template"],"title":"UpdateCustomComponentRequest"}}},"required":true},"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError"}}}}},"security":[{"OAuth2PasswordBearer":[]},{"API key query":[]},{"API key header":[]}],"method":"post","path":"/api/v1/custom_component/update","parameters":[],"securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"api/v1/login"}}},"API key query":{"type":"apiKey","in":"query","name":"x-api-key"},"API key header":{"type":"apiKey","in":"header","name":"x-api-key"}},"jsonRequestBodyExample":{"code":"string","field":"string","template":{},"tool_mode":false},"info":{"title":"Langflow","version":"1.1.4"},"postman":{"name":"Custom Component Update","description":{"content":"Update a custom component with the provided code request.\\n\\nThis endpoint generates the CustomComponentFrontendNode normally but then runs the `update_build_config` method\\non the latest version of the template.\\nThis ensures that every time it runs, it has the latest version of the template.\\n\\nArgs:\\n    code_request (CustomComponentRequest): The code request containing the updated code for the custom component.\\n    user (User, optional): The user making the request. Defaults to the current active user.\\n\\nReturns:\\n    dict: The updated custom component node.\\n\\nRaises:\\n    HTTPException: If there\'s an error building or updating the component\\n    SerializationError: If there\'s an error serializing the component to JSON","type":"text/plain"},"url":{"path":["api","v1","custom_component","update"],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Content-Type","value":"application/json"},{"key":"Accept","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\\n  \\"code\\": \\"<string>\\",\\n  \\"field\\": \\"<string>\\",\\n  \\"template\\": \\"<object>\\",\\n  \\"frontend_node\\": \\"<object>\\",\\n  \\"field_value\\": \\"<string>\\",\\n  \\"tool_mode\\": false\\n}","options":{"raw":{"language":"json"}}},"auth":{"type":"oauth2","oauth2":[{"type":"any","value":"api/v1/login","key":"accessTokenUrl"},{"type":"any","value":"password_credentials","key":"grant_type"}]}}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/api/custom-component-update","previous":{"title":"Custom Component","permalink":"/api/custom-component"},"next":{"title":"Get Config","permalink":"/api/get-config"}}');var s=n(74848),i=n(28453);const r={},d="Custom Component Update",l=[];function a(e){const t={code:"code",h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"custom-component-update",children:"Custom Component Update"})}),"\n",(0,s.jsx)(t.p,{children:"Update a custom component with the provided code request."}),"\n",(0,s.jsxs)(t.p,{children:["This endpoint generates the CustomComponentFrontendNode normally but then runs the ",(0,s.jsx)(t.code,{children:"update_build_config"})," method\non the latest version of the template.\nThis ensures that every time it runs, it has the latest version of the template."]}),"\n",(0,s.jsx)(t.p,{children:"Args:\ncode_request (CustomComponentRequest): The code request containing the updated code for the custom component.\nuser (User, optional): The user making the request. Defaults to the current active user."}),"\n",(0,s.jsx)(t.p,{children:"Returns:\ndict: The updated custom component node."}),"\n",(0,s.jsx)(t.p,{children:"Raises:\nHTTPException: If there's an error building or updating the component\nSerializationError: If there's an error serializing the component to JSON"}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Request Body "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,s.jsx)("div",{})]})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"code"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Code"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"frontend_node"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Frontend Node"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"field"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Field"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"field_value"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Field Value"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"template"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" object"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"tool_mode"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Tool Mode"})]})})]})]}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"200"})}),(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"Successful Response"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("td",{children:(0,s.jsx)("span",{style:{opacity:"0.6"},children:" undefined"})})})})]})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"422"})}),(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"Validation Error"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"detail"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"loc"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"msg"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"type"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var o=n(96540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);