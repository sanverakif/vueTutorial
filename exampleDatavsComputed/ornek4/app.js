const app = Vue.createApp({
    data() {
        return {
            startMsg: ""
        }
    },
    props: {
        msg: String
    },
    methods: {
        changeMsg: function() {
            this.$emit("degisenMesaj", this.startMsg)
            console.log('mesaj child')
        }
    }
}).mount("#app");