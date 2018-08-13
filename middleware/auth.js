const routesToSkipAuth = [
  'logout',
  'login',
  'signup',
  'verify-token'
];

export default function (context) {
  if (routesToSkipAuth.indexOf(context.route.name) < 0) {
    return context.store.dispatch('auth/verify').then(() => {
      // context.next()
      if (context.route.fullPath == '/') {
        return context.redirect('301', '/my-tasks')
      } 
    }, () => {
      return context.redirect('301', '/login')
    })
  }

  if (context.route.fullPath == '/') {
    return context.redirect('301', '/my-tasks')
  }  
}