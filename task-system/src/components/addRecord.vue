<template>
	 <form class="form" @submit.prevent="handlerSubmit" v-else>
    <p>
      <label>
        <input
            class="with-gap"
            name="type"
            type="radio"
            value="design"
            v-model="type"
        />
        <span>Дизайн</span>
      </label>
    </p>

    <p>
      <label>
        <input
            class="with-gap"
            name="type"
            type="radio"
            value="programming"
            v-model="type"
        />
        <span>Программирование</span>
      </label>
    </p>
    <div class="input-field">
      <select ref="select" v-model="current" :refresh-token="type">
        <option 
        v-for="c in categories" 
        :key="c.id"
        :value="c.id"
        >{{c.title}}</option>
      </select>
      <label>Выберите категорию</label>
    </div>
    <div class="input-field">
      <input
          id="name"
          type="text"
          v-model="name"
          :class="{invalid: $v.name.$dirty && !$v.name.required}"
      >
      <label for="name">Название</label>
      <span 
        class="helper-text invalid"
        v-if="$v.name.$dirty && !$v.name.required">Введите название</span>
    </div>

    <div class="input-field">
      <input
          id="description"
          type="text"
          v-model="description"
          :class="{invalid: $v.description.$dirty && !$v.description.required}"
      >
      <label for="description">Описание</label>
      <span
            class="helper-text invalid"
             v-if="$v.description.$dirty && !$v.description.required">Введите описание</span>
    </div>
    <div class="input-field">
      <input
          id="comment"
          type="text"
          v-model="comment"
          :class="{invalid: $v.comment.$dirty && !$v.comment.required}"
      >
      <label for="comment">Комментарий</label>
      <span 
        class="helper-text invalid"
         v-if="$v.comment.$dirty && !$v.comment.required">Введите комментарий</span>
    </div>
    <div class="input-field">
      <input
          id="player"
          type="text"
          v-model="player"
          :class="{invalid: $v.player.$dirty && !$v.player.required}"
      >
      <label for="player">Участник</label>
      <span 
        class="helper-text invalid"
         v-if="$v.player.$dirty && !$v.player.required">Введите участника</span>
    </div>
    <div class="input-field">
      <input
          id="date"
          type="text"
          v-model="date"
          :class="{invalid: $v.date.$dirty && !$v.date.required}"
      >
      <label for="date">Срок</label>
      <span 
        class="helper-text invalid"
         v-if="$v.date.$dirty && !$v.date.required">Введите срок</span>
    </div>
    <div class="input-field">
      <input
          id="investments"
          type="number"
          v-model="investments"
          :class="{invalid: $v.investments.$dirty && !$v.investments.required}"
      >
      <label for="investments">Вложения</label>
      <span 
          class="helper-text invalid"  
          v-if="$v.investments.$dirty && !$v.investments.required">Введите вложения</span>
    </div>
    <div class="input-field">
      <input
          id="sum"
          type="number"
          v-model="sum"
          :class="{invalid: $v.sum.$dirty && !$v.sum.required}"
      >
      <label for="sum">Сумма</label>
      <span 
        class="helper-text invalid"  
        v-if="$v.sum.$dirty && !$v.sum.required">Введите сумму</span>
    </div>

    <button class="btn waves-effect waves-light" type="submit">
      Создать
      <i class="material-icons right">send</i>
    </button>
  </form>
</template>
<script>
  import {required} from 'vuelidate/lib/validators'
  import {mapGetters} from 'vuex'
  export default {
    props: {
    	designCategories: {
    		type: Array,
    		required: true
    	},
    	programmingCategories: {
			type: Array,
			required: true
    	}
    },
    data: () => ({
      loading: true,
      categories: [],
      type: 'design',
      select: null,
      name: '',
      description: '',
      comment: '',
      player: '',
      date: '',
      investments: '',
      sum: '',
      current: null,
      updateCount: 0
    }),
    validations: {
      name: {required},
      description: {required},
      comment: {required},
      player: {required},
      date: {required},
      investments: {required},
      sum: {required}
    },

    mounted() {
        this.select = M.FormSelect.init(this.$refs.select)
        M.updateTextFields()
    },
    destroyed(){
      if(this.select && this.select.destroy){
        this.select.destroy()
      }
    },
    computed: {
      ...mapGetters(['info']),

    },
    watch: {
    	type(type) {
    		if(type === 'programming'){
    			this.categories = this.programmingCategories
    			this.updateCount++

    		}
    		if(type === 'design'){
    			this.categories = this.designCategories
    			console.log("this.categories", this.categories);
    			this.updateCount++

    		}
    }
    },
    created(){
    	// this.categories = this.designCategories
    },
    methods: {
       async handlerSubmit() {
            if(this.$v.$invalid) {
              this.$v.$touch()
              return
            }
            try{
              const recordData = {
                categoryId: this.current,
                name: this.name,
                description: this.description,
                comment: this.comment,
                player: this.player,
                date: this.date,
                investments: this.investments,
                sum: this.sum,
                date: new Date().toJSON()
              }
              if(this.type === 'design'){
               
                await this.$store.dispatch('createDesignRecord', recordData)
                
                this.$message('Запись успешно создана',{countTasks})
                this.$v.$reset()
              }
              if(this.type === 'programming'){

                await this.$store.dispatch('createProgrammingRecord', recordData)
               
                this.$message('Запись успешно создана',{countTasks})
                this.$v.$reset()
              } 
              const countTasks =  this.info.countTasks++;
              await this.$store.dispatch('updateInfo',)

            }catch(e){}
            
           
            
      }
     
  }
}
</script>