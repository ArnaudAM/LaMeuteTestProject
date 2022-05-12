Feature: Order greater or equal than seuil de commande value
        Scenario: a buyer places an order more or equal than seuil de commande value

                Given a logged buyer
                And he selects furniture
                And the amount of money is less than the seuil de commande value
                When the buyer checks his cart
                Then he should see a Faire valider ma commande button
                And he should see a Faire valider la livraison button
                And he should see a j'ai lu et j'accepte les conditions de vente checkbox
                And he should be able to check j'ai lu et j'accepte les conditions de vente checkbox
                And he should see a Faire valider le paiement button
                And he should see a Commande en cours de validation message
                And he should have a numéro de commande