import { defineStore } from 'pinia'

export const globalColor = defineStore('color', {
  state:()=>({
    accentColor:'#ff9100'
  })
})