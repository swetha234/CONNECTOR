const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Profile = require('../../Models/Profile');
const User = require('../../Models/User');

// @route  GET api/profile/me
// @desc   Get current users profile
// @access private

router.get('/me', auth, async (req, res) => {
  try {
    const Profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );

    if (!profile) {
      return res.status(400).json({ msg: 'Could not find profile' });
    }
    res.json(profile);
  } catch {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
