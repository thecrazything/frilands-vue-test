<template>
    <span>{{text}}</span>
  </template>
  
  <script>
  
  export default {
    name: 'TranslatedValue',
    props: ['value', 'map'],
    components: {
    },
    data() {
      return {
      };
    },
    computed: {
        text: function() {
            if (this.value && this.map) {
                const match = this.map.find(x => x.value === this.value)
                return match ? match.text : this.value
            }
            return "";
        }
    },
    methods: {
    },
  }
  </script>