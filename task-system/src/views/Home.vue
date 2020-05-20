<template>
  <div>

      <nav class="navbar">
        <div class="nav-wrapper">
          <a href="/" class="nav-logo">
            <img src="@/assets/images/main-logo.png" alt="logo" />
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <div class="home-modal">
              <a class="btn waves-effect waves-teal modal-trigger modal-button" href="#modal1">
                <i class="material-icons">add</i>Зарегестрироваться
              </a>
              <div id="modal1" class="modal">
                <div class="modal-content">
                    <div class="row auth">
            <div class="col s6 offset-s3 auth-wrapper">
                <div class="row auth-box">
                    <form class="col s12 auth-form">
                        <div class="auth-title">
                            <h1 >
                            Зарегестрировать Аккаунт
                            </h1>
                        </div>
                        <div class="row auth-item">
                            <div class="input-field col s12">
                                <input id="email" type="email" class="auth-input validate" onChange={changeHandle />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div class="row auth-item">
                            <div class="input-field col s12">
                                <input id="password" type="password" class="auth-input validate" onChange={changeHandle />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div class="auth-footer auth-button">
                            <button class="btn waves-effect waves-teal auth-button__login" >
                                Войти
                        </button>
                            <button class="btn   auth-button__register">Регистрация</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </nav>

    <div class="home-banner banner">
      <div class="banner-wrapper center-align container">
        <div class="banner-title title">
          <h1
            class="title-text"
          >Task System способствует более тесному сотрудничеству и увеличению эффективности работы.</h1>
        </div>
        <div class="banner-item">
          <div class="banner-image">
            <img src="@/assets/images/home-banner.png" alt="banner" class="responsive-img" />
          </div>
        </div>
        <div class="banner-item">
          <p
            class="banner-discr"
          >Благодаря доскам, спискам и карточкам Task System пользователи могут упорядочивать проекты и расставлять приоритеты — работать станет гораздо удобнее и приятнее!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  
</script>

<style lang="sass" scope>
.header
  padding: 10px
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)
.navbar
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)
.nav
  &-logo
    display: flex
  &-wrapper
    display: flex
    justify-content: space-between
    align-items: center
.header, .navbar
  background-color: #2196f3
.title-text
  font-size: 3rem
  margin: 0
.modal-button
  font-weight: 600
  background-color: #ffffff
  color: #2196f3
  display: inline-flex
  &:hover
    background-color:#2196f3
    color: #ffffff
.home-banner
  background-color: #2196f3
  color: #ffffff
.title-text
  font-weight: 700
.banner-image img
  height: auto
.banner-discr
  font-size: 15px
  font-weight: 600
.auth-title h1
  color: #2196f3
  font-size: 18px
  font-weight: 700
.modal-content
  border-radius: 15px
.auth-button button
  background-color: #ffffff
  border: 2px solid #2196f3
  color: #2196f3
  &:hover
    background-color: #2196f3
    border: 2px solid #2196f3
    color: #ffffff
.auth-input:focus
  border-bottom: 1px solid #2196f3!important
label.active
  color: #2196f3!important
</style>
