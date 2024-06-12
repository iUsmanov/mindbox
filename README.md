# Тестовое задание для mindbox

## Запуск проекта

```
npm install - устанавливаем зависимости
npm start - Запуск в dev-режиме
npm run build:prod - Сборка в prod-режиме
npm run test:unit - Запуск unit-тестов
```

---

Готовый билд проекта - https://task-mindbox.netlify.app/

---

Вопрос к mindbox по поводу задачи: В условии сказано, что задание должно выполняться с использованием
React Hooks. Как я понял, стейт-менеджер использовать нельзя, а с состоянием нужно
работать с использованием хука _useState_.
Но в таком случае непонятно, как на ключевой функционал писать тесты(что на jest, что на cypress), из-за того, что
мокать хук _useState_, как я понял, можно только через "костыли" и с условиями, если вообще можно.

Немного тестов я всё же написал.
