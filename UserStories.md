# Character Select Story

As a user, I should be able to select the pokemon I would like to battle with.

As a user, I should be able to remove a selected pokemon in case I selected the wrong one, without having to refresh the page.

# Acceptance Criteria

**Given** a user is on the character select screen
**And** wants to select a pokemon
**Then** a user should be allowed to select a pokemon by clicking on it's card in the character select screen

**Given** a user has selected a pokemon
**Then** a user should be able to cancel their selection by making a gesture on the `cancel` affordance

**Given** a user has selected their pokemon
**And** does not wish to cancel their selection
**Then** a user should be able to select a second pokemon to battle against

**Given** a user has selected both pokemon
**And** the user wants to battle
**Then** the user should be able to make a gesture on the `play` affordance on the character select screen to take them to the battle page

# Main Menu Story

As a user, I should be able to register for or login to my account.

As a user, I should not be allowed to play a match unless I am logged in.

As an unauthenticated user, I should be allowed to view all pokemon that have been created.

# Acceptance Criteria

**Given** a user performs a gesture on the `login` affordance on the main menu screen
**Then** the user will be prompted to login using their username and password

**Given** a user performs a gesture on the `register` affordance on the main menu screen
**Then** the user will be prompted to register an account using their username and password

**Given** a user performs a gesture on the `play` affordance on the main menu screen.
**Then** the user will be taken to the character select screen.

**Given** a user performs a gesture on the `box` affordance on the main menu screen.
**Then** the user will be taken to the pokemon list screen.

**Given** a user is authenticated
**And** the user wants to play the game
**When** the user makes a gesture on the `play` affordance
**Then** the user will be taken to the character select screen

# Battle Screen Story

As a user, I should be able to attack using my pokemon

As a user, I should be able to see pokemon weaknesses and strengths. (optional)

As a user, I should be able to hover my move to see it's type

As a user, once both pokemon have selected their attacks then the battle should play out

# Acceptance Criteria

**Given** a user is hovering an `attack` affordance
**Then** the attack's type should show in the `attack type` section

**Given** a user has selected an `attack` affordance
**And** the second user or cpu has selected an `attack`
**Then** both attacks should play out and their respective damage values should be subtracted from the pokemon they hit hp's value.
**And** dialogue should be prompted in the `hud` as a result of the attacks

**Given** a user is hovering a pokemon
**Then** the user should be able to see that pokemon's resistances & weaknesses in a popup.

# Pokemon List Story

As a user, I should be able to create pokemon

As a user, I should be able to edit and delete pokemon I have created

As a user, I should be able to see pokemon's details when selected.

# Acceptance Criteria

**Given** a user is on the pokemon list Screen
**And** a user has selected a pokemon
**Then** the user should be displayed that pokemon's information

**Given** a user has selected a Pokemon
**And** that pokemon was created by the user
**Then** in that pokemons details, a edit and delete button should be displayed

**Given** a user is authenticated
**And** the user performs a gesture on the `create` affordance
**Then** the user should be prompted to create a new pokemon
