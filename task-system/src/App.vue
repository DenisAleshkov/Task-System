<template>
  <div id="app">
    <component :is="layout">
    	<router-view/>
    </component>
  </div>
</template>

<script>
	import EmptyLayout from '@/layouts/EmptyLayout'
	import MainLayout from '@/layouts/MainLayout'
	export default {
		computed: {
			layout() {
				return (this.$route.meta.layout || 'empty') + '-layout'
			}
		},
		components: {
			EmptyLayout,  MainLayout
		}
	}
</script>

<style lang="sass">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';
.card-title
	display: flex!important
	justify-content: space-between
.card-title-icon
	color: #212121
	transition: all .5s ease
.card-title-icon:hover
	cursor: pointer
	background-color: #e1f5fe
	color: #039be5
	border-radius: 15px
</style>
