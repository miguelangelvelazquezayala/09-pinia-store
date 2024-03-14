import { defineStore } from "pinia";
import { reactive, computed } from "vue";

interface Product {
  img: string;
  name: string;
  value: number;
  quantity?: number;
}

interface SelectedProduct extends Product {
  quantity: number;
}

interface Products {
  available: Product[];
  selected: SelectedProduct[];
  quantity?: ()=>number;

}

export const useProductStore = defineStore("products", () => {

  const products:Products = reactive<Products>({
    available: [
      {
        img: "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGdsb2JvfGVufDB8fDB8fHww",
        name: "Product 1",
        value: 100,
      },
      {
        img: "https://images.unsplash.com/photo-1634017432755-0b8c4a369eef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMGZpZXN0YXxlbnwwfHwwfHx8MA%3D%3D",
        name: "Product 2",
        value: 200,
      },
      {
        img: "https://plus.unsplash.com/premium_photo-1675719867110-267941952143?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9kYXxlbnwwfHwwfHx8MA%3D%3D",
        name: "Product 3",
        value: 300,
      },

    ],
    selected: [],
    quantity:()=>products.selected.length >0? products.selected.map((product)=>product.quantity).reduce((a,b)=>a+b):0,
  });

  const addProduct = (product: Product) => {
    const productIndex = products.selected.findIndex(
      (p) => p.name === product.name
    );

    if (productIndex !== -1) {
      products.selected[productIndex].quantity++;
      return;
    }
    
    //else {
      products.selected.push({ ...product, quantity: 1 });
   // }
   // console.log(products.selected);
  };

  // const quantity = computed(() => {
  //   return products.selected.reduce((acc, product) => {
  //     return acc + product.quantity;
  //   }, 0);
  // });

  return { products, addProduct };
});
