<script>
import Monthly from "./monthly.svelte";
import Pinned from "./pinned.svelte";
import Recent from "./recent.svelte";
import {
    Swiper,
    SwiperSlide,
} from 'framework7-svelte';

</script>

<Swiper init params={{loop:true, }}>
    <SwiperSlide><Recent></Recent></SwiperSlide>
    <SwiperSlide><Monthly></Monthly></SwiperSlide>
    <SwiperSlide><Pinned></Pinned></SwiperSlide>
</Swiper>