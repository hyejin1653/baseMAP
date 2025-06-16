import WebGLTileLayer from 'ol/layer/WebGLTile';
import { MapController, Deck } from '@deck.gl/core';
import { IconLayer, TextLayer } from '@deck.gl/layers';
import { toLonLat } from 'ol/proj';

import { setDeckFeatureIcon, targetWidth, targetHeight, targetAngle} from "@/util/realTimeLayerUtil.js";

// 실시간 타겟 레이어
export const deckTargetLayer = new IconLayer({
    id: 'target-layer',
    data: [],
    pickable: true,
    getPosition: (d) => [Number(d.LONGITUDE), Number(d.LATITUDE)],
    getIcon: (item) => ({
        url: setDeckFeatureIcon(
            item.SHIP_NAME,
            item.SIGNAL_KIND_CODE,
            item.SHIP_TYPE,
            item.TARGET_ID,
            item.SOG,
            item.HAZARDOUS_CATEGORY,
            item.LOST,
            item.RECV_DATE_TIME,
        ),
        width: targetWidth(item.SOG, item.SHIP_TYPE, item.SIGNAL_KIND_CODE),
        height: targetHeight(item.SOG, item.SHIP_TYPE, item.SIGNAL_KIND_CODE),
    }),
    getAngle: (d) => targetAngle(d),
    //onHover: info => displayShipInfoCardElement(info),
});

// 실시간 라벨 레이어
export const deckLabelLayer = new TextLayer({
    id: 'label-layer',
    data: [],
    getPosition: d => [Number(d.LONGITUDE), Number(d.LATITUDE)],
    getText: d => d.SHIP_NAME,
    getSize: 15, // 폰트 크기
    getColor: [0, 0, 0],
    getTextAnchor: 'middle',
    getAlignmentBaseline: 'top',
    getPixelOffset: [0, 15],
    fontFamily: 'NanumSquare, Arial,sans-serif',
    fontWeight: 400,
    characterSet: 'auto', // 설정 안하면 한글 안나옴
});



// deck 메인 인스턴스
export const deck = new Deck({
    initialViewState: {
        longitude: 127.1388684,
        latitude: 37.4449168,
        zoom: 6,
        transitionDuration: 0,
    },
    setAnimationLoop: null,
    getCursor: ({ isDragging, isHovering }) => {
        if (isDragging) {
            return 'grabbing';
        } else if (isHovering) {
            return 'pointer';
        } else {
            return 'default';
        }
    },
    controller: {
        type: MapController,
        dragPan: true,
        scrollZoom: true,
        dragRotate: false,
        // doubleClickZoom: false,
        transitionDuration: 0,
    },
    layers: [
        deckTargetLayer,
        deckLabelLayer
    ],
    getTooltip: null,
  onError: (error) => {
    console.error('Deck.gl 에러:', error)
  }
});

export const deckLayer = new WebGLTileLayer({
    source: undefined,
    zIndex: 101,
    render: frameState => {
        const { center, zoom } = frameState.viewState;
        deck.setProps({
            viewState: {
                longitude: toLonLat(center)[0],
                latitude: toLonLat(center)[1],
                zoom: zoom - 1,
            },
        });
        deck.redraw();
        return deck.canvas;
    },
    id: 'realtimeTargetDeckLayer',
    layer: deck,
});