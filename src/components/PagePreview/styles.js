import {StyleSheet} from "aphrodite"

var styles = StyleSheet.create({
wrapper: {
  display: 'flex',
  'flex-direction': 'column',
  'max-width': '40rem',
  margin: '1rem auto',
  padding: '1rem 0',
},

title: {
  'align-self': 'center',
  'font-size': '1.2rem',
  'font-weight': '900',
},

meta: {
  'font-size': '0.75rem',
  opacity: '0.6',
},

description: {
  'font-size': '0.85rem',
},

readMore: {
  /* align-self: center; */
  display: 'inline-flex',
  'margin-top': '1rem',
  'border-radius': '3px',
  'font-size': '0.8rem',
  'text-align': 'center',
  'border-bottom': '0 !important',
  'text-decoration': 'none !important',
},
})

export default styles
