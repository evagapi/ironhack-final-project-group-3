<template>
  <div class="text-sm">
    <slot name="first"></slot>

    <div class="relative flex my-2 items-center w-full">
      <div class="flex-grow border-t border-gray-400"></div>
      <span class="flex-shrink mx-4 text-gray-400">Or</span>
      <div class="flex-grow border-t border-gray-400"></div>
    </div>

    <slot name="second"></slot>
  </div>
</template>
