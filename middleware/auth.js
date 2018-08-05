const routesToSkipAuth = [
  '/logout',
  '/login',
  '/signup'
];

export default function ({ store, route, redirect }) {
  if (routesToSkipAuth.indexOf(route.fullPath) < 0) {
    store.dispatch('auth/verify').then(() => {}, (err) => {
      return redirect('301', '/login')
    })
    
  }

  if (route.fullPath == '/') {
    return redirect('301', '/my-tasks')
  }  
}