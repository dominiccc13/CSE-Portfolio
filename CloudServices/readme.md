# Overview

I tried to accomplish gaining experience with reading through and making sense of firebase documentation and firebase's firestore database service. I was able to query from it, connect to it through a client object, and add, remove, and edit the database from python.

the software integrates with a cloud database by allowing users to see all of the collections and documents and fields in the database. the user can edit, delete, or add to these. 

my purpose in writing this software was to learn how to interact with a database through python using firebase.

[Software Demo Video](https://youtu.be/L8BGAeQOqn4)

# Cloud Database

I used the firestore cloud database.

The database was a non-relational database with 3 collections and a few documents in each collection. The stretch challenge required a relationship between two collections, which the customers and reviews collections have. both include a name of a specific user that can be referenced to create a type of 'join'

# Development Environment

I used vscode, python, and firebase with firebase libraries.

# Useful Websites

Firestore docs were useful in helping create this code.
Stackoverflow helped with questions about firestore

- [Web Site Name](firebase.google.com/docs/firestore/)
- [Web Site Name](stackoverflow.com/)

# Future Work

- implement a way to edit reviews and customers based on their common name
- clean up code 
- create a ui or a web app so not using terminal