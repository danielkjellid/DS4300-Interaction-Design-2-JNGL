<template>
  <!-- component to add place assesment items to a contained list -->
  <div>
    <div class="mt-5 bg-white rounded shadow">
      <app-place-assesment-item :name="'Miljø'" :conditional="environmentValue"></app-place-assesment-item>
      <app-place-assesment-item :name="'Miljø'" :conditional="selectionValue"></app-place-assesment-item>
      <app-place-assesment-item :name="'Miljø'" :conditional="serviceValue"></app-place-assesment-item>
      <app-place-assesment-item :name="'Miljø'" :conditional="valueValue"></app-place-assesment-item>
      <app-place-assesment-item :name="'Totalt ' + parseInt(environmentValue + selectionValue + serviceValue + valueValue) + ' av 20'" :conditional="totalValue"></app-place-assesment-item>
    </div>
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
    environmentValue: {
      type: Number,
      required: true,
    },
    selectionValue: {
      type: Number,
      required: true,
    },
    serviceValue: {
      type: Number,
      required: true,
    },
    valueValue: {
      type: Number,
      required: true,
    },
    totalValue: {
      type: Number,
      required: true,
    }
  }
}
</script>