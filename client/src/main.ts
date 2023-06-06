import { createApp, provide, h } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";

import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

import "./input.css";
import "./style.css";

import App from "./App.vue";

import Button from "primevue/button";

const pinia = createPinia();

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "http://localhost:3000/graphql",
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(PrimeVue);
app.use(pinia);
app.component("Button", Button);

app.mount("#app");
