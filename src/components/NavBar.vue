<template>
    <div>
        <nav class="navbar fixed-top navbar-light navbar-expand-lg " style="background-color: #e3f2fd;">
            <div class="container-fluid">
                <router-link class="nav-link mx2" to="/"> <a class="navbar-brand" href="#"><i
                            class="fa-solid fa-otter fa-lg"></i>Zoo Management System</a></router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <li v-if="isLoggedIn" class="nav-item" style="display:flex;">
                            <router-link class="nav-link mx2" to="/ZmsDashboard">Dashboard </router-link>
                            <router-link class="nav-link mx2" to="/LoginForm" @click="logout">Logout</router-link>
                        </li>


                        <!-- <form class="d-flex" > -->
                        <!-- <button class="btn btn-outline-info mx-2" type="submit">  -->
                        <li v-else style="display:flex;">
                            <router-link class="nav-link mx2" to="/SignupForm">Signup </router-link>
                            <router-link class="nav-link mx2" to="/LoginForm">Login</router-link>
                        </li>

                        <!-- </form> -->
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>

export default {
    name: 'NavBar',

    data() {
        return {
            isLoggedIn: false,

        }
    },
    mounted() {
        // check if the user is already logged in
        if (localStorage.getItem("isLoggedIn")) {
            this.isLoggedIn = true;
            console.log("isLoggedIn");
        }
    },
    methods: {
        logout() {

            localStorage.removeItem("isLoggedIn");
            this.isLoggedIn = false;
            this.$router.push("/");
        },
    },


}
</script>
<style></style>