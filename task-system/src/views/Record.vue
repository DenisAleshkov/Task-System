<template>
	<div>
  <div class="page-title">
    <h3>Новая запись</h3>
  </div>
  <Loader v-if="loading" /> 
  <addRecord
  :designCategories="designCategories"
  :programmingCategories="programmingCategories"
  :refresh="updateCount"
   v-else/>
</div>

</template>

<script>
  import addRecord from '@/components/addRecord'
  export default {
    name: 'record',
    components: {
      addRecord
    },
    data: () => ({
      designCategories: [],
      programmingCategories: [],
      loading: true,
      updateCount: 0
    }),
    async mounted() {
      this.designCategories = await this.$store.dispatch('fetchDesignCategories')

      this.programmingCategories = await this.$store.dispatch('fetchProgrammignCategories')

      this.loading = false
      this.updateCount++
    },
    methods: {

    }
  }
</script> 