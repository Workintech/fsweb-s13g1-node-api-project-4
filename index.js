require("dotenv").config();
const server = require("./api/server");
const { PORT, NODE_ENV } = require("./config/config");

console.log("PORT", PORT);
console.log("NODE_ENV", NODE_ENV);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
