"use strict";var Component=require("ui/component").Component;exports.Main=Component.specialize({handleAction:{value:function(e){console.log("heard"),e.detail&&(this.currentSegment=e.detail.get("data").label)}},data:{value:[{region:"region1",size:10,flag:!0},{region:"region2",size:10,flag:!0},{region:"region3",size:10,flag:!0},{region:"region4",size:10,flag:!0},{region:"region5",size:10,flag:!0},{region:"region6",size:50,flag:!0}]},tree:{value:{region:"North America",size:40,regions:[{region:"Canada",size:20},{region:"United States",size:20,regions:[{region:"CA",size:40},{region:"MN",size:30}]}]}}});