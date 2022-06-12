<template>
  <div id="app">
    <alt-component @toplamasonucu="gelen($event)" />
    Üst Componente Gelen Değer {{ hesaplama }}
  </div>
</template>
<script>
import AltComponent from "./components/AltComponent.vue";
export default {
  name: "App",
  data() {
    return {
      hesaplama: "değer bekleniyor",
    };
  },
  methods: {
    gelen(sonucdata) {
      this.hesaplama = sonucdata;
    },
  },
  components: {
    AltComponent,
  },
};
</script>
