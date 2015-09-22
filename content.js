(function() {
	try {
		var e = document.createElement('script');
		e.src = chrome.extension.getURL('script.js');
		(document.head || document.documentElement).appendChild(e);
		e.onload = function() {
			e.parentNode.removeChild(e);
		};
	} catch (e) {}
})();
