import { ActionTree } from 'vuex'
import axios from 'modules/lib/Axios'
import { SelectState, Category, Item } from './types'
import { RootState } from '../rootTypes'
import {FETCHING, LOADED, ERROR, CATEGORIES, ITEMS, CATEGORY_ID, ITEM_ID} from './mutations'

export const FETCH_ITEMS: string = 'fetchItems'
export const SET_CATEGORIES: string = 'setCategories'
export const SET_ITEMS: string = 'setItems'
export const SET_CATEGORY_ID: string = 'setCategoeyId'
export const SET_ITEM_ID: string = 'setItemId'

export const actions: ActionTree<SelectState, RootState> = {
  /**
   * カテゴリのIDをセット
   * @param {any} commit
   * @param {number} categoryId
   * @returns {any}
   */
  [SET_CATEGORY_ID]({ commit }, categoryId: number): any {
    commit(CATEGORY_ID, categoryId);
  },
  /**
   * アイテムのIDをセット
   * @param {any} commit
   * @param {number} itemId
   * @returns {any}
   */
  [SET_ITEM_ID]({ commit }, itemId: number): any {
    commit(ITEM_ID, itemId);
  },
  /**
   * カテゴリのリストをセット
   * @param {any} commit
   * @param {Category[]} categories
   * @returns {any}
   */
  [SET_CATEGORIES]({ commit }, categories: Category[]): any {
    const payload: Category[] = categories.map((category: Category) => {
      const result: Category = category
      return result
    })
    commit(CATEGORIES, payload);
  },

  /**
   * アイテムのリストをセット
   * @param {any} commit
   * @param {Item[]} items
   * @returns {any}
   */
  [SET_ITEMS]({ commit }, items: Item[]): any {
    const payload: Item[] = items.map((item: Item) => {
      const result: Item = item
      return result
    })
    commit(ITEMS, payload);
  },

  /**
   * アイテムの情報をAPIより取得
   * @param {any} commit
   * @param {number} categoryId
   * @returns {any}
   */
  [FETCH_ITEMS]({ commit, dispatch, state }): any {
    commit(FETCHING)
    axios({
      url: `/api/select_search/${state.categoryId}`
    }).then((response) => {
      commit(LOADED)
      const payload: Item[] = response.data.data
      dispatch(SET_ITEMS, payload)
    }, (error) => {
      commit(ERROR);
    });
  }
}
