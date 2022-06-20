<script>
import Currencies from "./Partials/Currencies.vue";
import Languages from "./Partials/Languages.vue";
import Logo from "./Partials/Logo.vue";
export default {
  data() {
    return {
      currencies: [
        {
          name: "Euro",
          value: "EUR",
        },
        {
          name: "Dollar",
          value: "USD",
        },
        {
          name: "Egyptian Pound",
          value: "EGP",
        },
        {
          name: "Saudi Riyal",
          value: "SAR",
        },
        {
          name: "Pound Sterling",
          value: "GBP",
        },
      ],
      languages: [
        {
          name: "Arabic",
          value: "ar",
          flag: "./img/ksa.png",
        },
        {
          name: "English",
          value: "en",
          flag: "./img/usa.png",
        },
        {
          name: "Spanish",
          value: "es",
          flag: "./img/esp.png",
        },
        {
          name: "French",
          value: "fr",
          flag: "./img/fra.png",
        },
        
      ],
      flag: "./img/usa.png",
    }
  },
  components: { Currencies, Languages, Logo }
}
</script>
<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <Logo />
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <Currencies :currencies="currencies" />
          <li class="nav-item">
            <a class="nav-link" href="profile.html">
              <img src="../../../img/profile.png" alt="" width="32" height="32">
            </a>
          </li>
          <Languages :languages="languages" :flag="flag"/>
          <li class="nav-item ">
            <a class="nav-link sign-up text-center mt-2" href="list-property.html">list your property</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link btn btn-secondary dropdown-toggle sign-up mt-2" type="button" id="dropdownMenuButton"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Register
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="register.html">Register</a>
              <a class="dropdown-item" href="sign-in.html">Sign in</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>