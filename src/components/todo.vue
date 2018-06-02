<template>
  
    <section class="real-app">
      <input type="text" class="add-input" autofocus="autofocus" placeholder="接下来想要做什么？" @keyup.enter="addItem">
      <item v-for="todo of unfinishedList" :key="todo.id" :todo="todo" @deleteItem="deleteItem"></item>
      <tabs :filter="filter" :todolist="todolist" @toggleFilter="toggleFilter" @clearAllCompleted="clearAllCompleted"></tabs>
    </section>
    

</template>

<script>
import item from "./item.vue";
import tabs from "./tabs.vue";

let id = 0;
export default {
  components: {
    item,
    tabs
  },
  data: function() {
    return {
      todolist: [],
      filter: "all"
    };
  },
  computed: {
    unfinishedList: function() {
      if (this.filter === "all") {
        return this.todolist;
      }
      const isCompleted = this.filter === "completed"; // 完成为true
      return this.todolist.filter(item => item.completed === isCompleted);
    }
  },
  methods: {
    addItem: function(e) {
      let inputValue = e.target.value;
      if (inputValue) {
        this.todolist.push({
          id: id++,
          content: e.target.value.trim(),
          completed: false
        });
      }
      e.target.value = "";
    },
    deleteItem: function(id) {
      this.todolist.splice(this.todolist.findIndex(item => item.id === id), 1);
    },
    toggleFilter: function(state) {
      this.filter = state;
    },
    clearAllCompleted: function() {
      this.todolist = this.todolist.filter(item => !item.completed);
    }
  }
};
</script>

<style lang="stylus" scoped>
.real-app {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}

.add-input {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 40px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
</style>
