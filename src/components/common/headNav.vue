<template>
    <div>
      <header>
        <a class='iconfont icon-fanhui2' @click='$router.go(-1)'>返回</a>
        <span>{{title}}</span>
        <a href="javascript:;" class='iconfont icon-diandian'></a>
      </header>
    </div>
</template>

<script>
    export default {
        name: 'headNav',
        props: ['title'],
        methods: {
          goBack () {

          }
        }
    }
</script>
<style scoped lang="less">
  @rem:750/10rem;
  header{
    height: 80/@rem;
    background: #3c3f41;
    color: white !important;
    font-size: 35/@rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 2px;
    text-align: center;
    a{

      width: 2rem;
      color: white !important;

    }
  }
</style>
