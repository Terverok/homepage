import Vue from 'vue'
import LandingPage from './landingPage/LandingPage'

new Vue({
    el: '#app',

    components: {
        LandingPage,
    },

    render() {
        return <LandingPage />;
    }
})
