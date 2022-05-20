const app = Vue.createApp({
    data() {
        return {
            itemList: ["elma", "armut", "kiraz"],
            search: "",
            filter: []
        }
    },
    methods: {
        searchList() {
            alert();
            this.filter = this.itemList.filter((i) => i.includes(this.search));

            // console.log("filter", filter);
        },
    },
    computed: {
        filterList() {
            return this.itemList.filter(i => i.includes(this.search))
        }
    }

}).mount("#app");