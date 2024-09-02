// src/interfaces/http/routes/userRoutes.ts
import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { SequelizeUserRepository } from '../../../domain/repositories/SequelizeUserRepository';

const router = Router();
const userRepository = new SequelizeUserRepository(); // Instancia del repositorio
const userController = new UserController(userRepository); // Inyección de dependencia

router.get('/users/:id', (req, res) => userController.getUserById(req, res));
router.post('/users', (req, res) => userController.createUser(req, res));
/* test server up endpoint */
//router.get('/test', (req, res) => userController.test(req, res));


export default router;