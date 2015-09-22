(function() {
	if (window) {
		delete window.WebSocket;
		if ('WebSocket' in window) {
			window.WebSocket = undefined;
		}
		console.log('WebSocket support disabled');
	}
})();
