<script>
export default {
  props: {
    title: String,
    city: String,
    country: String,
  }
}
</script>
<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item" v-if="country"><a href="#">{{ country }}</a></li>
      <li class="breadcrumb-item" v-if="city"><a href="#">{{ city }}</a></li>
      <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
    </ol>
  </nav>
</template>