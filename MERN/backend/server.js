import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name:'dacddfc6y',
  api_key:'232893683563478',
  api_secret:'fFw2OAXCeTVNwx9KtvHyn8aOATk',
});

app.listen(4000, () => {
  console.log("Server running at port 4000");
});
