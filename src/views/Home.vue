<template>
  <div class="home">
      <div class="homeheader">
          <input type="text" placeholder="搜索"> <!-- @keyup="serch" -->
      </div>
      <ul>
          <li v-for="item in list" :key="item.id">
              <dl>
                  <dt>
                      <img :src="item.img" alt="">
                  </dt>
                  <dd>
                      <span>{{item.name}}</span>
                      <span>{{item.msg}}</span>
                  </dd>
              </dl>
              
          </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        axios.get('/api/list').then(res => {
            this.list = res.data.data
        })
    },
    methods:{
        // serch(){
        //     if(list.filter(v => v === -1){
                
        //     })
        // }
    }
}
</script>

<style scoped>
    .homeheader{
        width: 80%;
        margin: 0 auto;
        height: 30px;
        margin-top: 5px;
    }
    input{
        width: 100%;
        height: 100%;
        text-align: center;
        background: #eee;
        border-radius: 20px;
        border: #eee;
    }
    li{
        display: block;
        width: 100%;
        height: 110px;
    }
    dl dt{
        float: left;
    }
    dl dd{
        float: left;
    }
    dl dd span{
        display: block;
    }
</style>