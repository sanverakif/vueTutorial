<template>
  <v-app>
    <v-main>
      <HelloWorld />
      <ParentComponent/>
      <ChieldComponent/>
    </v-main>
    <!-- <v-content>
      <hello-world></hello-world>
    </v-content> -->
    <v-btn xs12 color="success" raised>text</v-btn>
    <v-btn xs12 color="success" outlined>text</v-btn>
    <v-btn xs12 color="success" depressed>text</v-btn>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import ChieldComponent from "./components/ChieldComponent";
import ParentComponent from "./components/ParentComponent";
export default {
  name: "App",

  components: {
    HelloWorld,
    ChieldComponent,ParentComponent,
  },

  data: () => ({
    //
  }),
};
</script>
