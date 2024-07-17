const car = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red", 
    passengers: 2,
    convertible: false,
    mileage: 50001
}

const dog = {
name: "Fido",
weight:20.2,
age: 4,
breed: "mixed",
activity: "fetch balls"
}

console.log(dog.name)

dog.weight = 24

dog.isDog = true


delete dog.activity
console.log(dog)


if(car.mileage < 50000) {
    alert("Берем")
} else {
    alert ("Не берем")
}