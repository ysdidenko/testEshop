(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{h0u9:function(t,c,e){"use strict";e.r(c),e.d(c,"routes",function(){return w}),e.d(c,"OverviewModule",function(){return P});var n=e("ofXK"),r=e("EY2u"),a=e("JIr8"),i=e("R0Ic"),o=e("fXoL"),s=e("2hfl"),b=e("dNgK"),p=e("tyNb"),d=e("XiUz"),l=e("Wp6s"),u=e("bTqV"),f=e("bv9b");function g(t,c){if(1&t){const t=o.Pb();o.Ob(0,"div",5),o.Ob(1,"mat-card",6),o.Wb("click",function(){o.jc(t);const e=c.$implicit;return o.ac(2).navigate(e.SKU)}),o.Kb(2,"img",7),o.Ob(3,"mat-card-title"),o.tc(4),o.Kb(5,"span",8),o.Ob(6,"strong"),o.tc(7,"$99.99"),o.Nb(),o.Nb(),o.Ob(8,"mat-card-content"),o.tc(9),o.Nb(),o.Kb(10,"span",8),o.Ob(11,"mat-card-actions"),o.Ob(12,"button",9),o.tc(13,"More"),o.Nb(),o.Kb(14,"br"),o.Kb(15,"br"),o.Nb(),o.Nb(),o.Nb()}if(2&t){const t=c.$implicit;o.zb(2),o.fc("src",t.Image,o.kc),o.zb(2),o.vc(" ",t.Name," "),o.zb(5),o.uc(t.Description)}}function m(t,c){if(1&t&&(o.Ob(0,"div",3),o.rc(1,g,16,3,"div",4),o.Nb()),2&t){const t=c.ngIf;o.fc("@listAnimation",t),o.zb(1),o.fc("ngForOf",t)}}function h(t,c){1&t&&o.Kb(0,"mat-progress-bar",10)}let O=(()=>{class t{constructor(t,c,e){this.storeService=t,this.snackBar=c,this.router=e,this.items=[]}ngOnInit(){this.getProducts()}getProducts(){this.products$=this.storeService.getProducts().pipe(Object(a.a)(()=>(this.snackBar.open("Ooops. We couldn't get the products.","Try again").onAction().subscribe(()=>this.getProducts()),r.a)))}navigate(t){this.router.navigate(["products",t])}}return t.\u0275fac=function(c){return new(c||t)(o.Jb(s.a),o.Jb(b.a),o.Jb(p.b))},t.\u0275cmp=o.Db({type:t,selectors:[["app-overview"]],decls:5,vars:4,consts:[[1,"container"],["fxLayout","row wrap","fxLayoutGap","2rem grid",4,"ngIf","ngIfElse"],["loading",""],["fxLayout","row wrap","fxLayoutGap","2rem grid"],["fxFlex","25%","fxFlex.lt-lg","33.33%","fxFlex.lt-sm","50%",4,"ngFor","ngForOf"],["fxFlex","25%","fxFlex.lt-lg","33.33%","fxFlex.lt-sm","50%"],["fxLayout","column",3,"click"],[1,"product-image",3,"src"],["fxFlex",""],["mat-raised-button","","color","primary"],["mode","indeterminate"]],template:function(t,c){if(1&t&&(o.Ob(0,"div",0),o.rc(1,m,2,2,"div",1),o.bc(2,"async"),o.Nb(),o.rc(3,h,1,0,"ng-template",null,2,o.sc)),2&t){const t=o.ic(4);o.zb(1),o.fc("ngIf",o.cc(2,2,c.products$))("ngIfElse",t)}},directives:[n.k,d.c,d.d,n.j,d.a,l.a,l.e,l.c,l.b,u.a,f.a],pipes:[n.b],styles:["[_nghost-%COMP%]{padding:1rem;display:block}mat-card[_ngcontent-%COMP%]{height:100%;transition:transform .2s linear}mat-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]{display:block;width:calc(100% + 2rem);height:auto;margin:-1rem -1rem 1rem}mat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{text-align:center}mat-card[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(1.025)}"],data:{animation:[Object(i.l)("listAnimation",[Object(i.k)("* => *",[Object(i.f)(":enter",[Object(i.j)({transform:"translateY(-35px)",opacity:0}),Object(i.h)(100,[Object(i.e)("0.3s",Object(i.j)({transform:"translateY(0)",opacity:1}))])],{optional:!0})])])]}}),t})();function x(t,c){if(1&t&&(o.Ob(0,"div",3),o.Kb(1,"img",4),o.Ob(2,"div",5),o.Ob(3,"mat-card"),o.Ob(4,"mat-card-title"),o.tc(5),o.Nb(),o.Ob(6,"mat-card-content"),o.Ob(7,"p"),o.tc(8),o.Nb(),o.Ob(9,"p"),o.tc(10,"In stock: "),o.Ob(11,"strong"),o.tc(12),o.Nb(),o.Nb(),o.Ob(13,"p",6),o.tc(14),o.Nb(),o.Ob(15,"button",7),o.tc(16,"Add to cart"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb()),2&t){const t=c.ngIf;o.zb(1),o.fc("src",t.Image,o.kc),o.zb(4),o.uc(t.Name),o.zb(3),o.uc(t.Description),o.zb(4),o.uc(t.StockTotal),o.zb(2),o.vc("$",t.Price,"")}}function v(t,c){1&t&&o.Kb(0,"mat-progress-bar",8)}let y=(()=>{class t{constructor(t,c,e){this.route=t,this.storeService=c,this.snackBar=e}ngOnInit(){this.getProductDetails()}getProductDetails(){this.product$=this.storeService.getProductDetails(this.route.snapshot.params.id).pipe(Object(a.a)(()=>(this.snackBar.open("Ooops. We couldn't get the product details.","Try again").onAction().subscribe(()=>this.getProductDetails()),r.a)))}}return t.\u0275fac=function(c){return new(c||t)(o.Jb(p.a),o.Jb(s.a),o.Jb(b.a))},t.\u0275cmp=o.Db({type:t,selectors:[["app-product"]],decls:5,vars:4,consts:[[1,"container"],["fxLayout","row wrap","fxLayoutGap","1rem grid",4,"ngIf","ngIfElse"],["loading",""],["fxLayout","row wrap","fxLayoutGap","1rem grid"],["fxFlex","300px","loading","lazy",1,"big-image",3,"src"],["fxFlex",""],[1,"price"],["mat-raised-button","","color","primary"],["mode","indeterminate"]],template:function(t,c){if(1&t&&(o.Ob(0,"div",0),o.rc(1,x,17,5,"div",1),o.bc(2,"async"),o.Nb(),o.rc(3,v,1,0,"ng-template",null,2,o.sc)),2&t){const t=o.ic(4);o.zb(1),o.fc("ngIf",o.cc(2,2,c.product$))("ngIfElse",t)}},directives:[n.k,d.c,d.d,d.a,l.a,l.e,l.c,u.a,f.a],pipes:[n.b],styles:["mat-card[_ngcontent-%COMP%]{width:100%;min-height:100%}.price[_ngcontent-%COMP%]{font-size:30px;line-height:40px}"]}),t})();var N=e("PCNd");const w=[{path:"",pathMatch:"full",component:O},{path:":id",pathMatch:"full",component:y},{path:"**",redirectTo:""}];let P=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(c){return new(c||t)},imports:[[n.c,p.d.forChild(w),N.a]]}),t})()}}]);