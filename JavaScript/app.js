const toDoList = ["Collect eggs", "Clean kitchen"];

let input = prompt("What would you like to do?");

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log("******************");
        for (let i = 0; i < toDoList.length; i++) {
            console.log(`${i}: ${toDoList[i]}`);
        }
        console.log("******************");
    } else if (input === 'new') {
        const newTodo = prompt("What's the new todo?");
        toDoList.push(newTodo)
        console.log(`${newTodo} added to the list!`)
    } else if (input === 'delete') {
        const index = parseInt(prompt("Enter an index to delete:"));
        if (!Number.isNaN(index)) {
            const deleted = toDoList.splice(index, 1)
            console.log(`${deleted} has been deleted`)

        } else {
            console.log("Unknown index :(")
        }

    }

    input = prompt("What would you like to do?");
}


