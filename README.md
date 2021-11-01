# HandyMan
*By Eric Mahoney*

Link to: *(https://handyman-task.herokuapp.com/)*
**Table of Contents**
* [Site Overview](#site-overview)
* [How to Use](#how-to-use)
* [Technologies Used](#technologies-used)
* [Future Development Plans](#future-development-plans)

## Site Overview
Handyman is a full stack React app that connects clients to independent taskforce members that help with miscelleanous housework and projects.  It is aimed at demographics that are phyisically inable
to complete tasks on their own or have schedules that would not allow for ease of completion.

Clients can select from services offered and fill out a form to arrange a time to meet a tasker.
Taskers receive these orders and are intended to complete them.
![Site Preview](https://cdn.discordapp.com/attachments/841133997501317161/904523287294529586/mdpreview1.png)

As a proponent of independent entrepreneurship, I was inspired to make this website that offers
a wide variety of potential job offerings for those with the skillsets neccessary.

## How to Use
The navigation bar changes depending on three states:
- You are a guest
- You are a user
- You are an employee

As a guest, you can view services offered, sign up, log in, or enroll as a tasker.
As a user, you can get started by clicking the booking tab on the navbar, or utilizing the selection field on the splashpage.  After selecting a service, select the state you live in, how long the task should take, and youre desired tasker.
As an employee, view orders people have submitted with you, and view your profile for reviews.

## Technologies Used
Handyman uses React for its frontend to ensure an easy-to-traverse and seamless user environment.  It makes use of Flask with SQLalchemy for maintaining and accessing it's own backend API, developed in the RESTful convention.

Redux's store allows for large amounts of information to be queried upfront and be ready for use by the time users access any endpoint on the front end.

## Future Development Plans
I plan on adding a variety of QoL improvments and more direct/detailed communication between client and tasker:
- Address input and distance between 2 points
- Websocket implementation for chat
- AWS image uploading for task details and profile pictures
