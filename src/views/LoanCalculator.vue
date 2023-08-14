<template>
  <Toaster position="top-center" />
  <section class="mx-auto max-w-screen-2xl px-[5%] py-8 lg:py-[100px]">
    <div class="flex flex-col items-center">
      <h1 class="font-product-sans text-4xl font-bold">
        Simple Loan <span class="text-[#5fcda1]">Calculator</span>
      </h1>
      <p class="mt-3 max-w-xl text-center font-product-sans">
        The Simple Loan Calculator will determine your estimated payments for loan amounts, interest
        rates, and terms.
      </p>
    </div>

    <div class="mt-20 items-center gap-x-10 lg:flex">
      <form @submit.prevent="computeResults" class="border border-gray-300 px-10 py-20 lg:w-1/2">
        <div class="flex flex-col gap-y-10 md:gap-y-6">
          <!-- Left side -->

          <InputItem>
            <template #sn>1</template>
            <template #field>Loan Amount</template>
            <template #input>
              <input v-model="loanData.amount" class="input sm:2/3 lg:w-1/3" type="number" />
            </template>
          </InputItem>

          <InputItem>
            <template #sn>2</template>
            <template #field>Interest Rate</template>
            <template #input>
              <input v-model="loanData.interest" class="input sm:2/3 lg:w-1/3" type="number" />
            </template>
          </InputItem>

          <InputItem>
            <template #sn>3</template>
            <template #field>Number Of Years</template>
            <template #input>
              <input v-model="loanData.years" class="input sm:2/3 lg:w-1/3" type="number" />
            </template>
          </InputItem>
        </div>

        <button
          type="submit"
          class="mx-auto mt-16 flex w-full items-center justify-center bg-[#5fcda1] p-3 text-white hover:opacity-90 lg:mt-10"
        >
          Calculate
        </button>
      </form>

      <NotificationComponent
        :monthlyPayment="monthlyPayment"
        :totalInterest="totalInterest"
        :totalPayment="totalPayment"
        class="notification-component"
      />
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { Toaster, toast } from 'vue-sonner';
import InputItem from '@/components/InputItem.vue';
import NotificationComponent from '@/components/NotificationComponent.vue';

// Data setup
const loanData = reactive({
  amount: 0,
  interest: 0,
  years: 0
});
const monthlyPayment = ref(0);
const totalInterest = ref(0);
const totalPayment = ref(0);

// Loan calculation function
const computeResults = () => {
  if (loanData.amount === 0 || loanData.interest === 0 || loanData.years === 0) {
    toast.error('Please fill all fields');
    return;
  }

  const principal = parseFloat(loanData.amount);
  const calculateInterest = parseFloat(loanData.interest) / 100 / 12;
  const calculatedPayments = parseFloat(loanData.years) * 12;

  const x = Math.pow(1 + calculateInterest, calculatedPayments);
  const monthly = (principal * x * calculateInterest) / (x - 1);
  monthlyPayment.value = monthly.toFixed(2);
  totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
  totalPayment.value = (monthly * calculatedPayments).toFixed(2);
};
</script>

<style scoped></style>
