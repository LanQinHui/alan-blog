<template>
 <div class="grid justify-items-center">
   <header class="pt-10 pb-5">
     <img class="w-12 h-12" src="@/assets/images/signIn_logo.svg" alt="">
   </header>
   
   <div>
     <main class="w-72">
      <h1 class="text-lg p-0 text-center">登录到我的个人博客</h1>
      <div class="auth-form-body mt-3">
        <form action="/session" class="p-3 bg-gray-100 border border-gray-200 rounded-md">
          <label class="block pb-2 text-xs" for="login_field">用户名/邮箱</label>
          <input type="text" name="login" id="login_field" class="form-control block mb-4 border border-gray-200 rounded-md w-full text-xs p-1 bg-white" autocapitalize="off" autocorrect="off" autocomplete="username" autofocus="autofocus">
          <label class="block pb-2 text-xs" for="login_field">密码</label>
          <input type="text" name="login" id="login_field" class="form-control block mb-4 border border-gray-200 rounded-md w-full text-xs p-1 bg-white" autocapitalize="off" autocorrect="off" autocomplete="username" autofocus="autofocus">
          <button class="w-full bg-green-500 border border-gray-200 rounded-md text-white">登录</button>
        </form>
      </div>

     </main>
  
     
   </div>
 </div>
</template>

<script>
export default {

}
</script>

<style>

</style>