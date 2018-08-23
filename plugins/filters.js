import Vue from 'vue'
import moment from 'moment'
moment.locale()

Vue.filter('formatDate', (value) => {
  return moment(value).format('DD MMM YYYY')
})

Vue.filter('remainingTime', (value) => {
  return moment(value).fromNow(true);
})

Vue.filter('convertToClass', (value) => {
  return value.toLowerCase().replace(/[!@#\$%\^\&*\)\(\ ]/g,"-");
})