import { createStore } from "vuex";


const store = createStore({
    state: {
        person: { name: "Akif", age: 20, passWord: 12345, tc: 11111 },
        fullName: "akif emre sanver",
        tema: "dark",
        persisins: [1, 2, 3, 4, 5, 6],
        userList: ["akif", "emre", "sanver", "suleyman", "sanver"],
        itemList: [
            { id: 1, title: "akif", type: "yazılım" },
            { id: 2, title: "ahmet", type: "satış" },
            { id: 3, title: "ethem", type: "hoca" },
            { id: 4, title: "süleyman", type: "yazılım" },
            { id: 5, title: "sedat", type: "pazarlama" }
        ]
    },
    getters: {
        insan: state => state.itemList.filter(x => x.type === "yazılım"),
        activeUser(state) {
            const user = {...state.person };
            delete user.passWord;
            return user;
        }
    }
})

export default store;