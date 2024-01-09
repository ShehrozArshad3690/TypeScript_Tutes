// interfaces

interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(b: number): number;
}

const me: isPerson = {
  name: "Shehroz",
  age: 23,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent", amount);
    return amount;
  },
};

me.speak("Hello Brother");
me.spend(23000);


let greetMeOnce = (person: isPerson) => {
    console.log("Hello", person.name);
};

greetMeOnce(me);

greetMeOnce({
  name: "Kamran",
  age: 29,
  speak(text: string): void {
    console.log(text);
  },
  spend(salary: number): number {
    return salary;
    console.log(`${this.name} has ${salary} salary`);
  },
});

