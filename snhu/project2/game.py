# German Bobadilla

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

# Every diamond that is picked sums to 1
score = 0


def diamond_collector():  # Here we create a function for the villain that lands
    return random.choice(countries)


def ask_door(country):  # This function helps the player navigate.
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

    villain = diamond_collector()

    while countries:
        door = ask_door(current_country)

        if door == current_country[2]:
            if current_country[1]:
                pick = input(
                    f"There is a diamond in {current_country[0]}. Would you like to pick it up? (yes/no) ")
                if pick == "yes":
                    score += 1
                    print(
                        f"You picked up a diamond in {current_country[0]}. Your score is now {score}.")
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
