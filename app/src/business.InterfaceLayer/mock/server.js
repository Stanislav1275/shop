const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Обработчик для добавления баланса
server.put("/addBalance/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const balanceToAdd = parseInt(req.body.balance);

    // Проверяем, что значение balanceToAdd неотрицательное
    if (isNaN(balanceToAdd) || balanceToAdd < 0) {
        res.status(400).json({ error: "Некорректное значение баланса. Баланс должен быть неотрицательным числом." });
    } else {
        const user = router.db.get("users").find({ id: userId }).value();

        if (user) {
            // Прибавляем значение к текущему балансу пользователя
            const newBalance = user.balance + balanceToAdd;

            // Обновляем баланс пользователя в базе данных
            router.db.get("users").find({ id: userId }).assign({ balance: newBalance }).write();

            res.json({ message: "Баланс успешно обновлен.", newBalance });
        } else {
            res.status(404).json({ error: "Пользователь не найден." });
        }
    }
});

// Используем обработчик маршрутов JSON-сервера
server.use(router);

// Запускаем сервер на порту 3000
server.listen(3000, () => {
    console.log("JSON Server запущен на порту 3000");
});