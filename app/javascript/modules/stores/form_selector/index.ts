import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { SelectState } from './types'
import { RootState } from '../rootTypes'

export const state: SelectState = {
  categories: [],
  items: [],
  isFetching: false,
  isError: false,
  categoryId: null,
  itemId: null,
}

const namespaced: boolean = true

export const select: Module<SelectState, RootState> = {
  namespaced,
  state,
  // getters, // 小規模ならいらない。コンポートで作成して良い気がします。
  actions,
  mutations
}
