<template>
	<div>
  <div class="page-title">
    <h3>Дизайн</h3>
  </div>

	<Loader v-if="loading" />
  <p class="center" v-else-if="!categories.length">Создайте категории</p>
  <section v-else>
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Категория</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(category, idx) of categories" :key="category.id">
        <td>{{idx+1}}</td>
        <td>{{category.title}}</td>
        <td>
        <button type="button"  class='btn-small btn delete-btn'><i class="delete-icon small material-icons">delete</i></button>
        </td>
      </tr>
      </tbody>
    </table>
  </section>
</div>
</template>
<script>
	export default {
		data: ()=> ({
			categories: [],
			loading: true
		}),
		async mounted() {
			this.categories = await this.$store.dispatch('fetchDesignCategories')
			this.loading = false
		}
	}
</script>
<style lang="sass" scoped>
.delete-btn
  width: 15px
  background-color: #2c343c
  color: #fff
  height: 30px
  position: relative
.delete-icon
  position: absolute
  top: 0
  right: 0
  bottob: 0
  left: 0
  font-size: 24px
  transition: all .5s ease
.delete-icon:hover
  color: #E43C3C
</style>