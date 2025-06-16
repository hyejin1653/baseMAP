import { defineStore } from 'pinia'
import {ref} from "vue";
import {isPrevDateWithSeconds} from "@/types/commonFeature.js"


export const useDeckFeatureStore = defineStore(
    'deckFeatureStore',
    () => {
        const features  = ref(new Map());
        const detailedFeatures = ref([]);
        const deckRenderingFlag = ref(true);

        const mergeFeatures = (targets) => {
            const updatedMap = new Map(features.value);

            targets.forEach(target => {
                //console.log(target.length);
                if(target.length != 38) return;
                const featureId = (target[2]).concat(target[37]);
                const receiveTime = target[1];

                const currentFeature = updatedMap.get(featureId);
                if (!currentFeature || receiveTime > (currentFeature[1])) {
                    updatedMap.set(featureId, target);
                }
            });

            features.value = updatedMap
        }

        const addOrUpdateFeature = (target) => {
            const featureId = (target[2]).concat(target[37]);
            const receiveTime = target[1];

            const ships = new Map(features.value);

            const currentFeature = ships.get(featureId);
            if (!currentFeature || receiveTime > (currentFeature[1])) {
                ships.set(featureId, target);
            }
            features.value = ships
        }

        const getFeaturesArray = () => {

            const getStateFeatures = features.value;
            const featureList = Array.from(getStateFeatures.values());
            return featureList;
        }

        const deleteOldFeature = () => {
            const getStateFeatures = features.value;

            console.log("getStateFeatures",getStateFeatures.size);
            const featureList = Array.from(getStateFeatures).filter(([, item]) => {
                if (item[2] === '000005') {
                    if (!isPrevDateWithSeconds(item[1], 60)) return true;
                } else if (item[16] === '1') {
                    return true;
                } else {
                    return !isPrevDateWithSeconds(item[1], 720);
                }
            });

          console.log("featureList",featureList.length);
            const map = new Map(featureList);
            features.value = map;
        };

        return {features, detailedFeatures, deckRenderingFlag , mergeFeatures, addOrUpdateFeature, getFeaturesArray, deleteOldFeature};
    });