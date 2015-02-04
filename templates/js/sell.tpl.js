Ember.TEMPLATES["sell"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  data.buffer.push("            <img src=\"pic/games/dota2.jpg\" alt=\"Dota 2\">\n            <span>Dota 2</span>\n");
  },"3":function(depth0,helpers,partials,data) {
  data.buffer.push("            <img src=\"pic/games/csgo.jpg\" alt=\"CS:GO\">\n            <span>CS:GO</span> \n");
  },"5":function(depth0,helpers,partials,data) {
  data.buffer.push("            <img src=\"pic/games/steam.jpg\" alt=\"Steam\">\n            <span>Steam</span>\n");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<div class='inventory-main'>\n  <nav>\n    <ul>\n      <li>\n        <!--div class=\"game-nav-bar\"-->\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "sellgame", "dota", {"name":"link-to","hash":{
    'class': ("game-nav")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"fn":this.program(1, data),"inverse":this.noop,"types":["STRING","STRING"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        <!--/div-->\n      </li>\n      <li>\n        <!--div class=\"game-nav-bar\"-->\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "sellgame", "cs-go", {"name":"link-to","hash":{
    'class': ("game-nav")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"fn":this.program(3, data),"inverse":this.noop,"types":["STRING","STRING"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        <!--/div-->\n      </li>\n      <li>\n        <!--div class=\"game-nav-bar\"-->\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "sellgame", "steam", {"name":"link-to","hash":{
    'class': ("game-nav")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"fn":this.program(5, data),"inverse":this.noop,"types":["STRING","STRING"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        <!--/div-->\n      </li>\n    </ul>\n\n  </nav>  \n\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>");
  return buffer;
},"useData":true});