# Simon Web Dev (made up thing)

## What Is It

This website is for a university project. I made it to show off my web programming skills.

## Imaginary Business

*Simon Web Dev* is a small imaginary business where I build websites of various sizes for people that want an online
store, or a blog, or simply a web presence. I imagine that I start this business as a freelancer and later on
hire some people for helping me build websites faster and, in this way, grow a nice team.

## Development

I used all three basic languages: `HTML`, `CSS` and `JavaScript`, for the development of this website. I also
utilized the CSS `Bootstrap` framework, without which I wouldn't have been able to create anything good. Bootstrap
helped me create responsive layouts for both desktop and mobile. And I used `jQuery` a bit to more easily inject
HTML code at load time into my pages, in order to keep the header and the footer sections self-contained and separate.

I needed to write a bit of JavaScript code to also indicate in the navigation bar which page is currently active.

Towards the end of the development, after I uploaded the source files to the webserver, I realized that using absolute
paths everywhere wasn't going to work, as the web server hosts multiple users each with their own *public_html*
directory. The solution was to only use relative paths. But a consequence of this was that I couldn't keep my HTML
files organized in an *html* directory, and so I had to move them out.

## In The Wild

I tested the website on a `Fedora Linux` desktop computer, on `Mozilla Firefox 121.0` and on `Google Chrome 120.0`,
`1920x1080` resolution.

And, of course, I also tested it on mobile, on `Mozilla Firefox for Android 121.0.1`, `2340x1080` resolution,
`5.9"` size. It looks all right.
