import app from "./app.js";
import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name: process.env.CLODINARY_CLOUD_NAME,
    api_key: process.env.CLODINARY_API_KEY,
    api_secret: process.env.CLODINARY_API_SECRET,
})

app.listen(process.env.PORT, () =>{
    console.log(`Server listening at port ${process.env.PORT}`)
})