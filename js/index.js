const fullpageEl = document.getElementById('fullpage')
const menuBtn = document.querySelector('.menu__btn')
const navigation = document.querySelector('.navigation')
const navCloseBtn = document.querySelector('.navigation__close__btn')
const blurOverlay = document.querySelector('.blur__overlay')
const IS_ACTIVE = 'is--active'

const toggleNavigation = () => {
	navigation.classList.toggle(IS_ACTIVE)
	blurOverlay.classList.toggle(IS_ACTIVE)
	fullpageEl.classList.toggle('no-scroll')
}

const CLICK = 'click'

menuBtn.addEventListener(CLICK, toggleNavigation)
navCloseBtn.addEventListener(CLICK, toggleNavigation)
blurOverlay.addEventListener(CLICK, toggleNavigation)

new fullpage('#fullpage', {
	autoScrolling: true,
	scrollBar: true,
})

//Setting header text color as white because it is hard to see it on first two sections.
$(function () {
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 50) {
			$(".header__nav__btn").addClass("active");
		} else {
			//remove the background property so it becomes black again
			$(".header__nav__btn").removeClass("active");
		}
	});
});
