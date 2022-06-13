<template>
  <ul>
    <!-- {{myDatam}} -->
    <!--chield componentten item delete-todo-item eventi yayınlıyoruz, gelen data aşağıdan gelir -->
    <TodoListItem v-for="todoItem in myDatam" :key="todoItem.id" :item="todoItem" @delete-todo-item="$emit('delete-todo-item',$event)"></TodoListItem>
  </ul>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";
export default {
  props: ["myDatam"],
  components: { TodoListItem },
};
</script>
