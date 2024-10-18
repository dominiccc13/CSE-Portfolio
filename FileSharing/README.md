# Overview

This was a first attempt at a web app using the Django framework. My purpose was to create a web app like dropbox that allows files to be uploaded and downloaded from a database. My goal was to become acquainted with the django framework and back-end work, including databases.

{Provide a description the web app that you wrote. Describe how to start a test server on your computer and what website to open up to see the first page of the app.}

Using django, you will need to run "py manage.py runserver" and then ctrl+click on the IP address. Then, navigate the website. (At this current point, you will have to return to the home page each time for the links in the header to work properly.)

The website allows you to upload files and download files, with 3 html pages.

{Provide a link to your YouTube demonstration.  It should be a 4-5 minute demo of the software running (starting the server and navigating through the web pages) and a walkthrough of the code.}

[Software Demo Video](https://youtu.be/qTVl5g6wrtM)

# Web Pages

One web page displays all content and links to an upload page. Another page, accessed through the header, allows downloading only from files uploaded to the database. The home page allows for both. All content is generated through django views functions.

# Development Environment

I used VSCode and the django framework which relies on the Python language. 

No external libraries were utilized other than those associated with django. Several base python libraries, such as os, were imported and utilized. 

# Useful Websites

{Make a list of websites that you found helpful in this project}
* [Youtube User Codemycom ](https://www.youtube.com/@Codemycom)
* [Django Documentation](https://docs.djangoproject.com/en/5.1/)

# Future Work

* Header links will need to work
* For images and other similar files, display a thumbnail
* Improve appearance