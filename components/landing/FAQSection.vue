<template>
  <section id="faq" class="py-16 lg:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p class="mt-4 text-xl text-gray-600">
          Got questions? We've got answers.
        </p>
      </div>
      <div class="max-w-3xl mx-auto">
        <div class="space-y-4">
          <FAQItem
            v-for="(faq, index) in faqs"
            :key="index"
            :question="faq.question"
            :answer="faq.answer"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FAQItem from "./FAQItem.vue";

const faqs = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes! We offer a 14-day free trial for all our plans. No credit card required.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely. You can upgrade, downgrade, or cancel your subscription at any time.",
  },
  {
    question: "Do you offer data migration?",
    answer:
      "Yes, we provide free data migration support for new customers. Contact our sales team for details.",
  },
];
</script>
