<script>
export default {
  props: {
    currencies: Array,
  },
}
</script>
<template>
  <li class="nav-item menu">
    <a class="nav-link" href="#">Currency <i class="fa fa-usd"></i></a>
    <div style="display: none;" class="second-menu">
      <div class="second-menu-body">
        <div class="row">
          <div class="col-6 col-md-2" v-for="(currency, index) in currencies">
            <a href="#" class="lang-list-item">
              <div class="currency-container">
                {{ currency.name }} <div class="currency-des">{{ currency.value }}</div>
              </div>
            </a>
          </div>
          <!-- <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="currency-container">
                Euro<div class="currency-des">EUR</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="currency-container">
                Pound Sterling<div class="currency-des">GBP</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="currency-container">
                Saudi Arabian Riyal<div class="currency-des">SAR</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item d-flex checked-curr">
              <div class="currency-container">
                Egyptian Pound<div class="currency-des">EGP</div>
              </div>
              <div class="lang-assign d-flex align-items-center">
                <i class="fa fa-check"></i>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="currency-container">
                Euro<div class="currency-des">EUR</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="currency-container">
                Pound Sterling<div class="currency-des">GBP</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="currency-container">
                Pound Sterling<div class="currency-des">SAR</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="currency-container">
                U.S. Dollar <div class="currency-des">USD</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="currency-container">
                Euro<div class="currency-des">EUR</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="currency-container">
                Pound Sterling<div class="currency-des">GBP</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="currency-container">
                Saudi Arabian Riyal<div class="currency-des">SAR</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="currency-container">
                Euro<div class="currency-des">EUR</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="currency-container">
                Pound Sterling<div class="currency-des">GBP</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="currency-container">
                Pound Sterling<div class="currency-des">SAR</div>
              </div>
            </a>
          </div> -->
        </div>
      </div>
    </div>
  </li>
</template>