<template>
  <v-app>
    <!-- <div class="menu">
			<ul>
				<li v-for="slideName in slideNames" :key="slideName">
					<a href="#">{{ slideName }}</a>
				</li>
			</ul>
		</div>-->
    <Fullpage :slideNames="slideNames" />
  </v-app>
</template>

<script>
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

<style lang="scss">
.menu {
  width: 100%;
  font-family: "Courier New", Courier, monospace;
  font-size: 1em;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  padding: 1em;
  z-index: 10;
  color: white;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;

    li {
      background-color: white;
      box-shadow: 0 0 2px 5px;
      border-radius: 15px;
      padding: 5px;
      a {
        color: black;

        text-decoration: none;
      }
    }
  }
}
</style>
