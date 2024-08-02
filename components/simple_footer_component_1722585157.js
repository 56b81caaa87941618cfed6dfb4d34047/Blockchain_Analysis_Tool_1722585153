/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722585157", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 bg-opacity-50 backdrop-filter backdrop-blur-lg">
            <div id="footer-container" class="max-w-screen-xl p-8 py-10 mx-auto lg:py-16 md:p-12 lg:p-14 rounded-2xl shadow-lg">
                <hr id="footer-divider" class="my-8 border-white border-opacity-30 sm:mx-auto lg:my-10">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-3xl font-bold text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-4 sm:h-10 filter brightness-0 invert" alt="Landwind Logo" />
                            DecryptData - Blockchain Analytics Platform
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-lg text-center text-white text-opacity-90 font-medium">
                        DecryptData provides real-time monitoring and analysis of blockchain data streams. Our platform ingests data from multiple chains, cleans and processes the raw data, and delivers insights through customizable dashboards and APIs. Stay ahead of the curve in the rapidly evolving blockchain ecosystem.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
