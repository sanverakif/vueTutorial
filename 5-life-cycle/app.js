const app = Vue.createApp({
    data() {
        return {
            title: "test başlığı",
            itemList: []
        };
    },
    beforeCreate() {
        console.log("beforeCreate çalıştı");
    },
    created() {
        console.log("created çalıştı");

        setTimeout(() => {
            this.itemList = [0, 12, 61, 11, 2, 6];
        }, 2000);
        setTimeout(() => {
            this.title = "bu yeni baslık";
        }, 3000);
    },
    beforeMount() { console.log("beforeMount çalıştı"); },
    mounted() { console.log("mounted çalıştı"); },
    beforeUpdate() { console.log("beforeUpdated çalıştı"); },
    updated() { console.log("updated çalıştı"); },
    beforeUnmount() { console.log("beforeUnMounted çalıştı"); },
    unmounted() { console.log("unMounted çalıştı"); }
});
app.mount("#app");

setTimeout(() => {
    app.unmount();
}, 5000);