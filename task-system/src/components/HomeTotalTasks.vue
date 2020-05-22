<template>
	<div class="col s12 m6 l4">
      <div class="card light-blue bill-card">
        <div class="card-content white-text">
          <span class="card-title">Количество задач</span>
          <p class="currency-line">
            <span>{{countTasks}}</span>
          </p>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    props: ['countTasks']
  }
</script>