function findOld(people) {
    let oldestName = '';
    let maxAge = -1;
    
    for (let name in people) {
        if (people.hasOwnProperty(name) && people[name] > maxAge) {
            maxAge = people[name];
            oldestName = name;
        }
    }
    
    return oldestName;
}

const people = {
    'Анна': 25,
    'Иван': 30,
    'Мария': 28,
    'Петр': 35,
    'Елена': 22
};

const oldest = findOld(people);
console.log(`Самый старший человек: ${oldest}`);