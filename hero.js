// ==========================================
// YOOO WAIT MY BAD 😭😭😭 i need to (probably) REMOVE this file in the end 😭
// i just sorta have it here idk cuz i wanted to experiment with JS yk? (still learning after all) 😅
// ==========================================

// i wanna TEST writing an OBJECT here (like? by myself? from memory? idk)
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