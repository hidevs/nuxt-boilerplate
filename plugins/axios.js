export default ({$axios, $config, $notify, redirect, store}) => {
  $axios.onError(error => {

    $axios.setBaseURL(`${$config.apiHost}/api`)
    $axios.setHeader('Accept','application/json')

    switch (error.response.status) {
      case 422: // for Validation errors
        store.dispatch('validation/setErrors', error.response.data.errors)
        $notify.error({
          message: error.response.data.message,
        })
        break
      case 401:
        $notify.error({
          message: error.response.data.message,
          buttons: [
            ['<button :to="/auth/login">ورود به حساب کاربری</button>', (instance, toast) => {
              instance.hide({
                transitionOut: 'fadeOutUp',
                onClosing: (instance, toast, closedBy) => {
                  redirect('/')
                }
              }, toast, 'buttonName');
            }]
          ]
        })
        break
      default:
        $notify.error({
          message: error.response.data.message
        })
        break
    }

    return Promise.reject(error)
  })

  $axios.onRequest(() => {
    store.dispatch('validation/clearErrors')
  })
}
