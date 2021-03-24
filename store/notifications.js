export const state = () => ({
  notifications: {
    read: [],
    unread: [],
  }
})

export const mutations = {
  set(state, data) {
    state.notifications = data
  },
  add(state, notify) {
    const exists = !!state.notifications.unread.find(item => item.id === notify.id)
    if (!exists) state.notifications.unread.unshift(notify)
  },
  read(state, id) {
    const notify = state.notifications.unread.find(notify => notify.id === id)
    const notifyIndex = state.notifications.unread.indexOf(notify)
    state.notifications.unread.splice(notifyIndex, 1)
    state.notifications.read.unshift(notify)
  }
}

export const actions = {
  async fetch(context, type = 'PushNotify') {
    if (context.state.notifications.unread.length === 0) {
      const data = (await this.$axios.$get('/user/notifications')).data
      context.commit('set', data)
    }
    return context.state.notifications
  },
  read(context, id) {
    this.$axios.$post('/user/notifications/read', {id})
    context.commit('read', id)
  },
  async listen(context) {
    try {
      this.$echo.channel(`private-App.Models.User.${this.$auth.user.id}`)
        .notification((data) => {
          // console.log(`- - notification Channel:`, data)
          if (data.type === 'App\\Notifications\\PushNotification') {
            (new Audio('/assets/audio/notification.mp3')).play();
            context.commit('add', data)
          }
        })
    } catch (err) {
      console.log(`- - notification Channel Error:`, err)
    }
  }
}

