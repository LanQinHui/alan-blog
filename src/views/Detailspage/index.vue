<template>
  <div class="min-h-full">
    <!--导航栏-->
    <NavBar/>
    <!-- 头部标题 -->
    <Header>
      <h2>文章详情</h2>
    </Header>
    <!-- 主题部分内容 -->
    <!-- <Main></Main> -->
    <!-- <LeftMain/> -->
    <Comment></Comment>
    
    <!--底部-->
    <Footer></Footer>
    
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue';
import Header from '@/components/Header/Header.vue';
import Main from '@/components/Main/Main.vue';
import LeftMain from '@/components/Main/LeftMain/LeftMain.vue';
import Footer from '@/components/Footer/Footer.vue';
import Comment from '@/components/Comment/Comment.vue';
</script>

<style scoped>

</style>