<!-- components/landing/FeaturesSection.vue -->
<template>
    <section id="features" class="bg-gray-50 py-16 lg:py-24">
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
            v-for="(feature, index) in features" 
            :key="index" 
            class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="text-green-600 mb-4">
              <component :is="feature.icon" class="w-12 h-12" />
            </div>
            <h3 class="text-xl font-semibold mb-3 text-gray-900">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600">
              {{ feature.description }}
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
      default: 'Powerful Features for Modern HR'
    },
    subtitle: {
      type: String,
      default: 'Simplify your HR processes with our comprehensive tools'
    },
    features: {
      type: Array,
      default: () => [
        {
          icon: defineComponent({
            render() {
              return h('svg', { fill: 'currentColor', viewBox: "0 0 20 20" }, [
                h('path', { 
                  'fill-rule': "evenodd", 
                  d: "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11a1 1 0 11-2 0v-5a1 1 0 112 0v5zm-1-8a1 1 0 100 2 1 1 0 000-2z",
                  'clip-rule': "evenodd"
                })
              ])
            }
          }),
          title: 'Attendance Tracking',
          description: 'Real-time monitoring of employee attendance and work hours.'
        },
        {
          icon: defineComponent({
            render() {
              return h('svg', { fill: 'currentColor', viewBox: "0 0 20 20" }, [
                h('path', { d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" }),
                h('path', { 
                  'fill-rule': "evenodd", 
                  d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zM10 7a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z",
                  'clip-rule': "evenodd"
                })
              ])
            }
          }),
          title: 'Comprehensive Reporting',
          description: 'Generate detailed reports for informed decision-making.'
        },
        {
          icon: defineComponent({
            render() {
              return h('svg', { fill: 'currentColor', viewBox: "0 0 20 20" }, [
                h('path', { d: "M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zm3 4a1 1 0 100 2v-2zm-3 1a1 1 0 100-2v2zm1-4a1 1 0 100 2v-2zm-3 1a1 1 0 100-2v2z" }),
                h('path', { 
                  'fill-rule': "evenodd", 
                  d: "M10 14a4 4 0 100-8 4 4 0 000 8zm0 2a6 6 0 100-12 6 6 0 000 12z",
                  'clip-rule': "evenodd"
                })
              ])
            }
          }),
          title: 'Performance Analytics',
          description: 'Track and analyze employee performance metrics.'
        }
      ]
    }
  })
  </script>