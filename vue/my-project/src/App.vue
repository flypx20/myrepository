<template>
  <div id="app">
    <hello-world v-bind:articles='articleList' @onEmitIndex='onEmitIndex'></hello-world>
    <son-b ref="son"></son-b>
    <p>{{currentIndex}}</p>
    <button @click="changeVal">改变子组件的message</button>
    <h3>{{gdata}}</h3>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import sonB from './components/sonB.vue'
export default {
  name: 'App',
  provide:{
    grandPaData:'hello,sons'
  },
  components:{HelloWorld,sonB},
  data(){
    return {
      currentIndex:-1,
      articleList:['红楼梦','西游记','三国演义'],
      gdata:this.grandPaData
    }
  },
  mounted(){
    const comA = this.$refs.son;
    console.log('aaaa==='+comA.grandPaData);
    comA.handle();
  },
  methods:{
    onEmitIndex(idx){
      this.currentIndex = idx;
    },
    changeVal(){
      this.$children[0].message = '这是一个new数据';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
