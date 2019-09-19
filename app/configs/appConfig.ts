const {
    PORT,
    DATABASE_CONNECTION_URL
} = process.env;

const appPort = PORT || 3000;
const dburi = DATABASE_CONNECTION_URL || "mongodb+srv://admin:admin@afour-profile-tlxfi.mongodb.net/test?retryWrites=true&w=majority";
const apiVersion = "/api/v1";

export {
    appPort,
    dburi,
    apiVersion
}