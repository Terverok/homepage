<script>
import Vue from 'vue'
import loremIpsum from 'loremIpsum';
import './NavigationBar.scss'

const Navigation = {
    functional: true,
    props: {
        label: {
            type: String,
            default: '',
        },
        to: {
            type: String,
            default: '',
        },
    },
    render(h, { props }) {
        return (
            <a class="navigation-link" href={props.to}>{props.label}</a>
        )
    }
};

export default Vue.extend({
    components: {
        Navigation,
    },

    data: function() {
        return {
            loremIpsum,
        }
    }
})

</script>

<template>
    <div class="navigation-bar">
        <Navigation label="About me" to="#about-me"/>
        <Navigation label="Posts" />
        <Navigation label="footer" />
    </div>
</template>

