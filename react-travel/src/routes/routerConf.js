import User from '../pages/user'
import Detail from '../pages/detail'

const routerConf = [
  {
    path:'/',
    component: User,
    children:[]
  },
  {
    path:'/detail',
    component: Detail,
    children:[]
  }
]

export default routerConf 