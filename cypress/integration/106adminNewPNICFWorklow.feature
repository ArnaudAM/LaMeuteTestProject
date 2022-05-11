Feature: Create PNICF Workflow

 Scenario: Should create a PNICF workflow
    Given I am authenticated as Administrator
    When I create a PNICF workflow
    Then I have a validation message