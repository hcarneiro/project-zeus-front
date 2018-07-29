import Vue from 'vue'
import moment from 'moment'
moment.locale()

Vue.filter('dueDate', (value) => {
  return moment(value).format('DD MMM YYYY')
})

Vue.filter('convertToClass', (value) => {
  return value.toLowerCase().replace(/[!@#\$%\^\&*\)\(\ ]/g,"-");
})