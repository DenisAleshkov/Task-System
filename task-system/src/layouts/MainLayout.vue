<template>
  <div class="app-main-layout">
    <NavBar @click="isOpen = !isOpen" />
    <SideBar v-model="isOpen" />
    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>
    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template> 
<script>
  import NavBar from '@/components/app/NavBar.vue'
  import SideBar from '@/components/app/SideBar.vue'
  import messages from './../utils/messages.js'
  export default {
    name: 'main-layout',
    data: () => ({
    	isOpen: true
    }),
    async mounted(){
      if(!Object.keys(this.$store.getters.info).length){
        await this.$store.dispatch('fetchInfo')
      }
    },
    components: {
        NavBar, SideBar 
    },
    computed: {
      error(){
        return this.$store.getters.error
      }
    },
    watch: {
      error(fberror){
        this.$error(messages[fberror.code] || 'Что-то пошло не так')
      }
    }
  }
</script>  