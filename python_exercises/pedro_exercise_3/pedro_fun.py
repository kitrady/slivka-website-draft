# Fun program that acts like a sorting hat but for Slivka
import json
# import os
import random
import time
from collections import Counter

""" 
The trivia questions will come from a json file in this folder, formatted:
[Question, [Answer1, Values1], [Answer2, Values2], [Answer3 , Values3], [Answer4, Values4]]
    where Question = str, Answer = str, Values = list(str)


Question answers will be randomly assorted so players can't cheese the quiz.

Every question will be used, and answers will be appended to a scoring list, where at the end
the most common value will be determined to print something out to the user (something silly).
"""

def ask_question(entry, question_count):
    #1. Select a question from the json (done in the game loop)
    #2. Shuffle the answers around for a unique playing experience
    answer_list = [entry[1],entry[2],entry[3],entry[4]]
    random.shuffle(answer_list)

    #3. Ask the question and print a list of the answers for the user to choose from.
    print(f"Q{question_count}: {entry[0]}")
    answer_number = 0
    for answer_pair in answer_list:
        answer_number += 1
        print(f"{answer_number}: {answer_pair[0]}")

    #4. Proceed only if the user input is a number 1 through 4.
    selection = input()
    while selection not in ["1","2","3","4"]:
        print("Invalid answer")
        selection = input()

    # print(f"selection is: {int(selection)}")
    answer_values = answer_list[int(selection)-1][1]
    # I have an entry, aka a list with 5 items.
    # Pick from items 1 through 5 (1,2,3,4)
    # Then, pick the second part of that, [1].

    return answer_values

def positive_message():
    message_list = [
        "Good",
        "Good work",
        "Good job answering that",
        "Goodie"
        "Good going"
        "Nice",
        "Nice work",
        "Nicely done",
        "Well done",
        "__ will remember that",
        "Coolio",
        "Cool",
        "Cool beans",
        "Noted",
        "Roger that",
        "Copy",
        "Copy that",
        "Okay",
        "Okay, yay",
        "Yay",
        "Words of encouragement and such",
        "You are a valued respondent",
        "Every valid keystroke brings me, the program, boundless joy",
        "Nonchalant appreciation",
        "Happy Birthday (did I guess correctly?)",
        "K",
        "KK",
        "OK",
        "ok",
    ]
    message = random.choice(message_list)
    print(f"{message}.")
    return

def find_outcome(answer_list):
    # answer_list is a list of strings. 
    # Now we find the most common entry to see what the user's most
    # common trait is, per this sophisticated quiz.
   
    countable_list = Counter(answer_list)
    common_outcomes = [countable_list.most_common(1)[0][0],
                       countable_list.most_common(2)[0][0],
                       countable_list.most_common(3)[0][0]]
    answer_list = [x for x in answer_list if x != common_outcomes]
    random_choices = []
    for i in range(5):
        random_choices.append(random.choice(answer_list))
        answer_list = [x for x in answer_list if x != random_choices]


    # Then from a few preset choices, spit out a fun message.
    
    if "correct" in common_outcomes:
        custom_message = "Good answers, +100 Slivka Social Credit"
    elif "incorrect" in common_outcomes:
        custom_message = "Wrong answers, but that's okay"
    elif "predictable" in common_outcomes:
        custom_message = "Basic answers, but who doesn't like what you chose anyways"
    elif "evil" in common_outcomes:
            custom_message = "Bruhaha, good luck with your Evil plans"
    elif "sexy" in common_outcomes:
                custom_message = "I see what's cookin, good-lookin ;)"
    else:
        custom_message = "A true standout indeed. Well done"

    print(f"\nThe quiz is now over. Your answers were very {common_outcomes[0]}-{random_choices[0]}-{random_choices[3]}-coded,\nwith {random_choices[1]}-{random_choices[2]}-{random_choices[3]} vibes. \n{custom_message}.")

    return

def play_quiz():
    print("-----\nWelcome to the Slivka Sorting Quiz!")
    time.sleep(1)
    print("For the following questions, please select 1, 2, 3, or 4.")
    time.sleep(1)
    print("Have fun!\n-----")
    time.sleep(0.5)

    #Go through every question in the json file, making sure not to repeat any.
    #Also keep track of the user's score throughout.
    # script_dir = os.path.dirname(os.path.abspath(__file__))
    # json_path = os.path.join(script_dir, 'questions.json')

    try:
        with open('questions.json', 'r', encoding='utf-8') as file:
            question_list = json.load(file) 
            # print("works") # Troublshooting lines.
        #question_list = json.load(open("questions.json", "r"))
    except FileNotFoundError:
        print("Error: The file path could not be determined")
    except json.JSONDecodeError:
        print("Error: Can't read ur json file lmao")


    answer_list = []
    question_count = 0
    for question in question_list:
        question_count += 1
        answer_list.extend(ask_question(question, question_count))
        time.sleep(0.5)
        positive_message()
        time.sleep(1)
        print("-----")

    #Finally, use the user's score to determine a silly thing to print out.
    find_outcome(answer_list)
    time.sleep(3)
    print("Thanks for playing!\n-----")

if __name__ == "__main__":
   play_quiz()