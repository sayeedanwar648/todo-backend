const ToDoModel = require("../models/ToDoModal");

const getToDo = async (req, res) => {
    const todo = await ToDoModel.find();
    res.send(todo);
}

const saveToDo = (req, res) => {
    const { text } = req.body;

    ToDoModel
        .create({ text })
        .then(() => res.set(201).send("Added Successfully..."))
        .catch((err) => console.log(err));
}

const deleteToDo = (req, res) => {
    const { _id } = req.body;

    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}

const updateToDo = (req, res) => {
    const { _id, text } = req.body;

    ToDoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err));
}

module.exports={deleteToDo,getToDo,updateToDo,saveToDo}