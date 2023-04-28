<template>
  <div class="Data mt-5 " style="text-align: center;">
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

                <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="name" required>
              </div>
              <div class="mb-6">

                <input type="text" class="form-control mt-3" id="breed" placeholder="Enter breed" v-model="breed"
                  required>
              </div>
              <div class="mb-6">

                <input type="text" class="form-control mt-3" id="cagenumber" placeholder="Enter cagenumber"
                  v-model="cagenumber" required>
              </div>
              <div class="mb-6">

                <select class="form-select mt-3" aria-label=".form-select-sm example" v-model="gender">
                  <option selected>Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>

                </select>
              </div>
              <div class="mb-6">

                <input type="text" class="form-control mt-3" id="zallocated" placeholder="Enter zoo allocated"
                  v-model="zallocated" required>
              </div>
              <div class="mb-6">

                <input type="file" class="form-control mt-3" id="animal_image" name="animal_image" required
                  v-on:change="onFileChange">
              </div>

              <div class="mb-6">

                <button type="button" class="btn btn-outline-primary mt-3 " @click="AddAnimal">Submit</button>
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
          <th scope="col">Breed</th>
          <th scope="col">Cagenumber</th>
          <th scope="col">Gender</th>
          <th scope="col">Zoo Allocated</th>
          <th scope="col">Animal Image</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="animal in list" :key="animal.id">
          <th scope="row">{{ animal.id }}</th>
          <td>{{ animal.name }}</td>
          <td>{{ animal.breed }}</td>
          <td>{{ animal.cagenumber }}</td>
          <td>{{ animal.gender }}</td>
          <td>{{ animal.zallocated }}</td>
          <td>{{ animal.animal_image }}</td>
          <td>
            <button type="button" class="btn btn-success me-2" data-bs-toggle="modal" data-bs-target="#exampleModal1"
              @click="updateModal(zoo)">
              update
            </button>

            
            <button @click="DeleteAnimal(animal.id)" type="button" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
    
<script>
import axios from 'axios';
export default {
  name: 'ShowAnimal',
  data() {
    return {
      list: [],
      showModal: false,
      image: null,
    }
  },
  mounted() {
    this.GetAnimals();

  },
  methods:
  {
    GetAnimals() {
      axios.get('http://localhost:8080/restdemo/webapi/animal/getanimal')
        .then(response => {
          this.list = response.data;


        })
        .catch(error => {
          console.log(error);
        });
    },
    DeleteAnimal(id) {
      axios.delete(`http://localhost:8080/restdemo/webapi/animal/deleteanimal/${id}`)
        .then(response => {
          console.log(response.data);
          alert("Data is Deleted");
          this.GetAnimals();
        })
        .catch(error => {
          console.log(error);

        });

    },
    onFileChange(e) {
      this.image = e.target.files[0];
    },
    closeModal() {
      this.showModal = false;
    },
    AddAnimal() {
      const data = {
        name: this.name,
        breed: this.breed,
        cagenumber: this.cagenumber,
        gender: this.gender,
        zallocated: this.zallocated,
        animal_image: this.image.name
      }

      axios.post('http://localhost:8080/restdemo/webapi/animal/createanimal', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log(this.image);
          console.log(response.data);
          this.showModal = false;
          this.GetAnimals();
        })
        .catch(error => {
          console.log(error);
        });
    },
    

  }

}
</script>
    
<style></style>