const app = Vue.createApp({
    data() {
        return {
            showBorder: false,
            boxClass: "border red",
            redBg: false,
            akif: false,
            bgColor: "cyan"
        };
    },
    computed: {
        boxClasses() {
            return {
                border: this.showBorder,
                red: this.redBg
            };
        }
    }
});
app.mount("#app");