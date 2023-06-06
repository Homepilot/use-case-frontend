<template>
  <div>
    <button @click="fetchData">Faire une requête HTTP</button>
    <pre>{{ response }}</pre>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      response: "",
    };
  },
  methods: {
    fetchData() {
      axios
        .get("http://localhost:3000")
        .then((response) => {
          this.response = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
