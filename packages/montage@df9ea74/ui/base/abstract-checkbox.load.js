montageDefine("df9ea74","ui/base/abstract-checkbox",{dependencies:["./abstract-control","../../composer/press-composer"],factory:function(e,t){var n=e("./abstract-control").AbstractControl,r=e("../../composer/press-composer").PressComposer,i=t.AbstractCheckbox=n.specialize({constructor:{value:function i(){if(this.constructor===i)throw Error("AbstractCheckbox cannot be instantiated.");n.didCreate.call(this),this._pressComposer=r.create(),this.addComposer(this._pressComposer),this.defineBindings({"classList.has('montage--disabled')":{"<-":"!enabled"},"classList.has('montage--active')":{"<-":"active"},"classList.has('montage-Checkbox--checked')":{"<-":"checked"}})}},active:{value:!1},value:{value:null},_checked:{value:!1},checked:{set:function(e){this._checked=e},get:function(){return this._checked}},enabled:{value:!0},_pressComposer:{value:null},enterDocument:{value:function(e){e&&this.element.setAttribute("role","checkbox")}},draw:{value:function(){this.checked?this.element.setAttribute("aria-checked","true"):this.element.setAttribute("aria-checked","false")}},toggleChecked:{value:function(){this.enabled&&(this.checked=!this.checked,this.dispatchActionEvent())}},handlePressStart:{value:function(e){this.active=!0,e.touch&&document.addEventListener("touchmove",this,!1)}},handlePress:{value:function(){this.active=!1,this.toggleChecked()}},handlePressCancel:{value:function(){this.active=!1,document.removeEventListener("touchmove",this,!1)}},prepareForActivationEvents:{value:function(){this._pressComposer.addEventListener("pressStart",this,!1),this._pressComposer.addEventListener("press",this,!1),this._pressComposer.addEventListener("pressCancel",this,!1)}},activate:{value:function(){this.toggleChecked()}}})}});