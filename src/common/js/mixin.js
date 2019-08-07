import {mapGetters, mapMutations, mapActions} from 'vuex'
import {playMode} from './config'
import {shuffle} from './util'

export const playlistMixin = {
    mounted() {
        this.handlePlayList(this.playlist)
    },
    activated() {
        this.handlePlayList(this.playlist)
    },
    methods: {
        handlePlayList() {
            throw new Error('component must implement handlePlayList method')
        }
    },
    computed: {
        ...mapGetters([
            'playlist'
        ])
    },
    watch: {
        playlist(newVal) {
            this.handlePlayList(newVal)
        }
    }
}

export const playerMixin = {

}

export const searchMixin = {

}
