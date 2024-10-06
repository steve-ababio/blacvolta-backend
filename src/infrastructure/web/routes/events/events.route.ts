import { Router } from "express";

const editorialsRouter = Router();

editorialsRouter.get('/events',function(req,res) {});
editorialsRouter.post('/create-events',function(req,res) {});
editorialsRouter.put('/edit-event',function(req,res) {});
editorialsRouter.delete('/delete-event',function(req,res) {});

export {editorialsRouter}