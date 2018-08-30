<template>
    <div class='mb'>
      <head-nav title='图片详请'></head-nav>
      <div class='photoImgs'>
        <img :src="item.picUrl" alt="" class='preview-img' height='300' v-for='(item,index) in imgarr' :key='index' @click="$preview.open(index, imgarr)">
      </div>
    </div>
</template>

<script>
  import headNav from '../common/headNav'
    export default {
        name: "pic",
      data () {
          return {
            imgarr: []
          }
      },
      methods: {
          getImg () {
            var title = this.$route.query.title;
            var id = this.$route.query.id
            this.$http.get('vue.php?title='+title+id).then(rel => {
              rel.data.forEach((item,index)=>{
                item.src = item.picUrl
                item.w = 300
                item.h = 200
              })
              this.imgarr = rel.data
            })
          }
      },
      components: {
          headNav
      },
      mounted () {
          this.getImg()
      },
      watch: {
          $route (to) {
            console.log(to)
            if ( to.query.id ) {
              this.getImg()
            }
          }
      }
    }
</script>

<style scoped>

</style>
