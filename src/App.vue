<template>
  <div id="app">
    <p v-html="hello"></p>
    <p v-text="hello"></p>
    {{hello}}
    {{num+1}}
    <br>
    {{flag?'ok':'down'}}
    <p v-for="(i,j) in list">{{i}}-{{j}}</p>
    <componentA></componentA>
    <component-a></component-a>
    <br>
    <component-a v-for="(v,k) in objList" :key="k"></component-a>
    <br>
    <button v-on:click="addItem">addItem</button>
    <button v-on:click="editItem">editItem</button>
    <button v-on:click="updateItem">updateItem</button>
    <a v-bind:href="link">bing</a>
    <a :href="link" :title="hello">bing</a>
    <a class="link-href" v-bind:class="classStr">bing</a>
    <br>
    <a v-if="isPartA">partA</a>
    <a v-else="no dat"></a>
<!--    <a v-show="!isPartA">partB</a>-->
    <button v-on:click="toggle">toggle</button>
    <br>
    <input @keydown.enter="onKeyDown">
    <br>
    <component-a @my-event="onComaMyEventA"></component-a>
  </div>
</template>

<script>
    import componentA from './components/a'
    import Vue from 'vue'

    export default {
        components: {componentA},
        data() {
            return {
                hello: 'world',
                num: 1,
                flag: true,
                link:'http://cn.bing.com/?scope=web',
                classStr:'red-font',
                isPartA:true,
                list: [
                    'a', 'b', 'c'
                ],
                objList: {
                    a1: 'ttt',
                    a2: 3,
                    a3: false
                }
            }
        },
        methods: {
            addItem :function () {
                console.log(this.list)
                this.list.push(
                    'k'
                )
            },
            editItem() {
                this.list[0] = 'k'
                console.log(this.list)
            },
            updateItem() {
                Vue.set(this.list, 1, 'u')
            },
            toggle(){
                this.isPartA = !this.isPartA
            },
            onKeyDown(){
                console.log('on key down')
            },
            onComaMyEventA(paramFromA){
                console.log('paramFromA:'+paramFromA)
            }
        }
    }
</script>

<style>
  /*#app {*/
  /*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*  -webkit-font-smoothing: antialiased;*/
  /*  -moz-osx-font-smoothing: grayscale;*/
  /*  text-align: center;*/
  /*  color: #2c3e50;*/
  /*  margin-top: 60px;*/
  /*}*/
  html {
    height: 100%;
  }
</style>
