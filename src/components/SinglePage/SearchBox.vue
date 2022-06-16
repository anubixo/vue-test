<style>
/* @import './assets/filter.css'; */
</style>
<template>
  <div class="col-12 col-md-5 col-lg-4 col-xl-3">
    <div class="left-col-wrapper">
      <div class="searchbox-outer">
        <!--search box -->
        <form action="" class="search-form">
          <h2 class="search-form-title">Search</h2>
          <div class="search-box-row">
            <label for="searchDestination">Destination</label>
            <div class="form-group">
              <input type="search" class="form-control hotels-input-search" placeholder="hurghada">
              <i class="fa fa-search"></i>
            </div>
            <ul class="hotels-autocomplete-list list-unstyled ui-autocomplete">
              <li class="dist-autocomplete-item d-flex">
                <i class="fa fa-map-marker autocomplete-icon mt-1"></i>
                <span><span class="search-hl-name">Taba</span><br>Egypt</span>
              </li>
              <li class="dist-autocomplete-item d-flex">
                <i class="fa fa-map-marker autocomplete-icon mt-1"></i>
                <span><span class="search-hl-name">hergada</span><br>red sea, Egypt</span>
              </li>
              <li class="dist-autocomplete-item d-flex">
                <i class="fa fa-map-marker autocomplete-icon mt-1"></i>
                <span><span class="search-hl-name">alexandria</span><br>Egypt</span>
              </li>
              <li class="dist-autocomplete-item d-flex">
                <i class="fa fa-map-marker autocomplete-icon mt-1"></i>
                <span><span class="search-hl-name">cairo</span><br>Egypt</span>
              </li>
              <li class="dist-autocomplete-item d-flex">
                <i class="fa fa-map-marker autocomplete-icon mt-1"></i>
                <span><span class="search-hl-name">new york</span><br>usa</span>
              </li>
              <li class="dist-autocomplete-item d-flex">
                <i class="fa fa-map-marker autocomplete-icon mt-1"></i>
                <span><span class="search-hl-name">mosco</span><br>russia</span>
              </li>
              <li class="dist-autocomplete-item d-flex">
                <i class="fa fa-map-marker autocomplete-icon mt-1"></i>
                <span><span class="search-hl-name">munich</span><br>germany</span>
              </li>
            </ul>
          </div>
          <div class="check-date-row">
            <label for="datepicker">Check-in Date</label>
            <div class="form-group">
              <input type="text" name="check_in_date" id="check_in_date" class="form-control hotels-check-in"
                value="Saturday, January 19, 2021">
              <i class="fa fa-calendar-o main-search-icon"></i>
            </div>
          </div>
          <div class="check-date-row">
            <label for="datepicker">Check-out Date</label>
            <div class="form-group">
              <input type="text" name="check_out_date" id="check_out_date" class="form-control hotels-check-out"
                value="Saturday, January 25, 2021">
              <i class="fa fa-calendar-o main-search-icon"></i>
            </div>
          </div>
          <div class="dist-guests-list mt-3" style="display: block;">
            <div class="guests-body" id="guests-body">
              <div class="room-select-wrapper" id="room-select-wrapper">
                <div class="row">
                  <div class="dist-guests-item d-flex">
                    <span class="room-name">room <span class="room-number">1</span> </span>
                  </div>
                  <div class="dist-guests-item d-flex">
                    <span class="room-name">adults</span>
                    <div class="number-spinner d-flex">
                      <i class="fa fa-minus sub-1" data-dir="dwn"></i>
                      <input type="text" class="field-1" value="1" maxlength="2">
                      <i class="fa fa-plus add-1" data-dir="up"></i>
                    </div>
                  </div>
                  <div class="dist-guests-item d-flex">
                    <span class="room-name">children</span>
                    <div class="number-spinner d-flex" id="field1">
                      <i class="fa fa-minus remove-child sub-2" id="sub" data-dir="dwn"></i>
                      <input type="text" class="pl-ns-value field-2" value="0" maxlength="2">
                      <i class="fa fa-plus add-child add-2" id="add" data-dir="up"></i>
                    </div>
                  </div>
                  <div class="children-group">
                    <div>
                      <label for="" class="child-label">How old are the children you're traveling with?</label>
                    </div>

                  </div>
                </div>
                <span class="room-delete"><i class="fa fa-close"></i></span>
              </div>

            </div>
            <div class="room-select-footer">
              <span class="add-new-room " id="add-new-room">
                <i class="fa fa-plus"></i>
              </span>
            </div>
          </div>
          <div class="form-group travelling-checkbox-row mt-2">
            <input type="checkbox">
            <span class="checkbox-label">i'm travelling for work</span>
          </div>
          <div class="search-box">
            <button type="submit" class="btn btn-primary btn-block btn-search">search</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>