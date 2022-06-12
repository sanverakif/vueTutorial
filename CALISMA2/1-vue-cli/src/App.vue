<template>
<app-header></app-header>
  <div class="containers">
    <h3>ilk cli uygulaması</h3>
    <p>component ve cli konusu</p>
  </div>
  <counter-item></counter-item>
</template>

<script>
import CounterItem from "@/components/CounterItem";
export default {
  components: { CounterItem },
};
</script>
