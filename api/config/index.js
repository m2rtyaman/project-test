module.exports = {
    "LOG_LEVEL": process.env.LOG_LEVEL || "debug",
    "CONNECTION_STRING": process.env.CONNECTION_STRING || "postgres://localhost:5432/test-project",
    "PORT": process.env.PORT || "3000"
}