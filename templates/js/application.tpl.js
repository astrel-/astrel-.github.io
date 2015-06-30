Ember.TEMPLATES["application"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("      <div class=\"row\">\n        <div class=\"cell\">\n          ");
  stack1 = helpers._triageMustache.call(depth0, "bet.money", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        <div class=\"cell\">\n          ");
  stack1 = helpers._triageMustache.call(depth0, "bet.coef", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n      </div>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<div id=\"main\">\n<p>Betards!</p>\n\n<nav>\n  <div id=\"comm\">\n    Комиссия <br>\n    ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'value': ("r")
  },"hashTypes":{'value': "ID"},"hashContexts":{'value': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("% <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "go", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Go</button>\n  </div>\n\n  <div id=\"odds\">\n    Отношение коэф <br>\n      ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'value': ("ratio")
  },"hashTypes":{'value': "ID"},"hashContexts":{'value': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push(" <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeRatio", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Change</button>\n  </div>\n\n</nav>\n\n<table>\n  <tbody>\n    <tr>\n      <th> Event Name </th>\n      <th> <span class=\"number\">1</span> </th>\n      <th> <span class=\"number\">2</span> </th>\n    </tr>\n\n    <tr>\n\n      <td>\n        <div>\n          <span class=\"number\">1.</span> ");
  stack1 = helpers._triageMustache.call(depth0, "team1", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        <div>\n          <span class=\"number\">2.</span> ");
  stack1 = helpers._triageMustache.call(depth0, "team2", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n      </td>\n\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "coef1", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</t>\n\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "coef2", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n\n    </tr>\n  </tbody>\n\n</table>\n\n\n\n<div id=\"bet\">\nПоставить\n");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'value': ("money")
  },"hashTypes":{'value': "ID"},"hashContexts":{'value': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("$ на\n</div>\n\n<div id=\"team1\">\n<a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "bet", 1, {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","NUMBER"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "team1", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n  <div class=\"wrapper\">\n\n    <div class=\"table2\">\n\n      <div class=\"row header\">\n        <div class=\"cell\">\n          Money\n        </div>\n        <div class=\"cell\">\n          Coeff\n        </div>\n      </div>\n\n");
  stack1 = helpers.each.call(depth0, "bet", "in", "model.team1", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </div>\n  </div>\n</div>\n\n<div id=\"team2\">\n<a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "bet", 2, {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","NUMBER"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "team2", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n  <div class=\"wrapper\">\n\n    <div class=\"table2\">\n\n      <div class=\"row header blue\">\n        <div class=\"cell\">\n          Money\n        </div>\n        <div class=\"cell\">\n          Coeff\n        </div>\n      </div>\n\n");
  stack1 = helpers.each.call(depth0, "bet", "in", "model.team2", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </div>\n  </div>\n</div>\n\n\n<div id=\"total\">\nРасчеты\n<table>\n  <tbody>\n    <tr>\n      <th> Взято денег </th>\n      <th> К выплате, если ");
  stack1 = helpers._triageMustache.call(depth0, "team1", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push(" победит </th>\n      <th> К выплате, если ");
  stack1 = helpers._triageMustache.call(depth0, "team2", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push(" победит </th>\n    </tr>\n\n    <tr>\n\n      <td>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "model.total", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n      </td>\n\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "model.needtoPay1", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "model.needtoPay2", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n\n    </tr>\n  </tbody>\n\n</table>\n</div>\n</div>\n");
  return buffer;
},"useData":true});