import { route } from 'static-route-paths'

const routes = route({
  root: route(),
  all: route('*'),
})

export default routes
