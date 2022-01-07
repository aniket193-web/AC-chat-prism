import  express  from "express";
import { addUser,getUser} from "../controller/UsetController.js";
import {newConversation,getConversation} from '../controller/conversationcontroller.js';
import { newMessage,getMessage } from "../controller/messagecontroller.js";
const Route=express.Router();
Route.post('/add',addUser);
Route.get('/users',getUser);
Route.post('/conversation/add',newConversation);
Route.post('/conversation/get',getConversation);

Route.post('/message/add',newMessage);
Route.get('/message/get/:id',getMessage);
export default Route;

