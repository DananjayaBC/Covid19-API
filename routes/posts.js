const router = require('express').Router();
const User = require('../model/User');

router.get('/:id', async (req, res) => {
    try {
        const posts = await User.findById(req.params.id);
        if (!posts) throw Error('No items');
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({ msg: err })
    }
});
module.exports = router;