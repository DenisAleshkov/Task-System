<template>
  <div>
  <Loader v-if="loading" />
  <p class="center" v-else-if="!categories.length">Создайте категории</p>
	 <form class="form" @submit.prevent="handlerSubmit" v-else>
    <div class="input-field">
      <select ref="select" v-model="category">
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
          id="email"
          type="text"
          v-model.trim="email"
          :class="{invalid:  ($v.email.$dirty && !$v.email.required) || !$v.email.email }"
      >
      <label for="email">Почта участника</label>
      <span 
        class="helper-text invalid"
         v-if="$v.email.$dirty && !$v.email.required">Введите почту участника</span>
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
  </div>
</template>
<script>
  import {email, required} from 'vuelidate/lib/validators'
  import {mapGetters} from 'vuex'
  export default {
    data: () => ({
      loading: true,
      categories: [],
      select: null,
      name: '',
      description: '',
      comment: '',
      email: '',
      date: '',
      investments: '',
      sum: '',
      category: null,
    }),
    validations: {
      name: {required},
      description: {required},
      comment: {required},
      email: {email, required},
      date: {required},
      investments: {required},
      sum: {required}
    },
    async mounted() {
        this.categories = await this.$store.dispatch('fetchDesignCategories')
        if (this.categories.length) {
          this.category = this.categories[0].id
        }
        setTimeout(()=>{
          this.select = M.FormSelect.init(this.$refs.select)
          M.updateTextFields()
        })
        this.loading = false
    },
    destroyed(){
      if(this.select && this.select.destroy){
        this.select.destroy()
      }
    },
    computed: {
      ...mapGetters(['info']),

    },
    methods: {
       async handlerSubmit() {
            if(this.$v.$invalid) {
              this.$v.$touch()
              return
            }
            try{
              const recordData = {
                categoryId: this.category,
                name: this.name,
                description: this.description,
                comment: this.comment,
                email: this.email,
                date: this.date,
                investments: this.investments,
                sum: this.sum,
                date: new Date().toJSON()
              }
                await Email.send({
                 SecureToken:"60235bd5-e903-4ea0-9f22-6ca9f440b7c9",
                  Host : "smtp.elasticemail.com",
                  Username : "batyadem@gmail.com",
                  Password : "2460762F25C4E036D4FB144D859832D66346",
                  To : this.email,
                  From : "batyadem@gmail.com",
                  Subject : "Task System",
                  Body : `Hello ${this.name}<${this.email}>,
                  Design task has been created for you from TASK SYSTEM<batyadem@email.com>:
                  Task data: 
                  description:${this.description};
                  comment: ${this.comment};
                  email: ${this.email};
                  date: ${this.date};
                  investments: ${this.investments};
                  sum: ${this.sum};
                  Best wishes,
                  TASK SYSTEM team`
              })
                await this.$store.dispatch('createDesignRecord', recordData)
                this.$message('Запись успешно создана')
                this.$v.$reset()
            }catch(e){} 
      }
  }
}
</script>