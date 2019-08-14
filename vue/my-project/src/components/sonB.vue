<template>
    <div>
        <h6 ref="self">这是sonB的数据：{{grandPaData}}</h6>
        <div>结果：：：{{count}}</div>
           <h1>我是B</h1>
   <button @click="transform">点击我改变A的数据</button>
   <p>''aaaaa===={{Amessage}}</p>
    </div>

</template>
<script>
import {eventBus} from '../eventBus/eventBus.js'
export default {
    name:'sonB',
    inject:['grandPaData'],
    data(){
        return {
            grandPaData:this.grandPaData,
            count:0,
            Bmessage:'hello A,i am'
        }
    },
    mounted(){
        eventBus.$on('addition',param=>{
            this.count = this.count+param.num;
        });
    },
    methods:{
        handle(){
            console.log(this.$refs.self.innerText);
        },
            transform(){
      this.$store.commit('Bmessage',{Bmessage:this.Bmessage})
    }
    },
    computed:{
        Amessage(){
            return this.$store.state.Amessage;
        }
    }
}
</script>