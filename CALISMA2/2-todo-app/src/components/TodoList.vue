<template>
  <ul>
    <TodoListItem v-for="i in 10" :key="i"></TodoListItem>
  </ul>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";
export default {
  components: { TodoListItem },
};
</script>
