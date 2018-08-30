<template>
<div class='mb'>
  <head-nav title="banner详情"></head-nav>
  <div class='con'>
    <h2 class='title'>{{bannerdetails.title}}</h2>
    <span class='source'>{{bannerdetails.source}}</span>
    <span class='time'>{{bannerdetails.time}}</span>
    <img :src="bannerdetails.picUrl" alt="" class="pic">
    <div class='content' v-html='bannerdetails.des'></div>
  </div>
</div>
</template>

<script>
  import HeadNav from '../common/headNav'
    export default {
        name: "bannerdetail",
        data () {
          return {
            bannerdetails: {}
          }
        },
        methods: {
          getD () {
            let id = this.$route.params.id
            this.$http.get('vue.php?title=banner'+id).then(rel => {
              this.bannerdetails = rel.data
            })
          }
        },
        mounted () {
          this.getD()
        },
      watch: {
          $route (to,from) {
            var reg=/bannerdetail\/\d+/;
            if(reg.test(to.path)){
              var articleId=this.$route.params.id || 1;
              this.getD(articleId);
            }
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
  .con{
    padding: 0 40/@rem;

    h2{
      text-align: left;
    }
    .title{
      font-size: 40/@rem;
      color: #3f4146;
    }
    .source{
      font-size: 24/@rem;
    }
    .time{
      font-size: 20/@rem;
    }
    .pic{
      display: block;
      margin: auto;
      width: 670/@rem;
    }
    .content{
      font-size: 32/@rem;
      text-align: left;
      text-indent: 2em;
    }

  }
</style>
