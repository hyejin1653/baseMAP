import {defineStore} from "pinia";
import {ref} from "vue";

export const useAssetStore = defineStore(
    'assetStore',
    () => {
        const initialAsset = [
            { id: 'ship', name: '함정', checked: false, count: 0, unit: '척' },
            { id: 'kcgRotary', name: '회전익', checked: false, count: 0, unit: '대' },
            { id: 'kcgFixed', name: '고정익', checked: false, count: 0, unit: '대' },
        ];
        const assetList = ref([]);


        return {initialAsset, assetList};
    }
)