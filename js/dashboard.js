// 1. Count the number of records in the "Current Quarter Details" table.
var rowCount = document.querySelectorAll('TBODY TR')
// console.log(rowCount)
console.log('|| Question 1: Row count ||')
console.log(rowCount.length)

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.
var images = document.querySelectorAll('img')
console.dir(images)
images.forEach(function(image) {

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    image.setAttribute('src', 'http://unsplash.it/400?image=' + Math.round(getRandomArbitrary(1,42)))
})

console.log('|| Question 2: 4 images to seasons set to random 1 - 42 image numbers, so some repeats may occur')
// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.


// 4. Change the currently selected left side menu item from Overview to Reports.


// 5. Set the default search input value to "Q4 sales".


// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.


// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>


// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.


// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]


// 10. Make each word in the table capitalized.
