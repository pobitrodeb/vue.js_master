<script  setup>
</script>

<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header text-center bg-primary text-white">
              Vue.js Todo App | www.pobitrodeb.com
            </div>
            <div class="card-body">
              <div class="card-title text-primary">Task List</div>
              <div class="row">
                <form>
                  <div class="col-md-12">
                    <label for="" class="form-label"> Add New Task </label>
                    <input type="text" class="form-control" />
                  </div>
                  <br />
                  <input type="submit" class="btn btn-primary" value="Submit" />
                </form>
              </div>
            </div>
          </div>

          <div class="card my-2">
            <div class="card-body">
              <ul class="list-group d-flex justify-content-between">
                <li class="list-group-item "> Task 1 
                  <a href="" class="btn"> <i class="fa-solid fa-xmark">  </i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style scoped>
</style>