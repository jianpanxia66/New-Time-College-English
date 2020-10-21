<template>
    <div>
        这是阅读分析页面
    </div>
</template>
<script>
export default {
    
           beforeRouteLeave (to, from, next) {
          
          console.log(`路由离开reading...`)
          next()
        },
        beforeRouteEnter (to, from, next) {
          // ...
          console.log(`路由进入reading`)
          next()
        }
    
}
</script>