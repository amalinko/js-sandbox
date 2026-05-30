const app = document.getElementById("app")!;
app.innerHTML = "<h1>Hello, TypeScript!!!!!</h1>";

class Test{
    private x: number = 1;

    public getx():number {
        return this.x
    }

}

const mp = new Map<number, number>();
mp.set(4, 10)

const test = new Test();

console.log(test);


