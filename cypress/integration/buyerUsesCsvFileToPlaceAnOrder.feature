Feature: a buyer places an order with a csv file
    Scenario: a buyer places an order with a csv file

        Given a logged buyer
        And the buyer checks his cart
        When he add a csv file order
# Then the cart should be updated from csv articles
# And their number should be equal to the csv file