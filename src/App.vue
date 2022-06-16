<script setup>
import SinglePage from './components/SinglePage/SinglePage.vue';
document.title = 'Travveo';
</script>
<script>
// src\assets\js\jquery-3.2.1.min.js
export default {
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "./assets/js/jquery-3.2.1.min.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);

    plugin.setAttribute(
      "src",
      "./assets/js/animate.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);

    plugin.setAttribute(
      "src",
      "./assets/js/bootstrap.min.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);

    plugin.setAttribute(
      "src",
      "./assets/js/camroll_slider.min.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);

    plugin.setAttribute(
      "src",
      "./assets/js/datepicker.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);

    plugin.setAttribute(
      "src",
      "./assets/js/daterangepicker.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);

    plugin.setAttribute(
      "src",
      "./assets/js/fontawesome.min.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);

    plugin.setAttribute(
      "src",
      "./assets/js/fontawesome.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);

    plugin.setAttribute(
      "src",
      "./assets/js/index.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);

    plugin.setAttribute(
      "src",
      "./assets/js/moment.min.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);

    plugin.setAttribute(
      "src",
      "./assets/js/owl.carousel.min.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);

    plugin.setAttribute(
      "src",
      "./assets/js/owl.rows.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);

    plugin.setAttribute(
      "src",
      "./assets/js/popper.min.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);

    plugin.setAttribute(
      "src",
      "./assets/js/respond.min.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);

    plugin.setAttribute(
      "src",
      "./assets/js/slick.min.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);

    plugin.setAttribute(
      "src",
      "./assets/js/swiper.jquery.min.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);

    plugin.setAttribute(
      "src",
      "./assets/js/wow.min.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);

    plugin.setAttribute(
      "src",
      "./assets/js/simple-lightbox.min.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);

    plugin.setAttribute(
      "src",
      "./assets/js/jquery.fancybox.min.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  }
};
</script>

<template>
  <SinglePage />
</template>

<style>
@import './assets/css/base.css';
@import './assets/css/slick.css';
@import './assets/css/slick-theme.css';
@import './assets/css/style.css';
@import './assets/css/bootstrap.min.css';
@import './assets/css/hover.css';
@import './assets/css/jquery.fancybox.min.css';
@import './assets/css/simple-lightbox.min.css';
@import './assets/css/font-awesome.min.css';
@import './assets/css/camroll_slider.min.css';
@import './assets/css/loader.css';
@import './assets/css/owl.carousel.min.css';
@import './assets/css/owl.theme.default.min.css';
@import './assets/css/daterangepicker.css';
</style>