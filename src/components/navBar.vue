<template>
  <div class="nav-bar">
    <h1>icon-customer</h1>
  </div>
</template>

<script>
export default {
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba($color: #000000, $alpha: 0.2);
  h1{
    font-size: 30px;
    line-height: 2;
  }
}
</style>