<template>
  <div>
    <h2>{{ person_data.fullName }}</h2>
    <label
      >ad degistir
      <input type="text" v-model="yeni_isim"/>
      <button @click="yeniIsim">Tıkla</button>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yeni_isim: null,
    };
  },
  props: ["person_data"],
  methods: {
    yeniIsim() {
      this.$emit("yeniIsim", this.yeni_isim);
    },
  },
};
</script>

<style></style>
