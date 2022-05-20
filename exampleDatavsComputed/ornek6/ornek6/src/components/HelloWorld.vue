HelloWorld.vue Source Code for HelloWorld.vue as follows.
<template>
  <div class="hello">
    <h1 class="is-size-3">{{ msg }}</h1>
    <br />
    <div class="container" style="width: 35%">
      <input class="input" type="text" v-model="StartMsg" /><br /><br />
      <button class="button is-primary is-medium" @click="changeMsg">
        Click to change message
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      StartMsg: "",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    changeMsg() {
      this.$emit("changeMsg", this.StartMsg);
      console.log("message emit from child component");
    },
  },
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
