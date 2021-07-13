<template>
  <div>
    <div v-if="isLoggedIn" class="img-container">
      <img v-for="image in allImages" :key="image.id" :src="image.link"  alt="image"/>
    </div>
    <h2 v-else>Log in to get started</h2>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "ImageList",
  computed: {
    ...mapGetters(['allImages', 'isLoggedIn'])
  },
  methods: {
    ...mapActions(['fetchImages'])
  },
  created() {
    this.fetchImages()
  }
}
</script>

<style scoped>
.img-container {
  column-count: 3;
  column-gap: 0;
}
img {
  max-width: 100%;
  padding: 5px;
}
h2 {
  margin-top: 20vh;
  text-align: center;
}
</style>