montageDefine("df9ea74","core/serialization/alias",{dependencies:["../core"],factory:function(e,t){var n=e("../core").Montage;t.Alias=n.specialize({_value:{value:null},_aliasRegExp:{value:/@([_a-zA-Z$][0-9_a-zA-Z$]*):([_a-zA-Z$][0-9_a-zA-Z$]*)$/},value:{get:function(){return this._value},set:function(e){var t=this._aliasRegExp.exec(e);if(!t)throw Error("Invalid alias syntax: "+e);this._value=e,this._componentLabel=t[1],this._propertyName=t[2]}},_componentLabel:{value:null},componentLabel:{get:function(){return this._componentLabel}},_propertyName:{value:null},propertyName:{get:function(){return this._propertyName}},init:{value:function(e){return this.value=e,this}}})}});