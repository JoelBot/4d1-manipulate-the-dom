var body = document.body

console.log(body)

// remove array num to see all
var h1 = document.body.childNodes[3]
console.log(h1)

// gets or sets inside content of a tag. h1 in this case
var helloWorld = h1.innerHTML
console.log(helloWorld)

// live connecting and swapping in a new value using the below
h1.innerHTML = 'Poopie'
// console.log(helloWorld)

console.log(h1.childNodes)

// .dir gives a directory of metadata
console.dir(h1)

// Moving on to more precise ways of getting to data
var helloH1 = document.getElementById('hello')
console.log(helloH1)

// use with nav items with classes
var navItems = document.getElementsByClassName('nav-item')
console.log(navItems)

// use as preferred method as newer and nicer
// can find classes (.class), ids (#idName), etc.  Uses CSS names
// var navItems = document.querySelectorAll('.nav-item')
var navItems = document.querySelectorAll('body *') // updated for forEach example line 49
// can use querySelectorAll, but will bring back an array so need navItemsId[0] to display same data
// querySelector returns the first value found, may not be as expected if not eplicit like below
var navItemsId = document.querySelector('#hello')
console.log(navItems)
console.log(navItemsId)

// this runs like it is an array, but it isn't going to work
// it looks like an array but it is not
// console.log(navItems.includes('li'))

// a hack to get array like actions out of navItems
// converts node list to an array
// console.log(Array.from(navItems).querySelector('li')) // doesn't work as is


navItems.forEach(function(navItem) {
    // console.dir(navItem) //lists all metadata on the item to find nodeName or tagName properties
    // console.log(navItem.tagName) //returns tagName same as below
    // console.log(navItem.nodeName) //returns nodeName
    if (navItem.tagName === 'LI') {
        navItem.style.color = 'red'
    }
})

// get items with certain classes like active

navItems.forEach(function(navItem) {
    navItem.addEventListener('mouseover', function(e) {
        e.target.classList.add('red')
    })
    // removes red
    // navItem.addEventListener('click', function(e) {
    //         e.target.remove('red')
    // })
    // removes red
    navItem.addEventListener('mouseout', function(e) {
            e.target.classList.remove('red')
    })

    // if (navItem.tagName === 'LI' && navItem.classList.contains('active')) {
    //     // navItem.style.color = 'green'
    //     navItem.classList.add('red')
    // }
})


var navItems = document.querySelectorAll('.nav-item')

navItems.forEach(function(navItem) {

    console.log(navItem.className)
    console.log(navItem.tagName)
    console.log(navItem.id)
    console.log(navItem.getAttribute('title'))
    console.log(navItem.setAttribute('title','Foo'))
    console.log(navItem.getAttribute('data-details'))
    navItem.innerHTML = navItem.getAttribute('data-details') // an assignment
    navItem.innerHTML = '<a href="http://google.com">' + navItem.getAttribute('data-details') + '</a>' // an assignment
    console.log(navItem.innerHTML)
})

var searchInput = document.getElementById('search') // sets search input box as variable to be manipulated and altered below in = statements
// var searchInput = document.querySelector('#search') // example of querySelector format

searchInput.setAttribute('value', 'pizza parties in my area') // same as below
searchInput.value = 'movies near me'


alert(searchInput.value)
alert(searchInput.getAttribute('value')) // same as above
