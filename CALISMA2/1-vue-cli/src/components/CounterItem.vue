<template>
  <div class="container">
    <h3 class="mb-2">{{ counter }}</h3>
    <button class="red" @click="counter--"></button
    ><button class="green" @click="counter++"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
};
</script>
