/* tslint:disable whitespace curly */
<template lang='pug'>
#js-select-app
  div
    FormSelector(
      :selectState="selectState",
      :onFetchItems="onFetchItems",
      :onSetCategoryId="onSetCategoryId",
      :onSetItemId="onSetItemId",
    )
</template>

<script lang='ts'>
  /* tslint:enable whitespace curly */
  import Vue from 'vue'
  import { State, Action, Getter } from 'vuex-class'
  import Component from 'vue-class-component'

  import { SelectState } from '../stores/form_selector/types'
  import { SET_CATEGORIES, SET_ITEMS, FETCH_ITEMS, SET_CATEGORY_ID, SET_ITEM_ID } from '../stores/form_selector/actions'
  import FormSelector from '../components/form_selector/FormSelector.vue'

  // storeの名前空間を指定する
  const selectNamespace: string = 'select'

  // コンテナー保持するコンポーネント
  @Component({
    components: {
      'FormSelector': FormSelector
    },
  })
  export default class FormSelectorContainer extends Vue {

    // stateをバインディング
    @State(selectNamespace) selectState: SelectState
    // actionsをバインディング
    @Action(SET_CATEGORIES, { namespace: selectNamespace }) onSetCategories: any
    @Action(SET_ITEMS, { namespace: selectNamespace }) onSetItems: any
    @Action(FETCH_ITEMS, { namespace: selectNamespace }) onFetchItems: any
    @Action(SET_CATEGORY_ID, { namespace: selectNamespace }) onSetCategoryId: any
    @Action(SET_ITEM_ID, { namespace: selectNamespace }) onSetItemId: any

    created() {
      //slimから渡されたjsonをstateにセット
      this.onSetCategories(window['__app__']['categories'])
      this.onSetItems(window['__app__']['items'])
    }

  }
</script>

/* tslint:disable whitespace curly */
<style lang='sass' scoped>
</style>

