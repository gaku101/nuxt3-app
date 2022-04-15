<script setup>
const ctx = useRuntimeConfig();

const { data } = await useFetch("/blog", {
  baseURL: ctx.baseURL,
  headers: {
    "X-MICROCMS-API-KEY": ctx.apiKey,
  }
});
</script>


<template>
  <div>
    <h1>Hello, Nuxt3!</h1>
    <ul>
      <li v-for="article in data.contents" :key="article.id">
        <nuxt-link :to="`/${article.id}`">{{ article.title }}</nuxt-link>
        <!-- <p>{{ article.title }}</p> -->
      </li>
    </ul>
  </div>
</template>
