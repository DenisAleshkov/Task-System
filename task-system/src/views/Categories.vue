<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <Loader v-if="loading" />
      <div class="row" v-else>
        <CreateCategory :categories="categories"/>
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
    async mounted() {
        this.categories = await this.$store.dispatch('fetchMainCategories')
        this.loading = false
    }
  }
</script>