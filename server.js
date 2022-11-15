const express = require("express");
const app = express();
const path = require("path");
const BonifikataController = require("./controllers/bonifikatacontroller");
const AddFirmaController = require("./controllers/addfirmacontroller");
const AddHoldingController = require("./controllers/addholdingcontroller");
const GetHoldingsController = require("./controllers/getholdingscontroller");
const GetChildrenController = require("./controllers/getchildrencontroller");
const SerializeJSONController = require("./controllers/serializejsoncontroller");
const SerializeXMLController = require("./controllers/serializexmlcontroller");

app.use(express.static(path.join(__dirname,"frontend")));
app.use(express.json());

app.get("/",(req,res) => {
    res.sendFile("index.html")
});

app.get("/bonifikata",(req,res) => {
    return res.end(BonifikataController.getBonifikata(req,res).toString());
});

app.post("/addholding",(req,res) => {
    return res.end(AddHoldingController.addHolding(req,res));
});

app.post("/addfirma",(req,res) => {
    return res.end(AddFirmaController.addFirma(req,res));
});

app.get("/holdings",(req,res) => {
    return res.end(JSON.stringify(GetHoldingsController.getholdings(req,res)));
});

app.get("/json",(req,res) => {
    return res.end(SerializeJSONController.serializeJSON(req,res));
});

app.get("/xml",(req,res) => {
    return res.end(SerializeXMLController.serializeXML(req,res));
});

app.get("/firmy",(req,res) => {
    return res.end(JSON.stringify(GetChildrenController.getChildren(req,res)));
});

app.listen(8000,() => {
    console.log("Aplikacja działa na porcie 8000");
});