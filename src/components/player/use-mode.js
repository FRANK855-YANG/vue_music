import { PLAY_MODE } from '@/assets/js/constant'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default function useMode() {
    const store = useStore()

    const playMode = computed(() => store.state.playMode)
    const modeIcon = computed(() => {
        const playModeVal = playMode.value
        switch (playModeVal) {
            case PLAY_MODE.sequence:
                return 'icon-sequence'
            case PLAY_MODE.random:
                return 'icon-random'
            case PLAY_MODE.loop:
                return 'icon-loop'
            default:
                return 'icon-sequence'
        }
    })
    const modeText = computed(() => {
        const playModeVal = playMode.value
        switch (playModeVal) {
            case PLAY_MODE.sequence:
                return '顺序播放'
            case PLAY_MODE.random:
                return '随机播放'
            case PLAY_MODE.loop:
                return '单曲循环'
            default:
                return '顺序播放'
        }
    })

    function changeMode() {
        const mode = (playMode.value + 1) % 3
        // 先封装action
        store.dispatch('changeMode', mode)
    }

    return {
        modeIcon,
        changeMode,
        modeText
    }
}
