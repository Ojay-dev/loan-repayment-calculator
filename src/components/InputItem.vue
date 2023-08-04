<template>
  <div class="flex flex-col gap-y-3 md:flex-row">
    <div class="flex items-center gap-x-6 md:w-2/3">
      <span class="number"> <slot name="sn"></slot></span>
      <span class="text-lg text-[#4a4a4a]"><slot name="field"></slot></span>
    </div>

    <slot name="input"></slot>
  </div>
</template>

<script setup></script>

<style scoped></style>
