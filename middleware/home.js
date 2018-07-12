export default function ({ route, redirect }) {
  if (route.fullPath == '/') {
    return redirect('301', '/today')
  }
}