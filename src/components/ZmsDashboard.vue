<template>

   
  <div class="site-index">
    <div class="first">
      <h2>User Count</h2>
      <div class="center">
        <button @click="activeComponent = 'ShowUser'" class="btn btn-outline-secondary">Click Here</button>
        

      </div>
    </div>

    <div class="second">
      <h2>Animal Count</h2>
      <div class="center">
        <button @click="activeComponent = 'ShowAnimal'" class="btn btn-outline-secondary">Click Here</button>
      </div>
    </div>

    <div class="third">
      <h2>Zoo Count</h2>
      <div class="center">
        <button @click="activeComponent = 'ShowZoo'" class="btn btn-outline-secondary">Click Here</button>
      </div>
    </div>
  </div>
<div class="data">
  <component :is="activeComponent" />
</div>


</template>
<script>
import ShowUser from '../components/ShowUser.vue'
import ShowAnimal from '../components/ShowAnimal.vue'
import ShowZoo from '../components/ShowZoo.vue'



export default {
  name: 'ZmsDashboard',
  components: {
    ShowUser,
    ShowAnimal,
    ShowZoo,
  

  },
  data() {
    return {
      activeComponent: null,
     
    }
  },

 
}


</script>
<style scoped>

.site-index {
  text-align: center;
 


}

.first {
  height: 12rem;
  width: 23%;
  display: inline-block;
  margin-right: 2rem;
  position: relative;
  background-color:  #0bd30b42;

  /* box-shadow: 1px 2px 10px 10px grey; */
  border-radius: 30px;
  margin-top: 8rem;
}

.second {
  height: 12rem;
  width: 23%;
  margin-right: 2rem;
  display: inline-block;
  position: relative;
  background-color: #0bd30b42;
 
  /* box-shadow: 1px 2px 10px 10px grey; */
  border-radius: 30px;
  margin-top: 8rem;
}

.third {
  height: 12rem;
  width: 23%;
  display: inline-block;
  position: relative;
  background-color: #0bd30b42;
  
  /* box-shadow: 1px 2px 10px 10px grey; */
  border-radius: 30px;
  margin-top: 8rem;
}

.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;

  color:whitesmoke;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

}

/* .btn {
  border-color: #0cec9a;
  color: rgb(173, 136, 136);
  /* border-radius: 30px; */


@media screen and (max-width: 500px) {

  .first,
  .second,
  .third {
    width: 70%;
  }
  
}
</style>