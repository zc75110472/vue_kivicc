<template>
    <div class="mb">
      <head-nav title="图文分享"></head-nav>
      <div class="tabItem">
        <a href="javascript:;" v-for="(item) in photoNav" @click="getImgs(item.tip)" v-text="item.title" :class="item.id==1?'active':''" :key="item.id"></a>
      </div>
      <div class='tabCon'>
        <div class="conList" :class="'show'">
          <ul>
            <li v-for="(item) in womanStar" :key="item.id">
              <router-link :to="{path: '/picshare/pic',query:{id:item.id,title:item.tip}}">
                <div class="pic ">
                  <img :src="item.picUrl" v-lazy="item.picUrl" alt="" width="100%" height="100%">
                </div>
                <div class="con ">
                  <h2 v-text="item.title"></h2>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="conList">
          <ul>
            <li v-for="(item) in manStar" :key="item.id">
              <router-link :to="{path:'/picshare/pic',query:{id:item.id,title:item.tip}}">
                <div class="pic ">
                  <img :src="item.picUrl" v-lazy="item.picUrl" alt="" width="100%" height="100%">
                </div>
                <div class="con ">
                  <h2 v-text="item.title"></h2>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="conList">
          <ul>
            <li v-for="(item) in fullView" :key="item.id">
              <router-link :to="{path:'/picshare/pic',query:{id:item.id,title:item.tip}}">
                <div class="pic ">
                  <img :src="item.picUrl" v-lazy="item.picUrl" alt="" width="100%" height="100%">
                </div>
                <div class="con ">
                  <h2 v-text="item.title"></h2>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import headNav from '../common/headNav'
    export default {
        name: "piclist",
        data () {
          return {
            photoNav: [],
            womanStar: [],
            manStar: [],
            fullView: []
          }
        },
      methods: {
          getImgs (item) {
            console.log(item)
            this.$http.get('vue.php?title='+item).then(rel => {
              console.log( rel )
              this[item] = rel.data
              this.tabA()
            })
          },
          tabA () {
            let tabItem = document.getElementsByClassName('tabItem')[0];
            let tabCon = document.getElementsByClassName('tabCon')[0];
            let conList = tabCon.getElementsByClassName('conList');
            let tabA = tabItem.getElementsByTagName('a');
            for( let i=0;i<tabA.length;i++ ){
              tabA[i].index = i;
              tabA[i].onclick = function () {
                for( let i=0;i<tabA.length;i++ ){
                  tabA[i].className = ''
                  conList[i].style.display = 'none'
                }
                conList[this.index].style.display = 'block'
                this.className = 'active'
              }
          }
          }
      },
        created () {
          this.$http.get('vue.php?title=shareNav').then(rel => {
            console.log(rel)
            this.photoNav = rel.data
          })
          this.getImgs('womanStar')
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
  .tabItem{
    font-size: 30/@rem;
    display: flex;


    a{
      flex: 1;
      color: #26a2ff;
      padding: 30/@rem 0;
    }
    a.active{
      border-bottom: 3px solid #26a2ff;
      color: #000;
    }


  }
  .tabCon{
    .conList{
      display: none;
      ul li{
        padding: 25/@rem 0;
        border-bottom: 1px solid #ddd;
      }
      a{
        /*display: block !important;*/
        display: flex;
        justify-content: center;
      }
      .pic{
        width: 110/@rem;
        height: 110/@rem;
        margin-right: 25/@rem;
      }
      .con{
        width: 550/@rem;
        height: 110/@rem;

        display: flex;
        align-items: center;
      }
      h2{
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #555;
        font-weight: normal;
        font-size: 25/@rem;
      }
      p{
        width: 100%;
        color: #999;
        font-size: 22/@rem;
      }
      p span{
        /*-padding: 0 25/@rem;*/
      }
    }
    .conList.show{
      display: block;
    }
  }
</style>

