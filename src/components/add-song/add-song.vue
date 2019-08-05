<template>
    <div class="add-song">
        <progress-bar></progress-bar>
        <progress-circle></progress-circle>
    </div>
</template>

<script>
import ProgressBar from '../../base/progress-bar/progress-bar'
import ProgressCircle from '../../base/progress-circle/progress-circle'
export default {
    data() {
        return {

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
