const app = Vue.createApp({
    data() {
        return {
            fullName: "akif emre sanver",
        };
    },
    methods: {
        updateValue: function(akif) {
            console.log(akif.target.value);
            this.fullName = akif.target.value;
        }
    }
}).mount("#app"); //id is app olan bölgeyi kontrol et