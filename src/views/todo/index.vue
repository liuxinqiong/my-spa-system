<template>
  <section class='real-app'>
      <input type="text" class='add-input' autofocus placeholder="接下去要做什么？" @keyup.enter="addTodo">
      <Item
        v-for="todo in filteredTodos"
        :key="todo._id"
        :todo.sync="todo"
        @del="deleteTodo"
        @update:completed="toggleCompleted(todo, $event)"
      />
      <Tabs :filter="filter" :todos="todos" @toggle="toggleFilter" @clearAll="clearAllCompleted"></Tabs>
  </section>
</template>

<script>
import Item from "./item.vue";
import Tabs from "./tabs.vue";
import TODO from '@/service/todo'

export default {
  components: {
    Item,
    Tabs
  },
  data() {
    return {
      todos: [],
      filter: "all"
    };
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      const completed = this.filter === "completed";
      return this.todos.filter(todo => completed === todo.completed);
    }
  },
  methods: {
    addTodo(e) {
      TODO.create({
        todo: {
          content: e.target.value.trim()
        }
      }).then( data => {
        e.target.value = "";
        this.getList()
      })
    },
    toggleFilter(state) {
      this.filter = state;
    },
    toggleCompleted(todo, completed) {
      TODO.updateOne({
        todo: {
          ...todo,
          completed
        }
      })
    },
    deleteTodo(_id) {
      let todo = this.todos.filter(todo => todo._id === _id)[0]
      TODO.updateOne({
        todo: {
          ...todo,
          isDel: true
        }
      }).then(data => {
        this.todos.splice(this.todos.findIndex(todo => todo._id === _id), 1);
      })
    },
    clearAllCompleted() {
      const todoIds = this.todos.filter(todo => todo.completed).map(todo => todo._id);
      TODO.update({
        todoIds: todoIds,
        todo: {
          isDel: true
        }
      }).then(data => {
        this.todos = this.todos.filter(todo => !todo.completed)
      })
    },
    getList() {
      TODO.list().then(data => {
        this.todos = data
      })
    },
    init() {
      this.getList()
    }
  },
  created() {
    this.init()
  }
};
</script>

<style lang="scss" scoped>
.real-app {
    width: 600px;
    margin: 0 auto;
    box-shadow: 0 0 5px #666;
}

.add-input {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    outline: none;
    color: inherit;
    box-sizing: border-box;
    font-smoothing: antialiased;
    padding: 16px 16px 16px 36px;
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
</style>

