<template>
  <div class="row">
    <div class="col-sm-12 text-center" id="home">
      <div class="background">
        <h1>欢迎品尝</h1>
        <button @click="goToMenu" class="btn btn-success">let's order</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToMenu() {
      // this.$router.replace('/menu')
      // this.$router.replace({name:'menuLink'})
      // this.$router.push('/menu')
      this.$router.push({ name: "menuLink" });
    }
  }
};
</script>

<style  scoped>
.background{
  background: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
#home{
  background: url('../../src/assets/pizza.jpg');
  height: 85vh;
  padding: 10%;
}
h1,h2{
  margin: 6%;
}
</style>