var isSidePanelVisible = false;
var isInTabletMode;

$(document).ready(function () {
	isInTabletMode = screen.width < 1070 ? true : false;
	window.onscroll = function () {
		myFunction();
	};
	$(window).on('load', function () {
		$('.loader-container').fadeOut(750);
		$('body').css('overflow-y', 'visible');
		$('#pic1').css('animation', 'display1 800ms');
		$('.loader-container').on('click', function () {
			toggleSidePanelVisibility();
		});
	});

	function myFunction() {
		var scrollTopValue = 0 + document.documentElement.scrollTop;
		if (scrollTopValue > 50) {
			$('.up').fadeIn(500);
		} else {
			$('.up').fadeOut(500);
		}
		if (scrollTopValue <= 630) {
			$('.one').addClass('active');
			$('.two').removeClass('active');
		} else if (scrollTopValue <= 1100 && scrollTopValue > 630) {
			$('.two').addClass('active');
			$('.one').removeClass('active');
			$('.three').removeClass('active');
		} else if (scrollTopValue <= 1550 && scrollTopValue > 1100) {
			$('.three').addClass('active');
			$('.two').removeClass('active');
			$('.four').removeClass('active');
		} else {
			$('.four').addClass('active');
			$('.three').removeClass('active');
		}
	}
});

function toggleSidePanelVisibility() {
	var sidePanel = $('nav ul');
	var darkBackground = $('.loader-container');
	if (isSidePanelVisible) {
		sidePanel.css('right', '-300px');
		darkBackground.css('display', 'none');
		$('body').css('overflow-y', 'visible');
	} else {
		darkBackground.css('z-index', '2');
		darkBackground.css('display', 'block');
		darkBackground.css('opacity', '0.5');
		$('.loader').css('display', 'none');
		sidePanel.css('right', '0px');
		$('body').css('overflow-y', 'hidden');
	}
	isSidePanelVisible = !isSidePanelVisible;
}
const hideSidePanelInTabletMode = () => (isInTabletMode ? toggleSidePanelVisibility() : '');
