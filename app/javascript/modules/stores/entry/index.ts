import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '../types'
import { select } from '../form_selector/index'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  modules: {
    select,
  }
}

export default new Vuex.Store<RootState>(store)
