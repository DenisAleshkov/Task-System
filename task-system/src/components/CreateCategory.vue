<template>
	 <div class="col s12 m6">
          <div>
            <div class="page-subtitle">
              <h4>Создать</h4>
            </div>
            <form @submit.prevent="submitHandler">
              <div class="input-field" >
                <select ref="select" v-model="current">
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
                 	v-model="title"
                 	:class="{invalid: $v.title.$dirty && !$v.title.required}"
                >
                <label for="name">Название</label>
                <span 
                	v-if="$v.title.$dirty && !$v.title.required"
                	class="helper-text invalid"
                >Введите название категории</span>
              </div>
              <div class="input-field">
              	<input 
                	id="description" 
                	type="text"
                 	v-model="description"
                 	:class="{invalid: $v.description.$dirty && !$v.description.required}"
                >
                <label for="desription">Описание</label>
                <span
                	v-if="$v.description.$dirty && !$v.description.required"
                	class="helper-text invalid"
                >Введите описание категории</span>
              </div>

              <button class="btn waves-effect waves-light" type="submit">
                Создать
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
</template>
<script>
	import { required } from 'vuelidate/lib/validators'
	export default {
    props: {
      categories: {
        type: Array,
        required: true
      }
    },
		data: () => ({
			title: '',
			description: '',
      select: null,
      category: null,
      current: null
		}),
		validations: {
			title: {required},
			description: {required}
		},
    watch: {
      current(catId) {
        const { id } = this.categories.find(c => c.id === catId)
        this.id = id
      }
    },
    created() {
      const {id} = this.categories[0]
      this.current = id
    },
    mounted() {
        this.select = M.FormSelect.init(this.$refs.select)
         M.updateTextFields()
    },
    destroyed() {
      if(this.select && this.select.destroy) {
        this.select.destroy()
      }
    },
		methods: {
			async submitHandler() {
				if(this.$v.$invalid){
					this.$v.$touch()
					return
				}
        try{
          const categoryData = {
          id: this.current,
          title: this.title,
          description: this.description
        }
          await this.$store.dispatch('createChildCategory', categoryData)
          this.title = ''
          this.description = ''
          this.$v.$reset()
          this.$message('Категория создана')
        }catch(e){}	
			}
		}
	}
</script>