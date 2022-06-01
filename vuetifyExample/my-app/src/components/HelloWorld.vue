<template>
  <v-container>
    <v-row style="margin-top: 50px">
      <v-col col="6">
        <v-slider
          v-model="value"
          :rules="rules"
          label="How many?"
          step="10"
          thumb-label="always"
          ticks
        ></v-slider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    value: 0,
    rules: [(v) => v <= 50 || "Can't have more than 50"],
  }),
};
</script>
