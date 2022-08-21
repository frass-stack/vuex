<template>
    <div>
        <h3>Direct Access: {{ $store.state.counter.count }}</h3>
        <h3>Computed: {{ countComputed }}</h3>
        <h3>mapState: {{ count }}</h3>
        <h3>lastMutation: {{ lastMutation }}</h3><br>
        <button @click="increment" >+1</button>
        <button @click="incrementBy" >+5</button>
        <button @click="incrementRandom" :disabled="isLoading" >
            Random
        </button>
        <!-- <button @click="randomInt" >Random</button> -->
        <h3>Direct Getters: {{ $store.getters.squareCount }}</h3>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    // computed: mapState['count']
    computed: {
        countComputed(){
            return this.$store.state.counter.count
        },
        ...mapState('counter', ['count','lastMutation', 'isLoading'])
        // ...mapState({
        //     count: state => state.count,
        //     lastMutation: state => state.lastMutation
        // })
    },
    methods: {
        increment(){
            return this.$store.commit('counter/increment')
        },
        incrementBy(){
            return this.$store.commit('counter/incrementBy', 5)
        },
        // incrementRandom(){
        //     return this.$store.dispatch('incrementRandom')
        // }
        // ...mapActions({
        //     randomInt: 'incrementRandom'
        // })
        // setLoading(){
        //     return this.$store.commit('setLoading')
        // },
        ...mapActions('counter', ['incrementRandom'])
    }
}
</script>