<template>
  <div class="empty-layout">
	  <router-view />
  </div>
</template>
<script>
	import messages from './../utils/messages.js'
	export default {
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