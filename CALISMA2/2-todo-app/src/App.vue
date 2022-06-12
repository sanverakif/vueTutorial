<template>
  <div class="container">
    <h3 class="text-center">todo app</h3>
    <hr />
    <AddSection></AddSection>
    <TodoList></TodoList>
    <ResultBar></ResultBar>
    
  </div>
</template>

<script>
import AddSection from "@/components/AddSection";
import TodoList from "@/components/TodoList";
import ResultBar from "@/components/ResultBar";
export default {
  components: { AddSection, TodoList, ResultBar },
  data() {
    return {
      todoList: [
        { id: 1, text: "bootcamp 1" },
        { id: 2, text: "bootcamp 2" },
        { id: 3, text: "bootcamp 3" },
        { id: 4, text: "bootcamp 4" },
        { id: 5, text: "bootcamp 5" },
        { id: 6, text: "bootcamp 6" },
      ],
    };
  },
  methods: {
    deleteItem(todoItem) {
      this.todoList = this.todoList.filter((x) => x != todoItem);
    },
    addTodo(event) {
      this.todoList.push({
        id: new Date().getTime(),
        text: event.target.value,
      });
      event.target.value = "";
    },
  },
};
</script>
