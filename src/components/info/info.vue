<template>
  <div class="container">
    <h1 class="page-header">组件传值动画路由跳转</h1>
    <div class="btn-group btn-group-justified">
      <div class="btn-group">
        <button class="btn btn-info" @click="hideOrshow">动画演示</button>
      </div>
      <div class="btn-group">
        <button class="btn btn-success">组件传值</button>
      </div>
      <div class="btn-group">
        <button class="btn btn-warning">路由跳转</button>
      </div>
    </div>
    <!-- 动画 -->
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <com1 :parentmsg='msg' @func='alert'></com1>
    
  </div>
  
</template>
<script>
export default {
    data(){
        return {
            awesome:true,
            msg:'123父组件的数据'
        }
    },
    methods:{
        hideOrshow(){
            this.awesome=!this.awesome
        },
        alert(){
            alert(1)
        }
    },
    components:{
        com1:{
            template:`<h1 @click='myclick'>子组件{{parentmsg}}</h1>`,
            props:['parentmsg'],
            methods:{
                myclick(){
                    this.$emit('func')
                    console.log(1)
                }
            }
        }
    }
};
</script>
<style lang="sass" scoped>

</style>

