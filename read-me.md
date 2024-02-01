**NEW PORTFOLIO WEBSITE FOR ASHLEY**

### Sitemap

List the pages of your app with brief descriptions.

1. About
2. Work
3. Work / ProjectID
4. News / Testimonials / OTHER
5. Contact

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

host:
The person the website is being made for
about{
fullName: Ashley Francis-Roy;
bio: "Documentary filmmaker...";
description: "Originally from Leeds...";
CV: firebase file link
photo: static image / firebase edit upload
}

film {
"id": 1,
"title": "To Catch A Copper",
"image": firebase file link / static image path,
"bio": "In a truly unique...",
"description": "Over recent years...",
"role": "Shooting Series Director",
"length": "(3 x 60 mins)",
"productionCompany": "story films",
"streamingCompany": "Channel 4",
"video": "https://vimeo.com/905528800/b44b2d56f8?share=copy",
"watchOn": "https://www.channel4.com/programmes/to-catch-a-copper",
"reviews": [
{
" id": 1;

<!-- filmId: foreignKey; -->

"author": "The Observer";
"quote": "Its the police as you've never seen...."
}
]
"credits": [
{
"Title": "Commissioning Editor",
"Name": "Alisha Pomeroy, Sacha Mirzoeff"
},
{
"Title": "Series Producer",
"Name": "Hugo Pettitt"
},
{
"Title": "Commissioning Editor",
"Name": "Pete Beard, Bruce Fletcher"
}
]

}

review {
"id": 1;
"filmId": foreignKey;
"author": "The Observer";
"quote": "Its the police as you've never seen...."
"rating?": number
}

collaborator {
"id": 1;
"filmId": foreignKey;
"title" : "commissioning editor";
"name" : "Alisa Pomeroy";
}

users {
"id": 1,
"full_name": "Ashley Francis-Roy"
"description": "Originally from leeds...."
"bio": "Documentary filmmaker..."
"resume": link to CV
"representation": "Ashley is represented by..."
}

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

GET REQUESTS to following endpoints:

api/about: returns ashley's about section
api/films: returns a list of all films
api/films/:id: returns the specific film
api/films/:id/reviews: returns the reviews belonging to that film
api/films/:id/credits: returns the collaborators on the film
api/credits: returns all collaborators
api/reviews: returns all reviews

POST REQUESTS to following endpoints:
api/films: post a new film
api/credits: post a new collaborator
api/reviews: post a new review

DELETE to following endpoints:
api/films/:id: deletes/edits film details
api/credits/:id: deletes/edits film credit details
api/reviews/:id: deletes/edits film review details

PUT to following endpoints:
api/about edits about details
api/films/:id: edits film details
api/credits/:id: edits collaborator details
api/reviews/:id: edits film review details

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

## Roadmap

1. Create back-end database
   - migrations
   - seeds
   - router
   - controllers
2. Create front-end for amending back-end for ashley
   - oAuth/password-protection.
3. Create front-end portfolio site
