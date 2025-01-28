Feature: User - Registration
  In order to access the app
  As a new user
  I want to register an account

  Scenario: Successful user registration
    Given I am on the contact list app home page
    When I register as a new user by signing up
    Then the user should be successfully registered

