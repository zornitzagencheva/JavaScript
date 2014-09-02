function findYoungestPerson(persons) {
    var current = persons[0].age;

    for (var i = 0; i < persons.length; i++) {
        if(persons[i].age < current) {
            current = persons[i].age;
        }
    }

    for (var i = 0; i < persons.length; i++) {
        if(current == persons[i].age) {
            console.log('' + persons[i].firstname + ' ' + persons[i].lastname);
        }
    }
}