"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewBuilding = exports.getAllbuilding = void 0;
const db_1 = require("../config/db");
const getAllbuilding = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getbuilding = yield db_1.prisma.building.findMany();
        return res.status(200).json(getbuilding);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            mrssage: "server Error !",
        });
    }
});
exports.getAllbuilding = getAllbuilding;
const addNewBuilding = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBuilding = req.body;
        yield db_1.prisma.building.create({ data: newBuilding });
        return res.status(201).json({
            message: "Building added !",
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            mrssage: "server Error !",
        });
    }
});
exports.addNewBuilding = addNewBuilding;
