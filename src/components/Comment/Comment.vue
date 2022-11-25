<template>
  <main class="p-4 bg-gray-50 min-h-screen">
    <div class=" max-w-screen-xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
      <h2 class=" text-3xl my-6">评论</h2>
      <!--评论框-->
      <CommentBox @submit="addNewComment" />
      <!--分割线-->
      <DividerHorizontal />
      <div v-for="comment in comments" :key="comment.id">
        <!--单个留言-->
        <CommentItem :user_name="comment.user_name" :avatar="comment.avatar" :time="comment.time"
          :address="comment.address" :device="comment.device" :content="comment.content" />
        <!--回复列表-->
        <ReplyContainer v-if="comment.replies">
          <CommentItem v-for="reply in comment.replies" :key="reply.id" :user_name="reply.user_name"
            :avatar="reply.avatar" :time="reply.time" :address="reply.address" :device="reply.device"
            :content="reply.content" />
        </ReplyContainer>
        <ReplayBox @submit="addReply($event,comment.id)"/>
      </div>
    </div>
  </main>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CommentBox from '../Comment/CommentBox.vue'
import CommentItem from '../Comment/CommentItem.vue'
import DividerHorizontal from '../Comment/DividerHorizontal.vue'
import ReplayBox from '../Comment/ReplayBox.vue'
import ReplyContainer from '../Comment/ReplyContainer.vue'



import health from '../../assets/img/health.png'
import logo from '../../assets/img/logo.png'


let rid = ref(4)
// 示例数据数组
const comments = ref([
  {
    id: 1,
    user_name: '全村的希望',
    avatar: health,
    time: '3分钟之前',
    address: '山东菏泽曹县',
    device: 'iPhone XS Max',
    content: '垃圾，这篇博客也不怎么样嘛！小趴菜！',
    replies: [
      {
        id: 2,
        user_name: '回家的诱惑',
        avatar: logo,
        time: '2分钟之前',
        address: '浙江温州江南皮革厂',
        device: 'iPhone SE',
        content: '王八蛋王鹤都没你牛逼！'
      },
      {
        id: 3,
        user_name: '海克斯科技与狠活',
        avatar: health,
        time: '1分钟之前',
        address: '宝宝巴士之都--柳州',
        device: 'iPhone 13 Pro Max',
        content: '厉害啊老表！'
      }
    ]
  }
])


//组装新的评论
const constructNewComment = (content) => {
  return {
    id: rid.value++,
    user_name: '当前用户',
    avatar: health,
    time: '1秒前',
    address: '宝宝巴士之都--柳州',
    device: '荣耀play 4t pro',
    content,
  }
}

//处理回调
const addNewComment = (content) => {
  const newComment = constructNewComment(content)
  comments.value.push(newComment)

}

//添加回复
const addReply = (content,id) =>{
  const reply = constructNewComment(content)
  let comment = comments.value.find((comment) => comment.id === id)
  if(comment.replies){
    comment.replies.push(reply)
  }else{
    comment.replies = [reply]

  }
}



// import EmojiPicker from "vue3-emoji-picker";
// import "@/node_modules/vue3-emoji-picker/dist/style.css";

// import { ref } from "vue";
// export default {
//   name: "App",
//   components: {
//     EmojiPicker: EmojiPicker,
//   },
//   setup() {
//     const input = ref("");

//     function onSelectEmoji(emoji) {
//       console.log(emoji);
//       input.value += emoji.i;
//     }


//     return {
//       input,
//       onSelectEmoji,
//     };
//   },
// };
</script>

<style scoped>

</style>