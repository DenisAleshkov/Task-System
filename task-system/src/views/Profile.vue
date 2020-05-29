<template>
	<div>
  <div class="page-title">
    <h3>Профиль</h3>
  </div>

  <form class="form" @submit.prevent="submitHandler">
    <div class="input-field">
      <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{invalid: $v.name.$dirty && !$v.name.required}"    
      >
      <label for="name">Имя</label>
      <span
            class="helper-text invalid"
           v-if="$v.name.$dirty && !$v.name.required"
            >Введите ваше имя</span>
    </div>

    <button class="btn waves-effect waves-light" type="submit">
      Обновить
      <i class="material-icons right">send</i>
    </button>
  </form>
</div>
</template>
<script>
  import { required } from 'vuelidate/lib/validators'
  export default {
    name: 'profile',
    data: () => ({
      name: ''
    }),
    validations: {
      name:{required}
    },
    mounted() {
      this.name = this.$store.getters.info.name
      setTimeout(() => {
      M.updateTextFields()
    }, 0)
    },
    methods: {
      async submitHandler(){
        if(this.$v.invalid){
          this.$v.$touch()
          return
        }
          const dataName = {
            name: this.name
          }
          await this.$store.dispatch('updateName', dataName)
          this.$message('Имя успешно обновлена')
      }
    }  
  }
</script>