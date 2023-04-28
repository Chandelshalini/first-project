<template>
    <div class="background" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class=" mx-auto col-10 col-md-8 col-lg-6 " id="login">
            <form class="p-4 shadow rounded" style="border: 2px solid black;">
                <h1 class="h3 mb-6 fw-normal  ">Login</h1>
                <div class="mb-6">
                    <input type="email" class="form-control mt-3" id="email" placeholder="Enter your Email" v-model="email"
                        required>
                </div>
                <div class="mb-6">
                    <input type="password" class="form-control mt-3" id="password" placeholder=" Enter Password"
                        v-model="password" required>
                </div>
                <div class="">
                    <button type="button" class="btn btn-success mt-3 " @click="SubmitForm">Submit</button>

                </div>
            </form>
        </div>
    </div>
</template>
<script>
import backgroundImage from '../assets/img4.jpeg'
import axios from 'axios';
export default {
    name: 'LoginForm',
    data() {
        return {
            email: '',
            password: '',
            apiData: {},
            backgroundImage: backgroundImage,

        }
    },

    methods: {
        async SubmitForm() {

            try {
                const response = await axios.get('http://localhost:8080/restdemo/webapi/user/loginuser', {
                    params: {
                        email: this.email,
                        password: this.password
                    }
                });
                this.apiData = response.data;
                // console.log(response.data);
                let isValid = false;
                for (let i = 0; i < this.apiData.length; i++) {
                    const userData = this.apiData[i];

                    if (this.email === userData.email && this.password === userData.password) {
                        isValid = true;
                        break;
                    }
                }

                if (isValid) {
                    // localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("isLoggedIn", true);

                    this.isLoggedIn = true;

                    this.$router.push('/ZmsDashboard');
                } else {
                    alert("Invalid email or password");
                }
            }
            catch (error) {
                alert('Something went wrong. Please try again ');
            }
        }
    }
}
</script>
<style>
#login {
    padding-top: 8rem;

}

.background {
    background-size: cover;
    background-position: center;
    height: 100vh;


}
</style>