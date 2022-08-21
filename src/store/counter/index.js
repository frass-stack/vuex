import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'

const counterStore = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters: {
        squareCount( state ){
            return state.count * state.count
        }
    }
}

export default counterStore