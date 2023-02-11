# import random

# score = 0

# # A list of countries and their properties
# countries = [
#     {
#         "name": "USA",
#         "diamond": True,
#         "doors": ["North", "South", "West"],
#     },
#     {
#         "name": "Russia",
#         "diamond": True,
#         "doors": ["North", "West"],
#     },
#     {
#         "name": "China",
#         "diamond": False,
#         "doors": ["North", "East"],
#     },
#     {
#         "name": "India",
#         "diamond": True,
#         "doors": ["West", "South"],
#     },
#     {
#         "name": "Indonesia",
#         "diamond": False,
#         "doors": ["East", "West"],
#     },
#     {
#         "name": "Pakistan",
#         "diamond": True,
#         "doors": ["North", "South"],
#     },
#     {
#         "name": "Bangladesh",
#         "diamond": False,
#         "doors": ["East"],
#     },
#     {
#         "name": "Japan",
#         "diamond": True,
#         "doors": ["East", "South"],
#     }
# ]


# def diamond_picker():
#     return random.choice(countries)


# def play_game(current_country, score):
#     print("You are in " + current_country["name"])

#     if current_country["diamond"]:
#         pick = input("Would you like to pick up the diamond? (Yes/No) ")
#         if pick == "Yes":
#             score += 1
#             print("Score: " + str(score))
#             current_country["diamond"] = False

#     villain = diamond_picker()
#     if villain["name"] == current_country["name"]:
#         print("Game Over! The villain has caught you in " +
#               current_country["name"])
#         return score

#     doors = current_country["doors"]
#     print("The available doors are: " + ", ".join(doors))
#     door = input("Which door would you like to enter through? ")
#     while door not in doors:
#         print("You cannot access this room through that door. Try again.")
#         door = input("Which door would you like to enter through? ")

#     for country in countries:
#         if door in country["doors"] and country["name"] != current_country["name"]:
#             next_country = country
#             break

#     return play_game(next_country, score)


# # Start the game
# current_country = (countries[0])
# score = play_game(current_country, score)
# print("Final Score: " + str(score))

import random

countries = [
    ["USA", True, "North"],
    ["Mexico", True, "West"],
    ["Canada", True, "South"],
    ["Brazil", True, "East"],
    ["Argentina", True, "West"],
    ["Peru", True, "South"],
    ["Colombia", True, "North"],
    ["Venezuela", True, "East"],
]

score = 0


def diamond_picker():
    return random.choice(countries)


def ask_door(country):
    while True:
        door = input(
            f"Which door would you like to enter {country[0]} through (North, South, East, West)? ")
        if door in country:
            return door
        print(
            f"{door} doesn't give you access to {country[0]}. Please enter a valid door.")


def play_game():
    global score
    current_country = random.choice(countries)
    print(f"You are now in {current_country[0]}")

    villain = diamond_picker()

    while countries:
        door = ask_door(current_country)

        if door == current_country[2]:
            if current_country[1]:
                pick = input(
                    "There is a diamond in this country. Would you like to pick it up? (yes/no) ")
                if pick == "yes":
                    score += 1
                    print(
                        f"You picked up a diamond. Your score is now {score}.")
                current_country[1] = False
            else:
                print("There is no diamond in this country.")
            countries.remove(current_country)
            if not countries:
                print(
                    "Congratulations! You've explored all the countries and picked up all the diamonds.")
                break
            current_country = random.choice(countries)
            print(f"You are now in {current_country[0]}")

        if current_country == villain:
            print("Game over. The villain caught you.")
            break


play_game()
