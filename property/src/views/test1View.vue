<template>
  <carousel :autoplay="2000" :settings="settings" :breakpoints="breakpoints">
    <slide v-for="(value, key) in rent" :key="key">
      <div class="carousel-item active">
        <div class="card-wrapper container-sm d-flex justify-content-around">
          <div class="card carousel-card" style="width: 22rem">
            <a href="rent.html" :key="item">
              <div class="">
                <img v-bind:src="value.cover_image" class="carousel-imgs" />
              </div>
            </a>
            <div class="card-body carousel-imgs-text">
              <h6 class="imgs-text-h2">
                <div class="marin_0">
                  <p>Price</p>
                  <h4>{{ value.property_pricing }}</h4>
                </div>
                <div>
                  <label class="add-fav">
                    <input type="checkbox" />
                    <i @click="addToFavourite(value.id)" class="icon-heart">
                    </i>
                  </label>
                </div>
              </h6>
            </div>
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
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
  <carousel :autoplay="5000" :settings="settings" :breakpoints="breakpoints">
    <slide v-for="(value, key) in sell" :key="key">
      <div class="carousel-item active">
        <div class="card-wrapper container-sm d-flex justify-content-around">
          <div class="card carousel-card" style="width: 22rem">
            <a href="rent.html" :key="item">
              <div class="">
                <img v-bind:src="value.cover_image" class="carousel-imgs" />
              </div>
            </a>
            <div class="card-body carousel-imgs-text">
              <h6 class="imgs-text-h2">
                <div class="marin_0">
                  <p>Price</p>
                  <h4>{{ value.property_pricing }}</h4>
                </div>
                <div>
                  <label class="add-fav">
                    <input type="checkbox" />
                    <i @click="addToFavourite(value.id)" class="icon-heart">
                    </i>
                  </label>
                </div>
              </h6>
            </div>
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
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import axios from "axios";
import { useSetTitle } from "@/composables";

export default {
  components: {
    Carousel,
    Slide,

    Navigation,
  },
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
      settings: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      breakpoints: {
        // 700px and up
        400: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        // 1024 and up
        500: {
          itemsToShow: 2,
          snapAlign: "start",
        },
        700: {
          itemsToShow: 3.5,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
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
          const response1 = await axios.get(this.nextPage);
          this.rent = [...response.data.results, ...response1.data.results];
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
        console.log(response.data.results);
        this.sell = response.data.results;
        this.nextPage = response.data.next;
        try {
          const response1 = await axios.get(this.nextPage);
          this.sell = [...response.data.results, ...response1.data.results];
          console.log(this.rentnext);
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
