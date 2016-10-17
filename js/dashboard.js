// 1. Count the number of records in the "Current Quarter Details" table.
var rowCount = document.querySelectorAll('TBODY TR')
// console.log(rowCount)
console.log('|| Question 1: Row count ||')
console.log(rowCount.length)

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.
var images = document.querySelectorAll('img')
// console.dir(images)
images.forEach(function(image) {

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    image.setAttribute('src', 'http://unsplash.it/400?image=' + Math.round(getRandomArbitrary(1,42)))
    image.setAttribute('alt', 'an image of either Winter, Spring, Summer, or Fall') //cheap and need to fix.
})

console.log('|| Question 2: 4 images to seasons set to random 1 - 42 image numbers, so some repeats may occur ||')
// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.
randomCurrencyAmount = document.querySelectorAll('.text-muted')
// console.log(randomCurrencyAmount)
randomCurrencyAmount.forEach(function(price) {

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    price.innerHTML = accounting.formatMoney(getRandomArbitrary(1,1000000))
})
console.log('|| Question 3: add randomly generated money value under images ||')
// 4. Change the currently selected left side menu item from Overview to Reports.
leftNavActiveSwitchaARoo = document.querySelectorAll('.nav-sidebar a')
// console.log(leftNavActiveSwitchaARoo)
leftNavActiveSwitchaARoo.forEach(function(leftNav){
    if (leftNav.innerText.includes('Overview')) {
        leftNav.parentNode.classList.remove('active')
    }
    else if (leftNav.innerHTML === 'Reports'){
        leftNav.parentNode.classList.add('active')
    }
})

console.log('|| Question 4: Switched active from Overview to Reports ||')
// 5. Set the default search input value to "Q4 sales".
var searchText = document.querySelector('input')
// console.log(searchText)
searchText.setAttribute('placeholder','Q4 sales')

console.log('|| Question 5: Added Q4 sales as default placeholder ||')

// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
var tableHover = document.querySelector('table')
// console.log(tableHover)
tableHover.classList.add('table-hover')

console.log('|| Question 6: added table-hover to the table tag class ||')
// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
 var successRows = document.querySelectorAll('tbody tr')
 // console.log(successRows)
 successRows.forEach(function(row) {
    if (row.rowIndex === 7 || row.rowIndex === 10) {
        row.classList.add('success')
    }
 })

console.log('|| Question 7: Add Success to table rows 7 and 10 ||')
// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.
var headerNames = document.querySelectorAll('thead th')
// console.log(headerNames)
headerNames.forEach(function(name) {
    if (name.cellIndex === 0) {
        name.innerHTML = 'ID'
    }
    else if (name.cellIndex === 1) {
        name.innerHTML = 'First Name'
    }
    else if (name.cellIndex === 2) {
        name.innerHTML = 'Last Name'
    }
    else if (name.cellIndex === 3) {
        name.innerHTML = 'Department'
    }
    else if (name.cellIndex === 4) {
        name.innerHTML = 'Client'
    }
    else{alert("HELP NO MORE HEADERS")}
})

console.log("|| Question 8:  Changed headers of table to be accurate to specifications ||")
// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]

var collectionOfTableDatum = document.querySelectorAll('table')
console.log(collectionOfTableDatum)
// 10. Make each word in the table capitalized.
var tableTextCollection = document.querySelectorAll('td')
// console.log(tableTextCollection)
tableTextCollection.forEach(function(tableText) {
    tableText.innerHTML = tableText.innerHTML.toUpperCase()
})
console.log('|| Question 10: Capitalized all td value text ||')
