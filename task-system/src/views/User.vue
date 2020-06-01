<template>
 <div>
  <div class="row button-row">
      <router-link to='/design-categories'  class="waves-effect waves-light btn-large button-redirect">Дизайн</router-link>
      <router-link to='/programming-categories' class="waves-effect waves-light btn-large button-redirect">Программирование</router-link>
  </div>
</div>
</template>
<script>
 
  export default {
    name: 'total',
    data: () => ({

    }),
    components: {
      
    },
   
  }
</script>
<style lang="sass" scoped>
.button-row
  display: flex
.button-redirect
  width: 100%
.button-redirect:nth-child(1)
  margin-right: 30px
</style>