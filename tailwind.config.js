module.exports = {
  theme: {
    fontFamily: {
      title: ['RobotoSlab'],
      body: ['Neutron'],
    },
		extend: {
      colors: {
        "ws-blue": {
          100: "#E6F0FF",
          200: "#BFDAFF",
          300: "#99C3FF",
          400: "#4D97FE",
          500: "#006AFE",
          600: "#005FE5",
          700: "#004098",
          800: "#003072",
          900: "#00204C",
        },
        ltblue: {
          500: '#A9C6D9',
        },
        blue: {
          500: '#049DBF',
        },
        green: {
          500: '#8CA653',
        },
        yellow: {
          500: '#D9BD32',
        },
        orange: {
          500: '#BF491F'
        }
      },
		},
	},
	variants: {},
	plugins: [],
	purge:
		process.env.NODE_ENV === "production"
			? {
					enabled: true,
					content: ["src/**/*.njk", "src/**/*.js"],
			  }
			: {},
};
