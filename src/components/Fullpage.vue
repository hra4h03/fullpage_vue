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
        <h1>the 2 slide</h1>
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
export default {
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
