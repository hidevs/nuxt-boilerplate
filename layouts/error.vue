<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="5" xl="5">
      <v-card-title class="text-center justify-center">
        <h1 class="font-weight-bold display-4 primary--text" v-text="error.statusCode"/>
      </v-card-title>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <div class="justify-center align-center">
            <v-img class="svg-container ma-auto" max-width="200" :src="`/assets/error/${error.statusCode}.svg`" />
            <h3 class="my-5 grey--text text-center" v-text="errorMessage.text" />
            <v-btn :to="errorMessage.btn.to" style="text-decoration: none" class="font-weight-bold" block color="primary darken-3">
              {{ errorMessage.btn.text }}
            </v-btn>
          </div>
        </v-layout>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'error',
  props: ['error'],

  head() {
    return {
      title: this.error.statusCode
    }
  },

  computed: {
    errorMessage() {
      switch (this.error.statusCode) {
        case 401:
          return {
            text: 'شما احراز هویت نشده اید لطفا ابتدا وارد حساب کاربری خود شوید.',
            btn: {
              text: 'ورود',
              to: '/'
            }
          }
        case 403:
          return {
            text: 'متاسفانه شما به این صفحه دسترسی ندارید.',
            btn: {
              text: 'صفحه اصلی',
              to: '/'
            }
          }
        case 404:
          return {
            text: 'متاسفانه صفحه مورد نظر یافت نشد.',
            btn: {
              text: 'صفحه اصلی',
              to: '/'
            }
          }
        case 500:
          return {
            text: 'متاسفانه سرور پاسخگو نمی باشد.',
            btn: {
              text: 'صفحه اصلی',
              to: '/'
            }
          }
        default:
          return {
            text: 'خطای نامشخصی رخ داده لطفا با پشتیبانی در ارتباط باشید.',
            btn: {
              text: 'صفحه اصلی',
              to: '/'
            }
          }
      }
    }
  },
}
</script>

<style scoped>
</style>
