const express = require('express');
const bodyParser = require('body-parser');

app = express();

app.use(bodyParser.json());

app.all("/", (req, res) => {
    res.send("Server is up!!");
});

const todos = [{
    id: "1",
    task: "Add Numbers",
    completed: true
}, {
    id: "2",
    task: "Multiply Numbers",
    completed: false
}];

app.get("/todos", (req, res) => {
    res.json(todos);
});

app.post("/todos", (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.status(201).json({ message: "New ToDo Added sucessfully!" });
});


app.put("/todos/:id", (req, res) => {
    const todoUpdate = req.body;
    const todoId = req.params.id;

    const todoIndex = todos.findIndex(td => td.id === todoId);

    if (todoIndex !== -1) {
        todos[todoIndex] = {
            id: todoId,
            ...todoUpdate
        }
        res.json({ message: "Todo updated successfully!" });
    } else {
        res.status(400).json({ message: "Todo cannot be found!" });
    }
});

app.delete("/todos/:id", (req, res) => {
    const todoId = req.params.id;
    const todoIndex = todos.findIndex(td => td.id === todoId);
    
    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
        res.json({ message: "Todo deleted successfully!" });
    } else {
        res.status(400).json({ message: "Todo cannot be found!" });
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Listening to PORT", PORT);
});