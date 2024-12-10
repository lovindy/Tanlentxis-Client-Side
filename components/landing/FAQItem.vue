<template>
  <div class="border-b pb-4">
    <h3
      class="text-lg font-semibold text-gray-900 mb-2 cursor-pointer"
      @click="toggleAnswer"
    >
      {{ question }}
    </h3>
    <p
      class="text-gray-600 transition-all duration-300 ease-in-out"
      :class="{ hidden: !isOpen }"
    >
      {{ answer }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const isOpen = ref(false);

const toggleAnswer = () => {
  isOpen.value = !isOpen.value;
};
</script>
