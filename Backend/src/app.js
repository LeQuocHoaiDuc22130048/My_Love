const express = require('express');
const cors = require('cors');
const profileMainRoutes = require('./routes/profileMain.routes');
const profileSubRoutes = require('./routes/profileSub.routes');
const feedbackRoutes = require('./routes/feedback.routes');

const profileSub = require('./controller/profileSub.controller');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/upload', express.static('uploads'));

app.use('/api/profile-main', profileMainRoutes);
app.use('/api/profile-sub', profileSubRoutes);
app.use('/api/feedback', feedbackRoutes);

app.get('/', (req, res) => res.json({ message: 'Welcome to the Profile API' }));
app.get('/api/profile-sub', profileSub.getAll);

module.exports = app;
