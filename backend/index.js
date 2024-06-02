import connectDb from "./config/dbConnector.js";
import app from "./app.js";

connectDb()
    .then(() => {
        app.listen(3000, () => {
            console.log(`Server running on port 3000`);
        });
    })
    .catch(err => {
        console.log('MongoDB connection error:', err);
        process.exit(1);
    });