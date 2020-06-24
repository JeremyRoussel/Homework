// Identify the Top Level ID

var here = document.querySelectorAll('#here')

//Create Navbar components and set their properties

var navbar = document.createElement('nav')
navbar.setAttribute('class', 'navbar navbar-expand navbar-dark bg-primary')

var navbarDiv = document.createElement('div')
navbarDiv.setAttribute('class', 'nav navbar-nav align-items-center')

var navbarAnchor1 = document.createElement('a')
navbarAnchor1.setAttribute('class', 'nav-item nav-link active h1 pr-5 font-weight-bold')
navbarAnchor1.setAttribute('href', "#")
navbarAnchor1.innerHTML = "HighOnCoding"

var navbarAnchor2 = document.createElement('a')
navbarAnchor2.setAttribute('class', 'nav-item nav-link active h4 pr-5')
navbarAnchor2.setAttribute('href', "#")
navbarAnchor2.innerHTML = "Home"

var navbarAnchor3 = document.createElement('a')
navbarAnchor3.setAttribute('class', 'nav-item nav-link h4 pr-5')
navbarAnchor3.setAttribute('href', "#")
navbarAnchor3.innerHTML = "Categories"

//Nest the navbar components together

here[0].appendChild(navbar)
navbar.appendChild(navbarDiv)
navbarDiv.appendChild(navbarAnchor1)
navbarDiv.appendChild(navbarAnchor2)
navbarDiv.appendChild(navbarAnchor3)

//Create a container

var container = document.createElement('div')
container.setAttribute('class', 'container m-5')

//Nest the container

here[0].appendChild(container)

//Create the Jumbotron

var jumbo = document.createElement('div')
jumbo.setAttribute('class', 'jumbotron d-flex flex-column p-4')
jumbo.setAttribute('height', 'fit-content')

var jumboHeading = document.createElement('hi')
jumboHeading.setAttribute('class', "display-4 text-left mb-5 flex-1 font-weight-bold")
jumboHeading.innerText = "Curse of the Current Reviews"

var jumboParagraph = document.createElement('p')
jumboParagraph.setAttribute('class', 'lead text-left p-2 flex-1')
jumboParagraph.innerText = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors: price, screenshot and reviews."

//Nest the Jumbotron components

container.appendChild(jumbo)
jumbo.appendChild(jumboHeading)
jumbo.appendChild(jumboParagraph)

//Create article container

var blog = document.createElement('div')
blog.setAttribute('class', 'd-flex flex-column align-items-start mb-4')

var title1 = document.createElement('div')
title1.setAttribute('class', 'text-color-blue')
title1.innerText = "Hello WatchKit"

var body1 = document.createElement('div')
body1.setAttribute('class', 'text-body p-2')
body1.innerText = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. the WatchKit framework enables the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit Framework and developing apps for the Apple Watch."

var baseline = document.createElement('div')
baseline.setAttribute('class', 'orange d-flex flex-row w-100')
baseline.setAttribute('width', '100%')

var comments1 = document.createElement('div')
comments1.setAttribute('class', 'p-2 text-white')
comments1.innerText = "12 comments"

var likes1 = document.createElement('div')
likes1.setAttribute('class', 'p-2 text-white')
likes1.innerText = "124 likes"

//Nest article container

container.appendChild(blog)
blog.appendChild(title1)
blog.appendChild(body1)
blog.appendChild(baseline)
baseline.appendChild(comments1)
baseline.appendChild(likes1)


//Create second article container

var blog2 = document.createElement('div')
blog2.setAttribute('class', 'd-flex flex-column align-items-start mb-4')

var title2 = document.createElement('div')
title2.setAttribute('class', 'text-color-blue')
title2.innerText = "Hello WatchKit"

var body2 = document.createElement('div')
body2.setAttribute('class', 'text-body p-2')
body2.innerText = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. the WatchKit framework enables the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit Framework and developing apps for the Apple Watch."

var baseline2 = document.createElement('div')
baseline2.setAttribute('class', 'orange d-flex flex-row w-100')
baseline2.setAttribute('width', '100%')

var comments2 = document.createElement('div')
comments2.setAttribute('class', 'p-2 text-white')
comments2.innerText = "12 comments"

var likes2 = document.createElement('div')
likes2.setAttribute('class', 'p-2 text-white')
likes2.innerText = "124 likes"

//Nest article container

container.appendChild(blog2)
blog2.appendChild(title2)
blog2.appendChild(body2)
blog2.appendChild(baseline2)
baseline2.appendChild(comments2)
baseline2.appendChild(likes2)