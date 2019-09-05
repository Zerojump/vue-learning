<template>
  <div>
    <p>i am {{name}}</p>
    <!--<router-view></router-view>-->
    <button @click="addOne">add one</button>
    <button @click="minusOne">minus one</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: "banana",
        price: 15,
      }
    },
    methods: {
      addOne() {
        this.$store.commit('increment', this.price)
      },
      minusOne() {
        this.$store.commit('decrement', this.price)
      }
    }
  }
</script>

<style scoped>

</style>
