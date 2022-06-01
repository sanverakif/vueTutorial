const app = Vue.createApp({
    data() {
        return {}
    },
    methods: {
        test() {
            //form içindeki refleri verir
            console.log(this.$refs);
            //form içindeki belirtilen ref isminin element bütününü verir
            console.log(this.$refs.ref1);
            //form içindeki belirtilen ref isminin element içindeki değerini verir
            console.log(this.$refs.ref1.innerHTML);
            console.log(this.$refs.ref2.innerHTML);
            console.log('ref1', document.getElementById('idPa1').innerHTML);
            console.log('ref2', document.getElementById('idPa2').innerHTML);
        }
    }
}).mount("#app"); //id is app olan bölgeyi kontrol et