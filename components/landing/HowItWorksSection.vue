<!-- components/landing/HowItWorksSection.vue -->
<template>
  <section id="how-it-works" class="bg-gray-50 py-16 lg:py-24">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {{ title }}
        </h2>
        <p class="mt-4 text-xl text-gray-600">
          {{ subtitle }}
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(step, index) in steps" :key="index" class="text-center">
          <div class="mb-6 flex justify-center">
            <div
              class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center"
            >
              <span class="text-3xl font-bold text-green-600">
                {{ index + 1 }}
              </span>
            </div>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900">
            {{ step.title }}
          </h3>
          <p class="text-gray-600">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "How Talentexis Works",
  },
  subtitle: {
    type: String,
    default: "Simplify your HR management in three easy steps",
  },
  steps: {
    type: Array,
    default: () => [
      {
        title: "Sign Up",
        description: "Create your account and set up your organization",
      },
      {
        title: "Add Employees",
        description: "Invite your team and set up their profiles",
      },
      {
        title: "Start Managing",
        description: "Track attendance, generate reports, and optimize",
      },
    ],
  },
});
</script>
