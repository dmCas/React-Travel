import User from '../pages/user'
import Detail from '../pages/detail'
import Route from '../pages/route'

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
  },
  {
    path:'/route',
    component: Route,
    children:[]
  }
]

export default routerConf 