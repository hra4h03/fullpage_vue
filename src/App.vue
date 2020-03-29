<template>
	<div>
		<!-- <div class="menu">
			<ul>
				<li v-for="slideName in slideNames" :key="slideName">
					<a href="#">{{ slideName }}</a>
				</li>
			</ul>
		</div>-->
		<Fullpage />
	</div>
</template>

<script>
// import videojs from "video.js";
import Fullpage from "./components/Fullpage";

export default {
	name: "App",
	data() {
		return {
			slideNames: ["Memory", "I dont know", "Love", ". . . "]
		};
	},
	components: {
		Fullpage
	}
};
</script>

<style lang="scss"></style>
