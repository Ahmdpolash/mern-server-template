# MERN Modular Server Template 🧩

A scalable and modular server-side template for MERN applications using **TypeScript**, **Express**, **Mongoose**, and modern **ESM** support.

---

## 🧱 Tech Stack

- **Node.js** + **Express.js** (modular routes & services)
- **TypeScript**
- **MongoDB** + **Mongoose**
- **ESM modules** enabled
- **Environment variables** with `dotenv`
- **File/module generator script** (custom CLI)

---

## 📁 Project Structure

└── src/
    ├── app.ts
    ├── server.ts
    ├── utils/
    │   └── module-generator.ts
    ├── routes/
    │   └── index.ts
    ├── middleware/
    │   ├── globalErrorHandler.ts
    │   └── notFound.ts
    ├── errors/
    │   └── AppError.ts
    ├── config/
    │   └── index.ts
    └── modules/
        └── test/
            ├── test.controller.ts
            ├── test.interface.ts
            ├── test.model.ts
            ├── test.route.ts
            └── test.service.ts



> Each module is **self-contained**, promoting separation of concerns and scalability.

---

## 🚀 Getting Started

### 1️⃣ Clone & Install

```bash
git clone https://github.com/Ahmdpolash/mern-server-template.git

npm install
```

### Create a .env file in the root directory:
```bash
 PORT=5000
 DATABASE_URL=mongodb://localhost:27017/your-db-name
 ```
