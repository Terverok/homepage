import Vue from 'vue'
import { LandingPage } from './LandingPage'
import NavigationBar from './NavigationBar'
import './mainLayout.scss'

new Vue({
    el: '#app',

    components: {
        LandingPage,
        NavigationBar,
    },

    render() {
        return (
            <div class="entire-page">
                <NavigationBar />
                <LandingPage />
            </div>
        )
    }
})
