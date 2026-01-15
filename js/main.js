const items = document.querySelectorAll('.accordion__item');

items.forEach(item => {
	const btn = item.querySelector('.accordion__question');
	const answer = item.querySelector('.accordion__answer');

	btn.addEventListener('click', () => {
		items.forEach(i => {
			if (i !== item) {
				i.classList.remove('active');
				i.querySelector('.accordion__answer').style.maxHeight = null;
			}
		});

		item.classList.toggle('active');

		if (item.classList.contains('active')) {
			answer.style.maxHeight = answer.scrollHeight + 'px';
		} else {
			answer.style.maxHeight = null;
		}
	});
});

const swiper = new Swiper('.gallery__slider', {
	slidePerView: 1,
	spaceBetween: 10,

	breakpoints: {
		300: {
			slidesPerView: 2,
		},
		600: {
			slidesPerView: 3,
		},
		800: {
			slidesPerView: 4,
		},
		1000: {
			slidesPerView: 5,
		},
	},
});
