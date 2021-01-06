<template>
<!--  模态框-->
  <div class="model">
    <div class="model-item">
      模态框
    </div>
  </div>
</template>

<script>
export default {
  name: "ModelVox"
}
</script>

<style scoped>
.model{
  height: 100%;
  width: 100%;
  /*opacity: .8;*/
  background-color: rgba(0,0,0,0.4);
  position: relative;
  z-index: 998;

}

.model-item {
  /*opacity: 1;*/
  background-color: #3e3e3e;
  color:#ffffff ;
  width: 200px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border-radius: 5%;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -25px;
  border: 1px solid #eeebeb;
  /*z-index: 999;*/

}


</style>
