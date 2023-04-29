var groupmates = [
    {
        "name": "Павел",
        "surname": "Никитин",
        "group": "БФИ2202",
        "marks": [6, 6, 2]
    },
    {
        "name": "Мария",
        "surname": "Шубина",
        "group": "БФИ2202",
        "marks": [5, 6, 4]
    },
    {
        "name": "Ярослав",
        "surname": "Семёнов",
        "group": "БФИ2202",
        "marks": [4, 4, 3]
    },
    {
        "name": "Евгений",
        "surname": "Гений",
        "group": "БИН7707",
        "marks": [5, 5, 5, 5]
    },
    {
        "name": "Ростислав",
        "surname": "Беловский",
        "group": "БСТ1312",
        "marks": [3, 4, 3, 2]
    },
];
var rpad = function(line, length) {
    line = line.toString(); // преобразование в строку
    while (line.length < length)
        line = line + ' '; // добавление пробела в конец строки return str; // когда все пробелы добавлены, возвратить строку
    return line;
};

var printStudents = function(students){ 
    console.log(
        rpad("Имя", 15),
        rpad("Фамилия", 15),
        rpad("Группа", 8),
        rpad("Оценки", 20)
    );
    // был выведен заголовок таблицы
    for (var i = 0; i <= students.length-1; i++){
        console.log(
            rpad(students[i]['name'], 15),
            rpad(students[i]['surname'], 15),
            rpad(students[i]['group'], 8),
            rpad(students[i]['marks'], 20)
        );
    }

    console.log('\n'); // добавляется пустая строка в конце вывода
};

var funcStudentsGroup = function(students, group) {
    var new_mass = []
    for (var i = 0; i < students.length; i++) {
        if (students[i]['group'] == group) {
            new_mass.push(students[i]);
        }
    }
    return new_mass;
}

var funcMean = function(students, mean) {
    var new_mass = []
    for (var i = 0; i < students.length; i++) {
        sumo = students[i]['marks'].reduce((a, b) => a + b, 0);
        if (sumo / students[i]['marks'].length > mean) {
            new_mass.push(students[i])
        }
    }
    return new_mass;
}

var gr = prompt("Введите группу для фильтрации:")
printStudents(funcStudentsGroup(groupmates, gr));
var mean = prompt("Введите среднюю оценку:");
printStudents(funcMean(groupmates, mean));