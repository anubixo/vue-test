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
<div class="hotel-header d-flex justify-content-between">
    <h5 class="hotels-title">{{ title }}
        <span class="hotel-rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
        </span>
        <span class="bk-icon">
            <i class="fa fa-thumbs-o-up"></i>
        </span>
    </h5>
    <form action="">
        <button type="button" class="hotel-save" data-title="save">
            <i class="fa fa-heart-o"></i>
        </button>
        <button type="button" class="hotel-share" data-title="share">
            <i class="fa fa-share-alt"></i>
        </button>
        <button type="button" class="btn btn-primary hotel-reserve">reserve</button>
    </form>
</div>
<div class="hotel-location mb-2">
    <i class="fa fa-map-marker"></i>
    <span>{{ city }}, {{ country }}</span>
</div>
</template>
