import { MutationTree } from 'vuex'
import { SelectState, Category, Item } from './types'

export const FETCHING: string = 'fetching'
export const LOADED: string = 'loaded'
export const ERROR: string = 'error'
export const CATEGORIES: string = 'categories'
export const ITEMS: string = 'items'
export const CATEGORY_ID: string = 'categoryId'
export const ITEM_ID: string = 'itemsId'

export const mutations: MutationTree<SelectState> = {
  [FETCHING](state){
    state.isError = false
    state.isFetching = true
  },
  [LOADED](state) {
    state.isFetching = false
  },
  [ERROR](state) {
    state.isError = true
  },
  [CATEGORIES](state, payload: Category[]) {
    state.categories = payload
  },
  [ITEMS](state, payload: Item[]) {
    state.items = payload
  },
  [CATEGORY_ID](state, payload: number) {
    state.categoryId = payload
  },
  [ITEM_ID](state, payload: number) {
    state.itemId = payload
  }
}
