    document.querySelector('ul').addEventListener('click',function(e) {
        let	t = 1;
        let target = e.target;
        
        if (e.target.tagName === "A") {

			e.preventDefault();
			let anchor = target.href.replace(/.*(#.*)/, '$1');
			let	coords = document.querySelector(anchor).getBoundingClientRect().top;
			let	w = window.pageYOffset;
			let	start  = null;

			let tick = (now) => {
				if (start === null) start = now;

                let progress = now - start;
                let position = (coords < 0 ? Math.max(w - progress/(t -= 0.01), w + coords) : Math.min(w + progress/(t -= 0.01), w + coords));
                window.scrollTo(0,position);


				if (position != coords + w) {
					requestAnimationFrame(tick);
				} 
			};

            requestAnimationFrame(tick);
		}
    });
