Ember.TEMPLATES["sellitem"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  data.buffer.push("    <button>Sell</button>\n");
  },"3":function(depth0,helpers,partials,data) {
  data.buffer.push("     <span>Вы не можете обмениваться этим предметом</span>\n");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<div class='item-description'>\n  <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'src': ("imgURL")
  },"hashTypes":{'src': "ID"},"hashContexts":{'src': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" class=\"item-image-sell-item\">\n  <div>\n    <p>");
  stack1 = helpers._triageMustache.call(depth0, "marketName", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n  </div>\n  <div class=\"game\">\n    <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'src': ("gamePicURL")
  },"hashTypes":{'src': "ID"},"hashContexts":{'src': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n    <span>");
  stack1 = helpers._triageMustache.call(depth0, "type", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n\n  </div>\n  <div class=\"game\">\n  <span></span>\n  </div>\n  <div>\n  <span>\n    Tags: \n  </span>\n  </div>\n  <div class=\"sell-item\">\n");
  stack1 = helpers['if'].call(depth0, "tradable", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.program(3, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </div>\n</div>\n");
  return buffer;
},"useData":true});