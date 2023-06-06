<script lang="ts">
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

const GET_HELLO = gql`
  query GetHello {
    getHello
  }
`;

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const { result, loading, error } = useQuery(GET_HELLO);
    return {
      result,
      loading,
      error,
    };
  },
};
</script>

<template>
  <div class="flex flex-col">
    <h1 class="text-3xl font-bold underline">
      {{ msg }}
    </h1>
    <pt
      ><strong> GraphQL : </strong>
      <pre>{{ loading ? "Chargement" : result }}</pre>
    </pt>
    <Button label="PrimeVue Button" />
  </div>
</template>
