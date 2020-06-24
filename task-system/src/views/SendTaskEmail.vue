<template>

<form class="card" @submit.prevent="submitHandler">
  <div class="card-content">
    <span class="card-title">Оставьте комментарий</span>
    <Loader v-if="loading" />
    <div class="input-field">
      <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{ invalid: ($v.email.$dirty && !$v.email.required) || !$v.email.email }"
      >
      <label for="email">Email</label>
      <small 
      class="helper-text invalid"
      v-if="$v.email.$dirty && !$v.email.required"
      >Поле Email не должно быть пустым</small>
      <small 
      class="helper-text invalid"
      v-else-if="$v.email.$dirty && !$v.email.email"
      >Введите коректный Email</small>
    </div>
   <div class="input-field">
                <input 
                  id="comment" 
                  type="text"
                  v-model="comment"
                  :class="{invalid: $v.comment.$dirty && !$v.comment.required}"
                >
                <label for="desription">Комментарий</label>
                <span
                  v-if="$v.comment.$dirty && !$v.comment.required"
                  class="helper-text invalid"
                >Введите описание категории</span>
              </div>
    </div>
    <div class="card-action">
    <div>
      <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
      >
        Отправить
        <i class="material-icons right">send</i>
      </button>
    </div>
  </div>
  </div>
</form>

</template>		
<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
	export default {
		name:'send-email',
		data:() => ({
			loading: false,
      email: '',
      comment: ''
		}),
     validations: {
      email: {
        email,
        required
      },
      comment: {
        required
      }
    },
     methods: {
      async submitHandler() {
         if(this.$v.$invalid) {
          this.$v.$touch()
          return
        }
       
        try{
           this.loading = true
            const id = this.$route.params.id
            const commentData = {
              id: this.$route.params.id,
              email: this.email,
              comment: this.comment
            }
           await Email.send({
           SecureToken:"60235bd5-e903-4ea0-9f22-6ca9f440b7c9",
            Host : "smtp.elasticemail.com",
            Username : "batyadem@gmail.com",
            Password : "2460762F25C4E036D4FB144D859832D66346",
            To : this.email,
            From : "batyadem@gmail.com",
            Subject : "Task System",
            Body : `Hello ${this.email},</br>
            You got a new message from TASK SYSTEM<batyadem@email.com>:
            ${this.comment}
            Best wishes,
            TASK SYSTEM team`
        }).then(
         this.$message('Комментарий отправлен')  
        );
            this.loading = false
            
        }catch(e){
           this.$message('Что-то пошло не так. Попробуй отправить комментарий позже')  
          this.loading = false }
     
    }
  }
}
</script>
<style lang="sass">
.card
  max-width: 60%
</style>