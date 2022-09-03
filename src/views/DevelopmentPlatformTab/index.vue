<template>
  <div class="min-h-full">
    <!-- 消息通知 -->
    <NavBarMsg/>
    <!--导航栏-->
    <NavBar/>
    <!-- 头部标题 -->
    <Header>
      <template v-slot:title>
        开放平台
      </template>
    </Header>
    <!-- 主题部分内容 -->
    <!-- <Main></Main> -->
    <LeftMain/>
    
    <!--底部-->
    <Footer></Footer>
    
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue';
import NavBarMsg from '@/components/NavBar/NavBarMsg.vue';
import Header from '@/components/Header/Header.vue';
import Main from '@/components/Main/Main.vue';
import LeftMain from '@/components/Main/LeftMain/LeftMain.vue';
import Footer from '@/components/Footer/Footer.vue';
// import { defineComponent } from '@vue/runtime-core';
// export default defineComponent({name:'NavBar',component:{NavBarVue}})
</script>

<style scoped>

</style>