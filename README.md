### DEMO Video <https://drive.google.com/file/d/1NLjFIG-7k7GGgNd8UMQxqh4uNNRbdwGQ/view?usp=sharing>

### Frontend Deployed Link <https://rm-todo-app.vercel.app/>

### Backend Deployed Link <https://rm-todoapp.onrender.com>

# Todo App

This assignment focuses on proficient work on react and redux, also creating a simple Todo App.

## Getting Started

To get started with the API, follow the instructions below.

### Prerequisites

- Node.js installed on your machine
- mongoose installed and running locally or remotely
- npm package manager

### Installation

1. Clone the repository: git clone <https://github.com/RantuBangal/RM-TodoApp>
2. Install dependencies: npm install
3. Configure environment variables:
   - Create a `.env` file in the root directory
   - Define the following variables:
    - `mongoURL`: url for connecting with database.
4. Start the server: npm run server


## API Documentation

### User Routes

- **GET https://rm-todoapp.onrender.com/tasks**
  - Description: Get all tasks.
  
  - Response:
    - `200 OK`: Taks List.
    - `400 Bad Request`: Error getting task.
    - `500 Internal Server Error`: Internal Server Error.

- **AddTask  POST https://rm-todoapp.onrender.com/tasks/add**
  - Description: Add task to the internal DB.
 
  - Response:
    - `200 OK`: Added task.
    - `400 Bad Request`: Error adding task.
    - `500 Internal Server Error`: Internal Server Error.

- **DeleteTask DELETE https://rm-todoapp.onrender.com/tasks/delete/id**
  - Description: Delete a task by its Id.
  
  - Response:
    - `200 OK`: Task deleted.
    - `400 Bad Request`: Error while deleting task.
    - `500 Internal Server Error`: Internal Server Error.


## Author

- [Rantu Bangal](https://github.com/RantuBangal)
  - Email: rantubangal996@gmail.com
