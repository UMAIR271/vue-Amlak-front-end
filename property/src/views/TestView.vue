<!-- <template>
  <div>
    <div
      id="carouselExampleControls"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="card-wrapper container-sm d-flex justify-content-around">
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
          <div class="card-wrapper container-sm d-flex justify-content-around">
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
    <div
      id="carouselExampleControls"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="card-wrapper container-sm d-flex justify-content-around">
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
          <div class="card-wrapper container-sm d-flex justify-content-around">
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
<style></style> -->

<template>
  <div>
    <p @click="sendData()">hello</p>
    <p>{{ $store.state.data.name }}</p>

    <!-- <p>{{ $store.state.title }}</p> -->

    <!-- <button @click="increment">Increment</button> -->
  </div>
</template>

<script>
// import { useStore } from "vuex";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      name: "",
    };
  },
  // setup() {
  //   console.log("lovue you ");
  //   const data = {};
  //   data.name = "lovue you";
  //   const store = useStore();
  //   function updateData() {
  //     store.commit({
  //       type: "updateData",
  //       name: data,
  //     });
  //   }

  //   return {
  //     updateData,
  //   };
  // this.$store.commit({
  //   type: "addData",
  //   name: "love data",
  // });
  methods: {
    ...mapMutations(["updateData"]),
    sendData() {
      const data = {};
      data.name = "lovue you";
      this.updateData(data);
    },
  },
};

// setup() {
//   const store = ();
//   const count = store.state.count;
//   console.log(count);
//   const increment = () => {
//     store.dispatch("increment");
//   };
//   return { count, increment };
// },
</script>
