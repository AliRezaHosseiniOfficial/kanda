<template>
  <section>
    <div class="container-full mt-4 px-4">
      <!-- Tabs navs -->
      <ul
        class="justify-content-center nav nav-tabs mb-3"
        id="ex1"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active"
            id="ex1-tab-1"
            data-mdb-toggle="tab"
            href="#ex1-tabs-1"
            role="tab"
            aria-controls="ex1-tabs-1"
            aria-selected="true"
            >New Orders</a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="ex1-tab-2"
            data-mdb-toggle="tab"
            href="#ex1-tabs-2"
            role="tab"
            aria-controls="ex1-tabs-2"
            aria-selected="false"
            >Current Orders</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="ex1-tab-3"
            data-mdb-toggle="tab"
            href="#ex1-tabs-3"
            role="tab"
            aria-controls="ex1-tabs-3"
            aria-selected="false"
            >History</a
          >
        </li>
      </ul>
    </div>
    <!-- Tabs navs -->
    <div class="container-full mt-4 px-4 TableBkg">
      <div class="d-flex justify-content-between pt-5 px-3">
        <!-- pagination -->
        <AdminPagination />
        <!-- end pagination -->
        <!-- sort section -->
        <div class="d-flex align-items-center">
          <p class="sort">Sort</p>
          <p class="SortStatus px-2">Last Opened</p>
        </div>
        <!-- end sort section -->
      </div>
      <!-- table section -->
      <div class="container-full px-3">
        <table class="table align-middle mb-0 bg-white">
          <thead class="bg-light">
            <tr>
              <th>#</th>  
              <th>Name</th>
              <th>Order id</th>
              <th>Date</th>
              <th>Price</th>
              <th>Delivery Status</th>
              <th>Order Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>1</p>
              </td>
              <td>
                <p>Jack Dorsi</p>
              </td>
              <td>
                <p>#14522322</p>
              </td>
              <td>
                <p>#14522322</p>
              </td>
              <td>
                <p>$1000</p>
              </td>
               <td>
                <p>Unknown</p>
              </td>
               <td>
                <p>Deliverd</p>
              </td>
               <td>
                <!-- change details modal -->
                <div id="CollapseState1" aria-expanded="false" class="ChangeState bg-white collapse">
                    <p role="button" class="StatusDevider py-2 text-danger text-center">Check</p>
                    <p role="button" class="StatusDevider py-2 text-warning text-center">Send</p>
                    <p role="button" class="StatusDevider py-2 text-success text-center">Delivered</p>
                    <p role="button" class="py-2 text-primary text-center">Preparation</p>
                </div>
                <!-- Show Details Btn -->
                <button @click="DetailsState('pedram', '09194160419')" type="button" class="DetailBtn btn btn-sm">Details</button>
              </td>
               <td data-bs-toggle="collapse" data-bs-target="#CollapseState1" role="button" @click="ChangeStateAction">
                <i class="bi bi-three-dots-vertical"></i>
              </td>        
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  <TheDetailModal v-if="DspDetails" @CloseEvent="CloseDetail" :name="this.ModalName" :phone="this.ModalPhone" />
  </section>
</template>

<script>
import TheDetailModal from "@/components/admin/DetailModal";
import AdminPagination from "@/components/AdminPagination";
export default {
name: "admin",
layout: 'admin', 
components: { AdminPagination, TheDetailModal },
data() {
  return {
    ChangeState: false,
    DspDetails: false,
    ModalName: '',
    ModalPhone: ''
  }
}, 
computed: {},
methods: {
    ChangeStateAction() {
      this.ChangeState = !this.ChangeState;
    }, 
    DetailsState(name, phone) {
      this.DspDetails = !this.DspDetails;
      this.ModalName = name;
      this.ModalPhone = phone;
    },
    CloseDetail() {
      this.DspDetails = !this.DspDetails;
    },
}
}
</script>

<style scoped>

.StatusDevider {
  border-bottom: 1px solid #f1f1f3;
  width: 100%;
}

.ChangeState {
    box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.09);
    background-color: #e99d7b;
    border-radius: 4px;
    width: 110px;
    z-index: 999;
    position: absolute;
    right: 110px;
}

.DetailBtn {
  background-color: #e99d7b;
  color: #231942;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 10pt;
  padding: 5px 25px;
  text-transform: capitalize;
}
.DetailBtn:focus {
    box-shadow: none;
}

th {
    background-color: #f5f6fa;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
    font-size: 10pt;
    color: #212529;
    padding: 10px 15px;
    border-bottom: 0;
}

td {
    color: black;
    font-weight: 400;
    font-family: "Source Sans Pro", sans-serif;
}

p {
    margin-bottom: 0;
}

.DetailBtn {
  background-color: #e99d7b;
  color: #231942;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 10pt;
  padding: 5px 25px;
  text-transform: capitalize;
}

.DetailBtn:focus {
  box-shadow: none;
}

.page-link {
  color: #4d4f5c;
  padding: 8px 15px;
}

.page-link:focus {
  background-color: #055452;
  color: #fff;
  box-shadow: none;
}

.SortStatus {
  color: #828282;
  font-family: "Open Sans";
  font-size: 10pt;
  font-weight: 400;
}

.sort {
  color: #000000;
  font-family: "Open Sans";
  font-size: 14pt !important;
  font-weight: 400;
  font-size: 10pt;
}

.TableBkg {
  background-color: #fff;
  min-height: 80vh;
}

.nav-link {
  font-family: "Source Sans Pro", sans-serif;
  color: #9296ad;
  background-color: #fff;
  font-size: 10pt;
}

.nav-link.active {
  background-color: #055452;
  color: #fff !important;
  border-radius: 8px;
  font-weight: 600;
}

.nav-tabs {
  border-bottom: 0;
}
</style>