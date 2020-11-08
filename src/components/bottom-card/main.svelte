<script>
import Monthly from "./monthly.svelte";
import Pinned from "./pinned.svelte";
import Recent from "./recent.svelte";
import Current from "../current-location-card";
import {
    Swiper,
    SwiperSlide,
} from 'framework7-svelte';

</script>
<Swiper init params={{loop:true, }}>
    <SwiperSlide><Current></Current></SwiperSlide>
    <SwiperSlide><Recent></Recent></SwiperSlide>
    <SwiperSlide><Monthly></Monthly></SwiperSlide>
    <SwiperSlide><Pinned></Pinned></SwiperSlide>
</Swiper>
<style>
</style>