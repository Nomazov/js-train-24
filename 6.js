console.log("Завдання: 6 ==============================");

// Створюємо функцію task6, яка використовує setImmediate та проміси.
function task6() {
    // Створюємо новий проміс.
    // Використовуємо функцію setImmediate, щоб виконати функцію асинхронно.
    // Генеруємо випадкове число від 0 до 1
    // Якщо випадкове число менше 0.5, резолвимо проміс з рядком Більше ніж 0.5.
    // Інакше відхиляемо проміс з рядком Менше ніж 0.5 .
    // Використовуємо then для обробки зарезолвленого проміса, та виводимо `Проміс зарезолвився з значенням: ${value}`.
    // Якщо проміс відхилено, обробляємо помилку за допомогою catch, та виводимо `Проміс відхилився з помилкою: ${error}`.
    // Використовуємо finally для виконання дій після завершення проміса, незалежно від його статусу, та виводимо "Проміс завершено".

    const newPromice = new Promise((res, rej) => {
        setImmediate(() => {
            const random = Math.random();
            if (random < 0.5) {
                res(`Більше ніж 0.5 (${random})`);
            } else {
                rej(`Менше ніж 0.5 (${random})`);
            }
        });
    });

    newPromice
        .then(value => {
            console.log(`Проміс зарезолвився з значенням: ${value}`);
        })
        .catch(error => {
            console.log(`Проміс відхилився з помилкою: ${error}`);
        })
        .finally(() => {
            console.log('Проміс завершено');
        });
}

// Викликаємо функцію task6
task6();
