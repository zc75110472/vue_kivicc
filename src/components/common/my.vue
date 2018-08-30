<template>
  <div class="mb">
    <head-nav title="项目简介"></head-nav>
    <div id='write' class='is-node'>
      <p v-for='(item,index) in datalis' :key='index'>{{item}}</p>
    </div>
  </div>
</template>

<script>
  import HeadNav from '../common/headNav'
  export default {
    data() {
      return {
        datalis: [
          '1、vue-cli脚手架搭建',
          '2、vue-router路由模板切换',
          '3、vuex数据的管理以及h5本地存储进行购车功能',
          '4、axios请求渲染数据',
          '5、mint-ui的使用',
          '6、vue2-preview 缩略图组件的使用',
          '6、高德地图API的使用',
          '7、请求天气API进行实时天气预览'
        ]
      }
    },
    components: {HeadNav}
  }
</script>

<style scoped lang="less">
  @rem:750/10rem;
  .mb{
    margin-bottom: 130/@rem;

  }
  #write{
    background-color: #000;
    p{
      padding: 20/@rem;
      font-size: 30/@rem;
      color: rgb(212, 201, 102);
    }
  }
</style>
