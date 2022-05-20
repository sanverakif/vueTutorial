const app = Vue.createApp({
    data() {
        return {
            title: "akif emre sanver"
        }
    },
    methods: {
        Msg: function() {
            return '$' + this.title
        }
    }
}).mount("#app");