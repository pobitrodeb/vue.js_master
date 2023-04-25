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
                    <label for="" class="form-label"> 
                       <span v-if="!todoStore.isEdit"> Add New Task </span> 
                       <span v-else>UpdateTask </span> 
                      </label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="todoStore.todoForm.title"
                    />
                  </div>
                  <br />
                  <input
                    type="submit"
                    class="btn btn-primary"
                    value="Add Task"
                    @click.prevent="todoStore.createTodo"
                    v-if="!todoStore.isEdit ? 'warning' : ''" />
                  <input
                    type="submit"
                    class="btn btn-warning"
                    value="Update Task" v-else
                    @click.prevent="todoStore.createTodo"
                   />
                  
                </form>
              </div>
            </div>
          </div>

          <div class="card my-2">
            <div class="card-body">
              <ul class="list-group d-flex">
                <li
                  v-for="todo in todoStore.todos"
                  :key="todo.id"
                  class="list-group-item d-flex justifiy-content-between"
                >
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    class="form-check-input mx-2"
                  />
                  <span
                    :class="todo.completed ? 'text-success' : 'text-danger'"
                  >
                    {{ todo.title }}
                  </span>

                  <div class="">
                    <a href="" class="btn">
                      <i class="fa-solid fa-edit" @click.prevent="todoStore.getTodo(todo.id)"> </i
                    ></a>
                    <a
                      href=""
                      class="btn"
                      @click.prevent="todoStore.deleteTodo(todo.id)"
                    >
                      <i class="fa-solid fa-xmark"> </i
                    ></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
