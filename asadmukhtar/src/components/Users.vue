<template>
    <div>
      <div class="jumbotron bg-danger p-5">
        <h2 class="text-white"> {{ title }}</h2>
        <p class="text-white">
          {{ user }} <br />
          <button class="btn btn-warning mt-2 rounded-0" v-on:click="checkfunction">Click Me For Method</button>
        </p>
      </div>
      <div class="container py-5">
        <div class="mb-2">
          <label>Title</label>
          <input type="text" class="form-control" v-model="title" />
        </div>
        <div class="row">
          <div class="col-lg-4">
              <div class="card mb-5 rounded-0">
                <div class="card-header">
                    <i class="fa fa-user-plus"></i> Add User
                </div>
                <div class="card-body">
                  <form>
                    <div class="mb-3">
                      <label for="name" class="form-label">Name</label>
                      <input type="text" class="form-control" id="name" placeholder="Enter name">
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input type="email" class="form-control" id="email" placeholder="Enter email">
                    </div>
                    <div class="mb-3">
                      <label for="gender" class="form-label">Gender</label>
                      <select class="form-select" id="gender">
                        <option value="" selected>Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="whatsapp" class="form-label">WhatsApp</label>
                      <input type="text" class="form-control" id="whatsapp" placeholder="Enter WhatsApp number">
                    </div>
                    <button type="button" class="btn btn-primary" v-on:click="submitForm">Add User</button>
                  </form>
                </div>
              </div>
          </div>
          <div class="col-lg-8">
            <div class="card rounded-0">
              <div class="card-header">
                <i class="fa fa-users"></i> Users
              </div>
              <div>
                <table class="table table-bordered table-hover table-stripped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Gender</th>
                      <th>WhatsApp</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="user in users" :key="user.id">
                      <td>{{ user.id }}</td>
                      <td>{{ user.name }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.gender }}</td>
                      <td>{{ user.whatsapp }}</td>
                      <td>
                        <button class="btn btn-sm btn-warning m-2">Edit</button>
                        <button class="btn btn-sm btn-danger">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        name:'Users',
        data () {
          return {
            title:'Users Section',
            user : {
              id:2,
              name:'Asad Mukhtar',
              email:'info@asadmukhtar.info',
              gender:'Male',
              whatsapp:'99999999999'
            },
            users : [
                {
                  id:1,
                  name:'Asad Mukhtar',
                  email:'info@asadmukhtar.info',
                  gender:'Male',
                  whatsapp:'99999999999'
                },
                {
                  id:2,
                  name:'Kashif Shamsudin',
                  email:'kashif043@gmail.com',
                  gender:'Male',
                  whatsapp:'99999999999'
                },
                {
                  id:3,
                  name:'Sumbal',
                  email:'sumbal@gmail.com',
                  gender:'Female',
                  whatsapp:'99999999999'
                },
                {
                  id:4,
                  name:'Rehan Ali',
                  email:'rehan.ali003@gmail.com',
                  gender:'Male',
                  whatsapp:'99999999999'
                },
                {
                  id:5,
                  name:'Ali Khan',
                  email:'rehan.ali003@gmail.com',
                  gender:'Male',
                  whatsapp:'99999999999'
                },
            ]
          }
        },
        methods: {
          checkfunction(){
            this.title = "Function is working"
          },
          submitForm() {
            alert('Form Is Submitted Succesfully');
          }
        }
    }
</script>