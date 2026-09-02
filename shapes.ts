/**
 * ============================================================================
 *  SHAPES — a step-by-step exercise
 * ============================================================================
 *
 *  GOAL
 *  ----
 *  You will build a small geometry library. By the end of it you will have
 *  several shape classes and a canvas that can hold any of them.
 *
 *  The real goal is not the geometry. It is this: you will first write a
 *  canvas that only works with circles, then you will hit a wall when a
 *  second shape appears, and then you will fix it. That wall is the point of
 *  the whole exercise. Do not skip ahead to avoid it — walk into it.
 *
 *  RULES
 *  -----
 *  1. Write all your code ABOVE the test section. Do not edit the tests.
 *  2. Nothing is pre-written for you. Empty file, your code, that is it.
 *  3. Class names, method names and constructor arguments are fixed (see the
 *     list below), because the tests call them by name. Everything else —
 *     how you store data, what you validate, how you split things up — is
 *     your decision.
 *  4. Whenever something is invalid, throw an error. Do not return false, do
 *     not return null, do not silently ignore it. `throw new Error('...')`.
 *  5. Run the file after every small change. Do not write everything and then
 *     run once.
 *
 *  HOW TO RUN
 *  ----------
 *      bun shapes.ts
 *      bun --watch shapes.ts      (re-runs automatically when you save)
 *
 *  HOW THE TEST GROUPS WORK
 *  ------------------------
 *  The tests are split into six ordered steps. Only one step runs at a time.
 *
 *  A step runs only if every previous step is fully green. As soon as a step
 *  has a failure, the rest are locked and shown as LOCKED. So you will never
 *  see fifty red lines at once — you will see the failures of exactly one
 *  step, which is the only thing you should be working on right now.
 *
 *  At the very start everything fails with "Circle is not defined", because
 *  you have not written anything yet. That is the expected starting point.
 *
 *  THE SIX STEPS
 *  -------------
 *      1. Circle
 *      2. CircleCanvas        (a canvas that only knows about circles)
 *      3. Rectangle           (the wall)
 *      4. Shape               (the fix — this step is a refactor)
 *      5. Canvas              (a canvas that works with any shape)
 *      6. Triangle            (proof that the fix worked)
 *
 *  WHAT TO NAME THINGS
 *  -------------------
 *      class Circle          — built from a radius
 *      class CircleCanvas    — built from nothing
 *      class Rectangle       — built from a width and a height, in that order
 *      class Shape           — the common parent, built from nothing directly
 *      class Canvas          — built from nothing
 *      class Triangle        — built from three side lengths, in that order
 *
 *  Every shape must report its own kind as a lowercase string:
 *  'circle', 'rectangle', 'triangle'. The tests compare against exactly
 *  those words.
 *
 *  A NOTE ON COMPARING NUMBERS
 *  ---------------------------
 *  The area of a circle of radius 1 is not exactly 3.14159..., it is whatever
 *  floating point math produces. The tests compare such numbers with a small
 *  tolerance instead of demanding an exact match. You do not have to do
 *  anything about this, but it is worth knowing why the tests look that way.
 *
 * ============================================================================
 *  STEP 1 — Circle
 * ============================================================================
 *
 *  Write a class named Circle.
 *
 *  Its constructor should accept a radius. The radius should be stored and
 *  should not be changeable from the outside afterwards. A radius of zero or
 *  less makes no sense, so the constructor should throw in that case.
 *
 *  It should expose a radius, an area, a perimeter and a name. All four are
 *  read as properties, without parentheses — that means you write them as
 *  getters, not as methods. The name should give back the string 'circle'.
 *
 *  It should have a method called scale. It should accept a positive number
 *  and give back a brand new Circle whose radius is multiplied by that
 *  number. It must not change the circle it was called on. A factor of zero
 *  or less should throw.
 *
 *  It should have a method called isBiggerThan. It should accept another
 *  shape and give back true or false, depending on whether this shape has the
 *  larger area. Equal areas mean false — bigger means strictly bigger.
 *
 * ============================================================================
 *  STEP 2 — CircleCanvas
 * ============================================================================
 *
 *  Write a class named CircleCanvas. It is a container for circles.
 *
 *  Its constructor should accept nothing and start out empty. The circles it
 *  holds should be kept private — code outside the class should not be able
 *  to reach in and touch that list.
 *
 *  It should have a method called add. It should accept a circle and give
 *  back nothing.
 *
 *  It should expose a count and a totalArea, both read as properties without
 *  parentheses. An empty canvas has a count of zero and a total area of zero;
 *  neither should blow up or give back undefined.
 *
 *  Write this class the obvious way, thinking only about circles. That is
 *  deliberate. Keep it small — you are going to abandon it in step 5.
 *
 * ============================================================================
 *  STEP 3 — Rectangle
 * ============================================================================
 *
 *  Write a class named Rectangle.
 *
 *  Its constructor should accept a width and a height, in that order. Both
 *  should be stored, both should be read-only afterwards, and either one being
 *  zero or less should throw.
 *
 *  It should expose a width, a height, an area, a perimeter and a name, all
 *  as properties without parentheses. The name should give back the string
 *  'rectangle'.
 *
 *  It should have a scale method that accepts a positive number and gives
 *  back a new Rectangle with both sides multiplied, leaving the original
 *  alone.
 *
 *  It should have an isBiggerThan method that behaves exactly like the one on
 *  Circle.
 *
 *  Now stop and look at what you have. Two classes with the same shape of
 *  API and one method — isBiggerThan — that is now written twice, character
 *  for character. And try to imagine putting a Rectangle into your
 *  CircleCanvas. That is the wall. Step 4 is the fix.
 *
 * ============================================================================
 *  STEP 4 — Shape
 * ============================================================================
 *
 *  This step is a refactor. You are not adding any new behaviour — you are
 *  moving existing behaviour to a better place. The proof that you did it
 *  right is that all the tests from steps 1 and 3 keep passing untouched.
 *
 *  Write a class named Shape and make Circle and Rectangle extend it.
 *
 *  Shape should be abstract — it describes what every shape must be able to
 *  do, but it is never created directly. It should declare that every shape
 *  has an area, a perimeter and a name, and that every shape can be scaled,
 *  without saying how any of that works. Each shape answers those questions
 *  differently, so those stay in the children.
 *
 *  One method does not differ between shapes at all: isBiggerThan only ever
 *  compares two areas, and it does not care what kind of shapes they are.
 *  That one should live on Shape and be deleted from both children.
 *
 *  The tests for this step check that literally — they look at where the
 *  method is defined, not just whether it works. Copying it into every child
 *  will fail the step. Meanwhile area is expected to stay defined on each
 *  child, because there is no single correct way to compute it.
 *
 * ============================================================================
 *  STEP 5 — Canvas
 * ============================================================================
 *
 *  Write a class named Canvas. Same idea as CircleCanvas, except it holds any
 *  shape at all.
 *
 *  Here is the rule that matters: Canvas must not mention Circle or Rectangle
 *  anywhere. Not in a type, not in an if, not in a check. It only ever knows
 *  that it is holding shapes.
 *
 *  Its constructor should accept nothing and start empty, and its list of
 *  shapes should be private.
 *
 *  It should have an add method that accepts any shape and gives back
 *  nothing.
 *
 *  It should expose a count and a totalArea as properties without
 *  parentheses.
 *
 *  It should have a getShapes method that accepts nothing and gives back all
 *  the shapes it holds. Careful here: if you hand back your private list
 *  itself, the caller can then add things to it behind your back and your
 *  count will lie. Give back something they can safely mess with.
 *
 *  It should have a getLargest method that accepts nothing and gives back the
 *  shape with the biggest area — or, on an empty canvas, an explicit nothing
 *  rather than an error.
 *
 *  It should have a filterByType method that accepts a kind of shape as a
 *  string, like 'circle', and gives back every shape of that kind. If there
 *  are none, that is an empty list, not an error.
 *
 *  It should have a getSortedByArea method that accepts nothing and gives
 *  back the shapes ordered from largest area to smallest. It must not change
 *  the order the canvas keeps internally.
 *
 * ============================================================================
 *  STEP 6 — Triangle
 * ============================================================================
 *
 *  Write a class named Triangle. Its constructor should accept three side
 *  lengths. It extends Shape like the others.
 *
 *  Any side being zero or less should throw. There is also a second rule:
 *  three arbitrary lengths do not necessarily form a triangle. Sides of 1, 2
 *  and 10 cannot possibly meet. Look up the triangle inequality if you do not
 *  know it, and throw when it is violated. Watch out for the exact boundary,
 *  where two sides added together equal the third — that is a flat line, not
 *  a triangle, and it should throw too.
 *
 *  It should expose an area, a perimeter and a name as properties without
 *  parentheses. The name should give back 'triangle'. For the area, look up
 *  Heron's formula — it computes the area from the three sides alone.
 *
 *  It should have a scale method like the other shapes, giving back a new
 *  Triangle with all three sides multiplied.
 *
 *  The last tests of this step put triangles into your Canvas from step 5. If
 *  step 4 went well, you should not need to touch Canvas at all to make them
 *  pass. Not one line. That is what all of this was for.
 *
 * ============================================================================
 *  YOUR CODE GOES BELOW THIS LINE
 * ============================================================================
 */

// ...

/**
 * ============================================================================
 *  TESTS BELOW — DO NOT EDIT ANYTHING PAST THIS POINT
 * ============================================================================
 */

interface TestGroup {
    title: string;
    fn: () => void;
}

const groups: TestGroup[] = [];
let passed = 0;
let failed = 0;
let currentFailures: string[] = [];

function group(title: string, fn: () => void): void {
    groups.push({ title, fn });
}

function test(title: string, fn: () => void): void {
    try {
        fn();
        passed++;
        console.log(`  [ ok ] ${title}`);
    } catch (error) {
        failed++;
        currentFailures.push(title);
        const message = error instanceof Error ? error.message : String(error);
        console.log(`  [FAIL] ${title}`);
        console.log(`         ${message}`);
    }
}

function show(value: unknown): string {
    if (typeof value === 'string') return `'${value}'`;
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (Array.isArray(value)) return `[${value.map(show).join(', ')}]`;
    if (typeof value === 'object') return (value as object).constructor?.name ?? 'object';
    return String(value);
}

const TOLERANCE = 1e-9;

function expect(actual: unknown) {
    return {
        toBe(expected: unknown): void {
            if (actual !== expected) {
                throw new Error(`expected ${show(expected)}, got ${show(actual)}`);
            }
        },
        toBeCloseTo(expected: number): void {
            if (typeof actual !== 'number' || Number.isNaN(actual)) {
                throw new Error(`expected a number close to ${expected}, got ${show(actual)}`);
            }
            if (Math.abs(actual - expected) > TOLERANCE) {
                throw new Error(`expected ${expected} (give or take a rounding error), got ${actual}`);
            }
        },
        toBeNullOrUndefined(): void {
            if (actual !== null && actual !== undefined) {
                throw new Error(`expected null or undefined, got ${show(actual)}`);
            }
        },
        toBeInstanceOf(ctor: Function): void {
            if (!(actual instanceof ctor)) {
                throw new Error(`expected an instance of ${ctor.name}, got ${show(actual)}`);
            }
        },
        toHaveLength(expected: number): void {
            if (!Array.isArray(actual)) {
                throw new Error(`expected an array, got ${show(actual)}`);
            }
            if (actual.length !== expected) {
                throw new Error(`expected an array of length ${expected}, got length ${actual.length}`);
            }
        },
        toThrow(): void {
            if (typeof actual !== 'function') {
                throw new Error('test harness misuse: toThrow needs a function');
            }
            let thrown = false;
            try {
                (actual as () => unknown)();
            } catch (error) {
                // A missing class is not a validation error — do not let it pass as one.
                if (error instanceof ReferenceError) throw error;
                thrown = true;
            }
            if (!thrown) {
                throw new Error('expected this to throw an error, but it did not');
            }
        },
        notToThrow(): void {
            if (typeof actual !== 'function') {
                throw new Error('test harness misuse: notToThrow needs a function');
            }
            try {
                (actual as () => unknown)();
            } catch (error) {
                const message = error instanceof Error ? error.message : String(error);
                throw new Error(`expected no error, but got one: ${message}`);
            }
        },
    };
}

function definedOn(ctor: Function, member: string): boolean {
    return Object.prototype.hasOwnProperty.call(ctor.prototype, member);
}

// ---------------------------------------------------------------- step 1 ---

group('STEP 1 — Circle', () => {
    test('a circle remembers its radius', () => {
        expect(new (Circle as any)(5).radius).toBe(5);
    });

    test('the radius cannot be overwritten from outside', () => {
        const circle = new (Circle as any)(5);
        try {
            circle.radius = 999;
        } catch {
            /* a thrown error here is a perfectly good way to forbid it */
        }
        expect(circle.radius).toBe(5);
    });

    test('a radius of zero or less is rejected', () => {
        expect(() => new (Circle as any)(0)).toThrow();
        expect(() => new (Circle as any)(-3)).toThrow();
    });

    test('area is pi times the radius squared', () => {
        expect(new (Circle as any)(1).area).toBeCloseTo(Math.PI);
        expect(new (Circle as any)(3).area).toBeCloseTo(Math.PI * 9);
    });

    test('perimeter is two pi times the radius', () => {
        expect(new (Circle as any)(2).perimeter).toBeCloseTo(Math.PI * 4);
    });

    test('a circle knows it is a circle', () => {
        expect(new (Circle as any)(1).name).toBe('circle');
    });

    test('area and perimeter are read without parentheses', () => {
        const circle = new (Circle as any)(1);
        expect(typeof circle.area).toBe('number');
        expect(typeof circle.perimeter).toBe('number');
    });

    test('scale gives back a new circle', () => {
        const circle = new (Circle as any)(2);
        const bigger = circle.scale(3);
        expect(bigger).toBeInstanceOf(Circle as any);
        expect(bigger.radius).toBe(6);
    });

    test('scale leaves the original circle alone', () => {
        const circle = new (Circle as any)(2);
        circle.scale(10);
        expect(circle.radius).toBe(2);
    });

    test('scale rejects a factor of zero or less', () => {
        const circle = new (Circle as any)(2);
        expect(() => circle.scale(0)).toThrow();
        expect(() => circle.scale(-2)).toThrow();
    });

    test('isBiggerThan compares areas', () => {
        const small = new (Circle as any)(1);
        const big = new (Circle as any)(10);
        expect(big.isBiggerThan(small)).toBe(true);
        expect(small.isBiggerThan(big)).toBe(false);
    });

    test('equal circles are not bigger than each other', () => {
        const a = new (Circle as any)(4);
        const b = new (Circle as any)(4);
        expect(a.isBiggerThan(b)).toBe(false);
    });
});

// ---------------------------------------------------------------- step 2 ---

group('STEP 2 — CircleCanvas', () => {
    test('a new canvas is empty', () => {
        const canvas = new (CircleCanvas as any)();
        expect(canvas.count).toBe(0);
        expect(canvas.totalArea).toBe(0);
    });

    test('add puts a circle on the canvas', () => {
        const canvas = new (CircleCanvas as any)();
        canvas.add(new (Circle as any)(1));
        expect(canvas.count).toBe(1);
    });

    test('totalArea adds up every circle', () => {
        const canvas = new (CircleCanvas as any)();
        canvas.add(new (Circle as any)(1));
        canvas.add(new (Circle as any)(2));
        expect(canvas.totalArea).toBeCloseTo(Math.PI * 5);
    });

    test('the same circle can be added twice', () => {
        const canvas = new (CircleCanvas as any)();
        const circle = new (Circle as any)(1);
        canvas.add(circle);
        canvas.add(circle);
        expect(canvas.count).toBe(2);
    });
});

// ---------------------------------------------------------------- step 3 ---

group('STEP 3 — Rectangle', () => {
    test('a rectangle remembers its sides', () => {
        const rect = new (Rectangle as any)(3, 4);
        expect(rect.width).toBe(3);
        expect(rect.height).toBe(4);
    });

    test('a side of zero or less is rejected', () => {
        expect(() => new (Rectangle as any)(0, 4)).toThrow();
        expect(() => new (Rectangle as any)(3, -1)).toThrow();
    });

    test('area is width times height', () => {
        expect(new (Rectangle as any)(3, 4).area).toBeCloseTo(12);
    });

    test('perimeter is twice the sum of the sides', () => {
        expect(new (Rectangle as any)(3, 4).perimeter).toBeCloseTo(14);
    });

    test('a rectangle knows it is a rectangle', () => {
        expect(new (Rectangle as any)(1, 1).name).toBe('rectangle');
    });

    test('scale gives back a new rectangle with both sides multiplied', () => {
        const rect = new (Rectangle as any)(3, 4);
        const bigger = rect.scale(2);
        expect(bigger).toBeInstanceOf(Rectangle as any);
        expect(bigger.width).toBe(6);
        expect(bigger.height).toBe(8);
        expect(rect.width).toBe(3);
    });

    test('scale rejects a factor of zero or less', () => {
        expect(() => new (Rectangle as any)(3, 4).scale(-1)).toThrow();
    });

    test('a rectangle can be compared with a circle', () => {
        const rect = new (Rectangle as any)(100, 100);
        const circle = new (Circle as any)(1);
        expect(rect.isBiggerThan(circle)).toBe(true);
        expect(circle.isBiggerThan(rect)).toBe(false);
    });
});

// ---------------------------------------------------------------- step 4 ---

group('STEP 4 — Shape', () => {
    test('a circle is a shape', () => {
        expect(new (Circle as any)(1)).toBeInstanceOf(Shape as any);
    });

    test('a rectangle is a shape', () => {
        expect(new (Rectangle as any)(1, 1)).toBeInstanceOf(Shape as any);
    });

    test('isBiggerThan now lives on Shape', () => {
        if (!definedOn(Shape as any, 'isBiggerThan')) {
            throw new Error('isBiggerThan is not defined on Shape — move it up there');
        }
    });

    test('isBiggerThan is no longer copied into Circle', () => {
        if (definedOn(Circle as any, 'isBiggerThan')) {
            throw new Error('Circle still has its own isBiggerThan — delete it, the one on Shape is enough');
        }
    });

    test('isBiggerThan is no longer copied into Rectangle', () => {
        if (definedOn(Rectangle as any, 'isBiggerThan')) {
            throw new Error('Rectangle still has its own isBiggerThan — delete it, the one on Shape is enough');
        }
    });

    test('area still belongs to each shape separately', () => {
        if (!definedOn(Circle as any, 'area') || !definedOn(Rectangle as any, 'area')) {
            throw new Error('every shape computes its own area — that one cannot move to Shape');
        }
    });

    test('scale still belongs to each shape separately', () => {
        if (!definedOn(Circle as any, 'scale') || !definedOn(Rectangle as any, 'scale')) {
            throw new Error('every shape scales its own dimensions — that one cannot move to Shape');
        }
    });

    test('the refactor did not break circles', () => {
        const circle = new (Circle as any)(3);
        expect(circle.area).toBeCloseTo(Math.PI * 9);
        expect(circle.name).toBe('circle');
        expect(circle.scale(2).radius).toBe(6);
    });

    test('the refactor did not break rectangles', () => {
        const rect = new (Rectangle as any)(3, 4);
        expect(rect.area).toBeCloseTo(12);
        expect(rect.name).toBe('rectangle');
        expect(rect.scale(2).height).toBe(8);
    });

    test('comparing shapes still works across kinds', () => {
        const rect = new (Rectangle as any)(10, 10);
        const circle = new (Circle as any)(1);
        expect(rect.isBiggerThan(circle)).toBe(true);
    });
});

// ---------------------------------------------------------------- step 5 ---

group('STEP 5 — Canvas', () => {
    test('a new canvas is empty', () => {
        const canvas = new (Canvas as any)();
        expect(canvas.count).toBe(0);
        expect(canvas.totalArea).toBe(0);
    });

    test('a canvas holds different kinds of shapes at once', () => {
        const canvas = new (Canvas as any)();
        canvas.add(new (Circle as any)(1));
        canvas.add(new (Rectangle as any)(2, 3));
        expect(canvas.count).toBe(2);
    });

    test('totalArea adds up shapes of different kinds', () => {
        const canvas = new (Canvas as any)();
        canvas.add(new (Circle as any)(1));
        canvas.add(new (Rectangle as any)(2, 3));
        expect(canvas.totalArea).toBeCloseTo(Math.PI + 6);
    });

    test('getShapes gives back everything on the canvas', () => {
        const canvas = new (Canvas as any)();
        canvas.add(new (Circle as any)(1));
        canvas.add(new (Rectangle as any)(2, 3));
        expect(canvas.getShapes()).toHaveLength(2);
    });

    test('getShapes on an empty canvas gives back an empty list', () => {
        expect(new (Canvas as any)().getShapes()).toHaveLength(0);
    });

    test('messing with the list from getShapes does not affect the canvas', () => {
        const canvas = new (Canvas as any)();
        canvas.add(new (Circle as any)(1));

        const shapes = canvas.getShapes();
        shapes.push(new (Rectangle as any)(100, 100));
        shapes.push(new (Rectangle as any)(100, 100));

        expect(canvas.count).toBe(1);
        expect(canvas.totalArea).toBeCloseTo(Math.PI);
    });

    test('getLargest finds the biggest shape', () => {
        const canvas = new (Canvas as any)();
        canvas.add(new (Circle as any)(1));
        canvas.add(new (Rectangle as any)(50, 50));
        canvas.add(new (Circle as any)(2));
        expect(canvas.getLargest().name).toBe('rectangle');
    });

    test('getLargest on an empty canvas gives back nothing instead of throwing', () => {
        const canvas = new (Canvas as any)();
        expect(() => canvas.getLargest()).notToThrow();
        expect(canvas.getLargest()).toBeNullOrUndefined();
    });

    test('getLargest does not remove the shape it found', () => {
        const canvas = new (Canvas as any)();
        canvas.add(new (Circle as any)(1));
        canvas.getLargest();
        expect(canvas.count).toBe(1);
    });

    test('filterByType picks out one kind of shape', () => {
        const canvas = new (Canvas as any)();
        canvas.add(new (Circle as any)(1));
        canvas.add(new (Rectangle as any)(2, 3));
        canvas.add(new (Circle as any)(5));
        expect(canvas.filterByType('circle')).toHaveLength(2);
        expect(canvas.filterByType('rectangle')).toHaveLength(1);
    });

    test('filterByType gives back an empty list for a kind that is not there', () => {
        const canvas = new (Canvas as any)();
        canvas.add(new (Circle as any)(1));
        expect(canvas.filterByType('triangle')).toHaveLength(0);
    });

    test('getSortedByArea puts the biggest shape first', () => {
        const canvas = new (Canvas as any)();
        canvas.add(new (Circle as any)(1));
        canvas.add(new (Rectangle as any)(50, 50));
        canvas.add(new (Rectangle as any)(1, 1));

        const sorted = canvas.getSortedByArea();
        expect(sorted[0].area).toBeCloseTo(2500);
        expect(sorted[1].area).toBeCloseTo(Math.PI);
        expect(sorted[2].area).toBeCloseTo(1);
    });

    test('getSortedByArea does not reorder the canvas itself', () => {
        const canvas = new (Canvas as any)();
        canvas.add(new (Circle as any)(1));
        canvas.add(new (Rectangle as any)(50, 50));

        canvas.getSortedByArea();

        const shapes = canvas.getShapes();
        expect(shapes[0].name).toBe('circle');
        expect(shapes[1].name).toBe('rectangle');
    });
});

// ---------------------------------------------------------------- step 6 ---

group('STEP 6 — Triangle', () => {
    test('a triangle remembers its sides', () => {
        const triangle = new (Triangle as any)(3, 4, 5);
        expect(triangle.perimeter).toBeCloseTo(12);
    });

    test('a side of zero or less is rejected', () => {
        expect(() => new (Triangle as any)(0, 4, 5)).toThrow();
        expect(() => new (Triangle as any)(3, -4, 5)).toThrow();
    });

    test('sides that cannot meet are rejected', () => {
        expect(() => new (Triangle as any)(1, 2, 10)).toThrow();
        expect(() => new (Triangle as any)(10, 1, 2)).toThrow();
    });

    test('a flat triangle is rejected too', () => {
        expect(() => new (Triangle as any)(1, 2, 3)).toThrow();
    });

    test('a valid triangle is accepted', () => {
        expect(() => new (Triangle as any)(3, 4, 5)).notToThrow();
    });

    test('area of a 3-4-5 triangle is 6', () => {
        expect(new (Triangle as any)(3, 4, 5).area).toBeCloseTo(6);
    });

    test('area of an equilateral triangle is right', () => {
        expect(new (Triangle as any)(2, 2, 2).area).toBeCloseTo(Math.sqrt(3));
    });

    test('a triangle knows it is a triangle', () => {
        expect(new (Triangle as any)(3, 4, 5).name).toBe('triangle');
    });

    test('a triangle is a shape', () => {
        expect(new (Triangle as any)(3, 4, 5)).toBeInstanceOf(Shape as any);
    });

    test('scale gives back a new triangle', () => {
        const triangle = new (Triangle as any)(3, 4, 5);
        const bigger = triangle.scale(2);
        expect(bigger).toBeInstanceOf(Triangle as any);
        expect(bigger.perimeter).toBeCloseTo(24);
        expect(triangle.perimeter).toBeCloseTo(12);
    });

    test('scaling a triangle multiplies its area by the factor squared', () => {
        expect(new (Triangle as any)(3, 4, 5).scale(3).area).toBeCloseTo(54);
    });

    test('isBiggerThan works on triangles without any extra code', () => {
        const small = new (Triangle as any)(3, 4, 5);
        const big = new (Triangle as any)(30, 40, 50);
        expect(big.isBiggerThan(small)).toBe(true);
    });

    test('the canvas accepts triangles without being modified', () => {
        const canvas = new (Canvas as any)();
        canvas.add(new (Triangle as any)(3, 4, 5));
        canvas.add(new (Circle as any)(1));
        canvas.add(new (Rectangle as any)(2, 2));
        expect(canvas.count).toBe(3);
        expect(canvas.totalArea).toBeCloseTo(6 + Math.PI + 4);
    });

    test('the canvas can filter and sort triangles too', () => {
        const canvas = new (Canvas as any)();
        canvas.add(new (Circle as any)(1));
        canvas.add(new (Triangle as any)(30, 40, 50));
        canvas.add(new (Rectangle as any)(2, 2));

        expect(canvas.filterByType('triangle')).toHaveLength(1);
        expect(canvas.getLargest().name).toBe('triangle');
        expect(canvas.getSortedByArea()[0].name).toBe('triangle');
    });
});

// ------------------------------------------------------------ the runner ---

let locked = false;
let lockedAt = '';

for (const item of groups) {
    if (locked) {
        console.log(`\n${item.title}  — LOCKED`);
        continue;
    }

    console.log(`\n${item.title}`);
    currentFailures = [];
    item.fn();

    if (currentFailures.length > 0) {
        locked = true;
        lockedAt = item.title;
    }
}

console.log('\n' + '='.repeat(70));

if (!locked) {
    console.log(`All ${passed} tests passed across all six steps. Nicely done.`);
} else {
    console.log(`Passed so far: ${passed}    Failing right now: ${currentFailures.length}`);
    console.log(`\nYou are on: ${lockedAt}`);
    console.log('Fix these, in this order:');
    currentFailures.forEach((name) => console.log(`  - ${name}`));
    console.log('\nThe later steps are locked until this one is green. That is on purpose.');
}

console.log('='.repeat(70));