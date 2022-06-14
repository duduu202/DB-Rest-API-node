const { Router } = require("express");
const controller = require('./controller');

const router = Router();

router.get("/", controller.getTeste);

router.get("/HappyBirdUser", controller.getHappyBirdUser);
router.post("/HappyBirdUser", controller.addHappyBirdUser);

module.exports = router;