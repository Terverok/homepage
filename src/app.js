import Vue from 'vue'
import LandingPage from './landingPage'
import './mainLayout.scss'

new Vue({
    el: '#app',

    components: {
        LandingPage,
    },

    render() {
        return (
            <div class="entire-page">
                <LandingPage />
            </div>
        )
    }
})
