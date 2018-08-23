(function() {
    var startBtn = document.getElementById('startBtn');
    var backBtn = document.getElementById('backBtn');
	var stopBtn = document.getElementById('stopBtn');
    var resetBtn = document.getElementById('resetBtn');
    
	var requestID;

	var canvas = document.getElementById('stage');

	var ctx = canvas.getContext('2d');

	ctx.fillStyle = '#212121';

	var posX = 0;
	var boxWidth = 50;
	var pixelsPerFrame = 1; 

	ctx.fillRect(posX, 0, boxWidth, canvas.height);

	function animateForward() {
		requestID = requestAnimationFrame(animateForward);

		if (posX <= (canvas.width - boxWidth)) {
			ctx.clearRect((posX - pixelsPerFrame), 0, boxWidth, canvas.height);
			ctx.fillRect(posX, 0, boxWidth, canvas.height);
			posX += pixelsPerFrame;
		} else {
			cancelAnimationFrame(requestID);
		}
    }
    
    function animateBackward() {
        requestID = requestAnimationFrame(animateBackward);

		if (posX >= 0) {
			ctx.clearRect((posX + pixelsPerFrame), 0, boxWidth, canvas.height);
			ctx.fillRect(posX, 0, boxWidth, canvas.height);
			posX -= pixelsPerFrame;
		} else {
			cancelAnimationFrame(requestID);
        }
        console.log(posX);
    }

	startBtn.addEventListener('click', function(e) {
		e.preventDefault();

		requestID = requestAnimationFrame(animateForward);
    });
    
    backBtn.addEventListener('click', function(e) {
        e.preventDefault();

        requestID = requestAnimationFrame(animateBackward);
    });

	stopBtn.addEventListener('click', function(e) {
		e.preventDefault();

		cancelAnimationFrame(requestID);
	});

	resetBtn.addEventListener('click', function(e) {
		e.preventDefault();

		posX = 0;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.fillRect(posX, 0, boxWidth, canvas.height);
	});

}());
