<template>
  <!-- component to add place assesment items to a contained list -->
  <div class="mt-5 bg-white rounded shadow">
    <app-place-assesment-item :name="'Miljø'" :conditional="data.reviews.environment"></app-place-assesment-item>
    <app-place-assesment-item :name="'Meny'" :conditional="data.reviews.selection"></app-place-assesment-item>
    <app-place-assesment-item :name="'Service'" :conditional="data.reviews.service"></app-place-assesment-item>
    <app-place-assesment-item :name="'Verdi for pengene'" :conditional="data.reviews.value"></app-place-assesment-item>
    <app-place-assesment-item :name="'Totalt ' + (data.reviews.environment + data.reviews.selection + data.reviews.service + data.reviews.value) + ' av 20'" :conditional="((data.reviews.environment + data.reviews.selection + data.reviews.service + data.reviews.value)/4)"></app-place-assesment-item>
  </div>
</template>

<script>
// MODULE IMPORTS
import PlaceAssesmentItem from './PlaceAssesmentItem'

export default {
  name: 'PlaceAssesmentList',
  components: {
    'app-place-assesment-item': PlaceAssesmentItem,
  },
  props: {
    data: {
      type: Object,
      required: true,
    }
  }
}
</script>