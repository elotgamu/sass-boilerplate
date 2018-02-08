// This script replaces the path for the image sources

$(document).ready(function(){
	var imageTags = document.getElementsByTagName("img");
	for (var i = imageTags.length - 1; i >= 0; i--) {

		var source = imageTags[i].src;

		source = source.replace(/^.*[\\\/]/, '');

		source = source.substring(13, source.length - 3);

		var localURL = "img/" + source;

		imageTags[i].src = localURL;

	}
});
