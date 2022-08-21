import getRandomInt from '@/helpers/getRandomInt'


const counterStore = {
    namespaced: true,
    state: () =>  ({
        count: 1,
        lastMutation: 'none',
        isLoading: false,
        lastRandomInt: null
    }),
    mutations:{
        increment( state ){
            state.count++
            state.lastMutation = 'increment'
        },
        incrementBy( state, value ){
            state.count += value
            state.lastMutation = 'incrementBy ' + value
            state.lastRandomInt = value
        },
        setLoading( state, value ){
            state.isLoading = value
            state.lastMutation = 'setLoading ' + value
        }
    },
    actions: {
        async incrementRandom( { commit } ){
            commit('setLoading', true)
            const randomInt = await getRandomInt()

            commit( 'incrementBy', randomInt )
            commit('setLoading', false)
        }
    },
    getters: {
        squareCount( state ){
            return state.count * state.count
        }
    }
}

export default counterStore