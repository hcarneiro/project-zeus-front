const routesToSkipAuth = [
  'logout',
  'login',
  'signup',
  'verify-token',
  'reset-password-token',
  'forgot-password'
];

export default function ({store, route, redirect}) {
  if (routesToSkipAuth.indexOf(route.name) < 0 && !store.state.auth.verified) {
    return store.dispatch('auth/verify').then(() => {
      if (route.fullPath == '/') {
        return redirect('301', '/my-tasks')
      } 
    }, () => {
      return redirect('301', '/login')
    })
  }

  if (route.fullPath == '/') {
    return redirect('301', '/my-tasks')
  }  
}