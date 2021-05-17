"use strict";

self.addEventListener("install", (e) => {
    console.log("From SW: Install Event");
})
self.addEventListener("activate", (e) => {
    console.log("From SW : Activate Event ");
})