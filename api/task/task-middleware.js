const db = require("../../data/dbConfig");

const checkPayload = async (req, res, next) => {
  let { project_id, task_description } = req.body;
  if (project_id === undefined || task_description === undefined) {
    next({
      status: 400,
      message: "Eksik alan var",
    });
  } else {
    let isExist = await db("projects").where("project_id", project_id).first();
    if (!isExist) {
      next({
        status: 400,
        message: "Böyle bir proje yok",
      });
    } else {
      next();
    }
  }
};
module.exports = { checkPayload };
