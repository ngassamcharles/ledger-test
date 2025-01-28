Feature: User - Registration
  In order to access the app
  As a new user
  I want to register an account

  Scenario: Successful user registration
    Given I am on the contact list app home page
    When I register as a new user by signing up with these datas
      | firstName   | lastName | email                       | password |
      | test-ledger | charles  | testforleagder001@gmail.com | password |
    Then User should be successfully registered
      | email                       | password |
      | testforleagder001@gmail.com | password |

