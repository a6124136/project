<script >

// 用login.vue當測試
export default{
  data(){
    return{
      DIO:{
        name:'DIO',
        age:100,
        stand:'The World'
      },
      page:1,
    }
  },
  methods:{
    changePage(){
      this.page==1? 2:1
    },
    propPath(){
      this.$router.push('/child')
    }
  },
  components:{
    // DIO
  }
}

</script>

<template>
      <div>
        <!-- <DIO :DIO="DIO"/> -->
      </div>
</template>
<style scoped>
</style>