let person = {};
person.Name = 'Sheldon Njagi';
person.Age = 24;
person.Location = {
    "City": 'Thika',
    'Street': 'Rongai',
    'Estate': 'Lavington',
    "Country": 'Kenya',
    'Numbers': [20, 21, 22, 23]
};
console.log(person);
console.log(person.Location.Estate);
console.log(person.Location.Numbers[3]);
console.log(person.Location.City,',',person.Location.Estate);
