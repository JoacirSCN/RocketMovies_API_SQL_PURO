const express = require('express');
const routes = require('./routes');
const migrationRun = require('./database/sqlite/migrations')

const app = express(); // Iniciando o express

app.use(express.json());
app.use(routes)
app.use((error, req, response, next) => {
	// CLIENTE
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(err)
	// SERVIDOR
  return response.status(500).json({
    status: "error",
    message: "Interval server error",
  });
});

migrationRun();

const PORT = 3333;

app.listen(PORT, () => console.log('Server is running on Port', PORT))