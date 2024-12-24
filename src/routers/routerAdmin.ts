import { RouteRecordRaw } from "vue-router";

const router: RouteRecordRaw[] = [
   {
      path: '',
      component: () => import('@/pages/admin/Dashboard.vue'),
   }
]

export default router;