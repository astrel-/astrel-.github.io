Ember.TEMPLATES["application"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  data.buffer.push("    <!--a href=\"/\" class=\"title\"-->\n      <div id=\"title\">\n        <h2>YBARRA</h2>\n      </div>\n      <!--/a-->\n");
  },"3":function(depth0,helpers,partials,data) {
  data.buffer.push("\n          <img src=\"pic/games/steam.jpg\" alt=\"Steam\">\n          <span>Steam Games</span>");
  },"5":function(depth0,helpers,partials,data) {
  data.buffer.push("\n          <img src=\"pic/games/dota2.jpg\" alt=\"Dota 2\">\n          <span>Dota 2</span>");
  },"7":function(depth0,helpers,partials,data) {
  data.buffer.push("\n          <img src=\"pic/games/csgo.jpg\" alt=\"CS:GO\">\n          <span>CS:GO</span>");
  },"9":function(depth0,helpers,partials,data) {
  data.buffer.push("\n          <img src=\"pic/games/tf2.jpg\" alt=\"Team Fortress 2\">\n          <span>Team Fortress</span>");
  },"11":function(depth0,helpers,partials,data) {
  data.buffer.push("\n          <img src=\"pic/games/tf2.jpg\" alt=\"Продать вещи\">\n          <span>Продать</span>");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<div id=\"debug\">\n  <span>Logged in?</span><br>\n  <INPUT TYPE=\"radio\" NAME=\"logged\" VALUE=\"y\" onclick=\"radioClicked(this)\">  Yes\n  <INPUT TYPE=\"radio\" NAME=\"logged\" VALUE=\"n\" checked onclick=\"radioClicked(this)\">  No\n\n</div>\n\n<div id=\"main-menu-container\">\n  <header>\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "application", {"name":"link-to","hash":{
    'class': ("title")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"fn":this.program(1, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  </header>\n\n  <div id=\"login\" class>\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet-login", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n    <div id=\"steam-log-in\">\n      <a href=\"html/index_en.html\"><img src=\"pic/sits_small.png\"></a>\n    </div>\n  </div>\n\n  <div id=\"container\">\n\n    <div id=\"left-sidebar\">\n      <ul>\n        <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "steam", {"name":"link-to","hash":{
    'class': ("game-button")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"fn":this.program(3, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "dota", {"name":"link-to","hash":{
    'class': ("game-button")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"fn":this.program(5, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "cs-go", {"name":"link-to","hash":{
    'class': ("game-button")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "tf", {"name":"link-to","hash":{
    'class': ("game-button")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"fn":this.program(9, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "sell", {"name":"link-to","hash":{
    'class': ("game-button")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"fn":this.program(11, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>\n          <div id=\"my-profile\">\n            <a href=\"#/my\" id=\"profile\">\n              <img src=\"pic/av.jpg\" width=\"32\" alt=\"Личный кабинет\">\n              <span>Личный кабинет</span>\n            </a>\n          </div>\n        </li>\n      </ul>      \n    </div>\n\n  <div id=\"main\">\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n\n  </div>\n\n  <!--footer>\n    <div id=\"rules\">\n      <a href=\"\" class=\"rules\">Правила Пользования</a>\n    </div>\n  </footer-->\n</div>\n\n");
  return buffer;
},"useData":true});