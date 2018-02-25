import Vue from 'vue'
import store from '../../modules/stores/entries/index'
import FormSelectorContainer from '../../modules/containers/FormSelectorContainer.vue'

new Vue({
  render: (h) => h(FormSelectorContainer),
  store
}).$mount('#js-select-app')
