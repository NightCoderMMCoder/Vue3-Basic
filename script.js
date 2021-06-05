// const h1 = document.querySelector("h1");
// const button = document.querySelector("button");

// let message = "Welcome To Vue3 Course";
// h1.innerText = message;

// button.addEventListener("click", handleClick);

// function handleClick() {
//   message = "Vue 3 Course";
//   // h1.innerText = message;
// }
// Pascal Case
// ComponentP
// Camel Case
// componentP
// Kebab Case
// component-p

const ComponentP = {
  // template, data, methods
  props: ["title", "user"],
  emits: ["changeTitle"],
  template: `
  <h1>{{title}}</h1>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita hic
    asperiores minus laudantium sit voluptas praesentium tenetur? Pariatur
    doloribus fugit atque soluta earum fugiat? Voluptates, amet molestiae.
    Qui, laborum modi. Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Est ipsam amet voluptatum, deserunt distinctio ducimus aliquid
    quibusdam totam eum commodi. Labore molestias sit natus deleniti tenetur
    tempore veniam officiis fuga.
  </p>
  <button v-on:click="$emit('changeTitle')">Click Me</button>
  <p>{{ user.name }} is {{ user.age }} years old.</p>
  <button v-on:click="changeUser">Change User</button>
  `,
  methods: {
    changeUser() {
      this.user.name = "Myo Thant Kyaw";
      this.user.age = 40;
    },
  },
};
const TodosList = {
  props: ["title", "todos"],
  emits: ["deleteTodo"],
  template: `
    <div v-if="todos.length > 0">
      <h1>{{ title }}</h1>
      <ul>
        <li
          v-for="todo in todos"
          class="todo"
          v-bind:class="[ todo.completed ? 'completed': 'remain' ]"
          v-on:click="todo.completed = !todo.completed"
        >
          <span>{{ todo.task }}</span>
          <button v-on:click.stop="$emit('deleteTodo', todo.id)">Delete</button>
        </li>
      </ul>
    </div>
  `,
};

Vue.createApp({
  components: {
    "component-p": ComponentP,
    "todos-list": TodosList,
  },
  // template, data, methods
  data() {
    return {
      message: "<p>Welcome To Vue3 Course</p>",
      count: 1,
      fruit: "apple",
      showText: false,
      googleLink: "https://www.google.com/",
      image:
        "https://cdn.pixabay.com/photo/2018/08/24/18/28/background-3628553__340.jpg",
      imageName: "bgImage",
      isLike: false,
      text: "",
      todos: [
        {
          id: 1,
          task: "Go Shopping",
          completed: false,
        },
        {
          id: 2,
          task: "Buy Tickets",
          completed: false,
        },
        {
          id: 3,
          task: "Game",
          completed: true,
        },
      ],
      formValidate: true,
      firstName: "Aung Myat",
      lastName: "Oo",
      title: "This is title from parent",
      user: {
        name: "Aung Myat Oo",
        age: 30,
      },
    };
  },
  methods: {
    increaseCount() {
      this.count++;
    },
    decreaseCount() {
      this.count--;
    },
    handleShowText(show) {
      this.showText = show;
    },
    handleClick() {
      if (this.text) {
        let newTask = {
          id: Math.floor(Math.random() * 1000000000000000),
          task: this.text,
          completed: false,
        };
        this.todos.push(newTask);
        this.text = "";
      }
      // this.$refs.task.style.borderColor = "red";
    },
    updateText(e) {
      if (!e.target.value) {
        this.formValidate = false;
      } else {
        this.formValidate = true;
      }
      this.text = e.target.value;
    },
    handleDelete(id) {
      const idx = this.todos.findIndex((todo) => todo.id === id);
      this.todos.splice(idx, 1);
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    completedTodos() {
      return this.todos.filter((todo) => todo.completed);
    },
    remainTodos() {
      return this.todos.filter((todo) => !todo.completed);
    },
  },
}).mount("#app");
