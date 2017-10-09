#Cuisine Machine
--
Cuisine machine is a web application that is designed to facilitate the process of choosing a place to eat with a group of friends. The basic idea is to use a system reminiscent of Tinder with cards representing the possible choices in their area. The original user should create a group, specify the location to search within, and then send a link out to their friends who can go through the selection process and either like or dislike restaurant options. Once all users are finished, their inputs are compared and a restaurant is selected that most accurately fits the combined input of all the users.
 
-- 

## Technologies
#### Front end
- React/Redux
- Google maps/places API
- Material UI

#### Back end
- NodeJs
- Express
- Postgresql

#### Concepts
- Mobile first
- Desktop friendly
- Gesture controls for mobile

## User Stories
#### Group Master
1. GM can input minimal personal information to create group
2. GM can invite friends via text to join group
3. GM can invite friends via email to join group
4. GM can simply give friends a code to join group
5. GM can set options for their group (location, distance, cuisine type, cost, etc...)
6. GM can like or dislike restaurant options
7. GM can view the final selection and choose to approve or deny choice

#### Group Members
1. members can join a group using a link from group master
2. members can joing a group using a code from group master
3. members can like or dislike restaurant options
4. members can view the final selection after results are submitted

## Database Structure
#### Users
	id - PK
	name - string
	email - string
	phone - string
	group_id - FK (ref groups)

#### Groups
	id - PK
	location - string (coordinates probably?)
	radius - integer
	cost - integer (maybe string depending on maps API)
	cuisines - text (stringified json object)
	created_at - TS
	updated_at - TS

#### Restaurants
	id - PK
	group_id - FK (ref groups)
	other data to be added depending on maps API
	
#### Votes
	id - PK
	group_id - FK (ref groups)
	restaurant_id - FK (ref restaurants)
	user_id - FK (ref users)
	choice - boolean
	
### Example database flow
Group creation

1. new addition to groups table for new group
2. new addition to users table for group master
3. new additions to restaurants table for all restaurants in area

Group members log in | 
*Group members must specify name before joining*

1. new additions to users table for each member

For each restaurant vote:

1. new addition to votes table with restaurant id, user id, and choice

Optimal selection

1. join groups and restaurants on group id
2. analyze choices

Group teardown

1. delete all records in all tables containing the corresponding group id

## Wireframes


## Stretch features
1. Redirect to restaurant ordering page if exists
2. GM can see status of how people voted
3. top chart not final selection
4. Vote weight. Vote more heavily on certain restaurants (votes limited)
