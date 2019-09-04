<template>
    <div>
      {{name}}
<!--      {{ number}}-->
<!--      {{numToDo}}-->
      {{myValue3}}
      <button @click="emitMyEvent">emit</button>
      <slot name="footer">no footer</slot>
    </div>
</template>

<script>
    export default {
        // props:['num-to-do'],
        props:{
            'my-value3':[Number,String]
        },
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
