<!-- components/landing/PricingSection.vue -->
<template>
  <section id="pricing" class="py-16 lg:py-24 bg-white">
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
        <div
          v-for="(plan, index) in plans"
          :key="index"
          :class="[
            'bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300',
            plan.featured ? 'transform scale-105' : '',
          ]"
        >
          <div
            v-if="plan.featured"
            class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <span
              class="bg-green-500 text-white px-3 py-1 rounded-full text-sm"
            >
              {{ plan.featuredLabel }}
            </span>
          </div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">
            {{ plan.name }}
          </h3>
          <div class="mb-6">
            <span class="text-4xl font-extrabold text-gray-900">
              {{ plan.price }}
            </span>
            <span class="text-gray-600">
              {{ plan.billingCycle }}
            </span>
          </div>
          <ul class="mb-8 space-y-4 text-gray-600">
            <li
              v-for="(feature, featureIndex) in plan.features"
              :key="featureIndex"
            >
              {{ feature }}
            </li>
          </ul>
          <NuxtLink
            :to="plan.buttonLink"
            class="block w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            {{ plan.buttonText }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Simple, Transparent Pricing",
  },
  subtitle: {
    type: String,
    default: "Choose the plan that fits your organization's needs",
  },
  plans: {
    type: Array,
    default: () => [
      {
        name: "Starter",
        price: "$29",
        billingCycle: "/month",
        features: [
          "Up to 10 Employees",
          "Basic Attendance Tracking",
          "Email Support",
        ],
        buttonText: "Get Started",
        buttonLink: "/signup",
        featured: false,
      },
      {
        name: "Pro",
        price: "$79",
        billingCycle: "/month",
        features: [
          "Up to 50 Employees",
          "Advanced Reporting",
          "Performance Analytics",
          "Priority Support",
        ],
        buttonText: "Get Started",
        buttonLink: "/signup",
        featured: true,
        featuredLabel: "Most Popular",
      },
      {
        name: "Enterprise",
        price: "Custom",
        billingCycle: "",
        features: [
          "Unlimited Employees",
          "Full Feature Set",
          "Dedicated Support",
          "Custom Integrations",
        ],
        buttonText: "Contact Sales",
        buttonLink: "/contact",
        featured: false,
      },
    ],
  },
});
</script>
