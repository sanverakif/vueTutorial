<template>
  <input
    v-model="todoText"
    @keydown.enter="sendData"
    type="text"
    placeholder="akif sanver"
  />
</template>

<script>
export default {
  data() {
    return {
      todoText: null,
    };
  },
  methods: {
    sendData() {
      // this.$emit("test-event", "benim mesajım");
      this.$emit("add-todo", this.todoText);
      this.todoText = null;
    },
  },
};
</script>

<!-- <template>
  <label for="todoText"></label>
  <input type="text" id="todoText" placeholder="akif sanver" />
  <button class="green" @click="sendData">gönder</button>
</template>

<script>
export default{
  methods: {
    sendData(){
      this.$emit("test-event","benim mesajım")
    }
  },
}</script> -->
