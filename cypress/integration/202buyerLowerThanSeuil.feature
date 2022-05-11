Feature: a buyer who places an order
        Scenario: a buyer orders less than seuil de commande value

                Given a logged buyer
                And he selects furniture
                And the amount of money is less than the seuil de commande value
                When the buyer checks his cart
                Then he should see a finaliser button
                And he should be able to valider la livraison
                And he should see a j'ai lu et j'accepte les conditions de vente checkbox
                And he should be able to check j'ai lu et j'accepte les conditions de vente checkbox
                And he should be able to valider le paiment