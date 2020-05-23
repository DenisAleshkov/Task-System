<template>
	 <div class="col s12 m6">
          <div>
            <div class="page-subtitle">
              <h4>Создать</h4>
            </div>
            <form @submit.prevent="submitHandler">
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
		data: () => ({
			title: '',
			description: ''
		}),
		validations: {
			title: {required},
			description: {required}
		},
		methods: {
			submitHandler() {
				if(this.$v.$invalid){
					this.$v.$touch()
					return
				}
			}
		}

	}
</script>