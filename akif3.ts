// export class Bus {
//     start() { alert("otobus") }
// }

// export class Train {
//     start() { alert("tren") }
// }

// export class Travel {
//     start() {
//         const s = new Bus();
//         s.start();
//     }
// }

// export class Person {
//     start() {
//         const b = new Travel();
//         b.start();

//         const t = new Train();
//         t.start();
//     }
// }

export interface Transport {
    start();
}

export class Bus implements Transport {
    start() {
        alert("bus start");
    }
}


export class Train implements Transport {
    start() {
        alert("bus train");
    }
}

export interface ITravel { start() }

export class Travel implements ITravel {
    start() {
        throw new Error("Method not implemented.");
    }
}

export class Person{

}