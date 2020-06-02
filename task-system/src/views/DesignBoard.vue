<template>
  <div class="row board">
    <div class="col-3">
      <h3>К выполнению</h3>
      <draggable
        class="dragArea list-group"
        :list="startRecord"
        :clone="clone"
        :group="{ name: 'people', pull: pullFunction }"
        @start="start"
      >
        <div class="list-group-item" v-for="element in startRecord" :key="element.id">
          	<div class="card blue-grey darken-1">
        		<div class="card-content white-text">
          			<span class="card-title">{{element.name}}</span>
          			<p>{{element.description}}</p>
        		</div>
      		</div>
        </div>
      </draggable>
    </div>

    <div class="col-3">
      <h3>В процессе</h3>
      <draggable class="dragArea list-group" :list="list2" group="people">
        <div class="list-group-item" v-for="element in list2" :key="element.id">
          {{ element.name }}
        </div>
      </draggable>
    </div>
    <div class="col-3">
      <h3>Готово</h3>
      <draggable class="dragArea list-group" :list="list3" group="people">
        <div class="list-group-item" v-for="element in list3" :key="element.id">
          {{ element.name }}
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
let idGlobal = 8;
export default {
  name: "clone-on-control",
  order: 4,
  components: {
    draggable
  },
  data() {
    return {
      startRecord: [{}],
      list2: [{}],
        list3: [{}],
      controlOnStart: true
    };
  },
  async mounted() {
  	const id = this.$route.params.id
	this.startRecord = await this.$store.dispatch('fetchDesignRecordsById', id)
	this.loading = false
  },
  methods: {
    clone({ name }) {
      return { name, id: idGlobal++ };
    },
    pullFunction() {
      return this.controlOnStart ? "clone" : true;
    },
    start({ originalEvent }) {
      this.controlOnStart = originalEvent.ctrlKey;
    }
  }
};
</script>
<style lang="sass" scoped>
.board
	display: flex
.list-group-item
	height: 50px
	margin-bottom: 100px
</style>