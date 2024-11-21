import { Router } from "express";
import { deletePlayersController, getPlayersByIdController, getPlayersController, postPlayersController, patchPlayersController } from "../controllers/players-controller";
import { getClubsByIdController, getClubsController } from "../controllers/clubs-controller";

const router = Router();

router.get("/players", getPlayersController);
router.get("/players/:id", getPlayersByIdController);
router.post("/players", postPlayersController);
router.delete("/players/:id", deletePlayersController);
router.patch("/players/:id", patchPlayersController);

router.get("/clubs", getClubsController);
router.get("/clubs/:id", getClubsByIdController);

export default router;