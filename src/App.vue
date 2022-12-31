<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="flex items-center justify-center h-screen bg-slate-200">
    <div class="flex-column h-[20vh] text-center [&_p]:my-[5vh]">
      {{ $t("header.name") }}
      <RouterView />
    </div>
  </div>
</template>
