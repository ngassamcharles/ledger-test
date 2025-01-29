Feature: Manage Contacts
  In order to manage my contacts
  As a logged-in user
  I want to create and edit contacts in the app

  Background:
    Given I am logged into the contact list app
      | email                       | password |
      | testforleagder001@gmail.com | password |

  @createContact
  Scenario: Create a new contact
    When I create a new contact with valid datas
      | firstName | lastName | birthDate  | email                | phone      | streetAddress1 | streetAddress2 | city  | state | postalCode | country |
      | contact   | ledger   | 1998-12-12 | ledgersdet@gmail.com | 0938736446 | 2 Rue          | Test           | Paris | Paris | 75000      | France  |
    Then New contact should appear in the contact list
      | name           |
      | contact ledger |


  @editContact
  Scenario: Edit an existing contact
    Given An existing contact in my contact list
      | name           |
      | contact ledger |
    When I update the details of the existing contact with a new name
      | firstName | lastName |
      | contact   | bitcoin  |
    Then Updated details should be reflected in the contact list
      | name            |
      | contact bitcoin |
