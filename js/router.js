var steam = function () { console.log("steam");};
var dota = function () { console.log("dota");};
var cs_go = function () { console.log("cs-go");};
var tf = function () {console.log("tf");};

var routes = {
	'/steam': steam,
	'/dota': dota,
	'/cs-go': cs_go,
	'/tf': tf
};


var author = function () { console.log("author"); };
var books = function () { console.log("books"); };
var viewBook = function (bookId) {
console.log("viewBook: bookId is populated: " + bookId);
};

var routes1 = {
'/author': author,
'/books': [books, function() {
  console.log("An inline route handler.");
}],
'/books/view/:bookId': viewBook
};

var router = Router(routes);

router.init();