import express from "express";
import mongoose from "mongoose";
const { Schema } = mongoose;
import cors from "cors";
import multer   from 'multer'

const app = express();
const port = 4001;
app.use(express.json());
app.use(cors());
app.use(express.static("public"))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-')+'.png');
  },
});

const upload = multer({ storage: storage });

// ------------- WebSite Icons ------------------

const WebSiteIconSchema = new Schema({
  websiteicon1: String,
  websiteicon2: String
});
const WebSiteIcon = mongoose.model("WebSiteIcon", WebSiteIconSchema);

app.get("/websiteicon", async (req, res) => {
  const data = await WebSiteIcon.find({});
  res.send(data);
});

app.post("/websiteicon", async (req, res) => {
  try {
    const data = new WebSiteIcon(req.body);
    await data.save();
    res.status(200).send("WebSite Icon is created");
  } catch (error) {
    res.status(404).send("WebSite Icon is not created");
  }
});

app.delete("/websiteicon/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await WebSiteIcon.findByIdAndDelete(id).exec();
    res.status(200).send("WebSite Icon is deleted");
  } catch (error) {
    res.status(404).send("WebSite Icon is not deleted");
  }
});

// ------------- Page Name ------------------

const PageNameSchema = new Schema({
  pagename: String,
  comment:String,
  url:String
});
const PageName = mongoose.model("PageName", PageNameSchema);

app.get("/pagename", async (req, res) => {
  const data = await PageName.find({});
  res.send(data);
});

app.post("/pagename", async (req, res) => {
  try {
    const data = new PageName(req.body);
    await data.save();
    res.status(200).send("Page Name is created");
  } catch (error) {
    res.status(404).send("Page Name is not created");
  }
});

app.delete("/pagename/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await PageName.findByIdAndDelete(id).exec();
    res.status(200).send("Page Name is deleted");
  } catch (error) {
    res.status(404).send("Page Name is not deleted");
  }
});

// ------------- Shop Submenu Box ------------------

const ShopSubmenuSchema = new Schema({
  shopsubmenu: String,
});
const ShopSubmenu = mongoose.model("ShopSubmenu", ShopSubmenuSchema);

app.get("/shopsubmenu", async (req, res) => {
  const data = await ShopSubmenu.find({});
  res.send(data);
});

app.post("/shopsubmenu", async (req, res) => {
  try {
    const data = new ShopSubmenu(req.body);
    await data.save();
    res.status(200).send("Shop Submenu is created");
  } catch (error) {
    res.status(404).send("Shop Submenu is not created");
  }
});

app.delete("/shopsubmenu/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await ShopSubmenu.findByIdAndDelete(id).exec();
    res.status(200).send("Shop Submenu is deleted");
  } catch (error) {
    res.status(404).send("Shop Submenu is not deleted");
  }
});

// ------------- Inform ------------------

const InformSchema = new Schema({
  imageinform:String,
  biginform: String,
  otherinform: String
});
const Inform = mongoose.model("Inform", InformSchema);

app.get("/inform", async (req, res) => {
  const data = await Inform.find({});
  res.send(data);
});

app.post("/inform", async (req, res) => {
  try {
    const data = new Inform(req.body);
    await data.save();
    res.status(200).send("Inform is created");
  } catch (error) {
    res.status(404).send("Inform is not created");
  }
});

app.delete("/inform/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Inform.findByIdAndDelete(id).exec();
    res.status(200).send("Inform is deleted");
  } catch (error) {
    res.status(404).send("Inform is not deleted");
  }
});

// ------------- Home Filter ------------------

const HomeFilterSchema = new Schema({
  image: String,
  filtername: String
});
const HomeFilter = mongoose.model("HomeFilter", HomeFilterSchema);

app.get("/homefilter", async (req, res) => {
  const data = await HomeFilter.find({});
  res.send(data);
});

app.post("/homefilter", async (req, res) => {
  try {
    const data = new HomeFilter(req.body);
    await data.save();
    res.status(200).send("Home Filter is created");
  } catch (error) {
    res.status(404).send("Home Filter is not created");
  }
});

app.delete("/homefilter/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await HomeFilter.findByIdAndDelete(id).exec();
    res.status(200).send("Home Filter is deleted");
  } catch (error) {
    res.status(404).send("Home Filter is not deleted");
  }
});

// ------------- Footer ------------------

const FooterSchema = new Schema({
  maintext: String,
  othertext1: String,
  othertext2: String,
  othertext3: String,
  othertext4: String,
  othertext5: String,
  othertext6: String,
  othertext7: String,
  othertext8: String,
  othertext9: String,
});
const Footer = mongoose.model("Footer", FooterSchema);

app.get("/footer", async (req, res) => {
  const data = await Footer.find({});
  res.send(data);
});

app.post("/footer", async (req, res) => {
  try {
    const data = new Footer(req.body);
    await data.save();
    res.status(200).send("Footer is created");
  } catch (error) {
    res.status(404).send("Footer is not created");
  }
});

app.delete("/footer/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Footer.findByIdAndDelete(id).exec();
    res.status(200).send("Footer is deleted");
  } catch (error) {
    res.status(404).send("Footer is not deleted");
  }
});

// ------------- Latest News ------------------

const LatestNewsSchema = new Schema({
  image: String,
  name: String,
  comment:String,
  time:Number,
  date:String
});
const LatestNews = mongoose.model("LatestNews", LatestNewsSchema);

app.get("/latestnews", async (req, res) => {
  const data = await LatestNews.find({});
  res.send(data);
});

app.post("/latestnews", async (req, res) => {
  try {
    const data = new LatestNews(req.body);
    await data.save();
    res.status(200).send("Latest News is created");
  } catch (error) {
    res.status(404).send("Latest News is not created");
  }
});

app.delete("/latestnews/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await LatestNews.findByIdAndDelete(id).exec();
    res.status(200).send("Latest News is deleted");
  } catch (error) {
    res.status(404).send("Latest News is not deleted");
  }
});

// ------------- New Product ------------------

const NewproductSchema = new Schema({
  name: String,
  oldprice: Number,
  newprice:{ type: Number, required: true},
  starus:String
});
const Newproduct = mongoose.model("Newproduct", NewproductSchema);

app.get("/newproduct", async (req, res) => {
  const data = await Newproduct.find({});
  res.send(data);
});

app.post("/newproduct", async (req, res) => {
  try {
    const data = new Newproduct(req.body);
    await data.save();
    res.status(200).send("New product is created");
  } catch (error) {
    res.status(404).send("New product is not created");
  }
});

app.delete("/newproduct/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Newproduct.findByIdAndDelete(id).exec();
    res.status(200).send("New product is deleted");
  } catch (error) {
    res.status(404).send("New product is not deleted");
  }
});

// ------------- About People ------------------

const AboutPeopleSchema = new Schema({
  image: String,
  job: String,
  name: String,
  comment: String,
});
const AboutPeople = mongoose.model("AboutPeople", AboutPeopleSchema);

app.get("/aboutpeople", async (req, res) => {
  const data = await AboutPeople.find({});
  res.send(data);
});

app.post("/aboutpeople", async (req, res) => {
  try {
    const data = new AboutPeople(req.body);
    await data.save();
    res.status(200).send("About People is created");
  } catch (error) {
    res.status(404).send("About People is not created");
  }
});

app.delete("/aboutpeople/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await AboutPeople.findByIdAndDelete(id).exec();
    res.status(200).send("About People is deleted");
  } catch (error) {
    res.status(404).send("About People is not deleted");
  }
});

app.put("/aboutpeople/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await AboutPeople.findByIdAndUpdate(id , req.body).exec();
    res.status(200).send("About People is updated");
  } catch (error) {
    res.status(404).send("About People is not updated");
  }
});

// ------------- About Inform ------------------

const AboutInformSchema = new Schema({
  name: String,
  inform: String
});
const AboutInform = mongoose.model("AboutInform", AboutInformSchema);

app.get("/aboutinform", async (req, res) => {
  const data = await AboutInform.find({});
  res.send(data);
});

app.post("/aboutinform", async (req, res) => {
  try {
    const data = new AboutInform(req.body);
    await data.save();
    res.status(200).send("About Inform is created");
  } catch (error) {
    res.status(404).send("About Inform is not created");
  }
});

app.delete("/aboutinform/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await AboutInform.findByIdAndDelete(id).exec();
    res.status(200).send("About Inform is deleted");
  } catch (error) {
    res.status(404).send("About Inform is not deleted");
  }
});

// ------------- Shop Product ------------------

const ShopProductSchema = new Schema({
  image:String,
  name: String,
  oldprice: String,
  newprice:{ type: String, required: true},
  status:String
});
const ShopProduct = mongoose.model("ShopProduct", ShopProductSchema);

app.get("/shopproduct", async (req, res) => {
  const data = await ShopProduct.find({});
  res.send(data);
});

app.post("/shopproduct", async (req, res) => {
  try {
    const data = new ShopProduct(req.body);
    await data.save();
    res.status(200).send("Shop product is created");
  } catch (error) {
    res.status(404).send("Shop product is not created");
  }
});

app.delete("/shopproduct/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await ShopProduct.findByIdAndDelete(id).exec();
    res.status(200).send("Shop product is deleted");
  } catch (error) {
    res.status(404).send("Shop product is not deleted");
  }
});

app.put("/shopproduct/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await ShopProduct.findByIdAndUpdate(id, req.body).exec();
    res.status(200).send("Shop product is updated");
  } catch (error) {
    res.status(404).send("Shop product is not updated");
  }
});


mongoose
  .connect("mongodb+srv://AliIsmayil:ali123@cluster0.tzldidp.mongodb.net/")
  .then(() => console.log("Connected!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
