const express = require("express");
const router = express.Router();

const skillsCtrl = require("../controllers/skills")


router.get("/skills", skillsCtrl.skills);
router.get("/skills/newSkill",skillsCtrl.new_get);
router.post("/skills/skill",skillsCtrl.new_post);
router.get("/skills/skill/delete",skillsCtrl.delete_skill)
router.get("/skills/:id", skillsCtrl.skill_choice);
router.get("/skills/skill/edit", skillsCtrl.update_get);
router.post("/skills/skill/update", skillsCtrl.update_post);

module.exports = router;