Ember.TEMPLATES["application"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("  <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logOut", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Log Out</button>\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("  <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logIn", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Log In</button>\n");
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  data.buffer.push("      <div id=\"title\">\n        <h2>YBARRA</h2>\n      </div>\n");
  },"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("    <div id='userbar'>\n      <a href>");
  stack1 = helpers._triageMustache.call(depth0, "name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</a> ");
  stack1 = helpers._triageMustache.call(depth0, "money", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push(" <a href><span><font size=1>(выход)</font></span></a>\n    </div>\n");
  return buffer;
},"9":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("    <div id=\"faq\">\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "faq", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(10, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("      </a>\n    </div>\n    <div id=\"about\">\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "about", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(12, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </div>\n    <div id=\"steam-log-in\">\n      <a href=\"html/index_en.html\"><img src=\"pic/sits_small.png\"></a>\n    </div>\n");
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  data.buffer.push("        <span>FAQ</span>\n");
  },"12":function(depth0,helpers,partials,data) {
  data.buffer.push("        <span>О проекте</span>\n");
  },"14":function(depth0,helpers,partials,data) {
  data.buffer.push("\n          <img src=\"pic/games/steam.jpg\" alt=\"Steam\">\n          <span>Steam Games</span>");
  },"16":function(depth0,helpers,partials,data) {
  data.buffer.push("\n          <img src=\"pic/games/dota2.jpg\" alt=\"Dota 2\">\n          <span>Dota 2</span>");
  },"18":function(depth0,helpers,partials,data) {
  data.buffer.push("\n          <img src=\"pic/games/csgo.jpg\" alt=\"CS:GO\">\n          <span>CS:GO</span>");
  },"20":function(depth0,helpers,partials,data) {
  data.buffer.push("\n          <img src=\"pic/games/tf2.jpg\" alt=\"Team Fortress 2\">\n          <span>Team Fortress</span>");
  },"22":function(depth0,helpers,partials,data) {
  data.buffer.push("\n          <img src=\"pic/games/tf2.jpg\" alt=\"Продать вещи\">\n          <span>Продать</span>");
  },"24":function(depth0,helpers,partials,data) {
  data.buffer.push("        <li>\n          <div id=\"my-profile\">\n            <a href=\"#/my\" id=\"profile\">\n              <img src=\"pic/av.jpg\" width=\"32\" alt=\"Личный кабинет\">\n              <span>Личный кабинет</span>\n            </a>\n          </div>\n        </li>\n");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<div id=\"debug\">\n");
  stack1 = helpers['if'].call(depth0, "name", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.program(3, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n\n<div id=\"main-menu-container\">\n  <header>\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "application", {"name":"link-to","hash":{
    'class': ("title")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"fn":this.program(5, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  </header>\n\n  <div id=\"login\" class>\n  \n");
  stack1 = helpers['if'].call(depth0, "name", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.program(9, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </div>\n\n  <div id=\"container\">\n\n    <div id=\"left-sidebar\">\n      <ul>\n        <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "steam", {"name":"link-to","hash":{
    'class': ("game-button")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"fn":this.program(14, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "dota", {"name":"link-to","hash":{
    'class': ("game-button")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"fn":this.program(16, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "cs-go", {"name":"link-to","hash":{
    'class': ("game-button")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"fn":this.program(18, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "tf", {"name":"link-to","hash":{
    'class': ("game-button")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"fn":this.program(20, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "sellgame", "dota", 1, {"name":"link-to","hash":{
    'class': ("game-button")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"fn":this.program(22, data),"inverse":this.noop,"types":["STRING","STRING","NUMBER"],"contexts":[depth0,depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n");
  stack1 = helpers['if'].call(depth0, "name", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(24, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("      </ul>      \n    </div>\n\n  <div id=\"main\">\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n\n  </div>\n\n  <!--footer>\n    <div id=\"rules\">\n      <a href=\"\" class=\"rules\">Правила Пользования</a>\n    </div>\n  </footer-->\n</div>\n\n");
  return buffer;
},"useData":true});