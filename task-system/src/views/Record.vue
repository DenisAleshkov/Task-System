<template>
 <div>
  <div class="row button-row">
      <router-link to='/create-design-record'  class="waves-effect waves-light btn-large button-redirect">Дизайн</router-link>
      <router-link to='/create-programming-record' class="waves-effect waves-light btn-large button-redirect">Программирование</router-link>
  </div>
</div>
</template>
<script>
  export default {
    name: 'record',
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