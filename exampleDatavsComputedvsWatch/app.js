//kod eksik benzer örnek


const app = Vue.createApp({
    data() {
        return {
            valid: true,
            numara: 123,
            isim: "akif",
            durum: String
        };
    },
    computed: {
        ...mapState("todo", ["numTodo"]),
        sumZero: 0,
        sumSum: () => { return this.numara + this.numara },

        fullAdress() {
            let addr = this.contact.address_1 ? this.contact.address_1 + ", " : "";
            addr += this.contact.address_2 ? addr + this.contact.address_2 : addr;

            return addr;
        }
    }
}).mount("#app");