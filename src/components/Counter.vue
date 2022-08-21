<template>
    <div>
        <h3>Direct Access: {{ $store.state.count }}</h3>
        <h3>Computed: {{ countComputed }}</h3>
        <h3>mapState: {{ count }}</h3>
        <h3>lastMutation: {{ lastMutation }}</h3><br>
        <button @click="increment" >+1</button>
        <button @click="incrementBy" >+5</button>
        <button @click="incrementRandom" >Random</button>
        <!-- <button @click="randomInt" >Random</button> -->
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    // computed: mapState['count']
    computed: {
        countComputed(){
            return this.$store.state.count
        },
        ...mapState(['count','lastMutation'])
        // ...mapState({
        //     count: state => state.count,
        //     lastMutation: state => state.lastMutation
        // })
    },
    methods: {
        increment(){
            return this.$store.commit('increment')
        },
        incrementBy(){
            return this.$store.commit('incrementBy', 5)
        },
        // incrementRandom(){
        //     return this.$store.dispatch('incrementRandom')
        // }
        // ...mapActions({
        //     randomInt: 'incrementRandom'
        // })
        ...mapActions(['incrementRandom'])
    }
}
</script>