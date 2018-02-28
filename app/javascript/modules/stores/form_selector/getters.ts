import { GetterTree } from 'vuex'
import { SelectState } from './types'
import { RootState } from '../rootTypes'

export const GET_CATEGORY_NAME: string = 'getCategoryName'
export const GET_ITEM_NAME: string = 'getItemName'

const findNameById = (elements, searchIndex: number): string => {
  for(let i: number = 0; i < elements.length; i++){
    if (elements[i].id === searchIndex) {
      return elements[i].name
    }
  }
  return elements[0].name
  // Observable型をキャストする方法がわからない
  //    return elements.find((element) => {
  //      if (element.id === searchIndex) {
  //        return element.name
  //      }
  //      return elements[0].name
  //    })
}

export const getters: GetterTree<SelectState, RootState> = {
  /**
   * カテゴリ名を返す
   * @returns {string}
   */
  [GET_CATEGORY_NAME](state): string {
    const { categories, categoryId } = state;
    const name: string = findNameById(
      categories,
      categoryId
    )
    return name
  },

  /**
   * アイテム名を返す
   * @returns {string}
   */
  [GET_ITEM_NAME](state): string {
    const { items, itemId } = state;
    const name: string = findNameById(
      items,
      itemId
    )
    return name
  }
}
