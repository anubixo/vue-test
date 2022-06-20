<template>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 79%" aria-valuenow="79" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 81%" aria-valuenow="81" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 77%" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 84%" aria-valuenow="84" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 74%" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 91%" aria-valuenow="91" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 77%" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 76%" aria-valuenow="76" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 79%" aria-valuenow="79" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 81%" aria-valuenow="81" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 77%" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 84%" aria-valuenow="84" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 74%" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 91%" aria-valuenow="91" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 76%" aria-valuenow="76" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 81%" aria-valuenow="81" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 77%" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 84%" aria-valuenow="84" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 74%" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                  style="width: 91%" aria-valuenow="91" aria-valuemin="0" aria-valuemax="100"></div>
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
</template>