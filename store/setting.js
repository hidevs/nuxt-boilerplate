export const state = () => ({
  settings: {},
})

export const mutations = {
  set(state, {group, data}) {
    state.settings[group] = data
  },
  setAll(state, data) {
    state.settings = data.data
  }
}

export const actions = {
  async group(context, group) {
    const data = (await this.$axios.$get(`/setting/${group}`))
    context.commit('set', {
      group, data: data.data
    })
    return context.state.settings[group]
  },
  async all(context) {
    const data = (await this.$axios.$get(`/setting/*`))
    context.commit('setAll', data)
  },
}

export const getters = {
  settings: (state) => {
    return state.settings
  }
}
