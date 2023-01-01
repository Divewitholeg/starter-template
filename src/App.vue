<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="flex items-center justify-center h-screen bg-slate-200">
    <div class="flex-column h-[40vh] text-center [&_p]:mt-[5vh]">
      <img class="mx-auto" src="./assets/logo.svg" />
      <p>{{ $t("header.name") }}</p>
      <RouterView />
    </div>
  </div>
</template>
