module.exports = {
    theme: {
      extend: {
        keyframes: {
          sway: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-12px)' },
          },
        },
        animation: {
          sway: 'sway 4s ease-in-out infinite',
        },
      },
    },
  }
  