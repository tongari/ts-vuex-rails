import Vue from 'vue'
import store from '../../modules/stores/entries/index'
import FormSelectorContainer from '../../modules/containers/FormSelectorContainer.vue'
import FormSelectorTestContainer from '../../modules/containers/FormSelectorTestContainer.vue'

new Vue({
  render: (h) => h(FormSelectorContainer),
  store
}).$mount('#js-select-app')

new Vue({
  render: (h) => h(FormSelectorTestContainer),
}).$mount('#js-select-test-app')
