<template>
  <button @click="updateName">fullname değistir</button>
</template>
<script>
export default {
  methods: {
    updateName() {
      //yazılım alanında eklendi ve getters bu değeri kayıt alına alıp bize yazılım alanında olan dataları getirircek
      this.$store.state.itemList.push({ id: 6, title: "alp", type: "yazılım" });
      this.$store.state.fullName = "sanver emre akif";
    },
  },
};
</script>
