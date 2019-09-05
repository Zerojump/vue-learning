<template>
  <div>
    <p>i am {{name}}</p>
    <p>{{$route.params.color}}</p>
    <!--<button @click="getParam">get param</button>-->
    <button @click="addOne">add one</button>
    <button @click="minusOne">minus one</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: "apple",
        price: 5,
      }
    },
    methods: {
      addOne() {
        this.$store.commit('increment', this.price)
      },
      minusOne() {
        this.$store.commit('decrement', this.price)
      },
      getParam() {
        console.log(this.$route.params)
      }
    }
  }
</script>

<style scoped>

</style>
