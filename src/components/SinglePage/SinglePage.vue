<script>
export default {
  data() {
    return {
      title: "Steigenberger Cecil Hotel Ras AlBar",
      city: "Ras AlBar",
      country: "Egypt"
    }
  }
}
</script>
<script setup>
import NavBar from '../Layout/NavBar.vue'
import SearchBox from './SearchBox.vue'
import Breadcrump from './Breadcrump.vue'
import PageNavigator from './PageNavigator.vue';
import Footer from '../Layout/Footer.vue';
import HotelTitle from './HotelTitle.vue';
import GalarySlider from './GalarySlider.vue';
import Recommendation from './Recommendation.vue';
import AvailabilityCheck from './AvailabilityCheck.vue';
import RoomsTable from './RoomsTable.vue';
import Reviews from './Reviews.vue';
import HotelFacilities from './HotelFacilities.vue';
import AboutHotel from './AboutHotel.vue';
import HotelFAQs from './HotelFAQs.vue';
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
            <Breadcrump :title="title" :city="city" :country="country" />
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
                    <HotelTitle :title="title" :city="city" :country="country" />
                    <!-- Galary Slider -->
                    <GalarySlider />
                  </div>
                </div>
              </div>
            </div>

            <Recommendation />

            <AvailabilityCheck />

            <RoomsTable />

            <Reviews />

            <HotelFacilities />

            <AboutHotel />

            <HotelFAQs />

          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Start footer -->
  <Footer />
  <!--start copyrights-->

</template>