<template>
  <!-- <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <app />
  </n-config-provider> -->
  <!-- <router-view v-show="!isLoading" v-slot="{}"></router-view> -->
  <!-- <loading-com-vue v-show="isLoading"></loading-com-vue> -->
  <router-view></router-view>
</template>


<script setup lang="ts">
import LoadingComVue from '@/components/Loading/LoadingCom.vue'; // 全局等待层
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
// import { openAndCloseLoadingByTime } from '@/utils/common';
// import appStore from '@/store'
// 

// const { isLoading } = storeToRefs(appStore.useLoadingStore);
// openAndCloseLoadingByTime(1500); // 等待动画层



</script>

<style>
</style>
