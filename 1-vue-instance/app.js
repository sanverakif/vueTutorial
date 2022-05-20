//Vue uygulamasını kullanmamız için bir method çağırdık

const app = Vue.createApp({
    data() {
        return {
            title: "bootcamp 1",
            description: "lorem akif",
            flow: {
                title: "akif",
                target: "_blank",
                url: "https://www.google.com/",
                alt: "sanver"
            },
            coords: {
                x: 0,
                y: 0
            }
        };
    },
    methods: {
        changeTitle(pTitle) {
            // alert();
            this.title = pTitle;
        },
        // updateCoords(event) {
        //     console.log("update coords",event.x,event.y);
        // }
        updateCoords(mesaj, event) {
            console.log(mesaj, event.x, event.y);
            this.coords = { x: event.x, y: event.y }
        }
    }
}).mount("#app");