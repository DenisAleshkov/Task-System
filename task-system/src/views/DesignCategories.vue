<template>
	<div>
  <div class="page-title">
    <h3>Дизайн</h3>
  </div>

	<Loader v-if="loading" />
  <p class="center" v-else-if="!categories.length">Создайте категории</p>
  <section v-else >
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
        <button 
          type="button"
          @click="remove(idx)"
          class='btn-small btn delete-btn'>
          Удалить
          </button>
        <button 
          type="button"
          @click="$router.push('/design-board/' + category.id)"
          class="open-btn" 
          >Открыть</button>
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
			loading: true,
      current: null,
      refresh: 0
		}),
		async mounted() {
			this.categories = await this.$store.dispatch('fetchDesignCategories')
			this.loading = false
		},
    methods: {
      async remove(idx) {
        try{
            this.loading = true
            this.current = this.categories[idx]
            await this.$store.dispatch('deleteDesignCategories', this.current.id)
            this.categories = await this.$store.dispatch('fetchDesignCategories')
            this.loading = false
            this.$message('Успешно удалено')
        }catch(e){}
       
      }
    }
	}
</script>
<style lang="sass" scoped>
.delete-btn
  font-weight: 900
  border: none
  text-decoration: none
  outline: none
  display: inline-block
  width: 140px
  height: 45px
  line-height: 45px
  border-radius: 45px
  margin: 10px 20px
  font-size: 11px
  text-transform: uppercase
  text-align: center
  letter-spacing: 3px
  color: #524f4e
  background: white
  box-shadow: 0 8px 15px rgba(0,0,0,.1)
  transition: .3s
.delete-btn:hover
  cursor: pointer
  background: #F43939
  box-shadow: 0 15px 20px rgba(240, 52, 52, 0.4)
  color: white
  transform: translateY(-7px)
.open-btn
  font-weight: 900
  border: none
  text-decoration: none
  outline: none
  display: inline-block
  width: 140px
  height: 45px
  line-height: 45px
  border-radius: 45px
  margin: 10px 20px
  font-size: 11px
  text-transform: uppercase
  text-align: center
  letter-spacing: 3px
  color: #524f4e
  background: white
  box-shadow: 0 8px 15px rgba(0,0,0,.1)
  transition: .3s
.open-btn:hover
  cursor: pointer
  background: #2EE59D
  box-shadow: 0 15px 20px rgba(46,229,157,.4)
  color: white
  transform: translateY(-7px)
</style>