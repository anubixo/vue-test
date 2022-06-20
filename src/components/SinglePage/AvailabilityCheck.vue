<template>
  <div class="availability-section mb-4">
    <form action="" id="hotelpage_availform">
      <div class="hp-section-header">
        <h2 class="avail-title">Availability</h2>
        <div class="price-match">
          <a href="" class="we-price-link"
            data-title="low rates . no fees . find something cheaper? we will refund the difference"
            data-placement="bottom">we price match</a>
        </div>
      </div>
      <div class="hp-section-content">
        <p class="avail-sub-header">When would you like to stay at Steigenberger Cecil Hotel Alexandria?</p>
        <div class="row no-gutters">
          <div class="col-12 col-md-6 xp-datepicker">
            <div class="traveo-dist">
              <input type="text" id="datepicker">
              <i class="fa fa-calendar-o main-search-icon"></i>
              <span class="dist-before">check in - check out</span>
            </div>
          </div>
          <div class="col-12 col-md-4 xp-button-search">
            <div class="traveo-dist d-flex justify-content-center align-items-center">
              <button type="submit" class="btn btn-primary find-hotel">search availability</button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 ">
            <div class="dist-guests-list mt-3" style="display: block;">
              <div class="guests-body" id="guests-body">
                <div class="room-select-wrapper" id="room-select-wrapper">
                  <div class="row">
                    <div class="">
                      <div class="dist-guests-item d-flex">
                        <span class="room-name">room <span class="room-number">1</span> </span>
                      </div>
                    </div>
                    <div class="">
                      <div class="dist-guests-item d-flex">
                        <span class="room-name">adults</span>
                        <div class="number-spinner d-flex">
                          <i class="fa fa-minus sub-1" data-dir="dwn"></i>
                          <input type="text" class="field-1" value="1" maxlength="2">
                          <i class="fa fa-plus add-1" data-dir="up"></i>
                        </div>
                      </div>
                    </div>
                    <div class="">
                      <div class="dist-guests-item d-flex">
                        <span class="room-name">children</span>
                        <div class="number-spinner d-flex" id="field1">
                          <i class="fa fa-minus remove-child sub-2" id="sub" data-dir="dwn"></i>
                          <input type="text" class="pl-ns-value field-2" value="0" maxlength="2">
                          <i class="fa fa-plus add-child add-2" id="add" data-dir="up"></i>
                        </div>
                      </div>
                    </div>
                    <div class="">
                      <div class="children-group">
                        <div>
                          <label for="" class="child-label">How old are the children you're
                            traveling
                            with?</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span class="room-delete"><i class="fa fa-close"></i></span>
                </div>

              </div>
              <div class="room-select-footer">
                <span class="add-new-room" id="add-new-room">
                  <i class="fa fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>