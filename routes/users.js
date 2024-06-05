export default router;
/**
 * Sign in a user
 * POST /users/signin
 */
router.post('/signin', async(req, res) => {
    // check if user exist
    // check if passwords are a match
    // req.body.password === user.password

    const user = await collection.findOne(req.body.email)
    if (!user) {
        res.send('User not found')
    }
    if (req.body.password !== user.password) {
        res.send('User not found')
    }

    res.send(user);
