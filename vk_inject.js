function searcher() {
	var arrPosts = $(".feed_row:has(a[href=\"/thevillage\"])");
	Array.prototype.forEach.call(arrPosts, function(entry) {
		var textPost = ($(entry).text());
		var stopWords = ["можно", "час", "сексист", "Wonderzine", "Вондерзин"];
		stopWords.forEach(function(item) {
			var foundPos = textPost.indexOf(item);
			if (foundPos === -1) {
				return;
			}
			// console.log(foundPos);
			localStorage.setItem("postKey","entry");
			var value = localStorage.getItem("postKey");
			console.log(value);
			alert("I will destroy it!");
			entry.remove();
		});
	});
}

setTimeout(function run() {
	searcher();
	setTimeout(run, 2000);
}, 2000);