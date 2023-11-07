module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
	"node": true
    },
    "extends": [
        "eslint:recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    plugins: ["html"],
    "rules": {
	// "html/indent": ["error", 2],
    }
};
