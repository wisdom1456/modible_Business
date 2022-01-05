module.exports = {
    theme: {
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
                    900: "#00204C"
                },
                "balls": {
                    300: "#A6A6A6",
                    400: "#E9ECF2",
                    500: "#A8BF84",
                    600: "#ABD94A",
                    700: "#8C6C61"
                }
            }
        }
    },
    variants: {},
    plugins: [],
    purge:
        process.env.NODE_ENV === "production"
            ? {
                  enabled: true,
                  content: ["src/**/*.njk", "src/**/*.js"]
              }
            : {}
};
