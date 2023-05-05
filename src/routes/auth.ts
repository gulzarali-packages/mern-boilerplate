import express from 'express';
import passport from 'passport';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import authController from '../controllers/AuthController';

const router = express.Router();
router.get('/', (req, res) => {
    res.send("<button><a href='/auth/google'>Login With Google</a></button>")
  });

// Auth 
router.get('/google', passport.authenticate('google', { scope:
  [ 'email', 'profile' ]
}));

// Auth Callback
router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '/auth/callback/success',
    failureRedirect: '/auth/callback/failure'
}));

// Success 
router.get('/callback/success', async (req, res) => {
  try {
    if (!req.user) {
      res.redirect('/auth/callback/failure');
    } else {
        authController.googleAuth(req, res)
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request.'
    });
  }
});

// Failure
router.get('/callback/failure', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'Authentication failed.'
  });
});

export default router;
