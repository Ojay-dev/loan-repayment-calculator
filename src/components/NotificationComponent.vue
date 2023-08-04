<template>
  <section class="mt-10 lg:mt-0 lg:w-1/2">
    <div class="flex flex-col gap-y-10">
      <NotificationItem>
        <template #title>{{ props.monthlyPayment }}</template>
        <template #subtitle>Monthly Payments</template>
      </NotificationItem>

      <NotificationItem>
        <template #title>{{ props.totalInterest }}</template>
        <template #subtitle>Total Interest</template>
      </NotificationItem>

      <NotificationItem>
        <template #title>{{ props.totalPayment }}</template>
        <template #subtitle>Total Amount</template>
      </NotificationItem>
    </div>
  </section>
</template>

<script setup>
import NotificationItem from '@/components/NotificationItem.vue';

const props = defineProps({
  monthlyPayment: {
    type: Number,
    required: true,
    default: 0
  },
  totalInterest: {
    type: Number,
    required: true,
    default: 0
  },
  totalPayment: {
    type: Number,
    required: true,
    default: 0
  }
});
</script>
