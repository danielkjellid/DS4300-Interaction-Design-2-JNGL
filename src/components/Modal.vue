<template>
    <div class="absolute inset-0 w-full z-50 flex items-end faded" v-if="show && !tooltipShown">
        <div class="z-60 bg-white border text-center p-6 m-3 modal rounded-lg" v-if="show && !tooltipShown">
            <div class="flex justify-center py-3">
                <img :src="require(`@/assets/images/modalicons/${icon}`)" />
            </div>
            <div class="my-3">
                <div class="mb-2 text-black font-medium text-lg">
                    <p> {{ header }} </p>
                </div>
                <div class="text-sm info">
                    <p> {{ info }} </p>
                </div>
            </div>
            <button @click="onClick" class="p-3 mt-4 rounded-lg bg-gray-200 w-full font-medium text-sm">Lukk</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: Boolean,
            tooltipShown: this.$store.getters.getTooltipShown(this.tooltipType)
        }
    },
    props: {
        icon: String,
        header: String,
        info: String,
        tooltipType: {
            type: String,
            required: false
        }
    },
    methods: {
        onClick() {
            this.show = !this.show;
            this.tooltipType && this.$store.dispatch("updateTooltipShown", this.tooltipType);
        }
    }
}
</script>

<style scoped>
    .info {
        color: #718096;
    }
    .modal {
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
    }
    .faded {
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
    }
</style>