<script>
import Vue from 'vue'

export default Vue.extend({
    props: {
        width: {
            type: Number,
            default: null,
        },
        height: {
            type: Number,
            default: null,
        },
        mask: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            required: true,
        },
    },
    computed: {
        viewBox() {
            return  `0 0 ${this.width} ${this.height}`
        }
    }
})

</script>

<template>
    <svg
        v-bind:viewBox="viewBox"
        preserveAspectRatio="xMinYMin"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <mask id="pictureMask">
                <image
                    v-bind:xlink:href="mask"
                    v-bind:width="width"
                    v-bind:height="height"
                />
            </mask>
        </defs>
        <image
            v-bind:width="width"
            v-bind:height="height"
            v-bind:xlink:href="picture"
            mask="url(#pictureMask)"
        />
    </svg>
</template>
