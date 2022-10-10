import Task from "../models/taskModel";
import User from "../models/userModel";

const taskController = {
  createTask: async (req, res) => {
    try {
      console.log(req);
      const user = await User.findById(req.user.id).select("name email");
      if (!user) return res.status(400).json({ msg: "User does not exist." });

      const { work, start, totaltime, date } = req.body;
      const { _id, email } = user;

      const newTask = new Task({
        id: _id,
        email,
        work,
        start,
        totaltime,
        date,
      });

      await newTask.save();
      res.json({ msg: "Task created successfully!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getTask: async (req, res) => {
    try {
      const myuser = await User.findById(req.user.id).select("email");
      const tasks = await Task.find({ email: myuser.email });
      if (!tasks) return res.status(400).json({ msg: "Tasks do not exist." });
      res.json(tasks);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

export default taskController;
