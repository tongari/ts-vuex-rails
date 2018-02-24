import { ActionTree } from 'vuex'
import axios from 'axios'
import { SelectState, Category, Item } from './types'
import { RootState } from '../types'
import { LOADED, ERROR, CATEGORIES, ITEMS } from './mutations'

export const FETCH_DATA: string = 'fetchData'
export const FETCH_ERROR: string = 'fetchError'
export const SET_CATEGORIES: string = 'setCategories'
export const SET_ITEMS: string = 'setItems'


export const actions: ActionTree<SelectState, RootState> = {

  // カテゴリのリストをセット
  [SET_CATEGORIES]({ commit }, categories_: Category[]): any {
    const categories: Category[] = categories_.map((category: Category) => {
      const resultCategory: Category = category
      return resultCategory
    })
    commit(CATEGORIES, categories);
  },

  // アイテムのリストをセット
  [SET_ITEMS]({ commit }, items_: Item[]): any {
    const items: Item[] = items_.map((item: Item) => {
      const resultItem: Item = item
      return resultItem
    })
    commit(ITEMS, items);
  }

  // fetchData({ commit }): any {
  //   axios({
  //     url: 'https://....'
  //   }).then((response) => {
  //     const payload: User = response && response.data;
  //     commit('profileLoaded', payload);
  //   }, (error) => {
  //     console.log(error);
  //     commit('profileError');
  //   });
  // }

}
