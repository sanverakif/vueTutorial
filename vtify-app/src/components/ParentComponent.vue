<template>
  <div>
    <p>Parent sayfası</p>
    <ChieldComponent
      :person_data="personal"
      @yeniIsim="change_name_func"
    ></ChieldComponent>
  </div>
</template>

<script>
import ChieldComponent from "./ChieldComponent";
export default {
  components: { ChieldComponent },
  data() {
    return {
      personal: {
        fullName: "Akif emre sanver",
        dogumTarihi: "2000",
        age: 22,
        film: ["kvp", "ezel", "adanalı"],
      },
    };
  },
  methods: {
      
    change_name_func(newName) {
      if (!newName) return;
      this.personal.fullName = newName;
    },
    // change_name_func(new_name) {
    //   if (!new_name) return;
    //   this.personal.fullName = new_name;
    // },
  },
};
</script>

<style></style>
