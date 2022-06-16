<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="home.html"><img src="../../assets/img/travveo-logo.svg" alt=""></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Help Center</a>
          </li>
          <li class="nav-item menu">
            <a class="nav-link" href="#">Currency <i class="fa fa-usd"></i></a>
            <div style="display: none;" class="second-menu">
              <h3 class="currency-heading mb-2">Select your currency</h3>
              <div class="second-menu-header">
                <h5 class="curr-title my-3">suggested for you</h5>
                <div class="row">
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
                        U.A.E. Dirham<div class="currency-des">AED</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="currency-container">
                        Egyptian Pound<div class="currency-des">EGP</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="second-menu-body">
                <h5 class="curr-title my-2">all currencies</h5>
                <div class="row">
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
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="profile.html">
              <img src="../../assets/img/profile.png" alt="" width="32px" height="32px">
            </a>
          </li>
          <li class="nav-item menu">
            <a class="nav-link cat-link" href="#">
              <img src="../../assets/img/usa.png" alt="" width="33px" height="17px">
            </a>
            <div style="display: none;" class="second-menu">
              <div class="second-menu-header">
                <h3 class="currency-heading mb-2">Select your language</h3>
                <h5 class="lang-title my-3">suggested for you</h5>
                <div class="row">
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/ksa.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">العربية</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/eng.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">english(en)</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/fra.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">Français</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/usa.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">english(us)</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/jer.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">Deutsch</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="second-menu-body">
                <h5 class="lang-title my-3">all languages</h5>
                <div class="row">
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/ksa.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">العربية</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/eng.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">english(en)</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/fra.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">Français</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item checked-lang">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/usa.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">english(us)</div>
                        <div class="lang-assign">
                          <i class="fa fa-check"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/jer.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">Deutsch</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/nether.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">netherland</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/esp.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">Español</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/arg.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">Español(arg)</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/mex.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">Español(mix)</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/italy.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">italiano</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/port.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">Português (PT)</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/brazil.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">Português (BR)</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/brazil.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">norsk</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/svnka.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">svneska</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/somi.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">soumi</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/dansk.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">dansk</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/catala.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">Català</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/check.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">Čeština</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/esp.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">Español</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/arg.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">Español(arg)</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/mex.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">Español(mix)</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/italy.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">italiano</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/port.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">Português (PT)</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/brazil.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">Português (BR)</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/brazil.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">norsk</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/svnka.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">svneska</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/somi.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">soumi</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/dansk.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">dansk</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/catala.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">Català</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-md-2">
                    <a href="#" class="lang-list-item">
                      <div class="lang-inline-container d-flex">
                        <div class="lang-img-cont">
                          <img src="../../assets/img/check.png" alt="" width="24" height="24">
                        </div>
                        <div class="lang-name">Čeština</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
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