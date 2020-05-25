<template>
	<div>
  <div class="page-title">
    <h3>Новая запись</h3>
  </div>
  <Loader v-if="loading" /> 
  <p class="center" v-else-if="!categories.length">Категорий пока нет. <router-link to="/categories">Добавить новую категорию</router-link></p> 
  <form v-else class="form">
    <div class="input-field" >
      <select ref="select" v-model="category">
        <option 
          v-for="c in categories"
          :key=c.id
          :value=c.id
        >{{c.title}}</option>
      </select>
      <label>Выберите категорию</label>
    </div>
    <div class="input-field">
      <input
          id="name"
          type="text"
          v-model="name"
      >
      <label for="name">Название</label>
      <span class="helper-text invalid">Введите название</span>
    </div>

    <div class="input-field">
      <input
          id="description"
          type="text"
          v-model="description"
      >
      <label for="description">Описание</label>
      <span
            class="helper-text invalid">Введите описание</span>
    </div>
    <div class="input-field">
      <input
          id="comment"
          type="text"
          v-model="comment"
      >
      <label for="comment">Комментарий</label>
      <span class="helper-text invalid">Введите комментарий</span>
    </div>
    <div class="input-field">
      <input
          id="player"
          type="text"
          v-model="player"
      >
      <label for="player">Участник</label>
      <span class="helper-text invalid">Введите участника</span>
    </div>
    <div class="input-field">
      <input
          id="date"
          type="text"
          v-model="date"
      >
      <label for="date">Срок</label>
      <span class="helper-text invalid">Введите срок</span>
    </div>
    <div class="input-field">
      <input
          id="investments"
          type="number"
          v-model="investments"
      >
      <label for="investments">Вложения</label>
      <span class="helper-text invalid">Введите вложения</span>
    </div>
    <div class="input-field">
      <input
          id="sum"
          type="number"
          v-model="sum"
      >
      <label for="sum">Сумма</label>
      <span class="helper-text invalid">Введите сумму</span>
    </div>

    <button class="btn waves-effect waves-light" type="submit">
      Создать
      <i class="material-icons right">send</i>
    </button>
  </form>
</div>

</template>

<script>
  import {required} from 'vuelidate/lib/validators'
  export default {
    name: 'record',
    data: () => ({
      loading: true,
      categories: [],
      category: null,
      select: null,
      name: '',
      description: '',
      comment: '',
      player: '',
      date: '',
      investments: '',
      sum: ''
    }),
    async mounted() {
      this.categories = await this.$store.dispatch('fetchCategories')
      this.loading = false
      if(this.categories.length) {
        this.category = this.categories[0].id
      }
      setTimeout(()=>{
        this.select = M.FormSelect.init(this.$refs.select)
      }, 0)
      
    },
    destroyed(){
      if(this.select && this.select.destroy){
        this.select.destroy()
      }
    },
     
  }
</script> 