// ==UserScript==
// @name         cnBeta.com Remove Overlay
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove Overlay on cnBeta.com
// @author       FlowerCode
// @match        http://*.cnbeta.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
	'use strict';
	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			var addedNodes = mutation.addedNodes;
			for (var i = 0; i < addedNodes.length; i++) {
				var node = addedNodes[i];
				if ((node.nodeName == 'DIV') &&
					(node.style.display == 'block') &&
					(node.id))
				{
					console.log('Removing node: ' + node.id);
					node.parentNode.removeChild(node);
					observer.disconnect();
				}
			}

		});
	});

	observer.observe(document, {childList: true, subtree: true});

})();
