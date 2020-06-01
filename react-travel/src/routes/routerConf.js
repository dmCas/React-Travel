import User from '../pages/user'
import Detail from '../pages/detail'

const routerConf = [
  {
    path:'/',
    component: Detail,
    children:[]
  },
  {
    path:'/detail',
    component: User,
    children:[]
  }
]

export default routerConf 