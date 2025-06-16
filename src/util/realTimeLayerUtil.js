
import {toLonLat} from "ol/proj";

import {useAssetStore} from "@/stores/assetStore.js";
import {
    HAZARD,
    ICON_AI_LABEL,
    ICON_AI_TARGET,
    ICON_ASSET,
    ICON_HAZARDOUS,
    ICON_LOST,
    ICON_MAPPING_KIND_MOVING,
    ICON_MAPPING_KIND_STOPPING,
    LOST_SIGNAL,
    LOST_SIGNAL_CODE,
    SAR_AIRCRAFT_FEATURE_KEY,
    SIGNAL_KIND_CODE_KCGV,
    SIGNAL_KIND_CODE_SAR_AIRCRAFT,
    SIGNAL_SOURCE_CODE_INTEGRATE,
} from '@/types/constants.js';
import airCraftImg from '@/assets/img/mainGis/shipKindIcons/airPlain.svg';
import helicopterImg from '@/assets/img/mainGis/shipKindIcons/helicopter.svg';

import {deckSplitCommonTarget, isPrevDateWithMinutes} from "@/types/commonFeature.js";

/* -------------------------------------- 실시간, AI 모드 레이어 관련 --------------------------------------*/

// 해경 자산 스타일
const isDeckAsset = (shipName, shipKind, shipType, targetID) => {
    const assetStore = useAssetStore();

    const assetList = assetStore.assetList;
    const initialAsset = assetStore.initialAsset;

    if (initialAsset[0].checked || initialAsset[1].checked || initialAsset[2].checked) {
        const isKCGV = initialAsset[0].checked && shipKind === SIGNAL_KIND_CODE_KCGV;const isRotation =
            initialAsset[1].checked &&
            shipKind === SIGNAL_KIND_CODE_SAR_AIRCRAFT &&
            shipType !== SAR_AIRCRAFT_FEATURE_KEY.SAR_FIXED;
        const isFixed =
            initialAsset[2].checked &&
            shipKind === SIGNAL_KIND_CODE_SAR_AIRCRAFT &&
            shipType === SAR_AIRCRAFT_FEATURE_KEY.SAR_FIXED;
        if (isKCGV || isRotation || isFixed) {
            if (assetList.length > 0) {
                const isAsset = assetList.find(item => {
                    if (shipName) {
                        if (item.shipName) {
                            if (item.shipName.includes(shipName)) {
                                const findMMSI = item.mmsi.find(item => item === targetID);
                                if (findMMSI) {
                                    return true;
                                } else {
                                    return false;
                                }
                            }
                        }
                        if (item.sarCraftName) {
                            if (item.sarCraftName.includes(shipName)) {
                                const findMMSI = item.mmsi.find(item => item === targetID);
                                if (findMMSI) {
                                    return true;
                                } else {
                                    return false;
                                }
                            }
                        }
                    }
                    return false;
                });
                if (isAsset) {
                    if (isKCGV) {
                        return ICON_ASSET['kcgv'];
                    }
                    if (isRotation) {
                        return ICON_ASSET['rotation'];
                    }
                    if (isFixed) {
                        return ICON_ASSET['fixed'];
                    }
                }
            }
        }
        return false;
    } else {
        return false;
    }
}


// 위험물 판별
const isDeckHazardous = (hazardousCategory, shipKind) => {
  if (hazardousCategory === '1') {
    return ICON_HAZARDOUS[shipKind];
  } else {
    return false;
  }
};
// 소실신호 판별
const isDeckLost = (lost, messageTime) => {
  const diffTime = isPrevDateWithMinutes(messageTime);
  if (lost === LOST_SIGNAL && diffTime) {
    return ICON_LOST;
  } else {
    return false;
  }
};


// 선박 아이콘 셋팅
export const setDeckFeatureIcon = ( shipName, shipKind, shipType, targetID, sog, hazardousCategory, lost, messageTime ) => {
    // 해경자산
    const assetIcon = isDeckAsset(shipName, shipKind, shipType, targetID);

    if (assetIcon) {
        return assetIcon;
    }
    // 위험물
    const hazardIcon = false; //isDeckHazardous(hazardousCategory, shipKind);

    if (hazardIcon) {
        return hazardIcon;
    }
    // 소실신호
    const lostIcon = false; // isDeckLost(lost, messageTime);

    if (lostIcon) {
        return lostIcon;
    }
    // 고정익, 회전익인 경우
    if (shipKind === SIGNAL_KIND_CODE_SAR_AIRCRAFT) {
        if (shipType === SAR_AIRCRAFT_FEATURE_KEY.SAR_FIXED) {
            return airCraftImg;
        } else {
            return helicopterImg;
        }
    }

    // 선종별
    const isMoving = Number(sog) > 1;
    if (isMoving) {
        return ICON_MAPPING_KIND_MOVING[shipKind];
    } else {
        return ICON_MAPPING_KIND_STOPPING[shipKind];
    }
};

// 이미지 사이즈 조정 width
export const targetWidth = (sog, shipType, shipKind) => {
    if (shipType !== SAR_AIRCRAFT_FEATURE_KEY.SAR_FIXED && shipKind === SIGNAL_KIND_CODE_SAR_AIRCRAFT) {
        return 45;
    }
    if (sog) {
        if (Number(sog) > 1) {
            return 35;
        } else {
            return 25;
        }
    } else {
        return 25;
    }
};


// 이미지 사이즈 조정 height
export const targetHeight = (sog, shipType, shipKind) => {
    if (shipType !== SAR_AIRCRAFT_FEATURE_KEY.SAR_FIXED && shipKind === SIGNAL_KIND_CODE_SAR_AIRCRAFT) {
        return 52;
    }
    if (sog) {
        if (Number(sog) > 1) {
            return 35;
        } else {
            return 25;
        }
    } else {
        return 25;
    }
};

// 이미지 회전 조정
export const targetAngle = (feature) => {
    if (feature.SIGNAL_KIND_CODE === SIGNAL_KIND_CODE_SAR_AIRCRAFT) {
        if (feature.SHIP_TYPE === SAR_AIRCRAFT_FEATURE_KEY.SAR_FIXED) {
            //고정익
            return -Number(feature.COG);
        } else {
            //회전익
            return 0;
        }
    }
    return -Number(feature.COG);
};
//
// // 스케일 조정
export const targetScale = (resolution, feature) => {
    const isOtherScale = (shipKind, shipName) => {
        if (shipKind === SIGNAL_KIND_CODE_SAR_AIRCRAFT) {
            return true;
        }

        if (shipKind === SIGNAL_KIND_CODE_KCGV) {
            const { initialAsset, assetList } = useAssetStore();
            if (initialAsset[0].checked) {
                const isAsset = assetList.find(item => {
                    if (item.shipName) {
                        if (item.shipName.includes(shipName)) {
                            return true;
                        }
                    }
                    return false;
                });
                if (isAsset) {
                    return true;
                }
            }
        }
    };
    let scale = isOtherScale(feature.SIGNAL_KIND_CODE, feature.SHIP_NAME)
        ? 22
        : feature.SOG && Number(feature.SOG) > 1
            ? 13
            : 9;
    if (resolution > 500 && resolution < 1300) {
        scale = isOtherScale(feature.SIGNAL_KIND_CODE, feature.SHIP_NAME)
            ? 20
            : feature.SOG && Number(feature.SOG) > 1
                ? 25
                : 11;
    } else if (resolution > 50 && resolution < 500) {
        scale = isOtherScale(feature.SIGNAL_KIND_CODE, feature.SHIP_NAME)
            ? 30
            : feature.SOG && Number(feature.SOG) > 1
                ? 35
                : 15;
    } else if (resolution > 10 && resolution < 50) {
        scale = isOtherScale(feature.SIGNAL_KIND_CODE, feature.SHIP_NAME)
            ? 40
            : feature.SOG && Number(feature.SOG) > 1
                ? 45
                : 15;
    } else if (resolution < 10) {
        scale = isOtherScale(feature.SIGNAL_KIND_CODE, feature.SHIP_NAME)
            ? 50
            : feature.SOG && Number(feature.SOG) > 1
                ? 50
                : 15;
    }
    return scale;
};


// 뷰포트 계산
export const getViewportBounds = (viewport) => {
    if (viewport) {
        const topLeft = viewport.unproject([0, 0]);
        const bottomRight = viewport.unproject([viewport.width, viewport.height]);
        return {
            minLng: Math.min(topLeft[0], bottomRight[0]),
            maxLng: Math.max(topLeft[0], bottomRight[0]),
            minLat: Math.min(topLeft[1], bottomRight[1]),
            maxLat: Math.max(topLeft[1], bottomRight[1]),
        };
    }
};

// 최대,최소 뷰포트 계산해서 뷰표트내의 선박만 필터링
export const filterFeaturesWithBounds = (features, bounds) => {
    if (bounds) {
        return features.filter(feature => {
            const lng = feature[5];
            const lat = feature[6];
            return lng >= bounds.minLng && lng <= bounds.maxLng && lat >= bounds.minLat && lat <= bounds.maxLat;
        });
    } else {
        return features;
    }
};

// 실시간 레이어 원천 데이터 -> feature 메타 데이터 변환 후 리턴
export const setConvertDeckFeatures = (filteredData) => {
    return filteredData.map(item => {
        return deckSplitCommonTarget(item);
    });
};

// 커스텀 클러스터링
export const clusterPoints = (data, zoomLevel, limit) => {
    const gridSize = Math.pow(2, -zoomLevel) * 150;

    const clusters={};

    data.forEach(item => {
        const lng = item.LONGITUDE;
        const lat = item.LATITUDE;

        const gridX = Math.floor(lng / gridSize);
        const gridY = Math.floor(lat / gridSize);
        const gridKey = `${gridX},${gridY}`;

        if (!clusters[gridKey]) {
            clusters[gridKey] = [];
        }

        if (clusters[gridKey].length < limit) {
            clusters[gridKey].push(item);
        } else {
            const overflowKey = `${gridKey}-${clusters[gridKey].length}`;
            if (!clusters[overflowKey]) {
                clusters[overflowKey] = [];
            }
            clusters[overflowKey].push(item);
        }
    });

    return Object.values(clusters).map(cluster => {
        const pointCount = cluster.length;

        const representativePoint = cluster[0];

        return {
            ...representativePoint,
            isCluster: pointCount > 1,
            points: cluster,
        };
    });
};


// 딤 계산
export const calDimension = (tempEast, tempNorth, dimensionBow, dimensionStern, dimensionPort, dimensionStarboard, angleS, angleC) => {
    let leftTopX = -1 * dimensionPort;
    let leftTopY = (dimensionBow * 3) / 4;
    // rotate point
    let xNew = leftTopX * angleC - leftTopY * angleS;
    let yNew = leftTopX * angleS + leftTopY * angleC;
    // translate point back:
    leftTopX = xNew + tempEast;
    leftTopY = yNew + tempNorth;

    let leftBottomX = -1 * dimensionPort;
    let leftBottomY = -1 * dimensionStern;
    // rotate point
    xNew = leftBottomX * angleC - leftBottomY * angleS;
    yNew = leftBottomX * angleS + leftBottomY * angleC;
    // translate point back:
    leftBottomX = xNew + tempEast;
    leftBottomY = yNew + tempNorth;

    let rightBottomX = dimensionStarboard;
    let rightBottomY = -1 * dimensionStern;
    // rotate point
    xNew = rightBottomX * angleC - rightBottomY * angleS;
    yNew = rightBottomX * angleS + rightBottomY * angleC;
    // translate point back:
    rightBottomX = xNew + tempEast;
    rightBottomY = yNew + tempNorth;

    let rightTopX = dimensionStarboard;
    let rightTopY = (dimensionBow * 3) / 4;
    // rotate point
    xNew = rightTopX * angleC - rightTopY * angleS;
    yNew = rightTopX * angleS + rightTopY * angleC;
    // translate point back:
    rightTopX = xNew + tempEast;
    rightTopY = yNew + tempNorth;

    let centerTopX = (dimensionStarboard - dimensionPort) / 2;
    let centerTopY = dimensionBow;
    // rotate point
    xNew = centerTopX * angleC - centerTopY * angleS;
    yNew = centerTopX * angleS + centerTopY * angleC;
    // translate point back:
    centerTopX = xNew + tempEast;
    centerTopY = yNew + tempNorth;

    return [
        toLonLat([leftTopX, leftTopY]),
        toLonLat([leftBottomX, leftBottomY]),
        toLonLat([rightBottomX, rightBottomY]),
        toLonLat([rightTopX, rightTopY]),
        toLonLat([centerTopX, centerTopY]),
        toLonLat([leftTopX, leftTopY]),
    ];
};

// 선박별 시그널 svg 생성
export const createFlagLabelSVG = (arr) => {
    const filteredArr = arr.filter(v => v.flag !== '');
    const rectSize = 20;
    const gap = 1.1;
    const svgSize = 128;
    const totalRectWidth = filteredArr.length * rectSize + (filteredArr.length - 1) * gap;
    const offsetX = (svgSize - totalRectWidth) / 2;
    let rects = '';
    let currentIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].flag === '') {
            continue;
        }
        const x = offsetX + currentIndex * (rectSize + gap);
        rects += `
        <rect x="${x}" y="${(svgSize - rectSize) / 2}" width="${rectSize}" height="${rectSize}" fill="${
            arr[i].color
        }"></rect>
        <text x="${x + rectSize / 2}" y="${svgSize / 2 + 4}" font-size="13" fill="white" text-anchor="middle">${
            arr[i].name
        }</text>
      `;
        currentIndex++;
    }
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${60}">${rects}</svg> `;
    return svg.replace(/\s+/g, ' ');
};