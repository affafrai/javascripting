const carPassing = function (cars1, speed1) {
  const newCar = {
    time: Date.now(),
    speed: speed1
  };
  cars1.push(newCar); 
  return cars1
};

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 45;

carPassing(cars, speed);
