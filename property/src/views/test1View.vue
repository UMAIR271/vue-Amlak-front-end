<!-- <template>
  <div>
    <h1>hello</h1>
    <p>{{ stateData }}</p>
    <input type="text" v-model="searchTerm1" placeholder="Search by name..." />
    <input type="text" v-model="searchTerm2" placeholder="Search by date..." />
    <button @click="sendData">Search</button>
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const stateData = store.state.data.name;

    return {
      stateData,
    };
  },
  data() {
    return {
      searchTerm1: "",
      searchTerm2: "",
      items: [],
    };
  },

  computed: {
    filteredItems() {
      return this.items.filter(
        (item) =>
          (!this.searchTerm1 ||
            item.name.toLowerCase().includes(this.searchTerm1.toLowerCase())) &&
          (!this.searchTerm2 ||
            item.date.toLowerCase().includes(this.searchTerm2.toLowerCase()))
      );
    },
  },
  methods: {
    sendData() {
      const params = {};
      console.log(this.searchTerm1);
      if (this.searchTerm1) params.Type = this.searchTerm1;
      if (this.searchTerm2) params.Bedrooms = this.searchTerm2;
      this.$store.commit({
        type: "addData",
        data: params,
      });
      axios
        .get("http://18.177.139.152/list/filter/", {
          params,
        })
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script> -->

<template>
  <div>
    <select v-model="selectedOption">
      <option :value="null">property_type</option>
      <option>property_tydfdfe</option>
      <option v-for="option in options" :key="option" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: null,
    };
  },
  computed: {
    options() {
      return [
        { value: "option1", text: "Option 1" },
        { value: "option2", text: "Option 2" },
        { value: "option3", text: "Option 3" },
      ];
    },
  },
};
</script>
