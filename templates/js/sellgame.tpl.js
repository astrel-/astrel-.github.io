Ember.TEMPLATES["sellgame"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("      <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': (":item-holder key")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n        <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': (":idlol key")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n");
  stack1 = helpers['if'].call(depth0, "item", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </a>  \n      </div>\n    \n\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("            <img src=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "item.image", {"name":"unbound","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\" class=\"item-image\">\n             <!--img src=\"pic/ajax-loader.gif\" alt=\"loading\" class=\"loading-gif\"-->\n");
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  data.buffer.push("First");
  },"6":function(depth0,helpers,partials,data) {
  data.buffer.push("Previous");
  },"8":function(depth0,helpers,partials,data) {
  data.buffer.push("Next");
  },"10":function(depth0,helpers,partials,data) {
  data.buffer.push("Last");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("  <div class= 'item-container'>\n");
  stack1 = helpers.each.call(depth0, "item", "in", "items", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "sellgame", "game", 1, {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(4, data),"inverse":this.noop,"types":["STRING","ID","NUMBER"],"contexts":[depth0,depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "sellgame", "game", "previousPage", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(6, data),"inverse":this.noop,"types":["STRING","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n    <span>Страница \n    ");
  stack1 = helpers._triageMustache.call(depth0, "currentPage", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n     из ");
  stack1 = helpers._triageMustache.call(depth0, "pages", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n    ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "sellgame", "game", "nextPage", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(8, data),"inverse":this.noop,"types":["STRING","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "sellgame", "game", "pages", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(10, data),"inverse":this.noop,"types":["STRING","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n  </div>\n\n  <div class='item-description'>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>");
  return buffer;
},"useData":true});