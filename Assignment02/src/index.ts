
abstract class Vehicle {
    make: string;
    model: string;
    year: number;
    rented: boolean;

    constructor(make: string, model: string, year: number, rented: boolean) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }

    getMake(): string {
        return this.make;
    }
    getModel(): string {
        return this.model;
    }
    getYear(): number {
        return this.year;
    }
    getRented(): boolean {
        return this.rented;
    }

    setRented(rented: boolean) {
        this.rented = rented;
    }

    abstract rentalRate(): number;

    rent(): void {
        if (this.rented) {
          console.log('Sorry, this vehicle is already rented.');
        } else {
          console.log('Vehicle rented successfully.');
          this.rented = true;
        }
      }
    
      return(): void {
        if (this.rented) {
          console.log('Vehicle returned successfully.');
          this.rented = false;
        } else {
          console.log('This vehicle is not currently rented.');
        }
      }
}

class Car extends Vehicle {
    maxSpeed: number;
    totalSeat: number;

    constructor(make: string, model: string, price: number, rented: boolean, maxSpeed: number, totalSeat: number) {
        super(make, model, price, rented)
        this.maxSpeed = maxSpeed;
        this.totalSeat = totalSeat;
    }

    rentalRate(): number {
        return 15000;
    }

    getMaxSpeed(): number {
        return this.maxSpeed;
    }
    getTotalSeat(): number {
        return this.totalSeat;
    }
}

class Truck extends Vehicle {
    maxSpeed: number;
    totalSeat: number;

    constructor(make: string, model: string, year: number, rented: boolean, maxSpeed: number, totalSeat: number) {
        super(make, model, year, rented)
        this.maxSpeed = maxSpeed;
        this.totalSeat = totalSeat;
    }

    rentalRate(): number {
        return 30000;
    }

    getMaxSpeed(): number {
        return this.maxSpeed;
    }
    getTotalSeat(): number {
        return this.totalSeat;
    }
}

class Motorcycle extends Vehicle {
    maxSpeed: number;
    totalSeat: number;

    constructor(make: string, model: string, year: number, rented: boolean, maxSpeed: number, totalSeat: number) {
        super(make, model, year, rented)
        this.maxSpeed = maxSpeed;
        this.totalSeat = totalSeat;
    }

    rentalRate(): number {
        return 5000;
    }

    getMaxSpeed(): number {
        return this.maxSpeed;
    }
    getTotalSeat(): number {
        return this.totalSeat;
    }
}


//------------------------------------------------------------------------------------------------------------//
let toyotaCorrola = new Car('Toyato', '2021', 2022, false, 280, 5);
let hondaCivic = new Car('Honda', '2018', 2019, true, 350, 5);

console.log("Make: ", hondaCivic.getMake());
console.log("Model: ", hondaCivic.getModel());
console.log("Year: ", hondaCivic.getYear());
console.log("IsRented: ", hondaCivic.getRented());
console.log("MaxSpeed: ", hondaCivic.getMaxSpeed());
console.log("No. Of Seats", hondaCivic.getTotalSeat());
console.log("Charges: ", hondaCivic.rentalRate());

hondaCivic.rent();

hondaCivic.return();

hondaCivic.setRented(true);

console.log('\n\n');

console.log("Make: ", toyotaCorrola.getMake());
console.log("Model: ", toyotaCorrola.getModel());
console.log("Year: ", toyotaCorrola.getYear());
console.log("IsRented: ", toyotaCorrola.getRented());
console.log("MaxSpeed: ", toyotaCorrola.getMaxSpeed());
console.log("No. Of Seats", toyotaCorrola.getTotalSeat());
console.log("Charges: ", toyotaCorrola.rentalRate());

toyotaCorrola.rent();

toyotaCorrola.return();

toyotaCorrola.setRented(true);

console.log('\n');




//------------------------------------------------------------------------------------------------------------//

let mercedesTruck = new Truck('Mercedez Truck', '2010', 2012, false, 400, 30);

console.log('\n\n');

console.log("Make: ", mercedesTruck.getMake());
console.log("Model: ", mercedesTruck.getModel());
console.log("Year: ", mercedesTruck.getYear());
console.log("IsRented: ", mercedesTruck.getRented());
console.log("MaxSpeed: ", mercedesTruck.getMaxSpeed());
console.log("No. Of Seats", mercedesTruck.getTotalSeat());
console.log("Charges: ", mercedesTruck.rentalRate());

mercedesTruck.rent();

mercedesTruck.return();

mercedesTruck.setRented(true);

console.log('\n');

//------------------------------------------------------------------------------------------------------------//


let suzukiHayabusa = new Motorcycle('Suzuki Hayabusa', '2012', 2007, false, 650, 2);


console.log('\n\n');

console.log("Make: ", suzukiHayabusa.getMake());
console.log("Model: ", suzukiHayabusa.getModel());
console.log("Year: ", suzukiHayabusa.getYear());
console.log("IsRented: ", suzukiHayabusa.getRented());
console.log("MaxSpeed: ", suzukiHayabusa.getMaxSpeed());
console.log("No. Of Seats", suzukiHayabusa.getTotalSeat());
console.log("Charges: ", suzukiHayabusa.rentalRate());

suzukiHayabusa.rent();

suzukiHayabusa.return();

suzukiHayabusa.setRented(true);

console.log('\n');
//------------------------------------------------------------------------------------------------------------//
