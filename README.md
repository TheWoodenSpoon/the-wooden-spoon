
# The Wooden Spoon

Website for The Wooden Spoon LLC.

## Getting Started

1. Install [WampServer](https://www.wampserver.com/en/) (or any other local web development environment).
2. In ```C:\wamp64\www```, clone this repo.
3. Start WampServer, and the website should be running on ```http://localhost/the-wooden-spoon/```.
4. Make changes to the files, usually ```index.html```, ```script.js```, ```style.css```, or adding image assets to the assets folder.
5. Sometimes changes to the site on your local environment don't show up because the site is cached, so force refresh the page with ```ctrl+f5``` or use an incognito tab.

## Contributing

### In General
- Every time you're done making changes for a single feature, commit it with a specific and clear commit message about what changed. After you're done making all your commits, push them. If you made a major change, put it on a separate branch; otherwise, it can go on master.
- After your changes are pushed, upload those changed files to ```hostmonster.com > advanced > file manager > public_html/```.
- Don't delete any commit history.

### CSS
If you're changing the CSS, try to keep the changes in ```style.css``` and not in html tags. And try to follow the table of contents in ```style.css```, or create your own section if you have to.

### Issues
If you have any ideas to improve the site but can't get to them, open an issue about it with a descriptive and concise title and explanation.

### FAQ
#### How do I change slide transition speed?
In _custom.js_ > `.mu-chef-nav`, 
  - `speed` = time in ms of the slide transition
  - `autoplaySpeed` = duration in ms for how long the slide stays
#### Why does the slideshow bounce backwards?
For some reason there needs to be an even amount of elements in the slideshow. Ensure that you don't have an odd number.
