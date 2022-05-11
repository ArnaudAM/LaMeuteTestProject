Feature: Login RAJA Admin

 Scenario: Should login as Administrator
    Given I open RAJA page
    When I fill in the form successfully
    Then The user is authenticated
