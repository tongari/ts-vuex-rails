import { MutationTree } from 'vuex'
import { SelectState, Category, Item } from './types'

export const LOADED: string = 'loaded'
export const ERROR: string = 'error'
export const CATEGORIES: string = 'categories'
export const ITEMS: string = 'items'

export const mutations: MutationTree<SelectState> = {
  // [LOADED](state, payload: Category) {
  //   state.error = false
  //   state.category = payload
  // },
  // [ERROR](state) {
  //   state.error = true
  //   state.category = undefined
  // },
  [CATEGORIES](state, payload: Category[]) {
    state.categories = payload
  },
  [ITEMS](state, payload: Item[]) {
    state.items = payload
  }
}
