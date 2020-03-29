<template>
	<div class="hello">
		<full-page ref="fullpage" :options="options" id="fullpage">
			<div class="section">
				<div class="slide s1">
					<h1>1 slide</h1>
				</div>
				<div class="slide s2">
					<h1>2 slide</h1>
				</div>
				<div class="slide s3">
					<h1>3 slide</h1>
				</div>
			</div>
			<div class="section s2">
				<video id="myVideo" playsinline loop muted data-autoplay>
					<source
						src="https://res.cloudinary.com/http-cau-am/video/upload/v1585481196/fullpage_vue/Hardest_Game_-_Mozilla_Firefox_2019-07-28_22-58-37-1_jqhbgo.mp4"
						type="video/mp4"
					/>
					<source
						src="https://res.cloudinary.com/http-cau-am/video/upload/v1585481196/fullpage_vue/Hardest_Game_-_Mozilla_Firefox_2019-07-28_22-58-37-1_jqhbgo.webm"
						type="video/webm"
					/>
					<!-- <video id="myVideo"  loop muted data-autoplay>
						<source
							src="https://res.cloudinary.com/dlz80e3v7/video/upload/v1582903321/flowers_kgvvqw.mp4"
							type="video/mp4"
						/>
						<source
							src="https://res.cloudinary.com/dlz80e3v7/video/upload/v1582903318/flowers_ofohyg.webm"
							type="video/webm"
						/>
					</video>-->
				</video>
				<div class="layer">
					<h1>fullPage.js videos</h1>
				</div>
				<!-- <Video :options="videoOptions" /> -->

				<!-- <video class="video-js"> -->
				<!-- <h1>the 2 slide</h1> -->
				<!-- </video> -->
			</div>

			<div class="section s3">
				<h1>the 3 slide</h1>
			</div>
			<div class="section s4">
				<h1>the 4 slide</h1>
			</div>
		</full-page>
	</div>
</template>

<script>
// import Video from "./Video";

export default {
	components: {
		// Video
	},
	data() {
		return {
			options: {
				autoscrolling: true,
				navigation: true,
				navigationTooltips: ["Memory", "I dont know", "Love", ". . . "],
				showActiveTooltip: true,
				// controArrows: false,
				slidesNavigation: true,
				scrollingSpeed: 1000,
				loopBottom: true,
				// controlArrows: true,
				parallax: true,
				parallaxOptions: {
					type: "cover",
					percentage: 100,
					property: "translate"
				}
			},
			videoOptions: {
				autoplay: true,
				controls: true,
				sources: [
					{
						src:
							"./../assets/Hardest Game - Mozilla Firefox 30-Sep-19 10_46_30 PM.png",
						type: "video/mp4"
					}
				]
			}
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h1 {
	color: #fff;
}
span {
	background: #fff !important;
}

body {
	text-align: center;
}

#myVideo {
	position: absolute;
	right: 0;
	bottom: 0;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	background-size: center 100%;
	background-color: black; /* in case the video doesn't fit the whole page*/
	background-image: url(https://res.cloudinary.com/http-cau-am/video/upload/v1585481196/fullpage_vue/Hardest_Game_-_Mozilla_Firefox_2019-07-28_22-58-37-1_jqhbgo.webm);
	background-position: center center;
	background-size: contain;
	object-fit: contain; /*cover video background */
	z-index: 3;
}

.s1 {
	background-color: #ee4455;
	background-image: url(https://images.unsplash.com/photo-1477573829233-74cd1c17fa65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
	background-size: cover;
	background-repeat: no-repeat;
}

.s2 {
	background-color: #121212;
	background-image: url(https://images.unsplash.com/photo-1485367255444-d62afe0567ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
	background-size: cover;
	background-repeat: no-repeat;
}
.s3 {
	background-color: #ee4455;
	background-image: url(https://images.unsplash.com/photo-1553301080-eddd10a5b07b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
	background-size: cover;
	background-repeat: no-repeat;
}

.s4 {
	background-color: #121212;
	background-image: url(https://images.unsplash.com/photo-1485367255444-d62afe0567ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
	background-size: cover;
	background-repeat: no-repeat;
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
