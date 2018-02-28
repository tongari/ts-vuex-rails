/* tslint:disable whitespace curly */
<template lang='pug'>
  div
    select(name='register[category_name]' id='register_category_name' v-on:change='onChangeCategorySelect')
      option(v-bind:value='category.id' v-for='category in selectState.categories') {{category.name}}

    select(name="register[item_name]" id="register_item_name" ref="itemselect" v-on:change='onChangeItemSelect')
      option(v-bind:value="item.id" v-for="item in selectState.items") {{item.name}}

    p {{getCategoryName}}
    p {{getItemName}}

</template>

<script lang='ts'>
/* tslint:enable whitespace curly */
import Vue from 'vue'
import Component from 'vue-class-component'
import { SelectState, Category, Item } from '../../stores/form_selector/types'

@Component({
  props: {
    selectState: Object,
    onFetchItems: Function,
    onSetCategoryId: Function,
    onSetItemId: Function,
    getCategoryName: String,
    getItemName: String,
  }
})
export default class FormSelector extends Vue {

  /**
   * カテゴリセレクト変更のイベントハンドラ
   * @param {HTMLSelectElement} event
   */
  private onChangeCategorySelect(event: HTMLSelectElement):void {
    const itemselect = this.$refs.itemselect;
    Array.prototype.find.call(itemselect, (option, index) => {
      if(index === 0) {
        return option.selected = true
      }
    })
    this.$props.onSetItemId(null)
    this.$props.onSetCategoryId(Number(event.target.value))
    this.$props.onFetchItems()
  }

  /**
   * アイテムセレクト変更のイベントハンドラ
   * @param {HTMLSelectElement} event
   */
  private onChangeItemSelect(event: HTMLSelectElement):void {
    this.$props.onSetItemId(Number(event.target.value))
  }
}
</script>

/* tslint:disable whitespace curly */
<style lang='sass' scoped>
</style>

