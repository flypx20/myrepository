<template>
  <div class="hello">
   <div v-for='(item,index) in articles' v-bind:key='index' @click = "emitIndex(index)">{{item}}</div>
   <div>{{message}}</div>
   <div>获取父组件的值为：{{parentVal}}</div>
   <h4>这是son的数据：{{grandPaData}}</h4>
   <h1>我是A</h1>
   <button @click="transform">点击我改变B的数据</button>
   <p>'ddddd==='{{Bmessage}}</p>
  <!-- <son-b></son-b> -->
  <button @click="handleaddition">加法器+</button>
  </div>
</template>

<script>
import sonB from './sonB.vue';
import {eventBus} from '../eventBus/eventBus.js'
export default {
  name: 'HelloWorld',
  inject:['grandPaData'],
  data(){
    return{
      message:'这是一个old数据',
      grandPadata:this.grandPadata,
      num:1,
      Amessage:'hello B,i am A'
    }
  },
  props:['articles'],//父组件传过来的数据  
                    //总结: prop 只可以从上一级组件传递到下一级组件（父子组件），
                    //即所谓的单向数据流。而且 prop 只读，不可被修改，所有修改都会失效并警告。
  methods:{
    emitIndex(index){
      this.$emit('onEmitIndex', index);//$emit绑定一个自定义事件, 
                                       // 当这个语句被执行时, 就会将参数arg传递给父组件,父组件通过v-on监听并接收参数。
    },
    handleaddition(){
      eventBus.$emit('addition',{
        num:this.num++
      });
    },
    transform(){
      this.$store.commit('Amessage',{Amessage:this.Amessage})
    }
  },
  computed:{
    parentVal(){
       return this.$parent.currentIndex 
    },
    Bmessage(){
      return this.$store.state.Bmessage;
    }
  }
}
</script>
