Ember.TEMPLATES["sellgame"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  stack1 = helpers['if'].call(depth0, "item", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.program(5, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("        <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': (":item-holder item.id")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "sellitem", "item.classid", "item.instanceid", {"name":"link-to","hash":{
    'class': ("idlol")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"fn":this.program(3, data),"inverse":this.noop,"types":["STRING","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </div>\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("              <img src=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "item.imgURL", {"name":"unbound","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\" class=\"item-image\">\n               <!--img src=\"pic/ajax-loader.gif\" alt=\"loading\" class=\"loading-gif\"-->\n");
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("        <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': (":item-holder item.id")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n        </div>\n");
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showPage", "game", 1, {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID","NUMBER"],"contexts":[depth0,depth0,depth0],"data":data})));
  data.buffer.push(">First</button>\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showPage", "game", "previousPage", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data})));
  data.buffer.push(">Previous</button>\n");
  return buffer;
},"9":function(depth0,helpers,partials,data) {
  data.buffer.push("        <span>First</span>\n        <span>Previous</span>\n");
  },"11":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showPage", "game", "nextPage", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data})));
  data.buffer.push(">Next</button>\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showPage", "game", "pages", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data})));
  data.buffer.push(">Last</button>\n");
  return buffer;
},"13":function(depth0,helpers,partials,data) {
  data.buffer.push("        <span>Next</span>\n        <span>Last</span>\n");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("  <div class= 'item-container'>\n\n");
  stack1 = helpers.each.call(depth0, "item", "in", "model.items", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n    <div id=\"paging\">\n");
  stack1 = helpers['if'].call(depth0, "previousPage", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.program(9, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n      <span>Страница ");
  stack1 = helpers._triageMustache.call(depth0, "currentPage", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push(" из ");
  stack1 = helpers._triageMustache.call(depth0, "pages", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n\n");
  stack1 = helpers['if'].call(depth0, "nextPage", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(11, data),"inverse":this.program(13, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "refreshList", "game", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(">Refresh</button>\n    </div>\n\n\n\n\n  </div>\n\n\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"useData":true});