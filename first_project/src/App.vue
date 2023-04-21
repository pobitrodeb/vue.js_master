// Methods - es6 way
<template>
  <div>
    <h2> Course Name:  {{ course.name }}</h2>
    <p @click="changeMentor" >Course Platform: {{ course.platform }}</p>
    <button @click="increment(2)"> + </button>
    {{ count }} is {{ checkOddOrEven }} 
    <button @click="decrement(1)"> - </button>

    <!-- v-html  -->
    <h1 v-html="rawHTML">  </h1>

    <!-- v-show  -->
    <h1 v-show="showbtn"> Show or Hide </h1>
    <button @click="showbtn = !showbtn"> v-show </button>

    <!-- v-for  -->

    <div class="">
      <ul>
        <li v-for="todo in todos" :key="todo.id">{{ todo.id }} {{ todo.todo }}</li>
      </ul>
    </div>

    <h1> V-for Pactices  </h1>
    <div>
        <ul>
          <li v-for="(course, index) in courses" :key="index"> {{ index+1 }} <span>{{ course.title }}</span> </li>
        </ul>
    </div>

  </div>

</template>


<script setup>
  import {ref, reactive, computed, watch} from 'vue'; 
  let count = ref(0); 
  let course = reactive({
    name: "Vue.js Master Class", 
    platform: "Instructory", 
  })

  // v-html 
  let rawHTML = `<li>This data form v-html directives </li>`

  // v-show 
  let showbtn = ref(false);

  // v-for 
 let todos = ref([
      {id: 1, todo: "Task 1"},
      {id: 2, todo: "Task 2"},
      {id: 3, todo: "Task 3"},
      {id: 4, todo: "Task 4"},
      {id: 5, todo: "Task 5"},
      {id: 6, todo: "Task 6"},
 ]);

 let courses = ref([
    {id:1, title: 'PHP with MySQL'}, 
    {id:2, title: 'OOP'}, 
    {id:3, title: 'Laravel'}, 
    {id:4, title: 'Vue.js'}, 
 ]);

// Method 
 const increment = item => count.value += item
 const decrement = item => count.value -= item
 const changeMentor = () => course.platform = "Udemay"

 //computed 
const checkOddOrEven = computed(() => {
  return count.value % 2 === 0 ? 'even' : 'odd';
})

//Wathcer 
  watch(() => count.value, (newValue, oldValue) => {
    console.log('newValue', newValue); 
    console.log('oldValue', oldValue);

    if(newValue > 10){
      alert('Counter value is over than 10');
    }

  })

</script>
