<template>
  <div id="app">
    <header></header>
    <header class='hd fixed'>{{title}}</header>
    <router-view></router-view>
    <footNav></footNav>
  </div>
</template>

<script>
import headNav from './components/common/headNav'
import footNav from './components/common/footNav'
export default {
  name: 'App',
  created () {
    // 适配
    remChange();
    window.addEventListener('resize',remChange);
    function remChange(){
      var html = document.getElementsByTagName('html')[0];
      var witdh = html.getBoundingClientRect().width;
      if( witdh >= 750 ){
        witdh = 750;
      }
      html.style.fontSize = witdh / 10 +'px';
    }

  },
  data () {
    return {
      msg: 'hi',
      title: 'kivicc'
    }
  },
  components: {
    headNav,
    footNav
  }
}
</script>

<style scoped lang="less">
  @rem:750/10rem;

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    max-width: 750px;
    height: 100%;
    margin: auto;
    position: relative;
    header{
      height: 80/@rem;
      line-height: 80/@rem;
      font-size: 30/@rem;
      color: white;
      background: #26a2ff;
    }
    header.fixed{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 100%;
      z-index: 999;
    }
  }

</style>
