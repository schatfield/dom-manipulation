

// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
// Obtain a reference the element with a class of dashed and remove it.
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
// Google tip: Find info about classList

const articleHeader = document.querySelector(".article__header");
console.log(articleHeader);

articleHeader.textContent = "Welcome to the Shawna blog";
console.log(articleHeader.textContent)

// querySelectorAll returns an array of HTML elements. So, the variable is now equal to an array- it is storing the array.
const allArticleHeaders = document.querySelectorAll(".article__header");



// array.method(function in method(parameter of function that will be affected))
allArticleHeaders.forEach(function(articleHeaderArrayItem) {
    // code in here will execute desired changes on each item in the array//
    // This is adding a class of "important" to each element in the array//
    // syntax description: function parameter name representing each element inside the array called "allArticleHeader".property- here it is "classlist".add-a method to add things.("the class you are adding goes here inside parenthesis after method")
    // parameter.property.add("classname")//
    articleHeaderArrayItem.classList.add("important");
});
// consolelog the variable that is holding the array to see all the things you did to it in the function above
console.log(allArticleHeaders);

//Obtain a reference the element with a class of dashed 
const dashedElement = document.querySelector(".dashed");

//Remove the class of dashed. 
// syntax description: variable storing the DOM reference.classListProperty.removeMethod("the class you want to remove goes here")

dashedElement.classList.remove("dashed");
console.log(dashedElement);

// // Obtain a reference to the element with a class of article_footer 
const articleFooter = document.querySelector(".article__footer");

// Add the class of goldenrod to the reference you obtained above
// syntax description: variable name that contains your reference.classListProperty.addMethod("the classname you are adding goes here")

articleFooter.classList.add("goldenrod");
console.log(articleFooter);
