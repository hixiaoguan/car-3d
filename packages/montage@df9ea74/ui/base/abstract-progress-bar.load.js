montageDefine("df9ea74","ui/base/abstract-progress-bar",{dependencies:["./abstract-control"],factory:function(e,t){var n=e("./abstract-control").AbstractControl,r=t.AbstractProgressBar=n.specialize({constructor:{value:function r(){if(this.constructor===r)throw Error("AbstractProgressBar cannot be instantiated.");this.super()}}});r.addAttributes({value:{dataType:"number"},max:{dataType:"number"}})}});