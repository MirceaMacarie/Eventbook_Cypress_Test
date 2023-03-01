# Eventbook Cypress Test
An automation testing project built to verify as many details and functions on the official website of the Eventbook entertainment platform.



------



## :pushpin: Inspiration and personal purpose :chart_with_upwards_trend:
This automation project was created in order to apply practically my knowledge about Cypress JS framework. In this respect, I developed a tests suite which verify by assertions different details and functions of the Eventbook website, for personal exercise and learning.






## :pushpin: Project technologies :computer:
+ **JavaScript** as programming language
+ **Node.js** as runtime environment
+ **Cypress** as automation framework for web applications
+ **Google Chrome** as test browser

     <a href= "https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://user-images.githubusercontent.com/115346533/207126821-44c69b50-e31e-47cf-807d-360653372d09.png" width="91" height="91"></a>     <a href= "https://nodejs.org/en/docs/"><img src="https://user-images.githubusercontent.com/115346533/207125973-3188c005-11c9-4c49-ab8c-b71e5c58a5c4.png" width="80" height="91"></a>     <a href= "https://www.cypress.io/"><img src="https://user-images.githubusercontent.com/115346533/219746300-c4dd96d6-f951-4f4b-886e-832cd07736cb.png" width="91" height="91"></a>     <a href = "https://www.google.com/chrome/?brand=YTUH&gclid=Cj0KCQiAnsqdBhCGARIsAAyjYjThEbMgK-Pyt6tXBBxBf9wk8TAD19OKn0FRnMlz45Ul0fZ5ogPb9gEaAjOhEALw_wcB&gclsrc=aw.ds"><img src="https://user-images.githubusercontent.com/115346533/208242996-fae0e828-b968-45cd-ab0c-1a73c9825b65.png" width="91" height="91"></a>
    
    
    
    
   
   
## :pushpin: Setup and installation :hammer_and_wrench:	
1. The first time I created a remote repository on GitHub, then a local repository on my computer.
2. In the project's local folder, I installed the **Cypress** automatic testing framework from the Command Prompt, by executing the command: "npm i cypress".
3. After the final installation of Cypress, I had to open it by command line "npx cypress open" in Command Prompt and configure the framework for this project: selecting the type of testing for this project (End-to-End Testing), selecting the Google Chrome browser to run the website, create and setting the specific folder of the JavaScript test code (in this case: **"cypress\e2e\Test_File_Eventbook.cy"**).
4. After I have finished configuring Cypress for this project, I open a JS code file in the **"cypress\e2e\"** folder and add the unitary organized tests suite with proper names for all the tests in it, following the documentation of Cypress framework.
5. The automated test suite is executed by running in the Cypress interface, with a generic report in the left and the visual execution of the tests in the right part. During tests execution, there is a bug which is presented separately below. When it is selected the English language, only a small part of the menu from header is changed to this language, and the other part remains in Romanian. 






## :pushpin: Web support :link:
As support, I used **the website https://eventbook.ro/** for these automation test.






## :pushpin: Testing objectives :microscope:
This project was thought as a way to: 
+ if **it respects a Positive Flow for customers who search information about cultural events and want to buy tickets for these**,
+ to create an **End-to-End testing scenario**, simulating **a real context** for a user who access the website,
+ **to check certain static details (buttons, titles, text, etc.)**,
+ check if **certain functions of the site can be automated** in a testing process.






## :pushpin: Demo video of the Automation test :clapper:
:one: :heavy_check_mark: This is the **first demo video** of the automation test execution on the Eventbook website, where all tests are checked, to see the entire flow on this website.



https://user-images.githubusercontent.com/115346533/222078663-96d88dfb-dd4c-499a-aea4-95a4e08b3054.mp4






:two: :x: This is the **second demo video**, where is presented a bug. When it is selected the English language, only a small part of the menu from header is changed to this language, and the other part remains in Romanian. 



https://user-images.githubusercontent.com/115346533/222079465-4ee6c318-94e2-4eea-8fd1-e1c4b1d84548.mp4

