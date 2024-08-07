module.exports = {
  content: [
    './docs/**/*index.html', 
    './docs/**/*script.js', 
  ],
  theme: {
    extend: {
        colors: {
            customBlue: 'hsl(228, 45%, 44%)',
            Blue: 'hsl(223, 87%, 63%)',
            PaleBlue: 'hsl(223, 100%, 88%)',
            LightRed: 'hsl(354, 100%, 66%)',
            Gray: 'hsl(0, 0%, 59%)',
            VeryDarkBlue: 'hsl(209, 33%, 12%)'
        },
    },
    fontFamily: {
        LibreFranklin: ['Libre Franklin', 'sans-serif'],
    }
},
plugins: [],
}

