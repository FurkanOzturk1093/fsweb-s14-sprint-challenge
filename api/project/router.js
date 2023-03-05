//  `/api/projects` router buraya
const router = require("express").Router();
const projectModel = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const projects = await projectModel.getAllProjects();
    res.json(projects);
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    if (!req.body.project_name) {
      res.status(400).json({ message: "eksik alan var" });
    } else {
      let insertedRecord = await projectModel.createProjects(req.body);
      res.json(insertedRecord);
    }
  } catch (error) {
    next(error);
  }
});
module.exports = router;
