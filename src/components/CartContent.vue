<template>
  <div class="empty" v-if="products.quantity()=== 0">
    <h2>X</h2>
    <h1>Empty cart</h1>
  </div>
  <template v-else>
    <div v-for="(product,index) in products.selected"  :key="index" class="card">
      <h2>Product name</h2>
      <div class="detail">
        <h3>
          $ {{ product.value }} x {{ product.quantity }} = $
          {{ product.value * product.quantity }}
        </h3>
      </div>
      <div>
        <img :src="product.img" width="100" height="100" alt="product_image" />
      </div>
    </div>
  </template>
</template>
<script setup lang="ts">
import { useProductStore } from "../stores/product.store";

const { products } = useProductStore();
</script>

<style scoped>
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: tomato;
}
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  width: 100%;
  gap: 1rem;
}
</style>
