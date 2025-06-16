import { fromLonLat, toLonLat } from 'ol/proj';
import {LOST_SIGNAL} from '@/types/constants';


import { checkDeckNationFilter} from "@/util/commonUtil.js"

import {useDeckFeatureStore} from "@/stores/deckStore.js";
import {getMap, getView} from "@/services/mapService.js";
import {getViewportBounds, filterFeaturesWithBounds, setConvertDeckFeatures, clusterPoints, calDimension, createFlagLabelSVG, targetScale} from "@/util/realTimeLayerUtil.js";

import {deckLayer, deckTargetLayer, deckLabelLayer} from "@/layer/targetLayer.js";
import {isPrevDateWithSeconds} from "@/types/commonFeature.js"

// deck 실시간 라벨 레이어 인스턴스 생성
const createLabelInstance = (convertDeckFeatureList, zoomLevel) => {
    const isShowLabel = false;
    let data = []

  if(isShowLabel) clusterPoints(convertDeckFeatureList, zoomLevel, 100);

        return [
            deckLabelLayer.clone({
                data: data,
            })
        ];

};

export const setFilter = (feature) => {
  const signalKindCode = feature[27];
  const signalSourceCode = feature[2];
  const lostSignalCode = feature[16];
  const isPriority = feature[36];
  const diffTime = isPrevDateWithSeconds(feature[1], 720);

  if (!checkDeckNationFilter(feature)) return false;

  // 통합 필터
  if (isPriority === '0') return false;

  // 소실 여부
  if (lostSignalCode === LOST_SIGNAL  && diffTime) return false;

  return true;
};


export const deckInitFeatures = () => {
    //console.log("ddddd")
    const deckFeatureStore = useDeckFeatureStore();
    const map = getMap();
    if(!deckFeatureStore.deckRenderingFlag) return;

    const features = deckFeatureStore.getFeaturesArray();

    if(map){
        const deckInstance = deckLayer.get('layer');

        // deck 인스턴스 존재 확인
        if (!deckInstance) {
            console.warn('Deck instance not found');
            return null;
        }

        const viewport = deckInstance.getViewports()[0];


        const bounds = getViewportBounds(viewport);
        const boundsFilteredFeatures = filterFeaturesWithBounds(features, bounds);

        // 뷰포트 내에 있는 피쳐만 필터 로직 수행
      const filteredData = boundsFilteredFeatures.filter(item => setFilter(item)); // (선종, 국적 , 신호);
        const convertDeckFeatureList = setConvertDeckFeatures(filteredData);
        const resolution = getView().getResolution();
        const zoomLevel = getView().getZoom();

        const labelLayer = createLabelInstance(convertDeckFeatureList, zoomLevel);

        const realTimeTargetLayer = createTargetInstance(convertDeckFeatureList, resolution); // 실시간 타겟 레이어

        deckInstance.setProps({
            layers: [
                realTimeTargetLayer, // 실시간 레이어 set
                ...labelLayer
            ],
        });
    }
}

// deck 실시간 타겟 레이어 인스턴스 생성
const createTargetInstance = (convertDeckFeatureList, resolution) => {
    return deckTargetLayer.clone({
        data: convertDeckFeatureList,
        getSize: d => targetScale(resolution, d),
    });
};

const layerFeatureCount = (deckInstance) => {
    const layers = deckInstance.props.layers;
    const targetLayer = layers.find(layer => layer.id === "label-layer");

    if (targetLayer && targetLayer.props.data) {
        return targetLayer.props.data.length;
    }

    return 0;
}

export const deleteFeatures = () => {
    const deckFeatureStore = useDeckFeatureStore();
    deckFeatureStore.deleteOldFeature();
}