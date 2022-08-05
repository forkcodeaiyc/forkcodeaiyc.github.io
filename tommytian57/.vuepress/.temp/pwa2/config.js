import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "/Users/huangjiabao/GitHub/WebSite/forkcodeaiyc.github.io/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup";
import SWHintPopup from "/Users/huangjiabao/GitHub/WebSite/forkcodeaiyc.github.io/node_modules/vuepress-plugin-pwa2/lib/client/components/SWHintPopup";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWHintPopup,
    
  ],
});