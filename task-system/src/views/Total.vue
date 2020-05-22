<template>
 <div>
    <div class="page-title">
      <h3>Статистика</h3>

      <button class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <Loader v-if="loading" /> 

    <div v-else class="row">
      <HomeTotalTasks :countTasks="countTasks" />
      <HomeUpcomingTasks  />
  </div>
</div>
</template>
<script>
  import HomeTotalTasks from './../components/HomeTotalTasks.vue'
  import HomeUpcomingTasks from './../components/HomeUpcomingTasks.vue'
  export default {
    name: 'total',
    data: () => ({}),
    components: {
      HomeTotalTasks,
      HomeUpcomingTasks
    },
    computed: {
      countTasks() {
        return this.$store.getters.info.countTasks
      }
    }
  }
</script>