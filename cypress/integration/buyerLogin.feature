Feature: a user log in as a buyer
    Scenario: a user log in as a buyer

        Given a user on the home page
        And he clicks on se connecter menu
        When he fills the username and the password correctly
        Then he should be logged in
        And he should have a acheteur role
