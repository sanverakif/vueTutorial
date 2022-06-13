<template>
  <ul>
    <li v-for="(user, index) in insan" :key="index">
      {{ user.title }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      insan: "insan",
      activeUser: "activeUser",
    }),
  },
};
</script>
