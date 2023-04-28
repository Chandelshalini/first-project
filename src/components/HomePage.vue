<template>
<div id="carouselExampleControls " class="carousel slide" style="
    margin-top: 3rem;" data-bs-ride="carousel">
  <div class="carousel-inner"  >
    <div class="carousel-item active" >
      <img src="../assets/img1.jpeg" class="d-block w-100" style="
    height: 35rem;" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1 style="opacity: 2;">We Want to make life better for<b style="
   color:green;"> Wild Animals</b></h1>

        <router-link to="/LoginForm"><button class="btn btn-success">Login</button></router-link>
      </div>
    </div>
    
    <div class="carousel-item">
      <img src="../assets/img2.jpg" class="d-block w-100" style="
    height: 35rem;" alt="...">
     <div class="carousel-caption d-none d-md-block">
        <h1 style="opacity: 2;">We Want to make life better for<b style="
   color:green;"> Wild Animals</b></h1>
        
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</template>
<script>
export default {
  name: 'HomePage',
 data(){
  return {
   
  }
 }
}
</script>
<style>
.carousel-item img {
    opacity: 0.8;
  }
  .carousel-caption {
    text-align: center;
    bottom:35%;
    /* left: 50%;
    transform: translateX(-50%); */
  }
</style>