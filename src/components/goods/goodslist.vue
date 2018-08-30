<template>
  <div class="mb">
    <head-nav title="商品"></head-nav>
    <section class="likeYou">
      <ul id="likeYouList" class="aui-refresh-content">
        <li v-for='(item,index) in goodsArr' :key='index'>
          <router-link :to='{name: "goodsdetail",query:{title:"likeYou",id: (index+1)}}'>
            <div class="pic"><img width="100%" height="100%" :src='item.imgUrl' v-lazy='item.imgUrl'></div>
            <p class="des">{{item.des}}</p>
            <div class="shopPrice clearFix">
              <div class="left fl"><span class="symbol" >{{item.symbol}}</span><span class="price" >{{item.price}}</span></div>
              <div class="alreadyPaid fr">{{item.alreadyPaid}}</div>
            </div>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import headNav from '../common/headNav'
    export default {
        name: "goodslist",
      data () {
          return {
            goodsArr: []
          }
      },
      mounted () {
          this.$http.get('vue.php?title=likeYou').then(rel => {
            this.goodsArr = rel.data
            console.log(rel)
          })
      },
      components: {
          headNav
      }
    }
</script>

<style scoped lang="less">
  @rem:750/10rem;
  .mb{
    margin-bottom: 130/@rem;
  }
  /*likeYou*/
  .likeYou{
    overflow: hidden;
    position: relative;
    padding-top: 30/@rem;
    background: #eee;
    ul{
      display: -webkit-flex;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    ul li{
      width: 370/@rem;
      height: 528/@rem;
      background: white;
      font-size: 27/@rem !important;
      overflow: hidden;
      margin-bottom: 10/@rem;
    }
    ul li a{
      display: block;
    }
    ul li .pic{
      height: 369/@rem;
    }

    ul li .des{
      font-size: 27/@rem !important;
      padding:0 20/@rem;
      margin: 20/@rem 0;
      height: 70/@rem;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 64/@rem;
      -webkit-line-clamp: 2;
      word-break: break-all;
      line-height: 35/@rem;
      color: rgb(51, 51, 51);
    }

    ul li .shopPrice{
      padding: 14/@rem;
      padding-bottom: 0;
    }
    ul li .left{
      color: #ff5000;
    }
    ul li .left span{
      vertical-align: bottom;
    }
    ul li .symbol{
      font-size: 10/@rem;
    }
    ul li .price{
    }
    ul li .alreadyPaid{
      color: rgb(153, 153, 153);;
    }
  }
</style>
