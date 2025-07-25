// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.use(express.json());

router.get('/', userController.home);
router.get('/about', userController.about);
router.get('/contact', userController.contact);

router.get('/user/:id', userController.getUserById);

router.post('/api/user', userController.registerUser);
router.get('/api/users', userController.getAllUsers);
router.post('/login', userController.loginUser);

router.delete('/api/user/:id', userController.deleteUser);
router.put('/api/user/:id', userController.update);

router.use((req, res) => {
    res.status(404).send('404 - Route Not Found');
});

module.exports = router;
