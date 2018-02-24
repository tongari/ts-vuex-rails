/* tslint:disable whitespace curly */
<template lang='pug'>
#js-select-app
  div
    FormSelector(:selectState="categories")
</template>

<script lang='ts'>
  /* tslint:enable whitespace curly */
  import Vue from 'vue'
  import { State, Action, Getter } from 'vuex-class'
  import Component from 'vue-class-component'

  import { SelectState } from '../stores/form_selector/types'
  import { SET_CATEGORIES, SET_ITEMS } from '../stores/form_selector/actions'
  import FormSelector from '../components/form_selector/FormSelector.vue'

  const selectNamespace: string = 'select'

  @Component({
    components: {
      'FormSelector': FormSelector
    },
  })
  export default class FormSelectorContainer extends Vue {

    @State(selectNamespace) categories: SelectState
    @Action(SET_CATEGORIES, { namespace: selectNamespace }) onSetCategories: any
    @Action(SET_ITEMS, { namespace: selectNamespace }) onSetItems: any

    beforeMount() {
      this.onSetCategories(window['__app__']['categories'])
      this.onSetItems(window['__app__']['items'])
    }

  }
</script>

/* tslint:disable whitespace curly */
<style lang='sass' scoped>
</style>

