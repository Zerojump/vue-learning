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
    my-event<component-a @my-event="onComaMyEventA"></component-a>
    <br>
    <input v-model="myValue" type="text">
    <input v-model.lazy="myValue" type="text">
    <input v-model.number="myValue" type="text">
    <input v-model.trim="myValue" type="text">
    {{myValue}}
    {{typeof myValue}}
    <br>
    <input v-model="myBox" type="checkbox" value="apple">
    <input v-model="myBox" type="checkbox" value="banana">
    <input v-model="myBox" type="checkbox" value="pinapple">
    {{myBox}}
    <br>
    <input v-model="myRadio" type="radio" value="apple">
    <input v-model="myRadio" type="radio" value="banana">
    <input v-model="myRadio" type="radio" value="pinapple">
    {{myRadio}}
    <br>
    <select v-model="selection">
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
    {{selection}}
    <br>
    <select v-model="selection">
      <option v-for="item in selectOption" :value="item.value">{{item.text}}</option>
    </select>
    {{selection}}
    <br>
    <input v-model="myValue2" type="text">
    {{myValueWithoutNum}}
    {{getValueWithoutNum()}}
    <br>
    <p :is="comToRender"></p>
    <br>
  <component-a num-to-do=3></component-a>
    <br>
    <input v-model="myValue3" type="text">
    <component-a :my-value3="myValue3"></component-a>
    <br>
    my-event
    <component-a :my-value3="myValue3" @my-event="getMyEvent">
      <p slot="footer">xxxx footer</p>
    </component-a>
    <br>
  </div>
</template>

<script>
    import componentA from './components/a'
    import Vue from 'vue'

    export default {
        components: {componentA},
        computed:{
            myValueWithoutNum(){
                return this.myValue2.replace(/\d/g,'')
            }
        },
        data() {
            return {
                comToRender:'component-a',
                myValue2:'',
                myValue3:'',
                selectOption:[
                    {text:'apple',value:0},
                    {text:'banana',value:1},
                ],
                selection:null,
                myBox:[],
                myRadio:'',
                myValue:'',
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
            },
            getValueWithoutNum(){
                return this.myValue2.replace(/\d/g,'')
            },
            getMyEvent(hello){
                console.log('i got my event' +hello)
            }
        },
        watch:{
            myValue2:function (val,oldVal) {
                console.log(val,oldVal)
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
