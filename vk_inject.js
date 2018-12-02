function searcher() {
	var groupId = localStorage.getItem('groupId');
	var arrPosts = $(".feed_row:has(a[href=\""+groupId+"\"])");
	Array.prototype.forEach.call(arrPosts, function(entry) {
		var textPost = ($(entry).text());
		var stopWords = localStorage.setItem('???');
		stopWords.forEach(function(item) {
			var foundPos = textPost.indexOf(item);
			if (foundPos === -1) {
				return;
			}
			var postKey=(+new Date()+ "8");
			localStorage.setItem(postKey,textPost);
			var value = localStorage.getItem(postKey);
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
