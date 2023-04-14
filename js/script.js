// Copyright (c) 2023 Lily C All rights reserved
//
// Created by: Lily C
// Created on: 04/14/2023
// This file contains the JS functions for index.html

"use strict"

function tempSent() {

 //declaring original variables & constant
 let temperature = parseFloat(document.getElementById("temp-input").value);
 const TEMP_THRESHOLD = 15;
 let message = "";

 //setting different if/then scenarios
 if (temperature >= TEMP_THRESHOLD) {
   message = "This temperature would be considered hot. Prepare yourself for warmer weather!";
 }

 //else represents a temperature of less than 15 degrees
 else {
   message = "This temperature would be considered cold. Prepare yourself for cooler weather!";
 }

 //display the correct message to the screen
 document.getElementById("results").innerHTML = message;
}