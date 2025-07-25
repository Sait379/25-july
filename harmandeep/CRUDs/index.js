// app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoute');

app.use('/', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
