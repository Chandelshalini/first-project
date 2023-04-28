<template>
    <div class="background" :style="{ backgroundImage: `url(${backgroundImage})` }">
   
        <div class=" mx-auto col-10 col-md-8 col-lg-6 " id="Signup">
        <form class="p-4 shadow rounded" style="border: 2px solid black;">
            <h1 class="h3 mb-6 fw-normal ">SignUp</h1>

            <div class="mb-6">

                <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="name" required>
            </div>
            <div class="mb-6">

                <input type="email" class="form-control mt-3" id="email" placeholder="Enter your Email" v-model="email"
                    required>
            </div>
            <div class="mb-6">

                <input type="password" class="form-control mt-3" id="password" placeholder=" Enter Password"
                    v-model="password" required>
            </div>
            <div class="mb-6">

                <input type="password" class="form-control mt-3" id="rpassword" placeholder="Confirm your Password"
                    v-model="rpassword" required>
            </div>
            <div class="mb-6">
                <select class="form-select mt-3" id="role" v-model="role" aria-label="Default select example">
                    <option value="" disabled selected>Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Super_admin">Super_admin</option>
                    <option value="User">User</option>
                </select>
            </div>

            <div class="mb-6">

                <button type="button" class="btn btn-success mt-3 " @click="submitForm">Signup</button>
            </div>
        </form>
    </div>
</div>
</template>
<script>
import axios from 'axios';
import backgroundImage from '../assets/img4.jpeg';

export default {
    name: 'SignupForm',
    data() {
        return {

            name: '',
            email: '',
            password: '',
            rpassword: '',
            role: '',
            errror: {},
            backgroundImage: backgroundImage,

        };

    },

    methods: {
        submitForm() {
            if (!this.name && !this.email && !this.password && !this.rpassword && !this.role) {
                alert("Please enter the details first");
            }
            if (!this.email) {
                alert("Email is required");

            }
            if (this.password != this.rpassword) {
                alert("password is incorrect");
            }
            else {
                axios.post('http://localhost:8080/restdemo/webapi/user/createuser', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    rpassword: this.rpassword,
                    role: this.role,

                })
                    .then(response => {
                        console.log(response.data);
                        this.$router.push('/LoginForm');

                    })
                    .catch(error => {
                        console.log(error);
                    });
            }

        }

    },
};

</script>
<style>
#Signup {
   padding-top: 7rem;
}
.background {
  background-size: cover;
  background-position: center;
  height: 100vh;
  }
</style>