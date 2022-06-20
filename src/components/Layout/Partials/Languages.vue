<script>
export default {
  props: {
    languages: Array,
    flag: String,
  },
}
</script>
<template>
  <li class="nav-item menu">
    <a class="nav-link cat-link" href="#">
      <img v-bind:src="flag" alt="" width="33" height="17">
    </a>
    <div style="display: none;" class="second-menu">
      <div class="second-menu-body">
        <div class="row">
          <div class="col-6 col-md-2" v-for="(lang, index) in languages">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img v-bind:src="lang.flag" alt="" width="32" height="17">
                </div>
                <div class="lang-name">{{ lang.name }}</div>
              </div>
            </a>
          </div>
          <!-- <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/eng.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">english(en)</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/fra.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">Français</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item checked-lang">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/usa.png" alt="" width="24" height="24">
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
                  <img src="../../../assets/img/jer.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">Deutsch</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/nether.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">netherland</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/esp.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">Español</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/arg.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">Español(arg)</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/mex.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">Español(mix)</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/italy.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">italiano</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/port.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">Português (PT)</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/brazil.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">Português (BR)</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/brazil.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">norsk</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/svnka.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">svneska</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/somi.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">soumi</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/dansk.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">dansk</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/catala.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">Català</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/check.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">Čeština</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/esp.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">Español</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/arg.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">Español(arg)</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/mex.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">Español(mix)</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/italy.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">italiano</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/port.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">Português (PT)</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/brazil.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">Português (BR)</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/brazil.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">norsk</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/svnka.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">svneska</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/somi.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">soumi</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/dansk.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">dansk</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/catala.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">Català</div>
              </div>
            </a>
          </div>
          <div class="col-6 col-md-2">
            <a href="#" class="lang-list-item">
              <div class="lang-inline-container d-flex">
                <div class="lang-img-cont">
                  <img src="../../../assets/img/check.png" alt="" width="24" height="24">
                </div>
                <div class="lang-name">Čeština</div>
              </div>
            </a>
          </div> -->
        </div>
      </div>
    </div>
  </li>
</template>