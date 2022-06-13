<template>
  <div>
    <user-list></user-list>
    <new-user></new-user>
    <!-- <p>akif emre</p>
    <p>{{ $store.state.person }}</p>
    <p>{{ $store.state.tema }}</p>

    <ul>
      <li v-for="persisins in $store.state.persisins" :key="persisins">
        {{ persisins }}
      </li>
    </ul>

    <ul>
      <li v-for="user in $store.state.userList" :key="user">
        {{ user }}
      </li>
    </ul> -->

    <!-- <ul>
      <li v-for="(user, index) in $store.getters.insan" :key="index"> -->
    <!--Computed içinde mapgettershali-->
    <!-- <li v-for="(user, index) in insan" :key="index"></li> -->
    <!--Computed içinde fonksiyon hali-->
    <!-- <li v-for="(user, index) in yazilim" :key="index"> -->
    <!-- {{ user.title }}
      </li>
    </ul> -->

    <!-- {{ $store.state.fullName }} -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import { mapGetters } from "vuex";
import userList from "@/components/userList";
import newUser from "@/components/newUser";

export default {
  name: "App",
  components: {
    // HelloWorld,
    newUser,
    userList,
  },
  methods: {
    updateName() {
      //yazılım alanında eklendi ve getters bu değeri kayıt alına alıp bize yazılım alanında olan dataları getirircek
      this.$store.state.itemList.push({ id: 6, title: "alp", type: "yazılım" });
      this.$store.state.fullName = "sanver emre akif";
    },
  },

  // computed: mapGetters(["insan", "activeUser"]),
  // ...mapGetters(["insan", "activeUser"])
  // mapGetters(["insan"])
  //   // yazilim() {
  //   //   return this.$store.getters.insan;
  //   // },
  // },
  created() {
    // console.log(this.$store);
    // console.log(this.$store.state.person);
    // console.log(this.$store.state.tema);
    // //basligi akif olan dataları çağır
    // console.log(this.$store.state.itemList.filter((i) => i.title == "akif"));
    // console.log(this.$store.getters.insan);
    // console.log(this.$store.getters.activeUser);
    // console.log("this.activeUser == ", this.activeUser);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
