
---

# 🚀 Worker Thread Performance Comparison

## Table of Contents

1. [About the Project](#-about-the-project)
2. [Project Structure](#-project-structure)
3. [Key Features](#-key-features)
4. [Technologies Used](#-technologies-used)
5. [Getting Started](#-getting-started)
6. [Usage](#-usage)
7. [Performance Comparison](#-performance-comparison)
8. [Contributing](#-contributing)
9. [Contact](#-contact)

## 📖 About the Project

This project demonstrates the use of Node.js worker threads to perform computationally intensive tasks. It compares the performance of using worker threads versus a single-threaded approach, highlighting the benefits of parallel execution on multi-core systems.

## 🏗 Project Structure

```
src/
  ├── main.js
  ├── workerManager.js
  ├── worker.js
  ├── nonWorker.js
  └── task.js
```

- **main.js**: The entry point that orchestrates both worker and non-worker executions.
- **workerManager.js**: Manages the creation and lifecycle of worker threads.
- **worker.js**: Contains the logic executed by each worker thread.
- **nonWorker.js**: Runs tasks sequentially in the main thread for comparison.
- **task.js**: Defines the computationally intensive task to be executed.

## 🛠 Key Features

- **Parallel Execution:** Utilizes Node.js worker threads to execute tasks concurrently across multiple CPU cores.
- **Performance Measurement:** Compares execution times between worker-based and single-threaded approaches.
- **Modular Design:** Cleanly separates logic into distinct modules for maintainability and extensibility.

## 🖥 Technologies Used

- **Node.js:** JavaScript runtime environment that executes server-side code.
- **Worker Threads:** Node.js module that provides an API for utilizing multi-core systems by spawning worker threads.
- **Perf Hooks:** Used to measure the performance of synchronous and asynchronous code.

## 🚀 Getting Started

### Prerequisites

- **Node.js:** Ensure you have Node.js installed (version 14 or higher is recommended).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/worker-thread-performance.git
   cd worker-thread-performance
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## 📄 Usage

1. **Run the project:**

   Start the application using npm:

   ```bash
   npm start
   ```

2. **Output:**

   The console will display the execution times for both versions, allowing you to compare the performance of worker threads versus a single-threaded approach.

## 📊 Performance Comparison

The project uses the `performance` module to measure execution times, providing insights into the performance improvements gained by using worker threads.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please feel free to submit a pull request or open an issue.

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request.

## 📬 Contact

For any questions or inquiries, please contact [anavielyahu@gmail.com](mailto:anavielyahu@gmail.com).

---

This version of the README is streamlined and provides clear instructions for users to get started quickly using `npm start`.
