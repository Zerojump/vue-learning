<template>
  <div>
    <p>i am {{name}}</p>
    <p>{{$route.params.color}}</p>
    <button @click="getParam">get param</button>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                name: "apple",
            }
        },
        methods:{
            getParam(){
                console.log(this.$route.params)
            }
        }
    }
</script>

<style scoped>

</style>
