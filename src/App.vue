
<style></style>

<template>
  <NavBar />
  <router-view></router-view>
  <FooterZms />
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterZms from './components/FooterZms.vue'
export default {
  name: 'App',

  components: {
    NavBar,
    FooterZms,

  },
  data() {
    return {

    }
  }
}

</script>

