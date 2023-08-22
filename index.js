const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const PORT = process.env.PORT || 3000;
const app = require('./app.js');
const dbIgd = require('./config/database.js');

async function main(){
    try {
        // Arrancamos el servidor 
        //await dbIgd.sync()
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
            V1SwaggerDocs(app, PORT);
        })
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
}

main();
