import { Router } from "express";

const editorialsRouter = Router();

editorialsRouter.get('/editorials',function(req,res) {});
editorialsRouter.post('/create-editorial',function(req,res) {});
editorialsRouter.put('/edit-editorial',function(req,res) {});
editorialsRouter.delete('/delete-editorial',function(req,res) {});

export {editorialsRouter}