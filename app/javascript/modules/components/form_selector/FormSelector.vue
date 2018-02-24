/* tslint:disable whitespace curly */
<template lang='pug'>
  div
    select(name="register[category_name]" id="register_category_name")
      option(v-bind:value="category.name" v-for="category in selectState.categories") {{category.name}}

    select(name="register[item_name]" id="register_item_name")
      option(v-bind:value="item.name" v-for="item in selectState.items") {{item.name}}
</template>

<script lang='ts'>
/* tslint:enable whitespace curly */
import Vue from 'vue'
import Component from 'vue-class-component'
//import { CategoryState, Category } from '../../stores/form_selector/types'

@Component({
  props: {
    selectState: Object
  }
})
export default class FormSelector extends Vue {
  mounted(){
  }
}
</script>

/* tslint:disable whitespace curly */
<style lang='sass' scoped>
</style>

