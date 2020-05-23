<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <Loader v-if="loading" />
      <div v-else class="row">
        <CreateCategory @created="addNewCategory"/>
        <!-- <EditCategory /> -->
      </div>
    </section>
  </div>
</template>
<script>
  import CreateCategory from '@/components/CreateCategory'
  import EditCategory from '@/components/EditCategory'
  export default {
    name: 'categories',
    components: {
      CreateCategory,
      EditCategory
    },
    data: () => ({
      categories: [],
      loading: true
    }),
    async mounted(){
      this.categories = await this.$store.dispatch('fetchCategories')
      console.log("this.categories", this.categories);
      this.loading = false
    },
    methods: {
      addNewCategory(category) {
        this.categories.push(category)
      }
    }
  }
</script>