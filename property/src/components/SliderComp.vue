<template>
  <div>
    <div>
      <h2>Something New Everyday</h2>
    </div>
    <div>
      <p>New properties <a href="#" style="color: #007ea8">for rent</a></p>
      <div
        id="carouselExampleControls"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div
              class="card-wrapper container-sm d-flex justify-content-around"
            >
              <div
                class="card carousel-card"
                style="width: 22rem"
                v-for="(value, key) in rent"
                :key="key"
              >
                <a href="rent.html" :key="item">
                  <div class="">
                    <img v-bind:src="value.cover_image" class="carousel-imgs" />
                  </div>
                  <div class="card-body carousel-imgs-text">
                    <h6 class="imgs-text-h2">
                      <div class="marin_0">
                        <p>Price</p>
                        <h4>{{ value.property_pricing }}</h4>
                      </div>
                      <div>
                        <label class="add-fav">
                          <input type="checkbox" />
                          <i class="icon-heart"> </i>
                        </label>
                      </div>
                    </h6></div
                ></a>
                <div style="margin: 5px 0px">
                  <i class="fa fa-map-marker"></i>location
                </div>
                <div
                  style="
                    display: flex;
                    justify-content: space-around;
                    margin: 5px 0px;
                  "
                >
                  <span><i class="fa fa-bed"></i>{{ value.Bedrooms }}</span>
                  <span
                    ><i class="fa fa-bath" aria-hidden="true"></i
                    >{{ value.Batrooms }}</span
                  >
                  <span
                    ><i class="fa fa-area-chart" aria-hidden="true"></i
                    >{{ value.property_pricing }}</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item active">
            <div
              class="card-wrapper container-sm d-flex justify-content-around"
            >
              <div
                class="card carousel-card"
                style="width: 22rem"
                v-for="(value, key) in rentnext"
                :key="key"
              >
                <a href="rent.html" :key="item">
                  <div class="">
                    <img v-bind:src="value.cover_image" class="carousel-imgs" />
                  </div>
                  <div class="card-body carousel-imgs-text">
                    <h6 class="imgs-text-h2">
                      <div class="marin_0">
                        <p>Price</p>
                        <h4>{{ value.property_pricing }}</h4>
                      </div>
                      <div>
                        <label class="add-fav">
                          <input type="checkbox" />
                          <i class="icon-heart"> </i>
                        </label>
                      </div>
                    </h6></div
                ></a>
                <div style="margin: 5px 0px">
                  <i class="fa fa-map-marker"></i>location
                </div>
                <div
                  style="
                    display: flex;
                    justify-content: space-around;
                    margin: 5px 0px;
                  "
                >
                  <span><i class="fa fa-bed"></i>{{ value.Bedrooms }}</span>
                  <span
                    ><i class="fa fa-bath" aria-hidden="true"></i
                    >{{ value.Batrooms }}</span
                  >
                  <span
                    ><i class="fa fa-area-chart" aria-hidden="true"></i
                    >{{ value.property_pricing }}</span
                  >
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <p style="margin-top: 20px">
        New properties <a href="#" style="color: #007ea8">for sale</a>
      </p>
      <div
        id="carouselExampleControls"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div
              class="card-wrapper container-sm d-flex justify-content-around"
            >
              <div
                class="card carousel-card"
                style="width: 22rem"
                v-for="(value, key) in sell"
                :key="key"
              >
                <a href="rent.html" :key="item">
                  <div class="">
                    <img v-bind:src="value.cover_image" class="carousel-imgs" />
                  </div>
                  <div class="card-body carousel-imgs-text">
                    <h6 class="imgs-text-h2">
                      <div class="marin_0">
                        <p>Price</p>
                        <h4>{{ value.property_pricing }}</h4>
                      </div>
                      <div>
                        <label class="add-fav">
                          <input type="checkbox" />
                          <i class="icon-heart"> </i>
                        </label>
                      </div>
                    </h6></div
                ></a>
                <div style="margin: 5px 0px">
                  <i class="fa fa-map-marker"></i>location
                </div>
                <div
                  style="
                    display: flex;
                    justify-content: space-around;
                    margin: 5px 0px;
                  "
                >
                  <span><i class="fa fa-bed"></i>{{ value.Bedrooms }}</span>
                  <span
                    ><i class="fa fa-bath" aria-hidden="true"></i
                    >{{ value.Batrooms }}</span
                  >
                  <span
                    ><i class="fa fa-area-chart" aria-hidden="true"></i
                    >{{ value.property_pricing }}</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item active">
            <div
              class="card-wrapper container-sm d-flex justify-content-around"
            >
              <div
                class="card carousel-card"
                style="width: 22rem"
                v-for="(value, key) in sellnext"
                :key="key"
              >
                <a href="rent.html" :key="item">
                  <div class="">
                    <img v-bind:src="value.cover_image" class="carousel-imgs" />
                  </div>
                  <div class="card-body carousel-imgs-text">
                    <h6 class="imgs-text-h2">
                      <div class="marin_0">
                        <p>Price</p>
                        <h4>{{ value.property_pricing }}</h4>
                      </div>
                      <div>
                        <label class="add-fav">
                          <input type="checkbox" />
                          <i class="icon-heart"> </i>
                        </label>
                      </div>
                    </h6></div
                ></a>
                <div style="margin: 5px 0px">
                  <i class="fa fa-map-marker"></i>location
                </div>
                <div
                  style="
                    display: flex;
                    justify-content: space-around;
                    margin: 5px 0px;
                  "
                >
                  <span><i class="fa fa-bed"></i>{{ value.Bedrooms }}</span>
                  <span
                    ><i class="fa fa-bath" aria-hidden="true"></i
                    >{{ value.Batrooms }}</span
                  >
                  <span
                    ><i class="fa fa-area-chart" aria-hidden="true"></i
                    >{{ value.property_pricing }}</span
                  >
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { useSetTitle } from "@/composables";
export default {
  name: "HomeView",
  setup() {
    useSetTitle("Home");
  },
  data() {
    return {
      rent: [],
      rentnext: [],
      sellnext: [],
      sell: [],
      nextPage: null,
    };
  },
  mounted() {
    this.RentData();
    this.SellData();
  },
  methods: {
    async RentData() {
      try {
        const response = await axios.get(
          "http://18.177.139.152/list/filter/?check_Purpose_Type=Rent"
        );
        console.log(response.data.results);
        this.rent = response.data.results;
        this.nextPage = response.data.next;
        try {
          const response = await axios.get(this.nextPage);
          // console.log("second page ", response.data);
          this.rentnext = response.data.results; // Add the new items to the array
          //   this.nextPage = response.data.next;
          // Save the URL of the next page of data
          console.log(this.rentnext);
        } catch (error) {
          console.error(error);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async SellData() {
      // Check if there is a next page of data
      try {
        const response = await axios.get(
          "http://18.177.139.152/list/filter/?check_Purpose_Type=Sell"
        );
        console.log("sell");
        console.log(response.data.results);
        this.sell = response.data.results;
        this.nextPage = response.data.next;
        try {
          const response = await axios.get(this.nextPage);
          // console.log("second page ", response.data);
          this.sellnext = response.data.results; // Add the new items to the array
          //   this.nextPage = response.data.next;
          // Save the URL of the next page of data
          console.log(this.sellnext);
        } catch (error) {
          console.error(error);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
/* @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"; */
/* @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"; */
/* @import "https://unpkg.com/flickity@2/dist/flickity.min.css";
@import "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"; */
/* @import "@/assets/css/style.css"; */
</style>
