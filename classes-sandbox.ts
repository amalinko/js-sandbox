/**
 * ============================================================
 *  ЗАДАНИЕ: Инвентарь героя
 * ============================================================
 *
 *  Нужно реализовать два класса: Item (предмет) и Inventory (сумка героя).
 *  Внизу файла лежат тесты — они запускаются сами и покажут, что уже
 *  работает, а что нет. Тесты трогать нельзя, код классов — сколько угодно.
 *
 *  ВАЖНО ПРО СИГНАТУРЫ:
 *  Методы ниже объявлены без параметров и без типа возвращаемого значения.
 *  Это сделано специально. Определи сам, что метод должен принимать и что
 *  возвращать, и допиши сигнатуру. Подсказки — в комментариях и в тестах.
 *
 *  Запуск: bun inventory.ts
 * ============================================================
 */

/**
 * Предмет. Просто хранит данные о себе, никакой логики.
 *
 * Три характеристики: название, вес (в кг) и цена (в монетах).
 * Все три задаются один раз при создании и меняться потом не должны —
 * подумай, как в TypeScript запретить их перезапись извне.
 *
 * В конструкторе нужна проверка входных данных. Если данные плохие —
 * бросай ошибку через throw new Error('...'), создавать сломанный предмет нельзя:
 *   - название пустое или состоит из одних пробелов;
 *   - вес нулевой или отрицательный;
 *   - цена отрицательная (а вот нулевая цена — это нормально, бывает хлам).
 */
class Item {
    constructor() {
    }
}

/**
 * Инвентарь. Хранит предметы и следит за тем, чтобы герой не унёс больше,
 * чем может.
 *
 * При создании задаётся вместимость — максимальный суммарный вес предметов.
 * Отрицательная вместимость — ошибка. Нулевая допустима (сумка, в которую
 * ничего не влезает, — странная, но валидная).
 *
 * Массив с предметами должен быть спрятан внутри класса: снаружи до него
 * не должно быть прямого доступа.
 */
class Inventory {

    constructor() {
    }

    /**
     * Суммарный вес всех предметов внутри.
     * У пустого инвентаря — 0, а не ошибка и не undefined.
     *
     * Это геттер: снаружи к нему обращаются без скобок — inventory.totalWeight
     */
    get totalWeight() {
        return 0;
    }

    /**
     * Суммарная стоимость всех предметов внутри. Тоже геттер.
     */
    get totalPrice() {
        return 0;
    }

    /**
     * Сколько ещё веса влезет: вместимость минус занятый вес. Тоже геттер.
     */
    get freeSpace() {
        return 0;
    }

    /**
     * Количество предметов в инвентаре. Тоже геттер.
     */
    get size() {
        return 0;
    }

    /**
     * Пустой ли инвентарь. Тоже геттер.
     */
    get isEmpty() {
        return true;
    }

    /**
     * Положить предмет в инвентарь.
     *
     * Не забудь:
     *   - если предмет не влезает по весу — бросить ошибку и НЕ добавлять его;
     *   - после неудачной попытки инвентарь должен остаться ровно таким,
     *     каким был: тот же вес, то же количество предметов;
     *   - если предмет влезает ровно впритык (вес станет равен вместимости) —
     *     это нормально, он должен добавиться;
     *   - одинаковые предметы разрешены: два «Зелья» — это два разных предмета
     *     в инвентаре, а не один.
     */
    addItem() {
    }

    /**
     * Выбросить предмет из инвентаря по его названию.
     *
     * Не забудь:
     *   - выброшенный предмет надо вернуть наружу — вдруг герой захочет
     *     переложить его в другое место;
     *   - если предмета с таким названием нет — бросить ошибку;
     *   - если одинаковых предметов несколько, уходит только один из них,
     *     остальные остаются на месте;
     *   - поиск по названию точный, регистр важен: 'меч' и 'Меч' — разные вещи.
     */
    removeItem() {
    }

    /**
     * Проверить, есть ли в инвентаре предмет с таким названием.
     * Ничего не бросает, просто отвечает да/нет.
     */
    has() {
    }

    /**
     * Найти предмет по названию и отдать его (не вынимая из инвентаря!).
     *
     * Здесь, в отличие от removeItem, отсутствие предмета — не ошибка,
     * а нормальный ответ. Подумай, что вернуть в этом случае.
     */
    find() {
    }

    /**
     * Найти самый дорогой предмет в инвентаре.
     *
     * Не забудь про пустой инвентарь: искать нечего, но и падать нельзя —
     * верни явное «ничего нет».
     */
    getMostExpensive() {
    }

    /**
     * Отдать наружу все предметы.
     *
     * Внимание, ловушка: если вернуть внутренний массив как есть, снаружи
     * смогут его менять в обход всех проверок веса. Верни так, чтобы это
     * было невозможно.
     */
    getItems() {
    }

    /**
     * Выбросить всё. После этого инвентарь пустой, вес нулевой.
     */
    clear() {
    }

    /* ==================== БОНУС ====================
       Эти два метода — по желанию, когда основное заработает. */

    /**
     * Переложить предмет с таким названием в другой инвентарь.
     *
     * Главная сложность: у второго инвентаря может не хватить места.
     * Предмет не должен потеряться по дороге — если переложить не получилось,
     * он обязан остаться там, где был. Подумай, в каком порядке всё делать.
     */
    moveTo() {
    }

    /**
     * Отдать предметы, отсортированные по цене от дорогих к дешёвым.
     * Порядок предметов внутри самого инвентаря при этом меняться не должен.
     */
    getSortedByPrice() {
    }
}

/**
 * ============================================================
 *  НИЖЕ — ТЕСТЫ. НИЧЕГО НЕ МЕНЯЙ.
 * ============================================================
 */

let passed = 0;
let failed = 0;
const failedNames: string[] = [];

function describe(title: string, fn: () => void): void {
    console.log(`\n${title}`);
    fn();
}

function it(title: string, fn: () => void): void {
    try {
        fn();
        passed++;
        console.log(`  [ ok ] ${title}`);
    } catch (error) {
        failed++;
        failedNames.push(title);
        const message = error instanceof Error ? error.message : String(error);
        console.log(`  [FAIL] ${title}`);
        console.log(`         ${message}`);
    }
}

function show(value: unknown): string {
    if (typeof value === 'string') return `'${value}'`;
    if (value instanceof Item) return `Item(${show((value as any).name)})`;
    if (Array.isArray(value)) return `[${value.map(show).join(', ')}]`;
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    return String(value);
}

function expect(actual: unknown) {
    return {
        toBe(expected: unknown): void {
            if (actual !== expected) {
                throw new Error(`ожидалось ${show(expected)}, получено ${show(actual)}`);
            }
        },
        toBeNullOrUndefined(): void {
            if (actual !== null && actual !== undefined) {
                throw new Error(`ожидалось null или undefined, получено ${show(actual)}`);
            }
        },
        toBeInstanceOf(ctor: Function): void {
            if (!(actual instanceof ctor)) {
                throw new Error(`ожидался объект класса ${ctor.name}, получено ${show(actual)}`);
            }
        },
        toHaveLength(expected: number): void {
            if (!Array.isArray(actual)) {
                throw new Error(`ожидался массив, получено ${show(actual)}`);
            }
            if (actual.length !== expected) {
                throw new Error(`ожидался массив длины ${expected}, получен длины ${actual.length}`);
            }
        },
        toThrow(): void {
            if (typeof actual !== 'function') {
                throw new Error('внутренняя ошибка теста: toThrow ждёт функцию');
            }
            let thrown = false;
            try {
                actual();
            } catch {
                thrown = true;
            }
            if (!thrown) {
                throw new Error('ожидалась ошибка (throw), но её не было');
            }
        },
        notToThrow(): void {
            if (typeof actual !== 'function') {
                throw new Error('внутренняя ошибка теста: notToThrow ждёт функцию');
            }
            try {
                actual();
            } catch (error) {
                const message = error instanceof Error ? error.message : String(error);
                throw new Error(`ошибки быть не должно, но она случилась: ${message}`);
            }
        },
    };
}

// ---------- вспомогательные фабрики для тестов ----------

const sword = () => new (Item as any)('Меч', 5, 100);
const potion = () => new (Item as any)('Зелье', 1, 20);
const ring = () => new (Item as any)('Кольцо', 0.1, 500);
const anvil = () => new (Item as any)('Наковальня', 200, 10);
const makeInventory = (capacity: number) => new (Inventory as any)(capacity) as Inventory;

// ---------- сами тесты ----------

describe('Item: создание', () => {
    it('запоминает название, вес и цену', () => {
        const item = sword();
        expect(item.name).toBe('Меч');
        expect(item.weight).toBe(5);
        expect(item.price).toBe(100);
    });

    it('разрешает нулевую цену', () => {
        expect(() => new (Item as any)('Ржавый гвоздь', 0.01, 0)).notToThrow();
    });

    it('не даёт создать предмет с пустым названием', () => {
        expect(() => new (Item as any)('', 1, 1)).toThrow();
        expect(() => new (Item as any)('   ', 1, 1)).toThrow();
    });

    it('не даёт создать предмет с нулевым или отрицательным весом', () => {
        expect(() => new (Item as any)('Призрак', 0, 10)).toThrow();
        expect(() => new (Item as any)('Антимеч', -5, 10)).toThrow();
    });

    it('не даёт создать предмет с отрицательной ценой', () => {
        expect(() => new (Item as any)('Долг', 1, -100)).toThrow();
    });
});

describe('Inventory: создание и пустое состояние', () => {
    it('новый инвентарь пуст', () => {
        const inv = makeInventory(50);
        expect(inv.isEmpty).toBe(true);
        expect(inv.size).toBe(0);
        expect(inv.totalWeight).toBe(0);
        expect(inv.totalPrice).toBe(0);
    });

    it('всё свободное место доступно', () => {
        const inv = makeInventory(50);
        expect(inv.freeSpace).toBe(50);
    });

    it('не даёт создать инвентарь с отрицательной вместимостью', () => {
        expect(() => new (Inventory as any)(-10)).toThrow();
    });

    it('разрешает нулевую вместимость', () => {
        expect(() => new (Inventory as any)(0)).notToThrow();
    });
});

describe('Inventory: добавление предметов', () => {
    it('добавляет предмет', () => {
        const inv = makeInventory(50);
        inv.addItem(sword());
        expect(inv.size).toBe(1);
        expect(inv.isEmpty).toBe(false);
    });

    it('пересчитывает вес, цену и свободное место', () => {
        const inv = makeInventory(50);
        inv.addItem(sword());
        inv.addItem(potion());
        expect(inv.totalWeight).toBe(6);
        expect(inv.totalPrice).toBe(120);
        expect(inv.freeSpace).toBe(44);
    });

    it('разрешает положить предмет ровно впритык', () => {
        const inv = makeInventory(5);
        expect(() => inv.addItem(sword())).notToThrow();
        expect(inv.size).toBe(1);
        expect(inv.freeSpace).toBe(0);
    });

    it('не даёт превысить вместимость', () => {
        const inv = makeInventory(5);
        inv.addItem(sword());
        expect(() => inv.addItem(potion())).toThrow();
    });

    it('не даёт положить предмет тяжелее всей сумки', () => {
        const inv = makeInventory(50);
        expect(() => inv.addItem(anvil())).toThrow();
    });

    it('после неудачного добавления инвентарь не изменился', () => {
        const inv = makeInventory(50);
        inv.addItem(sword());
        try {
            inv.addItem(anvil());
        } catch {
            /* ошибка здесь ожидаема */
        }
        expect(inv.size).toBe(1);
        expect(inv.totalWeight).toBe(5);
        expect(inv.totalPrice).toBe(100);
    });

    it('разрешает одинаковые предметы', () => {
        const inv = makeInventory(50);
        inv.addItem(potion());
        inv.addItem(potion());
        expect(inv.size).toBe(2);
        expect(inv.totalWeight).toBe(2);
    });
});

describe('Inventory: поиск предметов', () => {
    it('has находит положенный предмет', () => {
        const inv = makeInventory(50);
        inv.addItem(sword());
        expect(inv.has('Меч')).toBe(true);
    });

    it('has не находит того, чего нет', () => {
        const inv = makeInventory(50);
        inv.addItem(sword());
        expect(inv.has('Щит')).toBe(false);
    });

    it('поиск учитывает регистр', () => {
        const inv = makeInventory(50);
        inv.addItem(sword());
        expect(inv.has('меч')).toBe(false);
    });

    it('find возвращает сам предмет', () => {
        const inv = makeInventory(50);
        inv.addItem(ring());
        const found = inv.find('Кольцо');
        expect(found).toBeInstanceOf(Item);
        expect((found as any).price).toBe(500);
    });

    it('find не бросает ошибку, если предмета нет', () => {
        const inv = makeInventory(50);
        expect(() => inv.find('Корона')).notToThrow();
        expect(inv.find('Корона')).toBeNullOrUndefined();
    });
});

describe('Inventory: удаление предметов', () => {
    it('удаляет предмет и возвращает его', () => {
        const inv = makeInventory(50);
        inv.addItem(sword());
        const dropped = inv.removeItem('Меч');
        expect(dropped).toBeInstanceOf(Item);
        expect((dropped as any).name).toBe('Меч');
        expect(inv.size).toBe(0);
        expect(inv.totalWeight).toBe(0);
    });

    it('освобождает место', () => {
        const inv = makeInventory(50);
        inv.addItem(sword());
        inv.removeItem('Меч');
        expect(inv.freeSpace).toBe(50);
    });

    it('бросает ошибку, если предмета нет', () => {
        const inv = makeInventory(50);
        expect(() => inv.removeItem('Щит')).toThrow();
    });

    it('из двух одинаковых предметов убирает только один', () => {
        const inv = makeInventory(50);
        inv.addItem(potion());
        inv.addItem(potion());
        inv.removeItem('Зелье');
        expect(inv.size).toBe(1);
        expect(inv.has('Зелье')).toBe(true);
    });

    it('clear убирает всё', () => {
        const inv = makeInventory(50);
        inv.addItem(sword());
        inv.addItem(potion());
        inv.clear();
        expect(inv.isEmpty).toBe(true);
        expect(inv.size).toBe(0);
        expect(inv.totalWeight).toBe(0);
        expect(inv.freeSpace).toBe(50);
    });
});

describe('Inventory: самый дорогой предмет', () => {
    it('находит самый дорогой', () => {
        const inv = makeInventory(50);
        inv.addItem(sword());
        inv.addItem(potion());
        inv.addItem(ring());
        const best = inv.getMostExpensive();
        expect((best as any).name).toBe('Кольцо');
    });

    it('на пустом инвентаре не падает и не возвращает предмет', () => {
        const inv = makeInventory(50);
        expect(() => inv.getMostExpensive()).notToThrow();
        expect(inv.getMostExpensive()).toBeNullOrUndefined();
    });

    it('не вынимает найденный предмет из инвентаря', () => {
        const inv = makeInventory(50);
        inv.addItem(ring());
        inv.getMostExpensive();
        expect(inv.size).toBe(1);
    });
});

describe('Inventory: getItems', () => {
    it('возвращает все предметы', () => {
        const inv = makeInventory(50);
        inv.addItem(sword());
        inv.addItem(potion());
        expect(inv.getItems()).toHaveLength(2);
    });

    it('на пустом инвентаре возвращает пустой массив', () => {
        const inv = makeInventory(50);
        expect(inv.getItems()).toHaveLength(0);
    });

    it('изменение полученного массива не ломает инвентарь', () => {
        const inv = makeInventory(50);
        inv.addItem(sword());

        const items = inv.getItems() as any[];
        items.push(anvil());
        items.push(anvil());

        expect(inv.size).toBe(1);
        expect(inv.totalWeight).toBe(5);
    });
});

describe('БОНУС: moveTo', () => {
    it('перекладывает предмет в другой инвентарь', () => {
        const from = makeInventory(50);
        const to = makeInventory(50);
        from.addItem(sword());

        from.moveTo(to, 'Меч');

        expect(from.has('Меч')).toBe(false);
        expect(to.has('Меч')).toBe(true);
        expect(from.totalWeight).toBe(0);
        expect(to.totalWeight).toBe(5);
    });

    it('не теряет предмет, если во втором инвентаре нет места', () => {
        const from = makeInventory(50);
        const to = makeInventory(1);
        from.addItem(sword());

        try {
            from.moveTo(to, 'Меч');
        } catch {
            /* ошибка здесь ожидаема */
        }

        expect(from.has('Меч')).toBe(true);
        expect(to.has('Меч')).toBe(false);
        expect(from.totalWeight).toBe(5);
    });

    it('бросает ошибку, если перекладывать нечего', () => {
        const from = makeInventory(50);
        const to = makeInventory(50);
        expect(() => from.moveTo(to, 'Меч')).toThrow();
    });
});

describe('БОНУС: getSortedByPrice', () => {
    it('сортирует по убыванию цены', () => {
        const inv = makeInventory(50);
        inv.addItem(potion());
        inv.addItem(ring());
        inv.addItem(sword());

        const sorted = inv.getSortedByPrice() as any[];
        expect(sorted[0].name).toBe('Кольцо');
        expect(sorted[1].name).toBe('Меч');
        expect(sorted[2].name).toBe('Зелье');
    });

    it('не меняет порядок предметов внутри инвентаря', () => {
        const inv = makeInventory(50);
        inv.addItem(potion());
        inv.addItem(ring());

        inv.getSortedByPrice();

        const items = inv.getItems() as any[];
        expect(items[0].name).toBe('Зелье');
        expect(items[1].name).toBe('Кольцо');
    });
});

// ---------- итог ----------

console.log('\n' + '='.repeat(50));
console.log(`Пройдено: ${passed}   Провалено: ${failed}`);
if (failed > 0) {
    console.log('\nОсталось починить:');
    failedNames.forEach((name) => console.log(`  - ${name}`));
} else {
    console.log('Все тесты зелёные. Инвентарь собран.');
}
console.log('='.repeat(50));