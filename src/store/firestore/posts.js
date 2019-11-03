export const state = () => ({})

export const getters = {
  a: state => {
    return 'a'
  }
}

export const mutations = {}

export const actions = {
  GET_USERS(_, id) {
    return this.$firestore
      .collection('posts')
      .doc(id)
      .get()
  }
}
