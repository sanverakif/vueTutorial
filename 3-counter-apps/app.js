const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0
        };
    },
    methods: {
        inc() {
            this.counter++;
        },
        dec() {
            this.counter--;
        },

        // getResultCounter() {
        //     console.log("conunter 1 çalıştı");
        //     return this.counter > 5 ? "büyük" : "küçük"
        // },
        // getResultCounter2() {
        //     console.log("conunter 2 çalıştı");
        //     return this.counter2 > 5 ? "büyük" : "küçük"
        // }
    },
    computed: {
        getResultCounter() {
            console.log("counter 1 çalıştı");
            return this.counter > 5 ? "büyük" : "küçük"
        },
        getResultCounter2() {
            console.log("counter 2 çalıştı");
            return this.counter2 > 5 ? "büyük" : "küçük"
        }
    },
    watch: {
        counter(newValue, oldValue) {
            console.log("Counter", oldValue, "=>", newValue);
        },
        getResultCounter(newValue, oldValue) {
            console.log("Result", oldValue, "=>", newValue);
        }
    }
}).mount("#app");