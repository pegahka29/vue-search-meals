import { createStore} from 'vuex'
import state from './state'
import * as actions from './action'
import * as getters from './getters'
import * as mutations from './mutations'

const store = createStore({
    state,
    actions,
    mutations,
    getters,
})
export default store