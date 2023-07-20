// check when we've scrolled down to a certain point
var scrollPoints = document.querySelectorAll('.scroll-point');

for (var i = 0; i < scrollPoints.length; i++) {
	new Waypoint({
		element: scrollPoints[i],
		handler: function () {
			this.element.classList.add('active');
		}, offset: '60%'
	})
}
/*
var fgParallax = document.querySelectorAll('.parallax-fg');
new simpleParallax(fgParallax, {
	overflow: true,
	delay: 1,
	scale: 1.4,
	transition: 'cubic-bezier(0,0,0,1)'
});

var bgParallax = document.querySelectorAll('.parallax-bg');
new simpleParallax(bgParallax, {
	orientation: 'down',
	overflow: true,
	delay: 1,
	scale: 1.1,
	transition: 'cubic-bezier(0,0,0,1)'
});
*/

var rellaxFg = new Rellax('.parallax-fg', {
	speed: 2,
	center: true
});

var rellaxBg = new Rellax('.parallax-bg', {
	speed: -1.5,
	center: true
});

setTimeout(function () {
	window.dispatchEvent(new Event('resize'));
}, 1000);


// modal
const videoButton = document.getElementById('video-button'),
	videoOverlay = document.getElementById('video-overlay'),
	videoIframe = document.getElementById('video-iframe');

var videoOpen = false;

videoButton.addEventListener('click', function (e) {
	showDialog();
	videoOpen = true;
});

videoOverlay.addEventListener('click', function (e) {
	closeDialog();
	videoOpen = false;
});

const showDialog = () => {
	videoOverlay.classList.add('show')
}

const closeDialog = () => {
	videoOverlay.classList.remove('show');
	videoSrc = videoIframe.getAttribute('src');
	videoIframe.setAttribute('src', videoSrc);
}

window.addEventListener('scroll', () => {
	if (videoOpen) {
		closeDialog();
	}
});