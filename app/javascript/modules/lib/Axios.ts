import * as railsVars from 'modules/services/RailsVars'
import axios from 'axios'

/* デフォルト設定 */
axios.defaults.timeout = 10000
axios.defaults.headers['Accept'] = 'application/json'
axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
if (typeof window !== 'undefined') {
  axios.defaults.headers['X-CSRF-TOKEN'] = railsVars.csrfToken()
}

export default axios
