"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const building_controller_1 = require("../controller/building_controller");
const validate_1 = __importDefault(require("../middleware/validate"));
const building_schema_1 = require("../zod_schema/building_schema");
const router = express_1.default.Router();
router.post('/addbuilding', (0, validate_1.default)(building_schema_1.buildregister), building_controller_1.addNewBuilding);
router.post('/building', building_controller_1.getAllbuilding);
exports.default = router;
