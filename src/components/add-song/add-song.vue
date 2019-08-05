<template>
    <div class="add-song">
        <progress-bar></progress-bar>
        <progress-circle :radius='radius' :percent="percent"></progress-circle>
    </div>
</template>

<script>
import ProgressBar from '../../base/progress-bar/progress-bar'
import ProgressCircle from '../../base/progress-circle/progress-circle'
export default {
    data() {
        return {
            radius: 32,
            percent: 0.3
        }
    },
    methods: {
        
    },
    components: {
        ProgressBar,
        ProgressCircle
    }
}
</script>

<style lang="scss" scoped>
    .add-song {
        padding: 30px;
    }
</style>
