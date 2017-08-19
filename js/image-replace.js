// This js snippet was provided by a third source thnaks to him
// for a fast way to replace the image path
$(document).ready(function(){
	var isCMS = false;
	var imageTags = document.getElementsByTagName("img");

	for (var i = imageTags.length - 1; i 〉= 0; i--) {
		var source = imageTags[i].src;
		source = source.replace(/^.*[\\\/]/, '');
		var localURL = "img/" + source;
		var cmsURL = "^media_src_" + source + "^";
		if (!isCMS) {
			imageTags[i].src = localURL;
		} else {
			imageTags[i].src = cmsURL;
		}
	}
});
