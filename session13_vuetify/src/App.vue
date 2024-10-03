<template>
    <div>
        <h1>Vuetify</h1>
        <v-btn color="warning"> click1 </v-btn>
        <button class="red">click2</button>
        <input type="text" placeholder="mời nhập tên" />
        <v-text-field
            label="email"
            type="number"
            width="150"
            color="red"
        ></v-text-field>
        <v-select
            label="mời chọn phòng ban"
            :items="['kế toán', 'nhân sự', 'bảo vệ', 'kĩ thuật', 'lao công']"
            
        ></v-select>
        <!-- <v-carousel>
            <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            ></v-carousel-item>

            <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
            ></v-carousel-item>

            <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            ></v-carousel-item>
        </v-carousel> -->
        <v-icon>email</v-icon>
        <v-icon aria-hidden="false"> mdi-account </v-icon>
        <v-icon icon="$vuetify"></v-icon>
        <!-- <LocalMallIcon></LocalMallIcon>; -->
        <i class="fa-solid fa-cart-shopping"></i>

        <v-container class="bg-surface-variant">
            <v-row no-gutters>
                <v-col cols="12" md="5" lg="2"> cột 1 </v-col>
                <v-col md="7"> cột 2 </v-col>
                <v-col md="12"> cột 3 </v-col>
                <v-col> cột 4 </v-col>
                <v-col> cột 5 </v-col>
                <v-col> cột 6 </v-col>
                <v-col> cột 7 </v-col>
                <v-col> cột 8 </v-col>
                <v-col> cột 9 </v-col>
                <v-col> cột 10 </v-col>
                <v-col> cột 11 </v-col>
                <v-col> cột 12 </v-col>
                
            </v-row>

            <!-- <v-row no-gutters>
                <v-col cols="2"> cột 6 </v-col>
                <v-col> cột 7 </v-col>
            </v-row>  -->
        </v-container>
        <p>****</p>
        <v-container class="bg-surface-variant">
            <v-row no-gutters>
                <v-col cols="12" md="9" offset="3" order="2"> cột 1 </v-col>
                <v-col order="1" md="2"> cột 2 </v-col>
                <!-- <v-col> cột 3 </v-col> -->
            </v-row>
        </v-container>
        <!-- 
          responsive
          tương thích giữa các màn hình.

         -->
        
    </div>
</template>
<script setup>
// import Button from "@mui/material/Button";
// import LocalMallIcon from "@mui/icons-material/LocalMall";
</script>
<style></style>
