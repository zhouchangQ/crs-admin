/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout';

const chartsRouter = {
  path: '/task',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Task',
  meta: {
    title: '任务',
    icon: 'task'
  },
  children: [
    {
      path: 'task-center',
      component: () => import('@/views/task/task-center/index'),
      name: 'TaskCenter',
      meta: {
        title: '任务中心',
        noCache: true
      }
    },
    {
      path: 'task-type',
      component: () => import('@/views/task/task-type/index'),
      name: 'TaskType',
      meta: {
        title: '任务类型',
        noCache: true
      }
    }
  ]
};

export default chartsRouter;
