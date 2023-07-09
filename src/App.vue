
course:

https://www.youtube.com/watch?v=5lVQgZzLMHc



<template>
  <div class="container">
    <!-- <AddTodo />
    <FilterTodos /> -->
    <AddTodoComponent/>
    <FilterTodoComponent/>
    <TodosComponent />
  </div>
  
</template>

<script>
import AddTodoComponent from './components/AddTodoComponent.vue';
import TodosComponent from "./components/TodosComponent.vue";
import FilterTodoComponent from "./components/FilterTodoComponent.vue";



export default {
  name: "App",
  components: {
    TodosComponent,
    AddTodoComponent,
    FilterTodoComponent
  },
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
