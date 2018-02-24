import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { SelectState } from './types'
import { RootState } from '../types'

export const state: SelectState = {
  categories: [],
  items: [],
}

const namespaced: boolean = true

export const select: Module<SelectState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
