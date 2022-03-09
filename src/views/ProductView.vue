<template>
  <div class="mt-3 mb-3 text-center">
    <h2>單一產品</h2>
  </div>
  <div class="container">
    <template v-if="product.category">
      <div class="card mb-3 text-center">
        <div>
          <img
            :src="product.imageUrl"
            class="card-img-top primary-image img-fluid"
            style="width: 200px; height: 200px; object-fit: cover"
            alt="主圖"
          />
        </div>
        <div class="card-body">
          <h3 class="card-title">
            {{ product.title }}
            <span class="badge bg-primary ms-2">{{ product.category }}</span>
          </h3>
          <p>
            <span class="fs-4">商品描述：</span> <br />{{ product.description }}
          </p>
          <p>
            <span class="fs-4">商品內容：</span> <br />{{ product.content }}
          </p>
          <div class="d-flex justify-content-center">
            <p class="card-text me-2">{{ product.price }}</p>
            <p class="card-text text-secondary">
              <del>{{ product.origin_price }}</del>
            </p>
            {{ product.unit }} / 元
          </div>
          <div>
            <button
              type="button"
              class="btn btn-secondary"
              @click="$router.back"
            >
              返回
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    getProduct() {
      console.log(this.$route);
      const { id } = this.$route.params;
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
        )
        .then((res) => {
          this.product = res.data.product;
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
