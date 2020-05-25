<template>
	   <div class="col s12 m6">
          <div>
            <div class="page-subtitle">
              <h4>Редактировать</h4>
            </div>

            <form @submit.prevent="submitHandler">
              <div class="input-field">
                <select ref="select" v-model="current">
                  <option v-for="c of categories" :key="c.id" :value="c.id">
                    {{c.title}}
                  </option>
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
                 />
                <label for="description">описание</label>
                 <span
                  v-if="$v.description.$dirty && !$v.description.required"
                  class="helper-text invalid"
                >Введите описание категории</span>
              </div>

              <button class="btn waves-effect waves-light" type="submit">
                Обновить
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
      select: null,
      title: '',
      description: '',
      current: null
    }),
    validations: {
      title: {required},
      description: {required}
    },
    watch: {
      current(catId){
        const { title, description } = this.categories.find(c => c.id === catId)
        this.title = title
        this.description = description
      }
    },
    mounted(){
      this.select = M.FormSelect.init(this.$refs.select)
      M.updateTextFields()
    },
    created(){
      const {id, title, description} = this.categories[0]
      console.log("this.categories[0]", this.categories[0]);
      this.current = id
      this.title = title
      this.description = description
    },
    destroyed(){
      if(this.select && this.select.destroy){
        this.select.destroy()
      }
    },
    methods: {
        async submitHandler() {
            const categoryData = {
              id: this.current,
              title: this.title,
              description: this.description
            }
            await this.$store.dispatch('updateCategory', categoryData)
            this.$message('Категория успешно обновлена')
            this.$emit('updated', categoryData)
        }
    }
  }
</script>