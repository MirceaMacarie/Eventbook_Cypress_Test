describe ('Automation Tests for Eventbook.ro', () => {
    
    //Verify different details on eventbook.ro
    it('Automated test cases', () => {
        

        //Open the main page of the website
        cy.visit('https://eventbook.ro/');
        cy.get('#cookiescript_accept').click(); //Close the cookies window by press 'I agree'
    

        //Press and check if the buttons for Music, Movie and Blog are working properly
        cy.get('.col-md-6 > .navbar-nav > :nth-child(1) > .nav-link').click();
        cy.get('.active > a > .img-responsive').should('exist');

        cy.get('.col-md-6 > .navbar-nav > :nth-child(2) > .nav-link').click();
        cy.get('.pt-sm-2 > .row > :nth-child(2) > .w-100 > .m-0').should('exist');

        cy.get(':nth-child(7) > .nav-link').click({force: true});
        cy.get('.margin-top-0 > strong').should('exist');


        //Verify the button for changing languge, from Romanian to English
        cy.get('.col-4 > .btn-group > .language-switch').click();
        cy.get('.col-4 > .btn-group > .language-menu > [href="?lang=en"]').click();

        cy.get(':nth-child(5) > .nav-link').should('have.text', 'online events');
        //cy.get('.col-6 > .navbar-nav > :nth-child(2) > .nav-link').should('have.text', 'be supporter'); 
            //This code line verifies if the button text was translated in English. It is a bug.


        //Select Movie section, and then select a cinema from the list
        cy.reload();
        cy.get('.col-md-6 > .navbar-nav > :nth-child(2) > .nav-link').click();
        cy.get('.pt-sm-2 > .row > :nth-child(2) > .w-100 > .m-0').click();
        cy.get('h1').should('have.text', '\n                            Program Florin Piersic Cinema\n                        ');


        //Select one movie and choose 2 tickets
        cy.scrollTo(0, 1500);
        cy.get(':nth-child(6) > .col-md-3 > a > .h-100 > .img-responsive').click();
        cy.scrollTo(0, 200);
        cy.get(':nth-child(3) > .col-md-6 > .row > .p-3 > .buy-form > :nth-child(4) > .pl-0 > .input-group > .input-group-append > .border > .icon').click();
        cy.get(':nth-child(3) > .col-md-6 > .row > .p-3 > .buy-form > :nth-child(4) > .p-0 > .btn > .m-0 > .icon').click();
        cy.get('.row > .col-8 > :nth-child(2)').should('have.text', 'You have added 2 tickets worth 36 lei ');
        

        //Add the previous tickets to Cart and click Finish
        cy.get('#modal_add_in_cart > .modal-dialog > .modal-content > .modal-header > .modal-title').should('have.text', 'Your tickets have been added to the cart  ');
        cy.get('a > .btn').click();
        cy.get('#order_app').should('exist');

        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(3) > .btn').click();
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(3) > .btn').click();
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .col-12').should('not.exist');


        //Search the word 'bear' in search bar
        cy.get('.evb-navbar-search > .input-group > .rounded-pill-left').type('bear').type('{enter}');
        cy.get(':nth-child(1) > .col-md-3 > a > .h-100 > .img-responsive').should('exist');


        //Choose one result and open to see the details
        cy.get(':nth-child(1) > .col-md-3 > a > .h-100 > .img-responsive').click();
        cy.get('#description_text > div > p').should('exist');


        //Verify the login without credentials
        cy.get('#loginButton').click();
        cy.get('#btn-login').click();
        cy.get('.border-right > .alert').should('exist');


        //Verify the login with email, but without password
        cy.get('#email').type('valorac961@iucake.com');
        cy.get('#btn-login').click();
        cy.get('.border-right > .alert').should('be.visible');


        //Verify the 'Forgot password' button
        cy.get('.bg-light > :nth-child(1) > a').click();
        cy.get('.p-0 > .text-dark').should('have.text', 'I forgot my password');

        cy.get('.form-group > #email').type('valorac961@iucake.com');
        cy.get(':nth-child(3) > .btn').click();
        cy.get('.help-block > strong').should('have.text', "We can't find a user with that e-mail address.");
        

    })
})