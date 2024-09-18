import{br as $,ci as A,r as i,j as c,cj as O,bx as w,bu as _,bv as P,bw as j,ck as L,cs as G,bo as H,cl as K,cm as W,cn as q,co as U,cq as V,bs as Z,cu as B,bt as J,cv as Q,c as E}from"./index-BMduUo-e.js";var R="Popover",[N,fe]=$(R,[A]),g=A(),[X,u]=N(R),y=e=>{const{__scopePopover:n,children:t,open:a,defaultOpen:o,onOpenChange:r,modal:s=!1}=e,d=g(n),p=i.useRef(null),[l,m]=i.useState(!1),[h=!1,f]=Z({prop:a,defaultProp:o,onChange:r});return c.jsx(B,{...d,children:c.jsx(X,{scope:n,contentId:J(),triggerRef:p,open:h,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(C=>!C),[f]),hasCustomAnchor:l,onCustomAnchorAdd:i.useCallback(()=>m(!0),[]),onCustomAnchorRemove:i.useCallback(()=>m(!1),[]),modal:s,children:t})})};y.displayName=R;var F="PopoverAnchor",Y=i.forwardRef((e,n)=>{const{__scopePopover:t,...a}=e,o=u(F,t),r=g(t),{onCustomAnchorAdd:s,onCustomAnchorRemove:d}=o;return i.useEffect(()=>(s(),()=>d()),[s,d]),c.jsx(O,{...r,...a,ref:n})});Y.displayName=F;var S="PopoverTrigger",D=i.forwardRef((e,n)=>{const{__scopePopover:t,...a}=e,o=u(S,t),r=g(t),s=w(n,o.triggerRef),d=c.jsx(_.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":z(o.open),...a,ref:s,onClick:P(e.onClick,o.onOpenToggle)});return o.hasCustomAnchor?d:c.jsx(O,{asChild:!0,...r,children:d})});D.displayName=S;var b="PopoverPortal",[ee,oe]=N(b,{forceMount:void 0}),M=e=>{const{__scopePopover:n,forceMount:t,children:a,container:o}=e,r=u(b,n);return c.jsx(ee,{scope:n,forceMount:t,children:c.jsx(j,{present:t||r.open,children:c.jsx(Q,{asChild:!0,container:o,children:a})})})};M.displayName=b;var v="PopoverContent",k=i.forwardRef((e,n)=>{const t=oe(v,e.__scopePopover),{forceMount:a=t.forceMount,...o}=e,r=u(v,e.__scopePopover);return c.jsx(j,{present:a||r.open,children:r.modal?c.jsx(te,{...o,ref:n}):c.jsx(re,{...o,ref:n})})});k.displayName=v;var te=i.forwardRef((e,n)=>{const t=u(v,e.__scopePopover),a=i.useRef(null),o=w(n,a),r=i.useRef(!1);return i.useEffect(()=>{const s=a.current;if(s)return L(s)},[]),c.jsx(G,{as:H,allowPinchZoom:!0,children:c.jsx(T,{...e,ref:o,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:P(e.onCloseAutoFocus,s=>{var d;s.preventDefault(),r.current||(d=t.triggerRef.current)==null||d.focus()}),onPointerDownOutside:P(e.onPointerDownOutside,s=>{const d=s.detail.originalEvent,p=d.button===0&&d.ctrlKey===!0,l=d.button===2||p;r.current=l},{checkForDefaultPrevented:!1}),onFocusOutside:P(e.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1})})})}),re=i.forwardRef((e,n)=>{const t=u(v,e.__scopePopover),a=i.useRef(!1),o=i.useRef(!1);return c.jsx(T,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:r=>{var s,d;(s=e.onCloseAutoFocus)==null||s.call(e,r),r.defaultPrevented||(a.current||(d=t.triggerRef.current)==null||d.focus(),r.preventDefault()),a.current=!1,o.current=!1},onInteractOutside:r=>{var p,l;(p=e.onInteractOutside)==null||p.call(e,r),r.defaultPrevented||(a.current=!0,r.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const s=r.target;((l=t.triggerRef.current)==null?void 0:l.contains(s))&&r.preventDefault(),r.detail.originalEvent.type==="focusin"&&o.current&&r.preventDefault()}})}),T=i.forwardRef((e,n)=>{const{__scopePopover:t,trapFocus:a,onOpenAutoFocus:o,onCloseAutoFocus:r,disableOutsidePointerEvents:s,onEscapeKeyDown:d,onPointerDownOutside:p,onFocusOutside:l,onInteractOutside:m,...h}=e,f=u(v,t),C=g(t);return K(),c.jsx(W,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:o,onUnmountAutoFocus:r,children:c.jsx(q,{asChild:!0,disableOutsidePointerEvents:s,onInteractOutside:m,onEscapeKeyDown:d,onPointerDownOutside:p,onFocusOutside:l,onDismiss:()=>f.onOpenChange(!1),children:c.jsx(U,{"data-state":z(f.open),role:"dialog",id:f.contentId,...C,...h,ref:n,style:{...h.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),I="PopoverClose",ne=i.forwardRef((e,n)=>{const{__scopePopover:t,...a}=e,o=u(I,t);return c.jsx(_.button,{type:"button",...a,ref:n,onClick:P(e.onClick,()=>o.onOpenChange(!1))})});ne.displayName=I;var ae="PopoverArrow",se=i.forwardRef((e,n)=>{const{__scopePopover:t,...a}=e,o=g(t);return c.jsx(V,{...o,...a,ref:n})});se.displayName=ae;function z(e){return e?"open":"closed"}var ce=y,ie=D,de=M,x=k;const ve=ce,Pe=ie,pe=i.forwardRef(({className:e,align:n="center",sideOffset:t=4,...a},o)=>c.jsx(de,{children:c.jsx(x,{ref:o,align:n,sideOffset:t,className:E("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...a})}));pe.displayName=x.displayName;const le=i.forwardRef(({className:e,align:n="center",sideOffset:t=4,...a},o)=>c.jsx(x,{ref:o,align:n,sideOffset:t,className:E("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...a}));le.displayName=x.displayName;export{ve as P,Pe as a,pe as b,le as c,Y as d};
