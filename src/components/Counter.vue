<template>
    <div>
        <h3>Direct Access: {{ $store.state.count }}</h3>
        <h3>Computed: {{ countComputed }}</h3>
        <h3>mapState: {{ count }}</h3>
        <h3>lastMutation: {{ lastMutation }}</h3>
    </div>
</template>

<script>
import { mapState } from 'vuex';

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
    }
}
</script>