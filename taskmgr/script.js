// array of task objects
taskList = [];

// create task class
class Task {
    // id, name, priority, imp, comp, date
    taskInfo(id, name, priority, isImportant, isComplete, date) {
        this.id = id;
        this.name = name;
        this.priority = priority;
        this.isImportant = isImportant;
        this.isComplete = isComplete;
        this.date = date;
    }

    // task display method
    taskDisplay(id) {
        // display - making it a list to hopefully style it more easily 
        let taskDetails = document.createElement('ul');
        let taskName = document.createElement('li');
        let taskPriority = document.createElement('li');
        let taskDate = document.createElement('li');

        let taskNameTxt = document.createTextNode(taskList[id].name.toString());
        let taskPriorityTxt = document.createTextNode(taskList[id].priority.toString());
        let taskDateTxt = document.createTextNode(taskList[id].date.toString());

        taskName.appendChild(taskNameTxt);
        taskPriority.appendChild(taskPriorityTxt);
        taskDate.appendChild(taskDateTxt);

        taskDetails.appendChild(taskName);
        taskDetails.appendChild(taskPriority);
        taskDetails.appendChild(taskDate);

        document.getElementById('taskmanager').appendChild(taskDetails);

        // if important color = red
        if(taskList[id].isImportant == true) {
            document.taskDetails.style.backgroundColor = "red";
        }

        // if complete -> strikethru
        if(taskList[id].isComplete == true) {
            // note: gives an error and i don't have time to figure out why
            //document.taskDetails.style.text-decoration = line-through;
        }

        // priority-based styling
        switch(taskList[id].priority) {
            case(low):
                //
                break;
            case(medium):
                //
                break;
            case(high):
                //
                break;
            default:
                break;
        }
        
    }
}

// get info from form + add task to array
function createTask() {
    let newTask = new Task();
    newTask.id = taskList.length + 1;
    newTask.name = document.getElementById('taskenter').value;
    newTask.priority = document.getElementById('prioritylvl').value;
    newTask.isImportant = document.getElementById('important').checked;
    newTask.isComplete = false;
    newTask.date = todayDate;

    taskList.push(newTask);
}

// display tasks in div
for (let t = 0; t < taskList.length; t++) {
    taskDisplay(t);
}

// date for taskInfo
date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

todayDate = `${month}-${day}-${year}`;

// send log msg when updated (json.stringify())
