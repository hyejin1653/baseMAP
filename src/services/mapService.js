import { Feature, Map as olMap, Overlay, View } from 'ol'
import { defaults as defaultInteractions, Draw } from 'ol/interaction.js'
import { Group } from 'ol/layer.js'
import TileLayer from 'ol/layer/Tile.js'
import { XYZ } from 'ol/source.js'

import {deckLayer} from "@/layer/targetLayer.js";

import * as proj from 'ol/proj'

let map = null

export let pos_x = localStorage.getItem("pos_x");
export let pos_y = localStorage.getItem("pos_y");

const encMapLayer = new TileLayer({
    source: new XYZ({
        url: '/MAPS/ENC33/{z}/{x}/{y}.png',
        maxZoom: 15
    }),
    zIndex: 1
})

export const initializeMap = () => {
    if (map) {
        console.warn('Map is already initialized')
    }

    let pos_zoom = localStorage.getItem("pos_zoom");

    if (pos_x == null && pos_y == null) {
        //초기값은 부산으로 셋팅된다.
        pos_x = 129.0689;
        pos_y = 35.21;
    }

    if (pos_zoom == null) pos_zoom = 7;


    map = new olMap({
        target: 'map',
        view: new View({
            projection: 'EPSG:3857',
            zoom: 7,
            minZoom: 7,
            maxZoom: 19,
            center: proj.fromLonLat([127, 36]),
            extent: proj.transformExtent([121, 32, 135, 42], 'EPSG:4326', 'EPSG:3857'),
            smoothExtentConstraint: true
        }),
        controls: [],
        interactions: defaultInteractions({
            doubleClickZoom: false
        }),
        layers: [
            new Group({
                layers: [encMapLayer]
            }),
            deckLayer
        ]
    })

    console.log('Map initialized')
}

export const getMap = () => {
    return map;
}

export const getView = () => {
    return map.getView()
}