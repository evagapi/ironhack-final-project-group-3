<template>
  <div class="main-full-height w-full flex justify-center items-center">
    <div
      class="bg-slate-200 rounded-lg shadow border border-gray-700 mx-auto inline-block w-96"
    >
      <div
        class="flex p-6 space-y-4 md:space-y-6 sm:p-8 flex-auto flex-wrap justify-center justify-items-center content-center"
      >
        <div class="space-y-4 md:space-y-6">
          <img
            class="mx-auto h-12 w-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Drake_Bulldogs_%22D%22_logo.svg/1113px-Drake_Bulldogs_%22D%22_logo.svg.png"
            alt="Your Company"
          />
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
