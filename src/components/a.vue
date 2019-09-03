<template>
    <div>
      {{name}}
      <button @click="emitMyEvent">emit</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name: "i am component a"
            }
        },
        methods:{
            emitMyEvent(){
                this.$emit('my-event',this.name)
            }
        }
    }
</script>

<style scoped>

</style>
