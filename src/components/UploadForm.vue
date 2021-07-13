<template>
  <div class="dropper">
    <input type="file" @change="uploadImages($event.target.files)" multiple accept="image/*"/>
    <span>Drag files here!!</span>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "UploadForm",
  methods: {
    ...mapActions(['uploadImages'])
  }
}
</script>

<style scoped>
.dropper {
  margin-top: 20vh;
  position: relative;
  height: 40vh;
  border: 2px dashed lightgray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dropper:hover {
  background-color: #f5f5f5;
}
input {
  width: 100%;
  height: 40vh;
  position: absolute;
  opacity: 0;
}
</style>