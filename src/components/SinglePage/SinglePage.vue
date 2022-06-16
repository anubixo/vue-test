<script setup>
import NavBar from './NavBar.vue'
import SearchBox from './SearchBox.vue'
import Breadcrump from './Breadcrump.vue'
import PageNavigator from './PageNavigator.vue';
import Footer from '../Layout/Footer.vue';
import HotelTitle from './HotelTitle.vue';
import GalarySlider from './GalarySlider.vue';
import Recommendation from './Recommendation.vue';

</script>
<template>
  <!-- Navigation Bar -->
  <NavBar />
  <!--start hotels-->
  <div class="hotels-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="subheader-wrap">
            <!-- Breadcrump -->
            <Breadcrump />
          </div>
        </div>
      </div>
      <div class="row">
        <!-- Search Box -->
        <SearchBox />
        <div class="col-12 col-md-7 col-lg-8 col-xl-9">
          <!--page content-->
          <div class="right-col-wrapper">
            <!-- Page Navigator Component -->
            <PageNavigator />
            <div class="hotellist-inner" id="hotellist-inner">
              <div class="row">
                <div class="col-12">
                  <div class="hotellist-wrap my-3">
                    <!-- Hotel Title Component -->
                    <HotelTitle />
                    <!-- Galary Slider -->
                    <GalarySlider />
                  </div>
                </div>
              </div>
            </div>
            <!-- <Recommendation /> -->
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
                                    <label for="" class="child-label">How old are the children you're traveling
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
            <div class="rooms_table_nodates my-4">
              <h3 class="rooms-title mb-2">all available rooms</h3>
              <table class="table rooms-table">
                <thead>
                  <tr>
                    <th class="room-table-header-cell" style="width: 260px;">Room type</th>
                    <th class="room-table-header-cell" style="width: 80px;">Sleeps</th>
                    <th class="room-table-header-cell hprt-table-header-price" style="width: 100px;">price for 26 nights
                    </th>
                    <th class="room-table-header-cell" style="width: 260px;">your choices</th>
                    <th class="room-table-header-cell" style="width: 120px;">select room</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="hprt-table-cell" rowspan="4">
                      <div>
                        <a href="" class="roomtype-name">Double Room with Garden View</a>
                        <div class="roomtype-bed">
                          <ul class="rt-bed-types list-unstyled">
                            <li class="rt-bed-one">
                              <span>
                                one queen bed <img src="../../assets/img/bed.svg" alt="" width="20px" height="20px">
                              </span>
                            </li>
                          </ul>
                        </div>
                        <p class="room-short-desc">Featuring a balcony with a garden view, this air-conditioned room
                          offers a flat-screen TV,
                          a minibar and an en-suite bathroom with a bath or a shower.</p>
                        <div class="room-type-block">
                          <div class="hpr-smaller-content mb-2">
                            <div class="hprt-facilities-facility d-inline-block">
                              <span>
                                <img src="../../assets/img/distance.svg" alt="" width="16px" height="16px"> 50 m<sup>2</sup>
                              </span>
                            </div>
                            <div class="hprt-facilities-facility d-inline-block">
                              <span>
                                <img src="../../assets/img/deck-chair.svg" alt="" width="16px" height="16px"> balcony
                              </span>
                            </div>
                            <div class="hprt-facilities-facility d-inline-block">
                              <span>
                                <img src="../../assets/img/flower.svg" alt="" width="16px" height="16px"> garden view
                              </span>
                            </div>
                            <div class="hprt-facilities-facility d-inline-block">
                              <span>
                                <img src="../../assets/img/fan.svg" alt="" width="16px" height="16px"> air conditioning
                              </span>
                            </div>
                            <div class="hprt-facilities-facility d-inline-block">
                              <span>
                                <img src="../../assets/img/underarm.svg" alt="" width="16px" height="16px"> private pathroom
                              </span>
                            </div>
                            <div class="hprt-facilities-facility d-inline-block">
                              <span>
                                <img src="../../assets/img/television.svg" alt="" width="16px" height="16px"> flat screen tv
                              </span>
                            </div>
                            <div class="hprt-facilities-facility d-inline-block">
                              <span>
                                <img src="../../assets/img/deck-chair.svg" alt="" width="16px" height="16px"> terrace
                              </span>
                            </div>
                            <div class="hprt-facilities-facility d-inline-block">
                              <span>
                                <img src="../../assets/img/cocktail.svg" alt="" width="16px" height="16px"> minibar
                              </span>
                            </div>
                          </div>
                          <hr>
                          <ul class="hprt-facilities-others list-unstyled">
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Free toiletries
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Bathrobe
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Safe
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Bidet
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Toilet
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Bathtub or shower
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Towels
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Linens
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Socket near the bed
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Desk
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Sitting area
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> TV
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Slippers
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Telephone
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Satellite channels
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Tea/Coffee maker
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Hairdryer
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Electric kettle
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-block">
                        <span class="icons-adults">
                          <i class="fa fa-male"></i>
                          <i class="fa fa-female"></i>
                        </span>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-price-block">
                        <div class="bui-price-display">
                          EGP 44,058
                        </div>
                        <div class="texas-under-price">
                          Additional charges may apply
                        </div>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-block hprt-block-blue">
                        <ul class="hprt-conditions list-unstyled">
                          <li>
                            <img src="../../assets/img/fast-food.svg" alt="" width="16px" height="16px">
                            <span class="blue-condition-bold"
                              data-title="9.1 Excellent .from 79 breakfast reviews">Excellent Breakfast</span> included
                          </li>
                          <li>
                            <i class="fa fa-check"></i>
                            <span class="blue-condition-bold">Free Cancellation</span>
                            before 2:00 PM on February 12, 2021
                          </li>
                          <li>
                            <i class="fa fa-check"></i>
                            <span class="blue-condition-bold" data-title="no prepayment needed - pay at the property">NO
                              PREPAYMENT NEEDED</span>
                            - pay at the property
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-block">
                        <select name="room-price" id="" class="room-price-select">
                          <option value="0">0 </option>
                          <option value="1">1 (EGP 42,227) </option>
                          <option value="2">2 (EGP 90,576) </option>
                          <option value="3">3 (EGP 77,147) </option>
                          <option value="4">4 (EGP 154,557) </option>
                          <option value="4">5 (EGP 170,853) </option>
                          <option value="4">6 (EGP 210,122) </option>
                          <option value="4">7 (EGP 246,687) </option>
                        </select>
                        <a href="check-availability.html" class="btn btn-primary d-block mt-3 request-now">request
                          now</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="hprt-table-cell">
                      <div class="hprt-block">
                        <span class="icons-adults">
                          <i class="fa fa-male"></i>
                          <i class="fa fa-female"></i>
                        </span>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-price-block">
                        <div class="bui-price-display">
                          EGP 57,144
                        </div>
                        <div class="texas-under-price">
                          Additional charges may apply
                        </div>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-block hprt-block-blue">
                        <ul class="hprt-conditions list-unstyled">
                          <li>
                            <img src="../../assets/img/fast-food.svg" alt="" width="16px" height="16px">
                            <span class="blue-condition-bold" data-title="9.1 Excellent .from 79 breakfast reviews"
                              data-placement="bottom">Excellent Breakfast</span> included
                          </li>
                          <li>
                            <i class="fa fa-check"></i>
                            <span class="blue-condition-bold">Free Cancellation</span>
                            before 2:00 PM on February 12, 2021
                          </li>
                          <li>
                            <i class="fa fa-check"></i>
                            <span class="blue-condition-bold">NO PREPAYMENT NEEDED</span>
                            - pay at the property
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-block">
                        <select name="room-price" id="" class="room-price-select">
                          <option value="0">0 </option>
                          <option value="1">1 (EGP 42,227) </option>
                          <option value="2">2 (EGP 90,576) </option>
                          <option value="3">3 (EGP 77,147) </option>
                          <option value="4">4 (EGP 154,557) </option>
                          <option value="4">5 (EGP 170,853) </option>
                          <option value="4">6 (EGP 210,122) </option>
                          <option value="4">7 (EGP 246,687) </option>
                        </select>
                        <a href="check-availability.html" class="btn btn-primary d-block mt-3 request-now">request
                          now</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="hprt-table-cell">
                      <div class="hprt-block">
                        <span class="icons-adults">
                          <i class="fa fa-male"></i>
                          <i class="fa fa-female"></i>
                        </span>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-price-block">
                        <div class="bui-price-display">
                          EGP 70,144
                        </div>
                        <div class="texas-under-price">
                          Additional charges may apply
                        </div>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-block hprt-block-blue">
                        <ul class="hprt-conditions list-unstyled">
                          <li>
                            <img src="../../assets/img/fast-food.svg" alt="" width="16px" height="16px">
                            <span class="blue-condition-bold" data-title="9.1 Excellent .from 79 breakfast reviews"
                              data-placement="bottom">Excellent Breakfast</span> included
                          </li>
                          <li>
                            <i class="fa fa-check"></i>
                            <span class="blue-condition-bold">Free Cancellation</span>
                            before 2:00 PM on February 12, 2021
                          </li>
                          <li>
                            <i class="fa fa-check"></i>
                            <span class="blue-condition-bold">NO PREPAYMENT NEEDED</span>
                            - pay at the property
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-block">
                        <select name="room-price" id="" class="room-price-select">
                          <option value="0">0 </option>
                          <option value="1">1 (EGP 42,227) </option>
                          <option value="2">2 (EGP 90,576) </option>
                          <option value="3">3 (EGP 77,147) </option>
                          <option value="4">4 (EGP 154,557) </option>
                          <option value="4">5 (EGP 170,853) </option>
                          <option value="4">6 (EGP 210,122) </option>
                          <option value="4">7 (EGP 246,687) </option>
                        </select>
                        <a href="check-availability.html" class="btn btn-primary d-block mt-3 request-now">request
                          now</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="hprt-table-cell">
                      <div class="hprt-block">
                        <span class="icons-adults">
                          <i class="fa fa-male"></i>
                          <i class="fa fa-female"></i>
                        </span>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-price-block">
                        <div class="bui-price-display">
                          EGP 57,144
                        </div>
                        <div class="texas-under-price">
                          Additional charges may apply
                        </div>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-block hprt-block-blue">
                        <ul class="hprt-conditions list-unstyled">
                          <li>
                            <img src="../../assets/img/fast-food.svg" alt="" width="16px" height="16px">
                            <span class="blue-condition-bold">Excellent Breakfast</span> included
                          </li>
                          <li>
                            <i class="fa fa-check"></i>
                            <span class="blue-condition-bold">Free Cancellation</span>
                            before 2:00 PM on February 12, 2021
                          </li>
                          <li>
                            <i class="fa fa-check"></i>
                            <span class="blue-condition-bold">NO PREPAYMENT NEEDED</span>
                            - pay at the property
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-block">
                        <select name="room-price" id="" class="room-price-select">
                          <option value="0">0 </option>
                          <option value="1">1 (EGP 42,227) </option>
                          <option value="2">2 (EGP 90,576) </option>
                          <option value="3">3 (EGP 77,147) </option>
                          <option value="4">4 (EGP 154,557) </option>
                          <option value="4">5 (EGP 170,853) </option>
                          <option value="4">6 (EGP 210,122) </option>
                          <option value="4">7 (EGP 246,687) </option>
                        </select>
                        <a href="check-availability.html" class="btn btn-primary d-block mt-3 request-now">request
                          now</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="hprt-table-cell" rowspan="4">
                      <div>
                        <a href="" class="roomtype-name">Classic Double Room</a>
                        <div class="roomtype-bed">
                          <ul class="rt-bed-types list-unstyled">
                            <li class="rt-bed-one">
                              <span>
                                one queen bed <img src="../../assets/img/bed.svg" alt="" width="20px" height="20px">
                              </span>
                            </li>
                          </ul>
                        </div>
                        <p class="room-short-desc">Featuring a balcony with a garden view, this air-conditioned room
                          offers a flat-screen TV,
                          a minibar and an en-suite bathroom with a bath or a shower.</p>
                        <div class="room-type-block">
                          <div class="hpr-smaller-content mb-2">
                            <div class="hprt-facilities-facility d-inline-block">
                              <span>
                                <img src="../../assets/img/distance.svg" alt="" width="16px" height="16px"> 50 m<sup>2</sup>
                              </span>
                            </div>
                            <div class="hprt-facilities-facility d-inline-block">
                              <span>
                                <img src="../../assets/img/deck-chair.svg" alt="" width="16px" height="16px"> balcony
                              </span>
                            </div>
                            <div class="hprt-facilities-facility d-inline-block">
                              <span>
                                <img src="../../assets/img/flower.svg" alt="" width="16px" height="16px"> garden view
                              </span>
                            </div>
                            <div class="hprt-facilities-facility d-inline-block">
                              <span>
                                <img src="../../assets/img/fan.svg" alt="" width="16px" height="16px"> air conditioning
                              </span>
                            </div>
                            <div class="hprt-facilities-facility d-inline-block">
                              <span>
                                <img src="../../assets/img/underarm.svg" alt="" width="16px" height="16px"> private pathroom
                              </span>
                            </div>
                            <div class="hprt-facilities-facility d-inline-block">
                              <span>
                                <img src="../../assets/img/television.svg" alt="" width="16px" height="16px"> flat screen tv
                              </span>
                            </div>
                            <div class="hprt-facilities-facility d-inline-block">
                              <span>
                                <img src="../../assets/img/deck-chair.svg" alt="" width="16px" height="16px"> terrace
                              </span>
                            </div>
                            <div class="hprt-facilities-facility d-inline-block">
                              <span>
                                <img src="../../assets/img/cocktail.svg" alt="" width="16px" height="16px"> minibar
                              </span>
                            </div>
                          </div>
                          <hr>
                          <ul class="hprt-facilities-others list-unstyled">
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Free toiletries
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Bathrobe
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Safe
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Bidet
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Toilet
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Bathtub or shower
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Towels
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Linens
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Socket near the bed
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Desk
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Sitting area
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> TV
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Slippers
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Telephone
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Satellite channels
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Tea/Coffee maker
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Hairdryer
                              </span>
                            </li>
                            <li class="d-inline-block">
                              <span class="hprt-facilities-facility">
                                <i class="fa fa-check"></i> Electric kettle
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-block">
                        <span class="icons-adults">
                          <i class="fa fa-male"></i>
                          <i class="fa fa-female"></i>
                        </span>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-price-block">
                        <div class="bui-price-display">
                          EGP 44,058
                        </div>
                        <div class="texas-under-price">
                          Additional charges may apply
                        </div>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-block hprt-block-blue">
                        <ul class="hprt-conditions list-unstyled">
                          <li>
                            <img src="../../assets/img/fast-food.svg" alt="" width="16px" height="16px">
                            <span class="blue-condition-bold">Excellent Breakfast</span> included
                          </li>
                          <li>
                            <i class="fa fa-check"></i>
                            <span class="blue-condition-bold">Free Cancellation</span>
                            before 2:00 PM on February 12, 2021
                          </li>
                          <li>
                            <i class="fa fa-check"></i>
                            <span class="blue-condition-bold">NO PREPAYMENT NEEDED</span>
                            - pay at the property
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-block">
                        <select name="room-price" id="" class="room-price-select">
                          <option value="0">0 </option>
                          <option value="1">1 (EGP 42,227) </option>
                          <option value="2">2 (EGP 90,576) </option>
                          <option value="3">3 (EGP 77,147) </option>
                          <option value="4">4 (EGP 154,557) </option>
                          <option value="4">5 (EGP 170,853) </option>
                          <option value="4">6 (EGP 210,122) </option>
                          <option value="4">7 (EGP 246,687) </option>
                        </select>
                        <a href="check-availability.html" class="btn btn-primary d-block mt-3 request-now">request
                          now</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="hprt-table-cell">
                      <div class="hprt-block">
                        <span class="icons-adults">
                          <i class="fa fa-male"></i>
                          <i class="fa fa-female"></i>
                        </span>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-price-block">
                        <div class="bui-price-display">
                          EGP 57,144
                        </div>
                        <div class="texas-under-price">
                          Additional charges may apply
                        </div>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-block hprt-block-blue">
                        <ul class="hprt-conditions list-unstyled">
                          <li>
                            <img src="../../assets/img/fast-food.svg" alt="" width="16px" height="16px">
                            <span class="blue-condition-bold">Excellent Breakfast</span> included
                          </li>
                          <li>
                            <i class="fa fa-check"></i>
                            <span class="blue-condition-bold">Free Cancellation</span>
                            before 2:00 PM on February 12, 2021
                          </li>
                          <li>
                            <i class="fa fa-check"></i>
                            <span class="blue-condition-bold">NO PREPAYMENT NEEDED</span>
                            - pay at the property
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-block">
                        <select name="room-price" id="" class="room-price-select">
                          <option value="0">0 </option>
                          <option value="1">1 (EGP 42,227) </option>
                          <option value="2">2 (EGP 90,576) </option>
                          <option value="3">3 (EGP 77,147) </option>
                          <option value="4">4 (EGP 154,557) </option>
                          <option value="4">5 (EGP 170,853) </option>
                          <option value="4">6 (EGP 210,122) </option>
                          <option value="4">7 (EGP 246,687) </option>
                        </select>
                        <a href="check-availability.html" class="btn btn-primary d-block mt-3 request-now">request
                          now</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="hprt-table-cell">
                      <div class="hprt-block">
                        <span class="icons-adults">
                          <i class="fa fa-male"></i>
                          <i class="fa fa-female"></i>
                        </span>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-price-block">
                        <div class="bui-price-display">
                          EGP 70,144
                        </div>
                        <div class="texas-under-price">
                          Additional charges may apply
                        </div>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-block hprt-block-blue">
                        <ul class="hprt-conditions list-unstyled">
                          <li>
                            <img src="../../assets/img/fast-food.svg" alt="" width="16px" height="16px">
                            <span class="blue-condition-bold">Excellent Breakfast</span> included
                          </li>
                          <li>
                            <i class="fa fa-check"></i>
                            <span class="blue-condition-bold">Free Cancellation</span>
                            before 2:00 PM on February 12, 2021
                          </li>
                          <li>
                            <i class="fa fa-check"></i>
                            <span class="blue-condition-bold">NO PREPAYMENT NEEDED</span>
                            - pay at the property
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-block">
                        <select name="room-price" id="" class="room-price-select">
                          <option value="0">0 </option>
                          <option value="1">1 (EGP 42,227) </option>
                          <option value="2">2 (EGP 90,576) </option>
                          <option value="3">3 (EGP 77,147) </option>
                          <option value="4">4 (EGP 154,557) </option>
                          <option value="4">5 (EGP 170,853) </option>
                          <option value="4">6 (EGP 210,122) </option>
                          <option value="4">7 (EGP 246,687) </option>
                        </select>
                        <a href="check-availability.html" class="btn btn-primary d-block mt-3 request-now">request
                          now</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="hprt-table-cell">
                      <div class="hprt-block">
                        <span class="icons-adults">
                          <i class="fa fa-male"></i>
                          <i class="fa fa-female"></i>
                        </span>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-price-block">
                        <div class="bui-price-display">
                          EGP 57,144
                        </div>
                        <div class="texas-under-price">
                          Additional charges may apply
                        </div>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-block hprt-block-blue">
                        <ul class="hprt-conditions list-unstyled">
                          <li>
                            <img src="../../assets/img/fast-food.svg" alt="" width="16px" height="16px">
                            <span class="blue-condition-bold">Excellent Breakfast</span> included
                          </li>
                          <li>
                            <i class="fa fa-check"></i>
                            <span class="blue-condition-bold">Free Cancellation</span>
                            before 2:00 PM on February 12, 2021
                          </li>
                          <li>
                            <i class="fa fa-check"></i>
                            <span class="blue-condition-bold">NO PREPAYMENT NEEDED</span>
                            - pay at the property
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td class="hprt-table-cell">
                      <div class="hprt-block">
                        <select name="room-price" id="" class="room-price-select">
                          <option value="0">0 </option>
                          <option value="1">1 (EGP 42,227) </option>
                          <option value="2">2 (EGP 90,576) </option>
                          <option value="3">3 (EGP 77,147) </option>
                          <option value="4">4 (EGP 154,557) </option>
                          <option value="4">5 (EGP 170,853) </option>
                          <option value="4">6 (EGP 210,122) </option>
                          <option value="4">7 (EGP 246,687) </option>
                        </select>
                        <a href="check-availability.html" class="btn btn-primary d-block mt-3 request-now">request
                          now</a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="guests-reviews mb-4" id="guests-reviews">
              <h3 class="guest-title mb-2">guest reviews</h3>
              <div class="guest-bar mb-3">
                <ul class="nav nav-tabs nav-fill">
                  <li class="nav-item">
                    <a class="nav-link active" href="#all-guests-review" data-toggle="tab">
                      <i class="fa fa-commenting"></i> All guests</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#business-review" data-toggle="tab">
                      <i class="fa fa-money"></i> Business</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#couples-review" data-toggle="tab">
                      <i class="fa fa-heart-o"></i> Couples</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#families-review" data-toggle="tab">
                      <i class="fa fa-child"></i> Families</a>
                  </li>
                </ul>
              </div>
              <div class="tab-content" id="myTabContent">
                <div class="all-guests-review tab-pane fade show active" role="tabpanel" id="all-guests-review">
                  <!--reviews one-->
                  <div class="overall-rate mb-3">
                    Rated <span>9.1/10</span> based on reviews by all guests
                  </div>
                  <div class="rates-table">
                    <div class="row location mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">location</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 79%" aria-valuenow="79" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>7.9</span> /10
                        </div>
                        <div class="rate-base">based on 251 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Great location."</div>
                        <div>"Pricey, inconvenient parking."</div>
                        <div>"Close to public transport and the train."</div>
                        <div>"Centrally located, near restaurants, bars, and shopping."</div>
                        <div>"Excellent restaurants"</div>
                        <div>"Beautiful town"</div>
                        <div>"Great local restaurants"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                    <div class="row service mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">service</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 81%" aria-valuenow="81" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>8.1</span> /10
                        </div>
                        <div class="rate-base">based on 217 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Friendly, excellent service in bar and restaurant."</div>
                        <div>"Service, housekeeping and reception are all fine."</div>
                        <div>"Room service is average."</div>
                        <div>"Excellent managers reception."</div>
                        <div>"Excellent and friendly staff"</div>
                        <div>"Obeying safety"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                    <div class="row room mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">room</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 77%" aria-valuenow="77" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>7.7</span> /10
                        </div>
                        <div class="rate-base">based on 324 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Great views from big, clean rooms, with decent beds."</div>
                        <div>"Small bathrooms and poor room maintenance."</div>
                        <div>"Substandard furniture, A/C, TV's and kitchenettes."</div>
                        <div>"Shower can be a problem"</div>
                        <div>"Amazing accommodations"</div>
                        <div>"View wonderful"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                    <div class="row cleanliness mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">cleanliness</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 84%" aria-valuenow="84" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>8.4</span> /10
                        </div>
                        <div class="rate-base">based on 199 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Clean hotel facilities."</div>
                        <div>"Clean rooms."</div>
                        <div>"Property was clean."</div>
                        <div>"Clean towels"</div>
                        <div>"Very clean"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                    <div class="row value mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">value</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 74%" aria-valuenow="74" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>7.4</span> /10
                        </div>
                        <div class="rate-base">based on 222 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Best value for money."</div>
                        <div>"Breakfast, bar and food prices are cheap."</div>
                        <div>"Complimentary buffet"</div>
                        <div>"Complimentary internet"</div>
                        <div>"Complimentary happy hour"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                    <div class="row breakfat mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">Breakfast</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 91%" aria-valuenow="91" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>9.1</span> /10
                        </div>
                        <div class="rate-base">based on 341 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Great and affordable breakfast."</div>
                        <div>"Delicious buffet breakfast"</div>
                        <div>"Great complimentary breakfast"</div>
                        <div>"Delicious breakfast"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="business-review tab-pane fade " role="tabpanel" id="business-review">
                  <!--reviews two-->
                  <div class="overall-rate mb-3">
                    Rated <span>8.6/10</span> based on reviews by business
                  </div>
                  <div class="rates-table">
                    <div class="row location mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">location</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 77%" aria-valuenow="77" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>7.7</span> /10
                        </div>
                        <div class="rate-base">based on 72 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Great location."</div>
                        <div>"Excellent restaurants"</div>
                        <div>"Beautiful town"</div>
                        <div>"Great local restaurants"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                    <div class="row service mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">service</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 76%" aria-valuenow="76" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>7.6</span> /10
                        </div>
                        <div class="rate-base">based on 90 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Fantastic service"</div>
                        <div>"Excellent managers reception"</div>
                        <div>"Excellent and friendly staff"</div>
                        <div>"Obeying safety"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                    <div class="row room mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">room</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>7.2</span> /10
                        </div>
                        <div class="rate-base">based on 47 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Great room."</div>
                        <div>"Amazing accommodations"</div>
                        <div>"Great mattress"</div>
                        <div>"View wonderful"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="couples-review tab-pane fade " role="tabpanel" id="couples-review">
                  <!--reviews three-->
                  <div class="overall-rate mb-3">
                    Rated <span>8.9/10</span> based on reviews by couples
                  </div>
                  <div class="rates-table">
                    <div class="row location mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">location</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 79%" aria-valuenow="79" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>7.9</span> /10
                        </div>
                        <div class="rate-base">based on 251 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Good location, close to public transport"</div>
                        <div>"Pricey, inconvenient parking.."</div>
                        <div>"Excellent restaurants."</div>
                        <div>"Beautiful town."</div>
                        <div>"Great local restaurants"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                    <div class="row service mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">service</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 81%" aria-valuenow="81" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>8.1</span> /10
                        </div>
                        <div class="rate-base">based on 217 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Friendly service, and reception was okay."</div>
                        <div>"Excellent managers reception."</div>
                        <div>"Excellent and friendly staff"</div>
                        <div>"Obeying safety"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                    <div class="row room mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">room</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 77%" aria-valuenow="77" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>7.7</span> /10
                        </div>
                        <div class="rate-base">based on 324 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Great views from big, clean rooms, with decent beds."</div>
                        <div>"Small bathrooms and poor room maintenance."</div>
                        <div>"Substandard furniture, A/C, TV's and kitchenettes."</div>
                        <div>"Shower can be a problem"</div>
                        <div>"Amazing accommodations"</div>
                        <div>"View wonderful"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                    <div class="row cleanliness mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">cleanliness</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 84%" aria-valuenow="84" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>8.4</span> /10
                        </div>
                        <div class="rate-base">based on 75 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Clean hotel facilities."</div>
                        <div>"Clean rooms."</div>
                        <div>"Property was clean."</div>
                        <div>"Clean towels"</div>
                        <div>"Very clean"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                    <div class="row value mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">value</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 74%" aria-valuenow="74" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>7.4</span> /10
                        </div>
                        <div class="rate-base">based on 147 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Best value for money."</div>
                        <div>"Breakfast, bar and food prices are cheap."</div>
                        <div>"Complimentary buffet"</div>
                        <div>"Complimentary internet"</div>
                        <div>"Complimentary happy hour"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                    <div class="row breakfat mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">Breakfast</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 91%" aria-valuenow="91" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>9.1</span> /10
                        </div>
                        <div class="rate-base">based on 45 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Great and affordable breakfast."</div>
                        <div>"Delicious buffet breakfast"</div>
                        <div>"Great complimentary breakfast"</div>
                        <div>"Delicious breakfast"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="families-review tab-pane fade " role="tabpanel" id="families-review">
                  <!--reviews three-->
                  <div class="overall-rate mb-3">
                    Rated <span>8.4/10</span> based on reviews by families
                  </div>
                  <div class="rates-table">
                    <div class="row location mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">location</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 76%" aria-valuenow="76" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>7.6</span> /10
                        </div>
                        <div class="rate-base">based on 251 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Great location."</div>
                        <div>"Pricey, inconvenient parking."</div>
                        <div>"Close to public transport and the train."</div>
                        <div>"Centrally located, near restaurants, bars, and shopping."</div>
                        <div>"Excellent restaurants"</div>
                        <div>"Beautiful town"</div>
                        <div>"Great local restaurants"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                    <div class="row service mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">service</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 81%" aria-valuenow="81" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>8.1</span> /10
                        </div>
                        <div class="rate-base">based on 217 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Friendly, excellent service in bar and restaurant."</div>
                        <div>"Service, housekeeping and reception are all fine."</div>
                        <div>"Room service is average."</div>
                        <div>"Excellent managers reception."</div>
                        <div>"Excellent and friendly staff"</div>
                        <div>"Obeying safety"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                    <div class="row room mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">room</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 77%" aria-valuenow="77" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>7.7</span> /10
                        </div>
                        <div class="rate-base">based on 324 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Great views from big, clean rooms, with decent beds."</div>
                        <div>"Small bathrooms and poor room maintenance."</div>
                        <div>"Substandard furniture, A/C, TV's and kitchenettes."</div>
                        <div>"Shower can be a problem"</div>
                        <div>"Amazing accommodations"</div>
                        <div>"View wonderful"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                    <div class="row cleanliness mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">cleanliness</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 84%" aria-valuenow="84" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>8.4</span> /10
                        </div>
                        <div class="rate-base">based on 199 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Clean hotel facilities."</div>
                        <div>"Clean rooms."</div>
                        <div>"Property was clean."</div>
                        <div>"Clean towels"</div>
                        <div>"Very clean"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                    <div class="row value mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">value</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 74%" aria-valuenow="74" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>7.4</span> /10
                        </div>
                        <div class="rate-base">based on 222 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Best value for money."</div>
                        <div>"Breakfast, bar and food prices are cheap."</div>
                        <div>"Complimentary buffet"</div>
                        <div>"Complimentary internet"</div>
                        <div>"Complimentary happy hour"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                    <div class="row breakfat mb-2">
                      <div class="col-12 col-md-6 col-lg-4 reviews">
                        <h4 class="rate-title">Breakfast</h4>
                        <div class="progress">
                          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                            role="progressbar" style="width: 91%" aria-valuenow="91" aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                        <div class="rate-num">
                          <span>9.1</span> /10
                        </div>
                        <div class="rate-base">based on 341 reviews</div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-8 reviews-details">
                        <div>"Great and affordable breakfast."</div>
                        <div>"Delicious buffet breakfast"</div>
                        <div>"Great complimentary breakfast"</div>
                        <div>"Delicious breakfast"</div>
                        <div class="see-more-reviews">see more</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="hotel-facili mb-4" id="hotel-facili">
              <h3 class="facili-title">hotel facilities</h3>
              <div class="facili-content">
                <div class="facili-top">
                  <h5 class="top-title mb-3">most popular facilities</h5>
                  <div class="row">
                    <div class="col-6 col-md-4 col-lg-3">
                      <div class="my-1 d-flex">
                        <img src="../../assets/img/wifi.svg" alt="" width="22px" height="22px"> <span>Wi-fi</span>
                      </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                      <div class="my-1 d-flex">
                        <img src="../../assets/img/front-desk.svg" alt="" width="22px" height="22px">
                        <span>Front desk</span>
                      </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                      <div class="my-1 d-flex">
                        <img src="../../assets/img/no-smoking.svg" alt="" width="22px" height="22px">
                        <span>Non-smoking hotel</span>
                      </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                      <div class="my-1 d-flex">
                        <img src="../../assets/img/dumbbell.svg" alt="" width="22px" height="22px">
                        <span>Gym/fitness center</span>
                      </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                      <div class="my-1 d-flex">
                        <img src="../../assets/img/elevator-with-a-occupant.svg" alt="" width="22px" height="22px">
                        <span>Lifts</span>
                      </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                      <div class="my-1 d-flex">
                        <img src="../../assets/img/waiter.svg" alt="" width="22px" height="22px">
                        <span>Concierge</span>
                      </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                      <div class="my-1 d-flex">
                        <img src="../../assets/img/washing-machine.svg" alt="" width="22px" height="22px">
                        <span>Laundry service</span>
                      </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                      <div class="my-1 d-flex">
                        <img src="../../assets/img/conference-hall.svg" alt="" width="22px" height="22px">
                        <span>Conference room</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="facili-body">
                  <div class="row">
                    <div class="col-6 col-md-4 col-lg-3">
                      <div class="my-3 d-flex">
                        <img src="../../assets/img/wifi-bk.svg" alt="" width="22px" height="22px">
                        <span>internet access</span>
                      </div>
                      <div class="services-details pl-3">
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>wifi free </span>
                          <span class="badge badge-success">free</span>
                        </div>
                      </div>
                      <div class="my-3 d-flex">
                        <img src="../../assets/img/fast-food-bk.svg" alt="" width="22px" height="22px">
                        <span>food & drinks</span>
                      </div>
                      <div class="services-details pl-3">
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>restaurant</span>
                        </div>
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>breakfast</span>
                        </div>
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>bar</span>
                        </div>
                      </div>
                      <div class="my-3 d-flex">
                        <img src="../../assets/img/shop-bk.svg" alt="" width="22px" height="22px">
                        <span>shops</span>
                      </div>
                      <div class="services-details pl-3">
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>gift shop</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                      <div class="my-3 d-flex">
                        <img src="../../assets/img/front-desk-bk.svg" alt="" width="22px" height="22px"> front-desk services
                      </div>
                      <div class="services-details pl-3">
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>front desk</span>
                          <span class="badge badge-success">24hours</span>
                        </div>
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>Concierge</span>
                        </div>
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>Laundry service</span>
                        </div>
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>Dry cleaning service</span>
                        </div>
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>Luggage storage</span>
                        </div>
                      </div>
                      <div class="my-3 d-flex">
                        <img src="../../assets/img/meditation-bk.svg" alt="" width="22px" height="22px">
                        <span>beauty & wellness</span>
                      </div>
                      <div class="services-details pl-3">
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>gym/fitness center</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                      <div class="my-3 d-flex">
                        <img src="../../assets/img/wheelchair-bk.svg" alt="" width="22px" height="22px">
                        <span>accessibility</span>
                      </div>
                      <div class="services-details pl-3">
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>Wheelchair accessible rooms</span>
                        </div>
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>Roll-in shower</span>
                        </div>
                      </div>
                      <div class="my-3 d-flex">
                        <img src="../../assets/img/parking-bk.svg" alt="" width="22px" height="22px">
                        <span>Parking & transportation</span>
                      </div>
                      <div class="services-details pl-3">
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>parking</span>
                          <span class="badge badge-info">extra charge</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                      <div class="my-3 d-flex">
                        <img src="../../assets/img/swimmer-bk.svg" alt="" width="22px" height="22px">
                        <span>pool & beach</span>
                      </div>
                      <div class="services-details pl-3">
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>indoor pool</span>
                        </div>
                      </div>
                      <div class="my-3 d-flex">
                        <img src="../../assets/img/spam-bk.svg" alt="" width="22px" height="22px">
                        <span>general</span>
                      </div>
                      <div class="services-details pl-3">
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>lifts</span>
                        </div>
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>non-smoking hotel</span>
                        </div>
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>Multilingual staff</span>
                        </div>
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>Business centre</span>
                        </div>
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>Ballroom</span>
                        </div>
                        <div class="my-1">
                          <i class="fa fa-check"></i>
                          <span>Conference room</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="about-hotel-section mb-4" id="about-hotel-section">
              <h3 class="facili-title">about the hotel</h3>
              <div class="about-hotel-content">
                <div class="row">
                  <div class="col-12 col-lg-6">
                    <div class="instructions-section">
                      <h4 class="top-title my-4">policies</h4>
                      <div class="toggle-insts-section">
                        <i class="fa fa-chevron-up"></i>
                      </div>
                      <h5>check-in instructions</h5>
                      <div>
                        <ul>
                          <li>Extra-person charges may apply and vary depending on property policy</li>
                          <li>Government-issued photo identification and a credit card, debit card, or cash deposit may
                            be required at check-in for incidental charges</li>
                          <li>Special requests are subject to availability upon check-in and may incur additional
                            charges; special requests cannot be guaranteed</li>
                          <li>This property accepts credit cards, debit cards, and cash</li>
                          <li>Safety features at this property include a carbon monoxide detector, a fire extinguisher,
                            a smoke detector, and a first aid kit</li>
                          <li>Please note that cultural norms and guest policies may differ by country and by property;
                            the policies listed are provided by the property</li>
                        </ul>
                      </div>
                      <h5>special check-in instructions</h5>
                      <div>Front desk staff will greet guests on arrival. Due to COVID-19, this property's food and
                        beverage options may be limited pursuant to local regulations.</div>
                    </div>
                    <div class="instructions-section my-3">
                      <h4 class="top-title my-4">Important information</h4>
                      <div class="toggle-insts-section">
                        <i class="fa fa-chevron-up"></i>
                      </div>
                      <div class="need-to-know">
                        <h5>you need to know</h5>
                        <div>
                          <ul>
                            <li>The property has connecting/adjoining rooms, which are subject to availability and can
                              be requested by contacting the property using the number on the booking confirmation.</li>
                            <li>This property advises that enhanced cleaning and guest safety measures are currently in
                              place</li>
                            <li>Disinfectant is used to clean the property; commonly-touched surfaces are cleaned with
                              disinfectant between stays; bed sheets and towels are laundered at a temperature of at
                              least 60°C/140°F.</li>
                            <li>Personal protective equipment, including masks and gloves, will be available to guests.
                            </li>
                            <li>Social distancing measures are in place; staff at the property wear personal protective
                              equipment; a shield is in place between staff and guests in main contact areas; periodic
                              temperature checks are conducted on staff; temperature checks are available to guests;
                              guests are provided with hand sanitizer; masks are required in public areas.</li>
                            <li>Contactless check-in and contactless check-out are available.</li>
                            <li>Individually-wrapped food options are available for breakfast and through room service.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="instructions-section my-3">
                      <h4 class="top-title my-4">fees and extras</h4>
                      <div class="toggle-insts-section">
                        <i class="fa fa-chevron-up"></i>
                      </div>
                      <div class="need-to-know">
                        <h5>optional fees</h5>
                        <div>
                          <p>The following fees and deposits are charged by the property at time of service, check-in,
                            or check-out.</p>
                          <ul>
                            <li>Fee for in-room wireless Internet: USD 14.95 per night (rates may vary)</li>
                            <li>Fee for in-room wired Internet: USD 14.95 per night (rates may vary)</li>
                            <li>Fee for wireless Internet in public areas: USD 12.95 (rates may vary)</li>
                            <li>Fee for wired Internet in public areas: USD 12.95 (rates may vary)</li>
                            <li>Covered self parking fee: USD 18.00 per day (in/out privileges)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="hotel-description">
                      <h4 class="top-title my-4">Hotel description</h4>
                      <div class="toggle-insts-section">
                        <i class="fa fa-chevron-up"></i>
                      </div>
                      <div class="instructions-section">
                        <div>
                          <p>Isn’t it all about enjoying your holiday! Hilton Worldwide's property is budget-friendly,
                            where you don’t need to break open your piggy bank to enjoy yourself and light it up.<br>
                            In Alexandria&nbsp;you will be near to Stabler-Leadbeater Apothecary Museum, Air Force
                            Memorial, and many more places when you stay at&nbsp;Embassy Suites Alexandria - Old Town,
                            which is few steps away from all the pleasurable sightseeing.<br>
                            Hospitality, warm reception, and friendly staff are what you will find when you first step
                            into the property not only because of the warm atmosphere, but also for recreational
                            services excellence which embodied in&nbsp;having a fitness centre and an indoor pool. The
                            accommodations are rigged up with air conditioning, microwaves and telephones.</p>
                          <p>Check-in: From 03:00 PM</p>
                          <p>Check-out: Until 12:00 PM</p>
                        </div>
                      </div>
                      <div class="instructions-section my-3">
                        <h5>loaction</h5>
                        <div>Located in Alexandria (Old Town Alexandria), Embassy Suites Hotel Alexandria Old Town is
                          within a 10-minute drive of MGM National Harbor and Fashion Center at Pentagon City. This
                          hotel is 6.4 mi (10.2 km)
                          from Arlington National Cemetery and 7.6 mi (12.2 km) from Vietnam Veterans Memorial.</div>
                      </div>
                      <div class="instructions-section my-3">
                        <h5>dining</h5>
                        <div>Feast your senses at one of Embassy Suites Alexandria - Old Town's eateries serving
                          Mediterranean cuisines, or tranquillise
                          with a drink at the property's lounge. Room service is also available around the clock.</div>
                      </div>
                      <div class="instructions-section my-3">
                        <h5>rooms</h5>
                        <div>Wake up in the morning and enjoy the atmosphere of Alexandria at one of 288 comfortable
                          accommodations at Embassy Suites Alexandria - Old Town where every detail was carefully
                          selected and quality crafted for the guests, featuring a refrigerator, heating and a seating
                          area and for more pleasure, there is also a TV with cable channels in addition to an iron.
                          When it comes to bathing, you can have a relaxing one in your private bathroom that is fitted
                          with a shower and towels. Housekeeping services are provided as well.</div>
                      </div>
                      <div class="instructions-section my-3">
                        <h5>Amenities</h5>
                        <div>Embassy Suites Alexandria - Old Town provides a group of
                          magnificent services to meet guests’ needs, such as the fitness centre and the indoor pool.
                        </div>
                      </div>
                      <div class="instructions-section my-3">
                        <h5>Business, and other amenities</h5>
                        <div>Featured amenities include wired Internet access (surcharge), a 24-hour business center,
                          and complimentary newspapers in the lobby. Planning an event in Alexandria? This hotel has
                          facilities measuring 6234 square feet (579 square meters),
                          including conference space. Self parking (subject to charges) is available onsite.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="faqs-hotel mb-4" id="faqs-hotel">
              <h3 class="facili-title">faqs about Steigenberger Cecil Hotel Alexandria hotel</h3>
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header collapsed" id="headingOne" data-toggle="collapse" data-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    <h5 class="mb-0">How do I get to Steigenberger Cecil Hotel Alexandria from the nearest airport?</h5>
                    <div class="toggle-accordion">
                      <i class="fa fa-chevron-down"></i>
                    </div>
                  </div>
                  <div id="collapseOne" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                      <p>From the nearest airport, you can get to Steigenberger Cecil Hotel Alexandria by: </p>
                      <ul>
                        <li>Airport shuttle (arranged by property) 25min</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header collapsed" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <h5 class="mb-0">What is there to do at Steigenberger Cecil Hotel Alexandria?</h5>
                    <div class="toggle-accordion">
                      <i class="fa fa-chevron-down"></i>
                    </div>
                  </div>
                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div class="card-body">
                      <p>Steigenberger Cecil Hotel Alexandria offers the following activities/services (charges may
                        apply):</p>
                      <ul>
                        <li>Indoor pool</li>
                        <li>Fitness center</li>
                        <li>Spa</li>
                        <li>Hot tub/Jacuzzi</li>
                        <li>Sauna</li>
                        <li>Massage</li>
                        <li>Turkish/Steam Bath</li>
                        <li>Pool table</li>
                        <li>Snorkeling</li>
                        <li>Ping-pong</li>
                        <li>Library</li>
                        <li>Diving</li>
                        <li>Karaoke</li>
                        <li>Darts</li>
                        <li>Windsurfing</li>
                        <li>Beachfront</li>
                        <li>Evening entertainment</li>
                        <li>Private beach area</li>
                        <li>Steam room</li>
                        <li>Locker rooms</li>
                        <li>Fitness</li>
                        <li>Beauty services</li>
                        <li>Beach</li>
                        <li>Spa facilities</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header collapsed" id="headingThree" data-toggle="collapse"
                    data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                    <h5 class="mb-0">Does Steigenberger Cecil Hotel Alexandria have a hot tub for its guests?</h5>
                    <div class="toggle-accordion">
                      <i class="fa fa-chevron-down"></i>
                    </div>
                  </div>
                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                    data-parent="#accordionExample">
                    <div class="card-body">
                      Yes, there's a hot tub. You can find out more about this and the other facilities at Steigenberger
                      Cecil Hotel Alexandria on this page.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header collapsed" id="headingFour" data-toggle="collapse" data-target="#collapseFour"
                    aria-expanded="true" aria-controls="collapseFour">
                    <h5 class="mb-0">How much does it cost to stay at Steigenberger Cecil Hotel Alexandria?</h5>
                    <div class="toggle-accordion">
                      <i class="fa fa-chevron-down"></i>
                    </div>
                  </div>
                  <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                    <div class="card-body">
                      The prices at Steigenberger Cecil Hotel Alexandria may vary depending on your stay (e.g. dates,
                      hotel's policy etc.). To see prices, enter your dates.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header collapsed" id="headingFive" data-toggle="collapse" data-target="#collapseFive"
                    aria-expanded="true" aria-controls="collapseFive">
                    <h5 class="mb-0">Does Steigenberger Cecil Hotel Alexandria have a hot tub for its guests?</h5>
                    <div class="toggle-accordion">
                      <i class="fa fa-chevron-down"></i>
                    </div>
                  </div>
                  <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                    <div class="card-body">
                      Yes, there's a hot tub. You can find out more about this and the other facilities at Steigenberger
                      Cecil Hotel Alexandria on this page.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header collapsed" id="headingSix" data-toggle="collapse" data-target="#collapseSix"
                    aria-expanded="true" aria-controls="collapseSix">
                    <h5 class="mb-0">How much does it cost to stay at Steigenberger Cecil Hotel Alexandria?</h5>
                    <div class="toggle-accordion">
                      <i class="fa fa-chevron-down"></i>
                    </div>
                  </div>
                  <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                    <div class="card-body">
                      The prices at Steigenberger Cecil Hotel Alexandria may vary depending on your stay (e.g. dates,
                      hotel's policy etc.). To see prices, enter your dates.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Start footer -->
  <Footer />
  <!--start copyrights-->
  <div class="copyrights">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <p>© 2021 Travveo. All Rights Reserved.</p>
        </div>
        <div class="col-12 col-lg-3">
          <p>privacy policy</p>
        </div>
        <div class="col-12 col-lg-3">
          <p>terms of services</p>
        </div>
      </div>
    </div>
  </div>
  <a href="#" class="go-top" data-toggle="tooltip" title="" data-placement="left" data-original-title="go to top">
    <img src="../../assets/img/up-arrow.svg" alt="" width="20px" height="26px">
  </a>
</template>