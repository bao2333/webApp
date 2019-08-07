<template>
    <div class="recommend" ref="recommend">
        <scroll ref="scroll" class="recommend-content" :data="discList">
            <div>
                <div class="slider-wrapper" ref="sliderWrapper">
                    <slider>
                        
                    </slider>
                </div>
                <div class="recommend-list">

                </div>
            </div>
            <div class="loading-container">
                <loading></loading>
            </div>
        </scroll>
        <router-view></router-view>
    </div>
</template>

<script>
import Slider from '../../base/slider/slider'
import Scroll from '../../base/scroll/scroll'
import Loading from '../../base/loading/loading'
import {playlistMixin} from '../../common/js/mixin'
import {getRecommend, getDiscList} from '../../common/js/mixin'
import {ERR_OK} from '../../api/config'
import {mapMutations} from 'vuex'
export default {
    data() {
        return {
            recommend: [],
            discList: []
        }
    },
    created() {

    },
    methods: {

    }, 
    components: {
        Slider,
        Scroll,
        Loading
    }
}
</script>

<style>

</style>
