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
             let template_params = {
            "to_name": this.email,
            "from_name": "TASK SYSTEM<batyadem@gmail.com>",
              "message_html": this.comment
            }
            let service_id = "batyadem_gmail_com";
            let template_id = "email";
            await emailjs.send(service_id, template_id, template_params);
            this.loading = false
            this.$message('Комментарий отправлен')  
        }catch(e){this.loading = false }
     
    }
  }
}
</script>
<style lang="sass">
.card
  max-width: 60%
</style>