<template>
  <div class="header">
    <h1>Tiendita</h1>
    <h2 @click="openModal" :class="products.quantity() > 0 ? 'cart' : ''">
      Articulos: {{ products.quantity() }}
    </h2>
    <Modal v-if="modalVaue.open"></Modal>
  </div>
</template>
<script setup lang="ts">
import { useProductStore } from "../stores/product.store";

import Modal from "./Modal.vue";
import { useModalStore } from "../stores/modal.store";

const { modalVaue, openModal } = useModalStore();

console.log(modalVaue.open);
</script>

<style scoped>
.header {
  background-color: #f1f1f1;
  padding: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.cart {
  cursor: pointer;
}

.cart:hover {
  color: #f1f1f1;
  font-weight: bolder;
}
</style>
