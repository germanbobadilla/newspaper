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


# With Main function

# Define a dictionary of rooms and their connections
rooms = {
    'Great Hall': {'South': 'Bedroom', 'North': 'Dungeon', 'East': 'Kitchen', 'West': 'Library'},
    'Bedroom': {'North': 'Great Hall', 'East': 'Cellar', 'item': 'Armor'},
    'Cellar': {'West': 'Bedroom', 'item': 'Helmet'},
    'Dining Room': {'South': 'Kitchen', 'item': 'Dragon'}  # villain
}

# Initialize the player's starting location, inventory, and win condition
location = 'Great Hall'
inventory = []
win = False


def show_commands():
    """Display the list of available commands to the player"""
    print("Available commands:")
    print("- go [North/East/South/West]")
    print("- get [item name]")


def show_status():
    """Display the player's current status"""
    print("You are in:", location)
    print("Inventory:", inventory)
    print("Items in the room:", rooms[location])


def main():
    global location, inventory, win
    # Show the instructions and the player's starting status
    show_instructions()
    show_status()

    # Main game loop
    while not win:
        # Get the player's command
        command = input("Enter your command: ")
        # Parse the player's command
        if command.startswith("go"):
            # Extract the direction from the command
            direction = command.split()[1]
            # Check if the direction is valid
            if direction in rooms[location]:
                location = rooms[location][direction]
                # Check if the player has picked up the item in the new room
                if 'item' in rooms[location]:
                    item = rooms[location]['item']
                    inventory.append(item)
                    print("You picked up a", item)
                    del rooms[location]['item']
            else:
                print("You can't go that way.")
        elif command == "get Dragon":
            # Check if the player has found the villain
            if location == 'Dining Room':
                win = True
                print("You have defeated the dragon and won the game!")
            else:
                print("The dragon is not here.")
        else:
            print("Invalid command.")
        # Show the player's updated status
        show_status()


# Call the main function to start the game
if __name__ == "__main__":
    main()
