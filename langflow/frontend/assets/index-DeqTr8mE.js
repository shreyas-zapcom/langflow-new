import{b9 as t,u as w,r,j as a,I as d,g as V,V as v,ba as N,bb as y}from"./index-BMduUo-e.js";import{A as E,D}from"./addNewVariableButton-oiOAsQtq.js";import"./popover-Ig0gGBrk.js";import"./index-DBQGxdl2.js";import"./input-0yNO_Rdy.js";import"./label-D0S6d1zR.js";function I(){const o=t(e=>e.globalVariablesEntries),c=t(e=>e.removeGlobalVariable),i=t(e=>e.globalVariables),b=w(e=>e.setErrorData),m=t(e=>e.getVariableId),f=e=>e.value!==""?a.jsx("div",{children:a.jsx(N,{variant:"outline",size:"md",className:"font-normal",children:e.value})}):a.jsx("div",{}),[u,x]=r.useState([]);r.useEffect(()=>{const e=[];o!==void 0&&(o.forEach(l=>{const s=i[l];e.push({type:s.type,id:s.id,default_fields:(s.default_fields??[]).join(", "),name:l})}),x(e))},[i]);const p=({options:e,value:l,onValueChange:s})=>a.jsx(D,{options:e,value:l,onSelect:s,children:a.jsx("div",{className:"-mt-1.5 w-full"})}),[h,G]=r.useState([{headerName:"Variable Name",field:"name",flex:2},{headerName:"Type",field:"type",cellRenderer:f,cellEditor:p,cellEditorParams:{options:["Generic","Credential"]},flex:1,editable:!1},{headerName:"Apply To Fields",field:"default_fields",flex:1,editable:!1,resizable:!1}]),[n,g]=r.useState([]);async function j(){const e=n.map(async l=>{const s=m(l);await y(s)});Promise.all(e).then(()=>{n.forEach(l=>{c(l)})}).catch(()=>{b({title:"Error deleting global variables."})})}return a.jsxs("div",{className:"flex h-full w-full flex-col justify-between gap-6",children:[a.jsxs("div",{className:"flex w-full items-center justify-between gap-4 space-y-0.5",children:[a.jsxs("div",{className:"flex w-full flex-col",children:[a.jsxs("h2",{className:"flex items-center text-lg font-semibold tracking-tight",children:["Global Variables",a.jsx(d,{name:"Globe",className:"ml-2 h-5 w-5 text-primary"})]}),a.jsx("p",{className:"text-sm text-muted-foreground",children:"Manage global variables and assign them to fields."})]}),a.jsx("div",{className:"flex flex-shrink-0 items-center gap-2",children:a.jsx(E,{asChild:!0,children:a.jsxs(V,{"data-testid":"api-key-button-store",variant:"primary",children:[a.jsx(d,{name:"Plus",className:"w-4"}),"Add New"]})})})]}),a.jsx("div",{className:"flex h-full w-full flex-col justify-between",children:a.jsx(v,{overlayNoRowsTemplate:"No data available",onSelectionChanged:e=>{g(e.api.getSelectedRows().map(l=>l.name))},rowSelection:"multiple",suppressRowClickSelection:!0,pagination:!0,columnDefs:h,rowData:u,onDelete:j},"globalVariables")})]})}export{I as default};
