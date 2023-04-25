<script  setup>
import { onMounted } from "vue";
import { useTodoStore } from "./stores/todo";
const todoStore = useTodoStore();

onMounted(() => {
  todoStore.getAllTodos();
});
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
                    <input type="text" class="form-control" v-model="todoStore.todoForm.title"/>
                  </div>
                  <br />
                  <input type="submit" class="btn btn-primary" value="Submit" @click.prevent="todoStore.createTodo"/>
                </form>
              </div>
            </div>
          </div>

          <div class="card my-2">
            <div class="card-body">
              <ul class="list-group d-flex justify-content-between">
                <li
                  v-for="todo in todoStore.todos"
                  :key="todo.id"
                  class="list-group-item"
                >
                  <span :class="todo.completed ? 'bg-success' : 'bg-danger'">
                    {{ todo.title }}
                  </span>

                  <a href="" class="btn"> <i class="fa-solid fa-xmark"> </i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
