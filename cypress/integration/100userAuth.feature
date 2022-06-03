Feature: Login La Meute User

 Scenario: Should login as User
    Given I open La Meute page
    When I fill in the form successfully
    Then The user is authenticated
