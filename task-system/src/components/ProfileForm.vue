<template>
	<form class="form" @submit.prevent="submitHandler">
    <div class="input-field">
      <input
          id="name"
          type="text"  
          v-model="name"
          :class="{ invalid: ($v.name.$dirty && !$v.name.required)}"
      >
      <label for="name">Имя</label>
      <span
            class="helper-text invalid"
            v-if="$v.name.$dirty && !$v.name.required"
            >Введите ваше имя</span>
    </div>
  </div>
    <button class="btn waves-effect waves-light" type="submit">
      Обновить
      <i class="material-icons right">send</i>
    </button>
  </form>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import { required } from 'vuelidate/lib/validators'
 export default {
  data: () => ({
    name: ''
  }),
  validations: {
      name: { required }
  },
  computed: {
    ...mapGetters(['info'])
  },
  mounted() {
    this.name = this.info.name

    setTimeout(() => {
       M.updateTextFields()
     })
  },
  methods: {
    ...mapActions(['updateInfo']),
    async submitHandler() {
      if(this.$v.$invalid) {
          this.$v.$touch()
          return
        }
        try{
          await this.updateInfo({name: this.name})
        }catch(e){}
    }
  }
 }
</script>