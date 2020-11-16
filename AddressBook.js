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
    this._firstName = firstName;
  }

  get lastname() {
    return this._lastname;
  }

  set lastname(lastname) {
    this._lastname = lastname;
  }

  get address() {
    return this._address;
  }

  set address(address) {
    this._address = address;
  }

  get city() {
    return this._city;
  }

  set city(city) {
    this._city = city;
  }

  get state() {
    return this._state;
  }

  set state(state) {
    this._state = state;
  }

  get zip() {
    return this._zip;
  }

  set zip(zip) {
    this._zip = zip;
  }

  get phone() {
    return this._phoneNumber;
  }

  set phone(phoneNumber) {
    this._phoneNumber = phoneNumber;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    this._email = email;
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

let contactDetails = new ContactDetails(
  "Bill",
  "Gates",
  "San Francisco",
  "San Francisco",
  "California",
  "345654",
  "3434435566",
  "billgates@gmail.com"
);

console.log(contactDetails.toString());
