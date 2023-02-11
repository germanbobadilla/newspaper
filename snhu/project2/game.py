import random

score = 0

# A list of countries and their properties
countries = [
    {
        "name": "USA",
        "diamond": True,
        "doors": ["North", "South", "West"],
    },
    {
        "name": "Russia",
        "diamond": True,
        "doors": ["North", "West"],
    },
    {
        "name": "China",
        "diamond": False,
        "doors": ["North", "East"],
    },
    {
        "name": "India",
        "diamond": True,
        "doors": ["West", "South"],
    },
    {
        "name": "Indonesia",
        "diamond": False,
        "doors": ["East", "West"],
    },
    {
        "name": "Pakistan",
        "diamond": True,
        "doors": ["North", "South"],
    },
    {
        "name": "Bangladesh",
        "diamond": False,
        "doors": ["East"],
    },
    {
        "name": "Japan",
        "diamond": True,
        "doors": ["East", "South"],
    }
]


def diamond_picker():
    return random.choice(countries)


def play_game(current_country, score):
    print("You are in " + current_country["name"])

    if current_country["diamond"]:
        pick = input("Would you like to pick up the diamond? (Yes/No) ")
        if pick == "Yes":
            score += 1
            print("Score: " + str(score))
            current_country["diamond"] = False

    villain = diamond_picker()
    if villain["name"] == current_country["name"]:
        print("Game Over! The villain has caught you in " +
              current_country["name"])
        return score

    doors = current_country["doors"]
    print("The available doors are: " + ", ".join(doors))
    door = input("Which door would you like to enter through? ")
    while door not in doors:
        print("You cannot access this room through that door. Try again.")
        door = input("Which door would you like to enter through? ")

    for country in countries:
        if door in country["doors"] and country["name"] != current_country["name"]:
            next_country = country
            break

    return play_game(next_country, score)


# Start the game
current_country = (countries[0])
score = play_game(current_country, score)
print("Final Score: " + str(score))
