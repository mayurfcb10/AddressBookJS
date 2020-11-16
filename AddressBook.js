"use strict";

class ContactDetails {
  // Constructor
  constructor(...params) {
    this.firstName = params[0];
    this.lastname = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phoneNumber = params[6];
    this.email = params[7];
  }

  // getter and seter methods

  get firstName() {
    return this._firstName;
  }

  set firstName(firstName) {
    let firstNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (firstNameRegex.test(firstName)) {
      this._firstName = firstName;
    } else
      throw "FirstName should start with capital letter and alteast 3 characters";
  }

  get lastname() {
    return this._lastname;
  }

  set lastname(lastname) {
    let lastNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (lastNameRegex.test(lastname)) {
      this._lastname = lastname;
    } else
      throw "LastName should start with capital letter and alteast 3 characters";
  }

  get address() {
    return this._address;
  }

  set address(address) {
    let addressRegex = RegExp("^[a-zA-Z0-9 ]{4,}$");
    if (addressRegex.test(address)) {
      this._address = address;
    } else throw "Address should have alteast 4 characters";
  }

  get city() {
    return this._city;
  }

  set city(city) {
    let cityRegex = RegExp("^[a-zA-Z ]{4,}$");
    if (cityRegex.test(city)) {
      this._city = city;
    } else throw "City should have alteast 4 characters";
  }

  get state() {
    return this._state;
  }

  set state(state) {
    let stateRegex = RegExp("^[a-zA-Z ]{4,}$");
    if (stateRegex.test(state)) {
      this._state = state;
    } else throw "State should have alteast 4 characters";
  }

  get zip() {
    return this._zip;
  }

  set zip(zip) {
    let zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
    if (zipRegex.test(zip)) {
      this._zip = zip;
    } else throw "Zip should match the valid format";
  }

  get phoneNumber() {
    return this._phoneNumber;
  }

  set phoneNumber(phoneNumber) {
    let phoneRegex = RegExp("^[0-9]{2} [0-9]{10}$");
    if (phoneRegex.test(phoneNumber)) {
      this._phoneNumber = phoneNumber;
    } else throw "PhoneNumber should match the valid format";
  }

  get email() {
    return this._email;
  }

  set email(email) {
    let emailRegex = RegExp(
      "^[a-zA-Z0-9]+[_+-.]?[a-zA-Z0-9]*[a-zA-Z0-9]@[a-zA-Z0-9]+([.][a-zA-Z]{2,4})([.][a-zA-Z]{2,4})?$"
    );
    if (emailRegex.test(email)) {
      this._email = email;
    } else throw "Email should match the valid format";
  }

  toString() {
    return (
      "First Name: " +
      this.firstName +
      " Last Name: " +
      this.lastname +
      " Address: " +
      this.address +
      " City: " +
      this.city +
      " State: " +
      this.state +
      " Zip: " +
      this.zip +
      " Phone number: " +
      this.phoneNumber +
      " Email: " +
      this.email
    );
  }
}

// Created Address book array and added contacts to it 
let addressBookArray = new Array();
try {
  addressBookArray.push(
    new ContactDetails(
      "Bill",
      "Gates",
      "BakerStreet",
      "San Francisco",
      "California",
      "345654",
      "91 9434435566",
      "billgates@gmail.com"
    )
  );
  addressBookArray.push(
    new ContactDetails(
      "Jennifer",
      "Aniston",
      "B11 Street",
      "San Francisco",
      "California",
      "434324",
      "91 8787567894",
      "jenniferA@gmail.com"
    )
  );
  addressBookArray.push(
    new ContactDetails(
      "Johnny",
      "Depp",
      "C22 Street",
      "Santa Clara",
      "Alaska",
      "453567",
      "91 9876543211",
      "jdepp@hotmail.com"
    )
  );
  addressBookArray.push(
    new ContactDetails(
      "Brad",
      "Pit",
      "D33 Street",
      "Lamington",
      "Wales",
      "232323",
      "91 6545454546",
      "braddpit@celeb.ac.us"
    )
  );
} catch (e) {
  console.error(e);
}
console.log(addressBookArray.toString());
