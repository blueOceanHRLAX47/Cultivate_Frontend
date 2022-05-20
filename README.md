# Cultivate


## Table of Content
- [Overview](#Overview)
- [Tech Stack](#Tech-Stack)
- [Product Demo](#Product-Demo)
- [Front End Diagrams](#Front-End-Diagrams)
- [Team Members](#Team-Members)


</br>

## Overview
*Cultivate is a **Health** and **Wellness** application where individuals can come together as a community to **Design**, **Plan** and share their own **Workout Routines** and **Healthy Recipes**.*

## Features
***
+ A Recipes Component to search for or add new Recipes for your specific diet or needs.
+ A Workout Component to search for or add new workout videos/routines.
+ A Calendar for organizing your goals, workouts and meal times.
+ A Forum to share and post your thoughts, ideas, workouts and diets with others.

</br>


## Tech stack
***
<br />
<br />

### Front end
  <img width="15%" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" />
  <img width="15%" src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg" style="padding-left: 1em"/>


<br />
<br />

### Back end
<div style="display: flex; align-items: center;">
  <img width="15%" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg"/>
  <img width="7%" src="https://cdn.auth0.com/website/assets/pages/homepage/img/std_cert/oauth2-360e300bd3.svg" style="padding-left: 1em"/>
  <img width="7%" src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" style="padding-left: 1em"/>
  <img width="10%" src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" style="padding-left: 1em"/>
</div>

  
<br />
<br />

### Cloud Delopment
<br />
<div style="display: flex; align-items: center;">
  <img width="15%" src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg"/>
  <img width="12%" src="https://raw.githubusercontent.com/cncf/landscape/03e6087264809d60426e82ab4ec49748c794bbef/hosted_logos/google-kubernetes-engine.svg" style="padding-left: 1em"/>
  <img width="7%" src="https://stephanefrechette.dev/images/cloudsql.png" style="padding-left: 1em"/>
  <img width="7%" src="https://miro.medium.com/max/256/0*u3LacWYz2vFH3OSH.png" style="padding-left: 1em"/>
</div>

<br />
<br />

### Project Management
<br />
  <img width="15%" src="https://www.vectorlogo.zone/logos/trello/trello-ar21.svg" style="padding-left: 1em"/>

<br />
<br />
<br />
<br />

## Product Demo
***
<a href="http://www.youtube.com/watch?feature=player_embedded&v=xQU1R3EQHdI
" target="_blank"><img src="http://img.youtube.com/vi/xQU1R3EQHdI/0.jpg"
alt="Cultivate App Demo" width="480" height="360" border="10" /></a>

<br />
<br />
<br />
<br />

## Front End Diagrams
***
<br />

<p style="font-weight: bold; font-size: 1.7rem">{ Login Screen }</p>
<p style="font-style: italic"> Users will be directed to a login page when first coming to - or returning to - Cultivate. They will be prompted to sign in or sign up. This page will display the cultivate logo as well as a small slogan underneath if requested. </p>

<br />
  
<p align="center" >
<img src="./Pictures/Login.png" width="40%" alt="Login Screen Diagram"/>
</p>

<br />
<br />

<p style="font-weight: bold; font-size: 1.7rem">{ Navigation Menu }</p>
<p style="font-style: italic">The navigation menu allows users to navigate to various sections of the application. Users can select a navigation icon in the top left to toggle a drawer, where different areas of the app will be listed. </p>

<br />

<p align="center">
<img src="./Pictures/Navigation Menu.png" width="75%" alt="Navigation Menu Diagram"/>
</p>

<br />
<br />

<p style="font-weight: bold; font-size: 1.7rem;">{ Calendar }</p>
<p style="font-style: italic">The calendar component allows users to view their scheduled meals and/or workouts for any given day. Users may add their desired workouts/meals by selecting the ‘Add to Calendar’ button within the respective component.  </p>

<br />

<div style="display: flex; justify-content: center; align-items: center">
<p>
<img src="./Pictures/Calendar.png" width="50%" alt="Calendar Diagram"/>
</p>
<p >
Features: </br>
* Add Recipes and workouts to their calendar for planning. </br>
</br>
* Delete recipes and workouts that were previously saved to their calendar </br>
</br>
* A weekly view, which will be the default/initial view that users interact with
</br>
  </p>
</div>

<br />
<br />

<p style="font-weight: bold; font-size: 1.7rem">{ Workouts }</p>
<p style="font-style: italic">This section will allow users to browse through a list of workouts that Cultivate or other active users have shared or made. The format will be similar to the “recipes” section, and users will  have the ability to expand a workout to see an instructional video or more details. They may also select a button to add a specific workout to their calendar.  </p>

<br />

<div style="display: flex; justify-content: center; align-items: center" >
<p>
<img src="./Pictures/Workouts.png" width="50%" alt="Workouts Diagram"/>
</p>
<p >
Features: </br>
* List 10 most recent workouts<br />
<br />
* Open up an instructions pane with details and/or video walkthrough <br />
<br />
* List all workouts with ability to sort and filter <br />
<br />
* Add a workout to calendar <br />
<br />
* Share to forum <br />
  </p>
</div>

<br />
<br />

<p style="font-weight: bold; font-size: 1.7rem">{ Recipes }</p>
<p style="font-style: italic">The recipe component allows the user to view recipes they save as well as public recipes. There will be two tabs: (1) a “public” tab that, when selected, will render the ten most recently saved recipes by all users, and (2) a “my recipes” tab that will render the ten most recently saved recipes of the current user. 

Users will open this component from the navigation pane. Each recipe will appear as a clickable tile, one on top of the other. When clicked, the tile will expand to show any additional details about the recipe, instructions, and a list of ingredients. 

Each tile will include buttons to allow users to share directly to the forum or copy a link referencing the recipe. At the top of the page, there will be options to sort and filter by criteria such as date, food category, time to prepare, and more. Additionally, an “Add to Calendar” button will add a recipe to that user’s calendar.  </p>

<br />

<div style="display: flex; justify-content: center; align-items: center" >
<p>
<img src="./Pictures/Recipes.png" width="70%" alt="Recipes Diagram"/>
</p>
<p >
Features: </br>
* Render tiles according to a users saved recipes (“My Recipes” tab)<br />
<br />
* Render an expanded view when a tile is clicked <br />
<br />
* List all recipes with ability to sort and filter <br />
<br />
* Add a Recipe to calendar <br />
<br />
* Share to forum <br />
  </p>
</div>

<br />
<br />

<p style="font-weight: bold; font-size: 1.7rem">{ Forum }</p>
<p style="font-style: italic">In this section, users will be able to see a list of public posts made by other users, interact with these stories (like a comment), and also be able to create a new post. The list of main features of the Forum section are shown below:

In the forum's overview, users will see a list of posts created by other users. This page will contain a "New Post" button at the top to add new posts and a list of posts below in their respective sections. In addition, each post will include the body, an incrementing like button, a comment button to open additional post details, and social media icons on the bottom right to share the post.
 </p>

<br />

<div style="display: flex; flex-direction: column; justify-content: flex-start;" >
<p>
<img src="./Pictures/Forum.png" width="70%" alt="Recipes Diagram"/>
</p>
<p style="display: flex; align-items: flex-start;">
Features: </br>
<p>* Render tiles according to a users saved recipes (“My Recipes” tab)</p>
<br />
<p>* Render an expanded view when a tile is clicked</p>
<br />
<p>* List all recipes with ability to sort and filter</p>
<br />
<p>* Add a Recipe to calendar</p>
<br />
<p>* Share to forum</p>
  </p>
</div>

<br />
<br />


### Back end and cloud diagrams
***
+ TODO: Put in the diagrams to a folder and explain them here

<br />
<br />
<br />

## Development Challenges
***
+ Developing the front end had some extra challenges since the backend was over architected and hard to run on local machines
+ Switching to a mobile first css layout is hard when css was not originally designed for it
+ Google Cloud Platform makes you jump through some hoops to enforce security

</br>
<br />

## Team Members
***
- Mike Ortiz
- Kaitlyn Gill
- Yi Qiao
- Charlie Paik
- Jihoon (Daniel) Kim
- Tim Liaw
- Josh Ayres
- Nicholas Anich
