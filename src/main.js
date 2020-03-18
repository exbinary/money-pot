// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'typeface-source-sans-pro'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // head.bodyAttrs = {
    // class: '',
  // }

  // if (process.isClient) {
  //   router.beforeEach((to, from, next) => {
  //     if (to.path === '/') next({path: '/an-article'})
  //     else next()
  //   })
  // }
}
