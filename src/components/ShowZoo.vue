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
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
              @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <form class="p-4 shadow rounded">

              <div class="mb-6">

                <input type="int" class="form-control" id="zooid" placeholder="Enter zoo id" v-model="zooid" required>
              </div>
              <div class="mb-6">

                <select class="form-select mt-3" v-model="name" aria-label=".form-select-sm example">
                  <option selected>Select Zoo</option>
                  <option value="Mysore Zoo">Mysore Zoo</option>
                  <option value="Amirthi Zoological Park">Amirthi Zoological Park</option>
                  <option value="Alipore Zoological Gardens">Alipore Zoological Gardens</option>

                </select>
              </div>
              <div class="mb-6">

                <input type="text" class="form-control mt-3" id="location" placeholder=" Enter location"
                  v-model="location" required>
              </div>


              <div class="mb-6">

                <button type="button" class="btn btn-outline-primary mt-3 " @click="AddZoo">Submit</button>
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
          <th scope="col">Zoo ID</th>
          <th scope="col">Name</th>
          <th scope="col">Location</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="zoo in list" :key="zoo.id">
          <th scope="row">{{ zoo.id }}</th>
          <td>{{ zoo.zooid }}</td>
          <td>{{ zoo.name }}</td>
          <td>{{ zoo.location }}</td>
          <td>

            <button type="button" class="btn btn-success me-2" data-bs-toggle="modal" data-bs-target="#exampleModal1" >
              update
            </button>


            <!-- Modal for update-->
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">update</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <input type="number" class="form-control" id="zooid" >
                    <select class="form-select mt-3" aria-label=".form-select-sm example" >
                      <option selected>Select Zoo</option>
                      <option value="Mysore Zoo">Mysore Zoo</option>
                      <option value="Amirthi Zoological Park">Amirthi Zoological Park</option>
                      <option value="Alipore Zoological Gardens">Alipore Zoological Gardens</option>
                    </select>
                    <input type="text" class="form-control mt-3" id="location" >
                    <button type="button" class="btn btn-outline-primary mt-3 " >Submit</button>
                  </div>
                </div>
              </div>
            </div>
              <button @click="DeleteZoo(zoo.id)" type="button" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
    
<script>
import axios from 'axios';
export default {
  name: 'ShowZoo',
  data() {
    return {
      showModal: false,
      list: []
    }
  },
  mounted() {
    this.GetZoos();

  },
  methods: {
    GetZoos() {
      axios.get('http://localhost:8080/restdemo/webapi/zoo/getzoo')
        .then(response => {
          this.list = response.data;
        })
        .catch(error => {
          console.log(error);
        });

    },
    DeleteZoo(id) {
      axios.delete(`http://localhost:8080/restdemo/webapi/zoo/deletezoo/${id}`)
        .then(response => {
          console.log(response.data);
          alert("Data is Deleted");
          this.GetZoos();
        })
        .catch(error => {
          console.log(error);

        });

    },
    closeModal() {
      this.showModal = false;
    },
    AddZoo() {
      axios.post('http://localhost:8080/restdemo/webapi/zoo/createzoo', {
        zooid: this.zooid,
        name: this.name,
        location: this.location,

      })
        .then(response => {
          console.log(response.data);
          this.showModal = false;
          this.GetZoos();

        })
        .catch(error => {
          console.log(error);
        });
    },
    
  }
}


</script>
    
<style></style>