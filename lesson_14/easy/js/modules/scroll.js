'use strict';

function scroll() {
	document.querySelector('ul').addEventListener('click', function (e) {
		var t = 1;
		var target = e.target;

		if (e.target.tagName === "A") {

			e.preventDefault();
			var anchor = target.href.replace(/.*(#.*)/, '$1');
			var coords = document.querySelector(anchor).getBoundingClientRect().top;
			var w = window.pageYOffset;
			var start = null;

			var tick = function tick(now) {
				if (start === null) start = now;

				var progress = now - start;
				var position = coords < 0 ? Math.max(w - progress / (t -= 0.01), w + coords) : Math.min(w + progress / (t -= 0.01), w + coords);
				window.scrollTo(0, position);

				if (position != coords + w) {
					requestAnimationFrame(tick);
				}
			};

			requestAnimationFrame(tick);
		}
	});
}

module.exports = scroll;