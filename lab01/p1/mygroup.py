groupmates = [
    {
        "name": "Павел",
        "surname": "Никитин",
        "exams": ["ВВИТ", "Философия", "Арифметика 3 класс"],
        "marks": [6, 6, 2]
    },
    {
        "name": "Мария",
        "surname": "Шубина",
        "exams": ["Философия", "Китаеведение", "Алгоритмы и Алгоритмические языки"],
        "marks": [5, 6, 4]
    },
    {
        "name": "Ярослав",
        "surname": "Семёнов",
        "exams": ["АиГ", "Философия", "Физическая Культура"],
        "marks": [4, 4, 3]
    },
    {
        "name": "Евгений",
        "surname": "Гений",
        "exams": ["Плохие виды спорта", "Философия", "Субатомная Физика", "Метапрограммирование"],
        "marks": [5, 5, 5, 5]
    },
    {
        "name": "Ростислав",
        "surname": "Беловский",
        "exams": ["ВВИТ", "Философия", "История", "Архитектура ЭВМ"],
        "marks": [3, 4, 3, 2]
    },
]


barrier = float(input())
groupmates = filter(lambda x: sum(x["marks"]) / len(x["marks"]) > barrier, groupmates)


def print_students(students):
    print(u"Имя".ljust(15), u"Фамилия".ljust(10), u"Экзамены".ljust(30), u"Оценки".ljust(20))
    for student in students:
        print(student["name"].ljust(15), student["surname"].ljust(10),
              str(student["exams"]).ljust(30), str(student["marks"]).ljust(20))

print_students(groupmates)
