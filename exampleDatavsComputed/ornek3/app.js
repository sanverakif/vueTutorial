const app = Vue.createApp({
    data() {
        return {
            name1: "java",
            name2: "c#",

        }
    },
    methods: {
        Msg: function() {
            return 'coding done by' + this.name1 + '' + this.name2
        }
    }
}).mount("#app");