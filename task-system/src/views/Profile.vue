<template>
	<div>
  <div class="page-title">
    <h3>Профиль</h3>
  </div>
  <ProfileForm />
 
</div>
</template>
<script>
  
  import ProfileForm from '@/components/ProfileForm'
  export default {
    name: 'profile',
    components: {
      ProfileForm
    }
  }
</script>