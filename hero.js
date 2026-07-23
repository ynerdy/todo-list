// i wanna TEST writing an OBJECT here 
const hero = {
    age: 19,
    deposit(amount) {
        amount += amount;
        return amount;
        console.log("cute");
    }
};

// THIS IS the modified ver from CLAUDE (he did BETTER)
const hero = {
    age: 19,
    balance: 0,
    deposit(amount) {
        this.balance += amount
        return this.balance
    }
}