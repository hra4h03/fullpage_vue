<template>
	<div class="hello">
		<full-page ref="fullpage" :options="options" id="fullpage">
			<div class="section Congratulations">
				<div class="slide s s1">
					<h1>Best wishes for your special day!</h1>
				</div>
				<div class="slide s s2">
					<h1>Live, Laugh and Enjoy!</h1>
				</div>
				<div class="slide s s3">
					<h1>Happy women's day to you!</h1>
				</div>
			</div>
			<div class="section Achievements">
				<div class="slide s s1">
					<h1>Wishing all your dreams come true</h1>
				</div>
				<div class="slide s s2">
					<h1>The fruit of your labour is sweet and you deserve it</h1>
				</div>
				<div class="slide s s3">
					<h1>You are a shining star. Well done!</h1>
				</div>
			</div>

			<div class="section Friends">
				<div class="slide s s1">
					<h1>Sisters are different flowers from the same garden</h1>
				</div>
				<div class="slide s s2">
					<h1>A sister is a little bit of childhood that can never be lost.</h1>
				</div>
				<div class="slide s s3">
					<h1>If you make friends with yourself you will never be alone</h1>
				</div>
				<div class="slide s s4">
					<h1>A single rose can be your garden… a single friend, your world.</h1>
				</div>
				<div class="slide s s5">
					<h1>Friendship is always a sweet responsibility, never an opportunity.</h1>
				</div>
			</div>
			<div class="section Memories">
				<div class="slide s s1">
					<h1>The end</h1>
				</div>
			</div>
		</full-page>
	</div>
</template>

<script>
export default {
	data() {
		return {
			options: {
				autoscrolling: true,
				navigation: true,
				navigationTooltips: [
					"Congratulations😊",
					"Achievements 📰",
					"Friends💪",
					"Memories🌞"
				],
				showActiveTooltip: true,
				slidesNavigation: true,
				scrollingSpeed: 1000,
				loopBottom: true,
				parallax: true,
				parallaxOptions: {
					type: "cover",
					percentage: 100,
					property: "translate"
				}
			}
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
body {
	background-color: #37474f;
	text-align: center;
	.s {
		background-size: contain;
		background-repeat: no-repeat;
		position: relative;
	}

	h1,
	p {
		position: absolute;
		left: 1em;
		right: 1em;
		bottom: 4em;
		color: #fff;
		font-family: "Courier New", Courier, monospace;
		text-transform: uppercase;
		font-size: 14px;
	}

	span {
		background: #fff !important;
		font-family: "Courier New", Courier, monospace;
	}
}
.s {
	object-fit: contain;
}

.Friends {
	.s1 {
		background-image: url(../assets/friends_1.jpg);
		background-position: center center;
	}
	.s2 {
		background-image: url(../assets/friends_2.jpg);
		background-position: center center;
	}
	.s3 {
		background-image: url(../assets/friends_3.jpg);
		background-position: center center;
	}
	.s4 {
		background-image: url(../assets/friends_4.jpg);
		background-position: center center;
	}
	.s5 {
		background-image: url(../assets/memories_1.jpg);
		background-position: center center;
	}
}
.Achievements {
	.s1 {
		background-image: url(../assets/achievement_1.jpg);
		background-position: center center;
	}
	.s2 {
		background-image: url(../assets/achievement_2.jpg);
		background-position: center center;
	}
	.s3 {
		background-image: url(../assets/achievement_3.jpg);
		background-position: center center;
	}
}

.Congratulations {
	.s1 {
		background-image: url(../assets/congratulation_1.jpg);
		background-position: center center;
	}
	.s2 {
		background-image: url(../assets/congratulation_2.jpg);
		background-position: center center;
	}
	.s3 {
		background-image: url(../assets/congratulation_3.jpg);
		background-position: center center;
	}
}

.Memories {
	.s1 {
		background-image: url(../assets/memories_2.jpg);
		background-position: bottom center;
	}
}

.fp-prev {
	width: 10px;
}

.fp-slidesNav {
	text-align: center;
}

.fp-controlArrow {
	position: absolute;
	z-index: 4;
	top: 50%;
	cursor: pointer;
	width: 0;
	height: 0;
	border-style: solid;
	margin-top: -20px;
	transform: translate3d(0, 0, 0);
}

.fp-controlArrow.fp-next {
	right: 5px;
	border-width: 20px 0 20px 10px;
	border-color: transparent transparent transparent #fff;
}
.fp-controlArrow.fp-prev {
	left: 5px;
	border-width: 20px 10px 20px 0;
	border-color: transparent #fff transparent transparent;
}
</style>
