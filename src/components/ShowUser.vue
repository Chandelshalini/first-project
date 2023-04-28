<template>
  <div class="Data mt-5" style="text-align: center;">
    <h2><b>Details</b> </h2>

    <button type="button" @click="showModal = true" class="btn btn-primary" data-bs-toggle="modal"
      data-bs-target="#exampleModal" style="float:left;">
      +create
    </button>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content" v-if="showModal">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="closeModal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="p-4 shadow rounded">

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

                <input type="text" class="form-control mt-3" id="role" placeholder="Enter role" v-model="role" required>
              </div>

              <div class="mb-6">

                <button type="button" class="btn btn-outline-primary mt-3 " @click="AddUser">Submit</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>

    <table class="table table-striped mt-3" style="margin-bottom: 10rem;">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in list" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>

            <button type="button" class="btn btn-success me-2" data-bs-toggle="modal" data-bs-target="#exampleModal1"
              @click="updateModal(user)">
              update
            </button>

            <!-- Modal for update-->
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">Update</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <input type='text' class="form-control" id="name" v-model="userToUpdate.name" />

                      <input type="email" class="form-control mt-3" id="email" v-model="userToUpdate.email" required>

                      <input type="text" class="form-control mt-3" id="role" placeholder="Enter role"
                        v-model="userToUpdate.role" required>
                      <button type="button" class="btn btn-outline-primary mt-3 "
                        @click="updateUser(userToUpdate.id)">Submit</button>

                    </form>
                  </div>
                </div>
              </div>
            </div>
            <button @click="DeleteUser(user.id)" type="button" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ShowUser',
  data() {
    return {

      name: '',
      email: '',
      password: '',
      rpassword: '',
      role: '',
      showModal: false,
      userToUpdate: {},
      list: []
    }
  },
  mounted() {
    this.GetUsers();

  },
  methods: {
    GetUsers() {
      axios.get('http://localhost:8080/restdemo/webapi/user/getuser')
        .then(response => {
          this.list = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    DeleteUser(id) {
      axios.delete(`http://localhost:8080/restdemo/webapi/user/deleteuser/${id}`)
        .then(response => {
          console.log(response.data);
          alert("Data is Deleted");
          this.GetUsers();
        })
        .catch(error => {
          console.log(error);

        });

    },
    closeModal() {
      this.showModal = false;
    },
    AddUser() {
      axios.post('http://localhost:8080/restdemo/webapi/user/createuser', {
        name: this.name,
        email: this.email,
        password: this.password,
        rpassword: this.rpassword,
        role: this.role,
      })
        .then(response => {
          console.log(response.data);
          this.showModal = false;
          this.GetUsers();

        })
        .catch(error => {
          console.log(error);
        });

    },
    updateModal(user) {
      this.userToUpdate = user;

    },

    updateUser(id) {
      axios.put('http://localhost:8080/restdemo/webapi/user/updateuser/' + id, this.userToUpdate)
        .then(response => {

          console.log(response.data);
          this.showModal = false;
          this.GetUsers();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>

<style></style>