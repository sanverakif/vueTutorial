<template>
  <div>
    <p>Alt Component</p>
   
    <button @click="topla">Üst'e Gönder</button>
  </div>
</template>
<script>
export default {
  name: "AltComponent",
  data() {
    return {
      result: "kalp"
    };
  },
  methods: {
    topla() {
      this.$emit("toplamasonucu", this.result);
    },
  },
};
</script>
