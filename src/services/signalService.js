import { signalStompClient } from '@/services/StompService.js'
import { ref } from 'vue'
import {useDeckFeatureStore} from '@/stores/deckStore.js'
import { deckInitFeatures, deleteFeatures } from '@/services/deckService.js'

const stompDataChunk = ref([]);
// 인터벌 ID들을 저장할 변수
let createRealTimeLayerInterval = null
let deleteInterval = null



export const initSignalService = () => {
  const deckFeatureStore =  useDeckFeatureStore();
  signalStompClient.onConnect = () => {
    console.log("Connected!")
    signalStompClient.subscribe("/topic/ship", (msg) => {

      const splitData = msg.body.split("|");
      stompDataChunk.value.push(splitData);
      if (stompDataChunk.value.length >= 1000) {
        deckFeatureStore.mergeFeatures(stompDataChunk.value);
        stompDataChunk.value = [];
      }
    })
  }

  signalStompClient.activate();
}

export const realTimeFeatureService = () => {
    //deckInitFeatures() // 피쳐 set
    createRealTimeLayerInterval = setInterval(() => {
      console.log("111");
      deckInitFeatures() // 피쳐 set
    }, 1000);
}

export const deleteRealTimeLayer = () => {


  deleteInterval = setInterval(() => {
    console.log("222");
    deleteFeatures();
  }, 10000);
}

export const allClose = () => {
  if (createRealTimeLayerInterval) {
    clearInterval(createRealTimeLayerInterval)
    createRealTimeLayerInterval = null
  }

  if (deleteInterval) {
    clearInterval(deleteInterval)
    deleteInterval = null
  }
}