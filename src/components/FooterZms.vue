<style>
footer {
  background-color: #e3f2fd;
  color: black;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10rem;
  padding: 1rem;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.first {
  
  flex-basis: 30%;
}
ul{
  list-style-type:none;
}
</style>
<template>
  <div>
    <footer>
      <div class="container">
        <div class="first">

          <h4><i class="fa-solid fa-otter"></i> Zoo Management System</h4>
          <p>This application provides an online and automated platform for Zoo Businesses to manage their daily records.
          </p>
        </div>
        <div class="first">
          <h4><i class="fa-solid fa-phone-volume"></i> Contact us </h4>
          <ul>
            <li><i class="fa-solid fa-location-dot"></i> Himachal Pradesh,India</li>
            <li><i class="fa-solid fa-phone"></i> +9675849383</li>
            <li><i class="fa-solid fa-envelope"></i> Zms@gmail.com</li>
           

          </ul>
        </div>
        <div class="first">
          <h4><i class="fa-solid fa-users"></i> Follow Us </h4>
          <ul>
          <li><i class="fa-brands fa-facebook"></i> Facebook</li>
            <li><i class="fa-brands fa-square-instagram"></i> Instagram</li>
            <li><i class="fa-brands fa-square-twitter"></i> Twitter</li>
          

          </ul>
        </div>
      </div>

    </footer>
  </div>
</template>
<script>
export default {
  name: 'FooterZms',
}
</script>