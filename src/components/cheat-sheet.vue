<template>
  <div >
    <div id="header">
      <h2 id="big-title">{{ MainTitle}}</h2>
      <img src="../assets/php.png">
     </div>
    <div class="container">
        <div class="card"  v-for="section in getSections"  v-bind:key="section.sectionTitle">
                <div class="card-content">
                  <div v-if="show">
                    <h3 id="card-title" >{{ section.sectionTitle}}</h3>
                    <ul  v-for="content in section.sectionContent" :key="content">
                        <li> <span id="action"> {{ content.action}} </span> : <span v-if=content.way id="way"> <br> {{content.way}} </span>
                        <ul v-else id="vElseUl"> 
                          <br><li id="vElseLi" v-for="way in content.ways" :key="way">  <span id="action">{{ way.action}} : </span> <span id="way">{{way.way}}</span> </li>
                        </ul>
                        </li>
                        
                    </ul>
                    </div>
            </div>
            </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cheatSheet',
  data(){
    return {
          show:true
          }
  },
  computed:{
   
    getSections(){
      return this.$store.getters.getSections;
    },
    MainTitle(){
      return this.$store.getters.getMainTitle;
    },
    sortSection(arr, ele){
      arr.ele.sort((a,b) =>{a.length < b.length})
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #header{
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-content: center;
    }
    * {
    box-sizing: border-box;
}
    
    div img{
      height: 10%;
     width:10%;
      align-self: center;
   
    }
   #big-title {
    text-transform: uppercase;
    text-justify: center;
    text-align: center; }
  .container {
       -webkit-column-count: 3;
      -moz-column-count:3;
        column-count: 3;
      -webkit-column-gap: 1em;
      -moz-column-gap: 1em;
        column-gap: 1em;
       margin: 1.5em;
        padding: 0;
      -moz-column-gap: 1.5em;
      -webkit-column-gap: 1.5em;
    column-gap: 1.5em;
    
    }
  

   
    
  .card {
      display: inline-block;
    background: #fff;
    padding: 1em;
    margin: 0 0 1.5em;
    width: 100%;
    -webkit-transition:1s ease all;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-shadow: 2px 2px 4px 0 #ccc;
    }
   #card-title {
    font-size: 1.5em;
    text-justify: center;
    text-align: center;
    background-color: #d1bfa7 }
  .card-content{
    
  }  
  .card-content ul:not(#vElseUl) {
    text-justify: left;
    }
  .card-content li:not(#vElseLi) {
    
   
    border-bottom:1px solid sandybrown }
  #action{
    font-size:1.4em;
    font-weight: bold;
    color: #91684a;
  }
  
  #way{
     font-size:1.1em;
  }
    
    @media only screen and (min-width: 750px) and (max-width: 1200px){
    .container {
        -moz-column-count: 2;
        -webkit-column-count: 2;
        column-count: 2;
    }
}
@media screen and (max-width: 750px) {
   .container {
        -moz-column-count: 1;
        -webkit-column-count: 1;
        column-count: 1;
    }

  .card {
    width: 100%; } }

</style>
