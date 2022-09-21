import userService from '../services/user.service.js'

class userController {
  create = async (req, res) => {
    try {
      const { name, username, email, password, avatar, background } = req.body

      if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).json({ message: 'Submit all fields for registration' })
      }

      const user = await userService.createService(req.body)

      if (!user) {
        return res.status(400).json({ message: 'Error creating User' })
      }

      res.status(201).json({
        message: 'User created successfully',
        user: {
          id: user._id,
          name,
          username,
          email,
          avatar,
          background
        }
      })
    } catch (err) {
      res.status(500).send({ message: err.message })
    }
  }

  findAll = async (req, res) => {
    try {
      const users = await userService.findAllService()

      if (users.length === 0) {
        return res
          .status(400)
          .json({ message: 'There are no registered users' })
      }

      res.json(users)
    } catch (err) {
      res.status(500).send({ message: err.message })
    }
  }

  findById = async (req, res) => {
    try {
      const user = req.user

      res.json(user)
    } catch (err) {
      res.status(500).send({ message: err.message })
    }
  }

  update = async (req, res) => {
    try {
      const { name, username, email, password, avatar, background } = req.body

      if (!name && !username && !email && !password && !avatar && !background) {
        res.status(400).json({ message: 'Submit at least field for update' })
      }

      const { id } = req

      await userService.updateService(
        id,
        name,
        username,
        email,
        password,
        avatar,
        background
      )

      res.json({ message: 'User successfully updated!' })
    } catch (err) {
      res.status(500).send({ message: err.message })
    }
  }
}

export default new userController()
