// `/api/resources` router buraya
const router = require("express").Router();
const resourceModel = require("./model");
const mw = require("./resource-middliware");
router.get("/", async (req, res, next) => {
  try {
    let AllResources = await resourceModel.getAllResources();
    res.json(AllResources);
  } catch (error) {
    next(error);
  }
});

router.post("/", mw.checkUniqueResourceName, async (req, res, next) => {
  try {
    if (!req.body.resource_name) {
      res.status(400).json({ message: "eksik alan var" });
    } else {
      let insertedData = await resourceModel.createResource(req.body);
      res.json(insertedData);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
