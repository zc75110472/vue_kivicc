<template>
    <div>
      <footer class='ft'>
        <router-link class='link' to='/index'>
          <div class='svg iconfont icon-shouye'></div>
          <p>首页</p>
        </router-link>
        <router-link class='link' to='/map'>
          <div class='svg iconfont icon-ditu'></div>
          <p>位置</p>
        </router-link>
        <router-link class='link' to='/weather'>
          <div class='svg iconfont icon-tianqichaxun'></div>
          <p>天气</p>
        </router-link>
        <router-link class='link' :to='{name:"shopcart",query:{title:"likeYou"}}'>
          <div class="svg iconfont icon-gouwuche count"><i class="showNum" v-if="pickNum">{{pickNum}}</i></div>
          <p>购物</p>
        </router-link>
        <router-link class='link' to='/my'>
          <div class='svg iconfont icon-weibiaoti2fuzhi12'></div>
          <p>工具</p>
        </router-link>
      </footer>
    </div>
</template>

<script>
  import connect from './connect'
  import shopTool from './shopTool'
    export default {
        name: "footNav",
        data () {
          return {
            pickNum:shopTool.getShopCount()
          }
        },
        computed: {
          numc () {
            return this.$store.state.num
          }
        },
        created () {
          connect.$on('addCart', (num) => {
            this.pickNum += num
          })
        }

    }
</script>

<style scoped lang='less'>
  @rem:750/10rem;
  .ft{
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10000;
    height: 130/@rem;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#d9d9d9), color-stop(50%, #d9d9d9), color-stop(50%, transparent));
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: top left;

    background-color: #fafafa;
    display: flex;
    text-align: center;

  a{
    color: #18b4ed;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  .link{
    display: block;
    /*padding: 7px 0;*/
    flex: 1;
    text-decoration: none;

  }
  .link .svg{
    margin: 15/@rem auto 5px;
    font-size: 44/@rem;
  }

  .link p{
    color: inherit;
    font-size: 24/@rem;
    line-height: 1;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .count{
    position: relative;
  }
  .count .showNum{
    position: absolute;
    margin: auto;
    width: 40/@rem;
    height: 40/@rem;
    line-height: 40/@rem;
    background: red;
    color: #fff;
    font-size: 12/@rem;
    border-radius: 50%;
    font-style: normal;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s;
  }
  .fade-enter, .fade-leave-to , .fade-leave-active below version  {
    opacity: 0;
  }

  }
</style>
