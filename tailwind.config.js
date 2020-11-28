module.exports = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ["RobotoSlab", "serif"],
        neuton: ["Neuton", "serif"]
      }
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
				green: {
					500: "#8CA653",
					600: "#8CA653",
				},
				ltblue: {
					500: "#A9C6D9",
					600: "#A9C6D9",
				},
				blue: {
					500: "#049DBF",
					600: "#049DBF",
				},
				orange: {
					500: "#BF491F",
					600: "#BF491F",
				},
				yellow: {
					500: "#D9BD32",
					600: "#D9BD32",
				},
			},
		},
	},
	variants: {},
	plugins: [require("@tailwindcss/typography")],
	purge:
		process.env.NODE_ENV === "production"
			? {
					enabled: true,
					content: ["src/**/*.njk", "src/**/*.js"],
			  }
			: {},
};
