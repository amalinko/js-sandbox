// ============================================================
//  ПРАКТИКА: МАССИВЫ В TYPESCRIPT
//  Запуск: npx ts-node arrays_practice.ts
//       или: tsc arrays_practice.ts && node arrays_practice.js
// ============================================================
//
//  КАК РАБОТАТЬ С ФАЙЛОМ:
//  1. Читай сигнатуру и комментарий к функции
//  2. Реализуй функцию вместо заглушки  throw new Error("не реализовано")
//  3. Запускай файл и смотри, какие тесты проходят
//  4. Зелёный ✓ — тест прошёл, красный ✗ — не прошёл
//
//  Задачи 1–9: только for и while
//  Задачи 10–15: можно использовать функции высшего порядка
// ============================================================


// ─────────────────────────────────────────────
//  ЗАДАЧА 1 — Сумма элементов
// ─────────────────────────────────────────────
//  Принимает: массив чисел
//  Возвращает: сумму всех элементов массива
//  Если массив пустой — вернуть 0
//
//  Пример: sum([1, 2, 3, 4]) → 10
//          sum([])            → 0

function sum(arr: number[]): number {
    throw new Error("не реализовано");
}


// ─────────────────────────────────────────────
//  ЗАДАЧА 2 — Максимальный элемент
// ─────────────────────────────────────────────
//  Принимает: непустой массив чисел
//  Возвращает: наибольшее число в массиве
//
//  Пример: findMax([3, 1, 7, 2]) → 7
//          findMax([-5, -1, -3]) → -1

function findMax(arr: number[]): number {
    throw new Error("не реализовано");
}


// ─────────────────────────────────────────────
//  ЗАДАЧА 3 — Подсчёт вхождений
// ─────────────────────────────────────────────
//  Принимает: массив строк и строку target
//  Возвращает: сколько раз target встречается в массиве
//
//  Пример: countElement(['a', 'b', 'a'], 'a') → 2
//          countElement(['a', 'b', 'a'], 'c') → 0

function countElement(arr: string[], target: string): number {
    throw new Error("не реализовано");
}


// ─────────────────────────────────────────────
//  ЗАДАЧА 4 — Разворот массива
// ─────────────────────────────────────────────
//  Принимает: массив строк
//  Возвращает: НОВЫЙ массив с элементами в обратном порядке
//  Исходный массив трогать нельзя, метод .reverse() не использовать
//
//  Пример: reverseArr(['a', 'b', 'c']) → ['c', 'b', 'a']

function reverseArr(arr: string[]): string[] {
    throw new Error("не реализовано");
}


// ─────────────────────────────────────────────
//  ЗАДАЧА 5 — Только чётные числа
// ─────────────────────────────────────────────
//  Принимает: массив чисел
//  Возвращает: НОВЫЙ массив, в котором только чётные числа
//  Порядок сохраняется. Метод .filter() не использовать
//
//  Пример: filterEven([1, 2, 3, 4, 5, 6]) → [2, 4, 6]
//          filterEven([1, 3, 5])           → []

function filterEven(arr: number[]): number[] {
    throw new Error("не реализовано");
}


// ─────────────────────────────────────────────
//  ЗАДАЧА 6 — Удаление дубликатов
// ─────────────────────────────────────────────
//  Принимает: массив строк
//  Возвращает: НОВЫЙ массив без повторяющихся элементов
//  Первое вхождение каждого элемента сохраняется, порядок — тоже
//
//  Пример: removeDuplicates(['a','b','a','c']) → ['a','b','c']

function removeDuplicates(arr: string[]): string[] {
    throw new Error("не реализовано");
}


// ─────────────────────────────────────────────
//  ЗАДАЧА 7 — Сплющивание массива (один уровень)
// ─────────────────────────────────────────────
//  Принимает: массив массивов чисел
//  Возвращает: новый массив, где все вложенные массивы раскрыты в один уровень
//  Методы .flat() и .flatMap() не использовать
//
//  Пример: flatten([[1, 2], [3, 4], [5]]) → [1, 2, 3, 4, 5]
//          flatten([[1, 2], [3, 4]])       → [1, 2, 3, 4]

function flatten(arr: number[][]): number[] {
    throw new Error("не реализовано");
}


// ─────────────────────────────────────────────
//  ЗАДАЧА 8 — Пересечение массивов
// ─────────────────────────────────────────────
//  Принимает: два массива строк
//  Возвращает: НОВЫЙ массив из элементов, которые есть в обоих массивах
//  Дубликаты в результате не нужны — каждый элемент входит один раз
//  Порядок определяется первым массивом
//
//  Пример: intersection(['a','b','c'], ['b','c','d'])  → ['b', 'c']
//          intersection(['a','a','b'], ['a','b'])       → ['a', 'b']

function intersection(arr1: string[], arr2: string[]): string[] {
    throw new Error("не реализовано");
}


// ─────────────────────────────────────────────
//  ЗАДАЧА 9 — Разбивка на части (chunks)
// ─────────────────────────────────────────────
//  Принимает: массив чисел и размер chunk (size > 0)
//  Возвращает: массив массивов, каждый длиной size
//  Последний chunk может быть короче, если элементов не хватает
//
//  Пример: chunk([1, 2, 3, 4, 5], 2) → [[1, 2], [3, 4], [5]]
//          chunk([1, 2, 3, 4], 4)    → [[1, 2, 3, 4]]

function chunk(arr: number[], size: number): number[][] {
    throw new Error("не реализовано");
}


// ─────────────────────────────────────────────
//  ЗАДАЧА 10 — Своя реализация map
// ─────────────────────────────────────────────
//  Принимает: массив чисел и функцию-преобразователь fn(element, index)
//  Возвращает: НОВЫЙ массив чисел, где каждый элемент заменён результатом fn
//  Встроенный метод .map() не использовать
//
//  Пример:
//    myMap([1, 2, 3], x => x * 2)       → [2, 4, 6]
//    myMap([1, 2, 3], (x, i) => x + i)  → [1, 3, 5]

function myMap(arr: number[], fn: (element: number, index: number) => number): number[] {
    throw new Error("не реализовано");
}


// ─────────────────────────────────────────────
//  ЗАДАЧА 11 — Своя реализация filter
// ─────────────────────────────────────────────
//  Принимает: массив чисел и функцию-предикат fn(element, index) → boolean
//  Возвращает: НОВЫЙ массив из элементов, для которых fn вернула true
//  Встроенный метод .filter() не использовать
//
//  Пример:
//    myFilter([1, 2, 3, 4], x => x > 2)         → [3, 4]
//    myFilter([1, 2, 3, 4, 5], x => x % 2 === 0) → [2, 4]

function myFilter(arr: number[], fn: (element: number, index: number) => boolean): number[] {
    throw new Error("не реализовано");
}


// ─────────────────────────────────────────────
//  ЗАДАЧА 12 — Своя реализация reduce
// ─────────────────────────────────────────────
//  Принимает: массив чисел, функцию fn(accumulator, element) и начальное значение
//  Возвращает: одно число — результат последовательного применения fn
//  Встроенный метод .reduce() не использовать
//
//  Пример:
//    myReduce([1, 2, 3, 4], (acc, x) => acc + x, 0)               → 10
//    myReduce([3, 1, 7, 2], (acc, x) => (x > acc ? x : acc), 0)   → 7

function myReduce(arr: number[], fn: (accumulator: number, element: number) => number, initial: number): number {
    throw new Error("не реализовано");
}


// ─────────────────────────────────────────────
//  ЗАДАЧА 13 — Группировка элементов
// ─────────────────────────────────────────────
//  Принимает: массив строк и функцию fn(element) → string (ключ группы)
//  Возвращает: объект, где ключи — результаты fn, значения — массивы строк
//
//  Пример:
//    groupBy(['one', 'two', 'three', 'cat'], s => s.length === 3 ? 'short' : 'long')
//    → { short: ['one', 'two', 'cat'], long: ['three'] }

function groupBy(arr: string[], fn: (element: string) => string): Record<string, string[]> {
    throw new Error("не реализовано");
}


// ─────────────────────────────────────────────
//  ЗАДАЧА 14 — Слияние двух массивов в пары (zip)
// ─────────────────────────────────────────────
//  Принимает: массив чисел и массив строк
//  Возвращает: массив пар [number, string]
//  Если длины разные — берём длину более короткого
//
//  Пример:
//    zip([1, 2, 3], ['a', 'b', 'c'])   → [[1,'a'], [2,'b'], [3,'c']]
//    zip([1, 2], ['x', 'y', 'z'])      → [[1,'x'], [2,'y']]

function zip(arr1: number[], arr2: string[]): [number, string][] {
    throw new Error("не реализовано");
}


// ─────────────────────────────────────────────
//  ЗАДАЧА 15 — Своя реализация flatMap
// ─────────────────────────────────────────────
//  Принимает: массив чисел и функцию fn(element) → number[]
//  Возвращает: массив, в котором результаты fn склеены в один плоский список
//  Встроенные .flatMap() и .flat() не использовать
//
//  Пример:
//    myFlatMap([1, 2, 3], x => [x, x * 10])  → [1, 10, 2, 20, 3, 30]
//    myFlatMap([1, 2, 3], x => [x, x + 1])   → [1, 2, 2, 3, 3, 4]

function myFlatMap(arr: number[], fn: (element: number) => number[]): number[] {
    throw new Error("не реализовано");
}


// ============================================================
//  ТЕСТ-РАННЕР  (не редактируй код ниже)
// ============================================================

let passed = 0;
let failed = 0;

function deepEqual(a: unknown, b: unknown): boolean {
    if (a === b) return true;
    if (typeof a !== typeof b) return false;
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        return a.every((v, i) => deepEqual(v, b[i]));
    }
    if (typeof a === "object" && a !== null && b !== null) {
        const keysA = Object.keys(a as object).sort();
        const keysB = Object.keys(b as object).sort();
        if (!deepEqual(keysA, keysB)) return false;
        return keysA.every((k) =>
            deepEqual((a as Record<string, unknown>)[k], (b as Record<string, unknown>)[k])
        );
    }
    return false;
}

function test(label: string, fn: () => void): void {
    try {
        fn();
        console.log(`  ✓  ${label}`);
        passed++;
    } catch (e) {
        console.log(`  ✗  ${label}`);
        console.log(`       ${(e as Error).message}`);
        failed++;
    }
}

function expect(actual: unknown) {
    return {
        toBe(expected: unknown): void {
            if (!deepEqual(actual, expected)) {
                throw new Error(`ожидалось: ${JSON.stringify(expected)}, получено: ${JSON.stringify(actual)}`);
            }
        },
        toEqual(expected: unknown): void {
            if (!deepEqual(actual, expected)) {
                throw new Error(`ожидалось: ${JSON.stringify(expected)}, получено: ${JSON.stringify(actual)}`);
            }
        },
    };
}

function describe(title: string, fn: () => void): void {
    console.log(`\n${title}`);
    fn();
}

// ─── тесты ───────────────────────────────────

describe("Задача 1 — sum", () => {
    test("сумма обычного массива", () => expect(sum([1, 2, 3, 4])).toBe(10));
    test("массив из одного элемента", () => expect(sum([42])).toBe(42));
    test("пустой массив возвращает 0", () => expect(sum([])).toBe(0));
    test("отрицательные числа", () => expect(sum([-1, -2, -3])).toBe(-6));
    test("смесь положительных и отрицательных", () => expect(sum([10, -3, 5])).toBe(12));
});

describe("Задача 2 — findMax", () => {
    test("обычный массив", () => expect(findMax([3, 1, 7, 2])).toBe(7));
    test("максимум в начале", () => expect(findMax([9, 1, 2])).toBe(9));
    test("один элемент", () => expect(findMax([42])).toBe(42));
    test("все отрицательные", () => expect(findMax([-5, -1, -3])).toBe(-1));
    test("одинаковые значения", () => expect(findMax([4, 4, 4])).toBe(4));
});

describe("Задача 3 — countElement", () => {
    test("элемент встречается несколько раз", () => expect(countElement(["a", "b", "a", "c", "a"], "a")).toBe(3));
    test("элемент не встречается", () => expect(countElement(["a", "b", "c"], "z")).toBe(0));
    test("пустой массив", () => expect(countElement([], "a")).toBe(0));
    test("элемент встречается один раз", () => expect(countElement(["a", "b", "c"], "b")).toBe(1));
    test("все одинаковые", () => expect(countElement(["x", "x", "x"], "x")).toBe(3));
});

describe("Задача 4 — reverseArr", () => {
    test("обычный массив", () => expect(reverseArr(["a", "b", "c"])).toEqual(["c", "b", "a"]));
    test("один элемент", () => expect(reverseArr(["a"])).toEqual(["a"]));
    test("два элемента", () => expect(reverseArr(["a", "b"])).toEqual(["b", "a"]));
    test("исходный массив не изменяется", () => {
        const original = ["a", "b", "c"];
        reverseArr(original);
        expect(original).toEqual(["a", "b", "c"]);
    });
    test("чётное количество элементов", () => expect(reverseArr(["a", "b", "c", "d"])).toEqual(["d", "c", "b", "a"]));
});

describe("Задача 5 — filterEven", () => {
    test("смесь чётных и нечётных", () => expect(filterEven([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]));
    test("только нечётные", () => expect(filterEven([1, 3, 5])).toEqual([]));
    test("только чётные", () => expect(filterEven([2, 4, 6])).toEqual([2, 4, 6]));
    test("пустой массив", () => expect(filterEven([])).toEqual([]));
    test("ноль — чётное", () => expect(filterEven([0, 1, 2])).toEqual([0, 2]));
});

describe("Задача 6 — removeDuplicates", () => {
    test("с дубликатами", () => expect(removeDuplicates(["a", "b", "a", "c", "b"])).toEqual(["a", "b", "c"]));
    test("без дубликатов — порядок сохраняется", () => expect(removeDuplicates(["a", "b", "c"])).toEqual(["a", "b", "c"]));
    test("пустой массив", () => expect(removeDuplicates([])).toEqual([]));
    test("все одинаковые", () => expect(removeDuplicates(["x", "x", "x"])).toEqual(["x"]));
    test("все уникальные", () => expect(removeDuplicates(["a", "b", "c", "d"])).toEqual(["a", "b", "c", "d"]));
});

describe("Задача 7 — flatten", () => {
    test("обычный случай", () => expect(flatten([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]));
    test("без остатка", () => expect(flatten([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]));
    test("вложенные пустые массивы", () => expect(flatten([[], [1], []])).toEqual([1]));
    test("один вложенный массив", () => expect(flatten([[1, 2, 3]])).toEqual([1, 2, 3]));
    test("пустой массив", () => expect(flatten([])).toEqual([]));
});

describe("Задача 8 — intersection", () => {
    test("общие элементы есть", () => expect(intersection(["a", "b", "c"], ["b", "c", "d"])).toEqual(["b", "c"]));
    test("дубликаты в первом массиве — в результате один раз", () => expect(intersection(["a", "a", "b"], ["a", "b"])).toEqual(["a", "b"]));
    test("нет общих элементов", () => expect(intersection(["a", "b"], ["c", "d"])).toEqual([]));
    test("один из массивов пустой", () => expect(intersection(["a", "b"], [])).toEqual([]));
    test("полное совпадение", () => expect(intersection(["a", "b"], ["a", "b"])).toEqual(["a", "b"]));
});

describe("Задача 9 — chunk", () => {
    test("размер 2, пять элементов", () => expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]));
    test("размер равен длине массива", () => expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]]));
    test("размер 1", () => expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]));
    test("пустой массив", () => expect(chunk([], 3)).toEqual([]));
    test("без остатка", () => expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]));
});

describe("Задача 10 — myMap", () => {
    test("умножение на 2", () => expect(myMap([1, 2, 3], (x) => x * 2)).toEqual([2, 4, 6]));
    test("возведение в квадрат", () => expect(myMap([1, 2, 3, 4], (x) => x ** 2)).toEqual([1, 4, 9, 16]));
    test("fn получает индекс", () => expect(myMap([10, 20, 30], (x, i) => x + i)).toEqual([10, 21, 32]));
    test("пустой массив", () => expect(myMap([], (x) => x)).toEqual([]));
    test("все в ноль", () => expect(myMap([1, 2, 3], () => 0)).toEqual([0, 0, 0]));
});

describe("Задача 11 — myFilter", () => {
    test("числа больше 2", () => expect(myFilter([1, 2, 3, 4], (x) => x > 2)).toEqual([3, 4]));
    test("чётные числа", () => expect(myFilter([1, 2, 3, 4, 5], (x) => x % 2 === 0)).toEqual([2, 4]));
    test("ничего не прошло фильтр", () => expect(myFilter([1, 2, 3], (x) => x > 10)).toEqual([]));
    test("всё прошло фильтр", () => expect(myFilter([1, 2, 3], (x) => x > 0)).toEqual([1, 2, 3]));
    test("пустой массив", () => expect(myFilter([], (x) => x > 0)).toEqual([]));
});

describe("Задача 12 — myReduce", () => {
    test("сумма чисел", () => expect(myReduce([1, 2, 3, 4], (acc, x) => acc + x, 0)).toBe(10));
    test("произведение чисел", () => expect(myReduce([1, 2, 3, 4], (acc, x) => acc * x, 1)).toBe(24));
    test("нахождение максимума", () => expect(myReduce([3, 1, 7, 2], (acc, x) => (x > acc ? x : acc), -Infinity)).toBe(7));
    test("подсчёт элементов через reduce", () => expect(myReduce([1, 2, 3], (acc) => acc + 1, 0)).toBe(3));
    test("пустой массив возвращает initial", () => expect(myReduce([], (acc, x) => acc + x, 42)).toBe(42));
});

describe("Задача 13 — groupBy", () => {
    test("группировка по длине строки", () => {
        const result = groupBy(["one", "two", "three", "cat"], (s) => s.length === 3 ? "short" : "long");
        expect(result).toEqual({ short: ["one", "two", "cat"], long: ["three"] });
    });
    test("группировка по первой букве", () => {
        const result = groupBy(["ant", "bee", "ape", "bat"], (s) => s[0]);
        expect(result).toEqual({ a: ["ant", "ape"], b: ["bee", "bat"] });
    });
    test("один элемент", () => {
        expect(groupBy(["hi"], (s) => s)).toEqual({ hi: ["hi"] });
    });
    test("все в одной группе", () => {
        expect(groupBy(["a", "b", "c"], () => "all")).toEqual({ all: ["a", "b", "c"] });
    });
});

describe("Задача 14 — zip", () => {
    test("два массива одинаковой длины", () => expect(zip([1, 2, 3], ["a", "b", "c"])).toEqual([[1, "a"], [2, "b"], [3, "c"]]));
    test("первый массив короче", () => expect(zip([1, 2], ["a", "b", "c"])).toEqual([[1, "a"], [2, "b"]]));
    test("второй массив короче", () => expect(zip([1, 2, 3], ["a"])).toEqual([[1, "a"]]));
    test("пустые массивы", () => expect(zip([], [])).toEqual([]));
    test("один элемент", () => expect(zip([42], ["z"])).toEqual([[42, "z"]]));
});

describe("Задача 15 — myFlatMap", () => {
    test("каждый элемент в пару", () => expect(myFlatMap([1, 2, 3], (x) => [x, x * 10])).toEqual([1, 10, 2, 20, 3, 30]));
    test("дублирование элементов", () => expect(myFlatMap([1, 2, 3], (x) => [x, x + 1])).toEqual([1, 2, 2, 3, 3, 4]));
    test("пустой массив", () => expect(myFlatMap([], (x) => [x])).toEqual([]));
    test("fn возвращает пустой массив — элементы исчезают", () => expect(myFlatMap([1, 2, 3], () => [])).toEqual([]));
    test("fn возвращает один элемент — как обычный map", () => expect(myFlatMap([1, 2, 3], (x) => [x + 1])).toEqual([2, 3, 4]));
});

// ─── итог ────────────────────────────────────

const total = passed + failed;
console.log(`\n${"─".repeat(44)}`);
console.log(`  Результат: ${passed} / ${total} тестов прошло`);
if (failed === 0) {
    console.log("  Отлично! Все задачи решены 🎉");
} else {
    console.log(`  Осталось решить задач: ${failed > 0 ? "смотри ✗ выше" : "—"}`);
}
console.log("─".repeat(44));