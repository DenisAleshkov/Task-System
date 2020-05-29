<template>
	<div>
		<div class="page-title">
    		<h3>Система задачи</h3>
  		</div>
  		<draggable v-model="myArray" @start="drag=true" @end="drag=false">
   				<div v-for="element in myArray" :key="element.id">
   				<h3>	{{element.name}}</h3>
   		</div>
		</draggable>
	</div>
</template>	

<script>
	 import draggable from 'vuedraggable'
	export default {
 components: {
    draggable
        },
        data: () => ({
        	myArray:['Петя','Вася',3,4,5,6,7,8,9,10]
        })
	}
</script>