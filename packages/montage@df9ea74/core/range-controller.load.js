montageDefine("df9ea74","core/range-controller",{dependencies:["./core","collections/generic-collection","collections/listen/array-changes"],factory:function(e,t){var n=e("./core").Montage,r=e("collections/generic-collection"),i=e("collections/listen/array-changes").observableArrayProperties,a=Object.freeze([]),o=function(e,t){var n=e;return n.__proto__=o.prototype,n.rangeController=t,n.contentEquals=e&&e.contentEquals||Object.is,n};o.prototype=Object.create(Array.prototype,i),Object.defineProperty(o.prototype,"clone",{value:function(){return this.slice()}}),self.swap,Object.defineProperty(o.prototype,"oldSwap",{configurable:!1,value:i.swap.value}),Object.defineProperty(o.prototype,"swap",{configurable:!1,value:function(e,t,n){return this.swap_or_push(e,t,n)}}),o.prototype.oldPush=i.push.value,Object.defineProperty(o.prototype,"push",{configurable:!1,value:function(){for(var e=-1,t=arguments.length,n=Array(t);t>++e;)n[e]=arguments[e];this.swap_or_push(this.length,0,n)}}),Object.defineProperty(o.prototype,"swap_or_push",{configurable:!1,value:function(e,t,n){var r=this.rangeController.content;this.contentEquals=r&&r.contentEquals||Object.is,e=e>=0?e:this.length+e;var i=this.length,o=Math.min(t,i-e);if(n){n.contentEquals=this.contentEquals;var s=n.filter(function(t,i){if(r&&!r.has(t))return!1;if(n.findLast(t)>i)return!1;var a=this.find(t);return 0>a||a>=e&&e+o>a},this)}else s=a;var l;l=0===o?a:Array.prototype.slice.call(this,e,e+o);var u=s.length-l.length,c=Math.max(this.length+u,e+s.length);if(!this.rangeController.multiSelect&&c>1){var d=s.length?s[s.length-1]:this.one();return 0===i?(this.oldPush(d),a):this.oldSwap(0,i,[d])}return this.rangeController.avoidsEmptySelection&&0===c?r.has(this[0])?0===this.length-1?a:this.oldSwap(1,this.length-1):0===this.length?(this.oldPush(r.one()),a):this.oldSwap(0,this.length,[r.one()]):this.oldSwap(e,t,s)}}),t.RangeController=n.specialize({constructor:{value:function(e){this.content=null,this._selection=new o([],this),this.sortPath=null,this.filterPath=null,this.reversed=!1,this.selectAddedContent=!1,this.deselectInvisibleContent=!1,this.clearSelectionOnOrderChange=!1,this.avoidsEmptySelection=!1,this.multiSelect=!1,this.organizedContent=[],this.organizedContent.addRangeChangeListener(this,"organizedContent"),this.defineBinding("_filteredContent",{"<-":"$filterPath.defined() ? content.filter{path($filterPath)} : content"}),this.defineBinding("_sortedContent",{"<-":"$sortPath.defined() ? _filteredContent.sorted{path($sortPath)} : _filteredContent"}),this.defineBinding("organizedContent.rangeContent()",{"<-":"$reversed ?? 0 ? _sortedContent.reversed() : _sortedContent"}),this.addRangeAtPathChangeListener("content",this,"handleContentRangeChange"),this.addPathChangeListener("sortPath",this,"handleOrderChange"),this.addPathChangeListener("reversed",this,"handleOrderChange"),this.addOwnPropertyChangeListener("multiSelect",this),this.iterations=[],e&&this.initWithContent(e)}},initWithContent:{value:function(e){return this.content=e,this}},sortPath:{value:null},reversed:{value:null},filterPath:{value:null},selectAddedContent:{value:!1},deselectInvisibleContent:{value:!1},clearSelectionOnOrderChange:{value:!1},avoidsEmptySelection:{value:!1},multiSelect:{value:!1},organizedContent:{value:null},iterations:{value:null},_selection:{value:null},selection:{get:function(){return this._selection},set:function(e){var t=[0,this._selection.length];e&&e.toArray&&(t=t.concat(e.toArray())),this._selection.splice.apply(this._selection,t)}},select:{value:function(e){!this.multiSelect&&this.selection.length>=1&&this.selection.clear(),this.selection.add(e)}},deselect:{value:function(e){(!this.avoidsEmptySelection||this.selection.length>1)&&this.selection["delete"](e)}},clearSelection:{value:function(){(!this.avoidsEmptySelection||this.selection.length>1)&&this.selection.clear()}},add:{value:function(e){var t;return this.content||(this.content=[]),t=this.content.add(e),t&&this.handleAdd(e),t}},push:{value:function(){for(var e=this.content.push.apply(this.content,arguments),t=0;arguments.length>t;t++)this.handleAdd(arguments[t]);return e}},pop:{value:function(){return this.content.pop()}},shift:{value:function(){return this.content.shift()}},unshift:{value:function(){for(var e=this.content.unshift.apply(this.content,arguments),t=0;arguments.length>t;t++)this.handleAdd(arguments[t]);return e}},splice:{value:function(){for(var e=this.content.splice.apply(this.content,arguments),t=2;arguments.length>t;t++)this.handleAdd(arguments[t]);return e}},swap:{value:function(e,t,n){var r=this.content.swap.apply(this.content,arguments);if(n)for(var e=2;n.length>e;e++)this.handleAdd(n[e]);return r}},"delete":{value:function(e){return this.content["delete"](e)}},has:{value:function(e){return this.content?this.content.has(e):!1}},addEach:{value:r.prototype.addEach},deleteEach:{value:r.prototype.deleteEach},clear:{value:function(){this.content.clear()}},addContent:{value:function(){var e=new this.contentConstructor;return this.add(e),e}},_contentConstructor:{value:null},contentConstructor:{get:function(){return this._contentConstructor?this._contentConstructor:this.content&&this.content.contentConstructor?this.content.contentConstructor:Object},set:function(e){this._contentConstructor=e}},handleContentRangeChange:{value:function(e,t){if(this.selection.length>0){var n=this.content&&this.content.contentEquals||Object.is;t.deleteEach(e,n),this.selection&&this.selection.deleteEach(t)}}},handleSelectionRangeChange:{value:function(e,t){if(this.selection)if(this.content){for(var n=[],r=0;e.length>r;r++)this.content.has(e[r])||n.push(e[r]);if(this._selection.deleteEach(n),!this.multiSelect&&this._selection.length>1){var i=this._selection.pop();this._selection.clear(),this._selection.add(i)}this.avoidsEmptySelection&&0==this._selection.length&&this._selection.add(t[0])}else this._selection.clear()}},handleOrganizedContentRangeChange:{value:function(e,t){if(this.deselectInvisibleContent&&this.selection){var n=t.clone(1);n.deleteEach(e),this.selection.deleteEach(t)}}},handleOrderChange:{value:function(){this.clearSelectionOnOrderChange&&this.selection&&this.selection.clear()}},handleAdd:{value:function(e){this.selectAddedContent&&this.selection&&(!this.multiSelect&&this.selection.length>=1&&this.selection.clear(),this.selection.add(e))}},handleMultiSelectChange:{value:function(){if(this.selection){var e=this.selection.length;if(!this.multiSelect&&e>1){var t=this._selection.pop();this._selection.clear(),this._selection.add(t)}}}}},{blueprintModuleId:e("./core")._blueprintModuleIdDescriptor,blueprint:e("./core")._blueprintDescriptor})}});