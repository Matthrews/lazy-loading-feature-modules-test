When you import `FucPipe` in customers module, lazy module customers, products, orders will both compiled and the same chunks will be merged to a new file named `common.js`, you can see the changes from the browser

```javascript
"use strict";
(self["webpackChunkcustomer_app"] = self["webpackChunkcustomer_app"] || []).push([["common"],{

/***/ 638:
/*!***************************************!*\
  !*** ./src/app/orders/b.directive.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnlessDirective": () => (/* binding */ UnlessDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


/**
 * Add the template content to the DOM unless the condition is true.
 *
 * If the expression assigned to `appUnless` evaluates to a truthy value
 * then the templated elements are removed from the DOM,
 * the templated elements are (re)inserted into the DOM.
 *
 * <div *appUnless="errorCount" class="success">
 *   Congrats! Everything is great!
 * </div>
 *
 * ### Syntax
 *
 * - `<div *appUnless="condition">...</div>`
 * - `<ng-template [appUnless]="condition"><div>...</div></ng-template>`
 *
 */
class UnlessDirective {
    constructor(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.hasView = false;
    }
    set appUnless(condition) {
        console.log('I am buz from orders...');
        if (!condition && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        }
        else if (condition && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}
UnlessDirective.ɵfac = function UnlessDirective_Factory(t) { return new (t || UnlessDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
UnlessDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: UnlessDirective, selectors: [["", "appUnless", ""]], inputs: { appUnless: "appUnless" } });


/***/ }),

/***/ 912:
/*!************************************!*\
  !*** ./src/app/products/c.pipe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FucPipe": () => (/* binding */ FucPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FucPipe {
    transform(value, ...args) {
        console.log('I am fuc from products...', value, args);
        return 'fuc pipe from products';
    }
}
FucPipe.ɵfac = function FucPipe_Factory(t) { return new (t || FucPipe)(); };
FucPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "fuc", type: FucPipe, pure: true });


/***/ })

}]);
//# sourceMappingURL=common.js.map
```
