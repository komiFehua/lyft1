import random

# Создайте список вопросов, ответов и вариантов ответов
questions = [
    "Какой газ является основным составляющим воздуха?",
    "Какая планета ближе всего к Солнцу?",
    "Сколько планет в Солнечной системе?",
    "Какой химический элемент имеет символ 'H'?",
]

answers = ["кислород", "Меркурий", "8", "водород"]

options = [
    ["кислород", "азот", "аргон", "гелий"],
    ["Марс", "Венера", "Меркурий", "Земля"],
    ["5", "7", "8", "9"],
    ["гелий", "гидроген", "гафний", "германий"],
]

# Создайте функцию для выбора случайного вопроса
def get_random_question():
    index = random.randint(0, len(questions) - 1)
    question = questions[index]
    answer = answers[index]
    options_list = options[index]
    return question, answer, options_list

# Тестирование функции
question, correct_answer, options_list = get_random_question()
print(question)
for i, option in enumerate(options_list):
    print(f"{i+1}. {option}")

# Вопрос и варианты ответов теперь доступны в переменных question, correct_answer и options_list
