<template>
<div>
<Loader v-if="loading" /> 
  <div class="row board" v-else>
    <div class="col-3 board-item">
      <h3><i class="small material-icons">build</i>В выполнении</h3>
      <draggable
        class="dragArea list-group"
        :list="startRecord"
        :clone="clone"
        :group="{ name: 'people', pull: pullFunction }"
        @change="start"
      >
        <div class="list-group-item" v-for="element in startRecord" :value="element.id"
         :key="element.id">
          	<div class="card blue-grey darken-1">
        		<div class="card-content white-text">
          			<span class="card-title">{{element.name}}</span>
        		</div>
      		</div>
        </div>
      </draggable>
    </div>

    <div class="col-3 board-item">
     <h3><i class="small material-icons">build</i>В процессе</h3>
      <draggable class="dragArea list-group" 
      	:list="processRecord" 
      	group="people"
		    :clone="clone"
		    @change="proces"
        :group="{ name: 'people', pull: pullFunction }"
      	>
      	<div class="list-group-item" v-for="element in processRecord" :value="element.id"
      	:key="element.categoryId">
        <div class="card blue-grey darken-1">
        		<div class="card-content white-text">
          			<span class="card-title">{{element.name}}</span>
        		</div>
      		</div>
      		</div>
      </draggable>
    </div>
    <div class="col-3 board-item">
      <h3><i class="small material-icons">done</i>Готово</h3>
      <draggable 
      	class="dragArea list-group" 
      	:list="doneRecord" 
      	group="people"
      	:clone="clone"
        @change="done"
        :group="{ name: 'people', pull: pullFunction }"
         
      	>
      	<div class="list-group-item" v-for="element in doneRecord" :value="element.id" :key="element.id">
        <div class="card blue-grey darken-1">
        		<div class="card-content white-text">
          			<span class="card-title">{{element.name}}</span>
        		</div>
        		</div>
      		</div>
      </draggable>
    </div>
  </div>
  </div>
</template>

<script>
import draggable from "vuedraggable"
export default {
  name: "programming-board",
  components: {
    draggable
  },
  data() {
    return {
      startRecord: [],
      processRecord: [],
      doneRecord: [],
      controlOnStart: true,
      loading: true
    };
  },
  async mounted() {
    const id = this.$route.params.id
  	this.startRecord = await this.$store.dispatch('fetchProgrammingStartRecordsById', id)
    this.processRecord = await this.$store.dispatch('fetchProgrammingProcessRecordsById', id)
    this.doneRecord = await this.$store.dispatch('fetchProgrammingDoneRecordsById', id)
  	this.loading = false
  },
  methods: {
    clone({categoryId, comment, date, description, id, investments, name, player, sum}) {
      return { 
        name,
        categoryId,
        comment,
        date,
        description, 
        id,
        investments,
        name,
        player,
        sum
      };
    },
    pullFunction() {
    },
     async start({added, removed}) {
      try{
      if(added){
          this.loading = true
          await this.$store.dispatch('createProgrammingStartRecord', added.element)
          this.loading = false
        }
        if(removed){
          this.loading = true
          await this.$store.dispatch('deleteProgrammingStartRecordsWithDrag', removed.element)
          this.loading = false
        }
      }catch(e){}
    
    },
    async done({added, removed}){
      try{
        if(added){
          this.loading = true
          await this.$store.dispatch('createProgrammingDoneRecord', added.element)
          this.loading = false
        }
        if(removed){
          this.loading = true
          await this.$store.dispatch('deleteProgrammingDoneRecordsWithDrag', removed.element)
          this.loading = false
        }
      }catch(e){}
     

        
    },
    async proces({added, removed}) {
     try{
        if(added){
          this.loading = true
          await this.$store.dispatch('createProgrammingProcessRecord', added.element)
          this.loading = false
        }
        if(removed){
          this.loading = true
          await this.$store.dispatch('deleteProgrammingProcessRecordsWithDrag', removed.element)
          this.loading = false
        }
      }catch(e){}
     
    }
  
     
   
  }
}

</script>
<style lang="sass" scoped>
.board
  display: flex
  justify-content: space-between
  min-height: 50px
  &-item:not(:last-child)
    margin-right: 10px
.list-group
  min-height: 200px
.list-group-item
  height: 50px
  margin-bottom: 100px
.card
  display: flex
  justify-content: center
  border-radius: 20px
</style>