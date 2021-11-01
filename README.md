# HandyMan
*By Eric Mahoney*

Link to: *(https://handyman-task.herokuapp.com/)*
**Table of Contents**
* [Site Overview](#site-overview)
* [Technologies Used](#technologies-used)
* [Frontend Overview](#frontend-overview)
* [Backend Overview](#backend-overview)
* [Conclusion & Next Steps](#conclusion-and-next-steps)

** Site Overview
Handyman is a full stack React app that connects clients to independent taskforce members that help with miscelleanous housework and projects.  It is aimed at demographics that are phyisically inable
to complete tasks on their own or have schedules that would not allow for ease of completion.

Clients can select from services offered and fill out a form to arrange a time to meet a tasker.
Taskers receive these orders and are intended to complete them.
(https://cdn.discordapp.com/attachments/841133997501317161/904523287294529586/mdpreview1.png)

As a proponent of independent entrepreneurship, I was inspired to make this website that offers
a wide variety of potential job offerings for those with the skillsets neccessary.


** Technologies
Handyman uses React for its frontend to ensure an easy-to-traverse and seamless user environment.  It makes use of Flask with SQLaclchemy for creating and accessing it's own backend API, developed in the RESTful convention.


** Future Development Plans
I plan on adding a variety of QoL improvments and more direct/detailed communication between client and tasker:
- Address input and distance between 2 points
- Websocket implementation for chat
- AWS image uploading for task details and profile pictures
