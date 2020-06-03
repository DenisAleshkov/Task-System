<template>
  <div class="row board">
    <div class="col-3 board-item">
      <h3>К выполнению</h3>
      <draggable
        class="dragArea list-group"
        :list="startRecord"
        :clone="clone"
        :group="{ name: 'people', pull: pullFunction }"
        @start="start"
          @change="log"
      >
        <div class="list-group-item" v-for="element in startRecord" :value="element.id"
         :key="element.id">
          	<div class="card blue-grey darken-1">
        		<div class="card-content white-text">
          			<span class="card-title">{{element.name}}</span>
          			<p>{{element.description}}</p>
        		</div>
      		</div>
        </div>
      </draggable>
    </div>

    <div class="col-3 board-item">
      <h3>В процессе</h3>
      <draggable class="dragArea list-group" 
      	:list="processRecord" 
      	group="people"
		:clone="clone"
		
        :group="{ name: 'people', pull: pullFunction }"
          @change="log"
      	>
      	<div class="list-group-item" v-for="element in processRecord" :value="element.id"
      	:key="element.id">
        <div class="card blue-grey darken-1">
        		<div class="card-content white-text">
          			<span class="card-title">{{element.name}}</span>
          			<p>{{element.description}}</p>
        		</div>
      		</div>
      		</div>
      </draggable>
    </div>
    <div class="col-3 board-item">
      <h3>Готово</h3>
      <draggable 
      	class="dragArea list-group" 
      	:list="doneRecord" 
      	group="people"
      	:clone="clone"
        :group="{ name: 'people', pull: pullFunction }"
         @change="log"
      	>
      	<div class="list-group-item" v-for="element in doneRecord" :value="element.id" :key="element.id">
        <div class="card blue-grey darken-1">
        		<div class="card-content white-text">
          			<span class="card-title">{{element.name}}</span>
          			<p>{{element.description}}</p>
        		</div>
        		</div>
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
      startRecord: [],
      processRecord: [],
      doneRecord: [],
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
    },
    start({ originalEvent }) {
      this.controlOnStart= originalEvent.mouseOver
    },
    async log(evt) {
    	try{
    		const count = 0
    		if(this.processRecord.length && count===1){
    			count++
    			console.log("this.processRecord", this.processRecord)
    			const recordData = {
    				name: 'new',
    				id: this.$route.params.id
    			}
    			

    			// }
    			// await this.$store.dispatch('createProcessRecord', recordData)
    			// this.$message('Готово')
    		}
    		// if(this.processDone.length){
    		// 	const recordData = {
    		// 		name: 'new',
    		// 		id: this.$route.params.id
    		// 	}
    		// 	await this.$store.dispatch('createProcessRecord', recordData)
    		// 	this.$message('Готово')
    		// }
    		
    	}
    	catch(e){}
    	
     
   }
  }
}

</script>
<style lang="sass" scoped>
.board
	display: flex
	min-height: 50px
	&-item:not(:last-child)
		margin-right: 10px
.list-group-item
	height: 50px
	margin-bottom: 100px
</style>