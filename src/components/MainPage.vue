<template>
  <div id="map"></div>
</template>
<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { initializeMap } from '@/services/mapService.js'
import {
  initSignalService,
  deleteRealTimeLayer,
  realTimeFeatureService,
  allClose
} from '@/services/signalService.js'

const loadFinished = ref(false)

// 초기 선박 데이터 스토어에 추가
onMounted(() => {
  initializeMap()
  loadFinished.value = true
})

watch(loadFinished, (value) => {
  // if(value){
  //   initSignalService();
  //   realTimeFeatureService()
  //   deleteRealTimeLayer()
  // }else {
  //   allClose();
  // }
})

onUnmounted(() => allClose())
</script>
<style>
#map {
  width: 100vw;
  height: 100vh;
}
</style>
