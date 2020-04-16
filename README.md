# IDEABOX Group Project

![](https://ca.slack-edge.com/T029P2S9M-U03BVJDPC-gc7c991b22b5-72) ![](https://ca.slack-edge.com/T029P2S9M-UQRM2Q4AH-dbf2840cc06e-72) ![](https://ca.slack-edge.com/T029P2S9M-UTPTTDE84-13b671276cf8-72)  <br> 

* project manager: __Will__ [(github)](https://github.com/turingschool-examples)
* contributer: __Corbin__ [(github)](https://github.com/MarchCorbin)
* contributer: __Sue__ [(github)](https://github.com/GreenbergKU)

 
## Brief Synopsis

Every developer has more ideas than time. As David Allen likes to say "the human brain is for creating ideas, not remembering them." In this project, we'll be building an application a new client that records and archives our ideas (good and bad alike).

Throughout the project, one of our focuses will be on providing a fluid and responsive client-side interface. To this end, we'll rely on JavaScript and to implement snappy filtering in the browser, and `localStorage` to persist our wonderful ideas between sessions.  Our goal is to also incorporate an agile workflow by incorporating two weekly sprints.

*Note*: Expectations listed for Iteration 0-1 should be complete by your first check-in. No JavaScript should be written before that check-in, unless you get approval to move ahead with functionality from your Project Manager.



## Learning Goals

* Continue to improve on building responsive client-side applications with good user feedback
* Understand how to implement client-side data persistence using `localStorage`
* Understand what it looks like to have a separate data model (using a class) and DOM model
* Utilize `data-*` attributes
* Incorporate & iterate over arrays in order to filter what is being displayed
* Craft code with clean style, using small functions that show trends toward DRYness and SRP



## For more information and additional LINKS


- Go checkout the [IDEABOX project website](https://marchcorbin.github.io/ideabox-boilerplate/) on Github Pages.
- [Ideabox boilerplate repository](https://github.com/turingschool-examples/ideabox-boilerplate): the origonal project on Github.
- (private) project [Slack channel:](https://app.slack.com/client/T029P2S9M/C011E891RC1)
- IDEABOX documention:
   - [DTR](https://github.com/MarchCorbin/ideabox-boilerplate/blob/master/DTR.md)
   - [Pull Request Template](https://github.com/MarchCorbin/ideabox-boilerplate/blob/master/pull_request_template.md) (image provided below)




# PROJECT IDEABOX:

### ITERATION 0: DESKTOP LAYOUT

#### Brief Synopsis of Objectives 
* Plan then write the HTML and CSS so that your application matches this comp. Based on what you are building, you can anticipate that the Idea "cards" will not always be there on page load, but for now, they should.

- Use the same text on your cards that is used in the spec so you can ensure your spacing/sizing is accurate.
- Here are links to the images and files included with the IDEABOX project on github:
   - [Desktop Layout example](https://frontend.turing.io/projects/module-1/assets/ideabox-group/desktop.jpg)
   - [1st 'Colors' example](https://frontend.turing.io/projects/module-1/assets/ideabox-group/colors.jpg)
   - [2nd 'Colors' example](https://frontend.turing.io/projects/module-1/assets/ideabox-group/icons.jpg)
   - [Download this `svg` icons file](https://drive.google.com/drive/folders/18xpWplI0tpXIK1omBZeq04LEx2OMzzMK?usp=sharing)



#### Summary of Progress


* We wrote foundational html and CSS stylings according to spec. During iter0 we created the template for the idea cards that we would later replicate using JS.

#### SCREENSHOTS

##### `  Pull Request Template: Customized to include only relevant features pertaining to this project  `

  ![This is the customized Pull Request Template :](https://user-images.githubusercontent.com/10098034/79298038-22fa0f80-7e9d-11ea-8475-774b4ab71b54.png) <br>


##### `  Desktop Layout View: after completion of Iteration 0   `

<img width="1000" alt="screenshot of Desktop Layout View after Iteration 0 complete" src="https://user-images.githubusercontent.com/10098034/79301186-25149c00-7ea6-11ea-83da-ebffbc945a6b.png">

 
### ITERATION 1: MOBILE LAYOUT

#### Brief Synopsis of Objectives 

* Now that your Desktop Layout is in place, it's time to write some media queries so this is a responsive site.
  - Full mobile layout Images were provided (both with and without navigation menu open)
  - Here are links to the images and files included with the IDEABOX project on github:
    - [Mobile Layout images](https://frontend.turing.io/projects/module-1/assets/ideabox-group/mobile.jpg)
    - [Mobile Layout with Dropdown](https://frontend.turing.io/projects/module-1/assets/ideabox-group/mobile-dropdown.jpg)


#### Summary of Progress


* We got functionality for the mobile view working. Getting the transparent overlay was a challenge to implement but using Z-index we were able to get the overlay to sit properly.


#### SCREENSHOTS


##### `  Mobile layout view with ideaCard displayed  `


<img width="250" alt="Mobile_Layout_card_Example-20200411_333AM" src="https://user-images.githubusercontent.com/10098034/79301108-e383f100-7ea5-11ea-849f-996531f06cd1.png">


##### `  Mobile layout view while navigation menu expanded  `


<img width="250" alt="Mobile_Layout_nav_menu_Iter1-20200411_337AM" src="https://user-images.githubusercontent.com/10098034/79301111-e4b51e00-7ea5-11ea-8b42-89fe7493c29b.png">



### ITERATION 2: ADDING IDEAS

#### Brief Synopsis of Objectives

**As a user:**
- When I click “Save”,
   - If I entered information in both the “Title” and “Body” input fields,
   - I should see a new idea card with the provided title and body appear in the idea list
- When I click “Save”,
   - If I entered information in both the “Title” and “Body” input fields,
   - I should see the “Title” and “Body” input fields clear out
- When I look at the “Save” button,
   - When either the “Title” or “Body” inputs are empty,
   - I should notice that the “Save” button is disabled because it is a lighter color and the cursor is not a pointer when I hover over it
- When I click “Save”,
   - And a new card is successfully created,
   - I should NOT see the page reload


#### Summary of Progress


* In iteration 2 we got card population to happen on page. Knowing what further iterations were ahead we began to write some starting code for our local storage functionality that we would then implement fully later. This paid off for us making iteration 3 go by quickly.


#### SCREENSHOTS


##### `  Desktop Layout View with a 'clickable' save button    `


<img width="500" alt="Desktop_View_clickable_save_button-Iter2-20200412_143AM" src="https://user-images.githubusercontent.com/10098034/79301124-ee3e8600-7ea5-11ea-8c3e-b89d66f934d3.png">


##### `  Desktop Layout View with a 'disabled' and 'unclickable' save button    `


<img width="500" alt="Desktop_View_Grey_Save_Button-Iter2-202-0412_140AM" src="https://user-images.githubusercontent.com/10098034/79301126-eed71c80-7ea5-11ea-939c-23d0df8ea560.png">


##### `  Mobile layout view with 'clickable' save button  `


<img width="250" alt="Mobile_view_1st_card-Iter2_2020-04-12_147AM" src="https://user-images.githubusercontent.com/10098034/79301129-ef6fb300-7ea5-11ea-8646-972c7798cc6b.png">


##### `  Mobile layout view with 'disabled' and 'unclickable' save button  `


<img width="250" alt="Mobile_View_1st_Card_grey_Save-Iter2-2020-04-12_150AM" src="https://user-images.githubusercontent.com/10098034/79301128-eed71c80-7ea5-11ea-8eb5-61b7bde76b84.png">



### ITERATION 3: FAVORITING & DELETING IDEAS

#### Brief Synopsis of Objectives 

**As a user:**
- When I click the "Delete" button on an idea card,
  - The card should be permanently removed from my view
- When I click the "Star" button on an idea card,
  - When the button was an outline of a star (not favorited),
  - The button should now be a filled in star (favorited)
- When I click the "Star" button on an idea card,
  - When the button was a filled in star (favorited),
  - The button should now be an outline of a star (not favorited)
- When I delete or favorite any card,
  - I should _not_ see the page reload


#### Summary of Progress

* We had alre
ady gotten delete functionality to work in the process of writing for local storage in iteration 2. We added star toggling functionality going but not beyond page load.


#### SCREENSHOTS


##### `  desktopViewFavStarChanged-Iter3-20200415_206 AM  `


![](https://user-images.githubusercontent.com/10098034/79314779-64031b80-7ebf-11ea-8eb8-d95089c582d8.png)


##### `  desktopViewFavStar-Iter3-2020-04-15 at 2 05 47 AM  `


![](https://user-images.githubusercontent.com/10098034/79314781-649bb200-7ebf-11ea-9e53-c7baddb9dae3.png)


##### `  mobileViewFavStar-Iter3-2020-04-15 at 1 50 48 AM  `


![](https://user-images.githubusercontent.com/10098034/79314783-65344880-7ebf-11ea-8404-70934d85ab77.png)



### ITERATION 4: LOCAL STORAGE & FILTERING

#### Brief Synopsis of Objectives

**As a user:**
- When I create one idea successfully, then refresh the page,
  - The idea card is still in the idea list
- When I create two cards successfully, delete one, then refresh the page,
  - One idea card is still in the idea list (the one I did not delete)
- When I favorite an idea card, then refresh the page,
  - That idea card is still in the "favorite" state with the filled in star icon
- When I click "Show Starred Ideas"
  - I see only card that are favorited
- When I click "Show Starred Ideas"
  - I see the text on that button has changed to "Show All Ideas"
- When I click "Show Starred Ideas"
  - Then I click what is now "Show All Ideas"
  - I see all idea, favorited or not
- When a type a letter or phrase into the search bar
  - I now only see the cards that include the letter/phrase in the title or body
- When I backspace and delete something from the search bar, so that it's empty
  - I see all cards since no search criteria is being provided


#### Summary of Progress


* In this iteration we fully implemented our local storage code allowing us to have cards persist across page load. One of the greatest challenges of the project was getting the favorite or 'star' functionality to persist but after figuring out a solution that involved grabbing from local storage repeatedly we were able to get the favorites to persist. We also were able to figure out search functionality after many attempts of writing the function.


#### SCREENSHOTS


##### `  Desktop View in SHOW STARRED IDEAS layout with search input empty   `


<img width="512" alt="Desktop View in SHOW STARRED IDEAS layout with search input empty" src="https://user-images.githubusercontent.com/10098034/79410781-87c96e80-7f5e-11ea-959d-59bb737b5ec0.png">


##### `  Desktop View in SHOW STARRED IDEAS layout while FILTERING the letter "X"  `


<img width="320" alt="Desktop View in SHOW STARRED IDEAS layout while filtering the letter X" src="https://user-images.githubusercontent.com/10098034/79410775-84ce7e00-7f5e-11ea-818d-6fdbfaefc591.png">


##### `  Desktop View while FILTERING the letter "Z"  `


<img width="320" alt="Desktop View while filtering the letter Z" src="https://user-images.githubusercontent.com/10098034/79410772-839d5100-7f5e-11ea-87e6-e8b9560ce1a8.png">


##### `  Mobile View in SHOW STARRED IDEAS layout while FILTERING the word, "next"  `


<img width="250" alt="Mobile View in SHOW STARRED IDEAS layout while filtering the word NEXT" src="https://user-images.githubusercontent.com/10098034/79410784-88fa9b80-7f5e-11ea-9fc7-81e3c137be74.png">

