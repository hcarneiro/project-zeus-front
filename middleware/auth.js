const routesToSkipAuth = [
  '/logout',
  '/login',
  '/signup'
];

export default function ({ store, route, redirect }) {
  if (route.fullPath == '/') {
    return redirect('301', '/my-tasks')
  }

  if (!store.state.auth.authenticated && routesToSkipAuth.indexOf(route.fullPath) < 0) {
    return redirect('301', '/login')
  }
}