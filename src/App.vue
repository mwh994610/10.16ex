<template>
  <div id="app">
    <header>
      消息
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <router-link to="/home">首页</router-link>
      <router-link to="/list">列表</router-link>
      <router-link to="/my">我的</router-link>
    </footer>
  </div>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  html,
  body{
    width: 100%;
    height: 100%;
  }
  #app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  header{
    height: 45px;
    text-align: center;
    line-height: 45px;
    background: skyblue;
    color: #fff;
  }
  main{
    flex: 1;
    overflow: auto;
  }
  footer{
    height: 45px;
    line-height: 45px;
    background: skyblue;
    color: #fff;
    display: flex;
    justify-content: space-around;
  }
</style>
