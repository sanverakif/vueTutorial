const app = Vue.createApp({
    data() {
        return {
            todoText: null,
            todoList: [],
        }
    },
    methods: {
        // yenimethod: function() {
        //     this.todoList.push(this.todoText);
        // },

        addTodo() {
            this.todoList.push(this.todoText);
        }
    },
}).mount("#app");