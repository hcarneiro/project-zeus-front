const routesToSkipAuth = [
  '/logout',
  '/login',
  '/signup'
];

export default function ({ store, route, redirect }) {
  if (!store.state.auth.authenticated && routesToSkipAuth.indexOf(route.fullPath) < 0) {
    return redirect('301', '/login')
  }

  if (route.fullPath == '/') {
    return redirect('301', '/my-tasks')
  }
}