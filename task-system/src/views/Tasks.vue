<template>
  <div class="row drag-row">
    <div class="col-3">
      <h3>Дизайн</h3>
      <draggable class="list-group" :list="list1" group="people" @change="log">
        <div
          class="list-group-item"
          v-for="(element, index) in list1"
          :key="element.id"
        >
          {{ element.title }} {{ index }}
        </div>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Программирование</h3>
      <draggable class="list-group" :list="list2" group="people" @change="log">
        <div
          class="list-group-item"
          v-for="(element, index) in list2"
          :key="element.id"
        >
          {{ element.title }} {{ index }}
        </div>
      </draggable>
    </div>
    <div class="col-3">
      <h3>В процессе</h3>
      <draggable class="list-group" :list="list3" group="people" @change="log">
        <div
          class="list-group-item"
          v-for="(element, index) in list3"
          :key="element.id"
        >
          {{ element.title }} {{ index }}
        </div>
      </draggable>
    </div>
    <div class="col-3">
      <h3>Выполнено</h3>
      <draggable class="list-group" :list="list4" group="people" @change="log">
        <div
          class="list-group-item"
          v-for="(element, index) in list4"
          :key="element.id"
        >
          {{ element.title }} {{ index }}
        </div>
      </draggable>
    </div>

    <!-- <rawDisplayer class="col-3" :value="list1" title="List 1" />

    <rawDisplayer class="col-3" :value="list2" title="List 2" /> -->
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ],
      list3: [{}],
      list4: [{}],
      categories: []
    };
  },
  async mounted() {
    this.list1 = await this.$store.dispatch('fetchDesignCategories')
    this.list2 = await this.$store.dispatch('fetchProgrammingCategories')
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
</script>
<style lang="sass" scoped>
.drag-row
  display: flex
.list-group
  background-color: #644848
</style>