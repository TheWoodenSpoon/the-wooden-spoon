// map colors for bootstrap alerts
var alertColor = {'blue': 'alert-info',
                  'green': 'alert-success',
                  'red': 'alert-danger',
                  'yellow': 'alert-warning',
                }


// run multiple funcs when the page loads
window.onload = function (event) {
  schedule(showAnnouncement,
           '4-8-2023',
           '4-10-2023',
           'We will be open on Easter, Sunday April 9th. Please join us for Easter brunch!',
           'green');
  schedule(showAnnouncement,
           '5-11-2023',
           '5-15-2023',
           'We will be open on Mother\'s Day, Sunday May 14th. Come join us!',
           'blue');
  schedule(showAnnouncement,
           '12-17-2023',
           '01-02-2024',
           'We will be closed Christmas Day 12/25 and New Years Day 01/01. Happy Holidays!',
           'blue');
  hideSpecials();
}

function hide(elementById) {
    var element = document.getElementById(elementById);
    element.style.display = "none";
}

function show(elementById) {
    var element = document.getElementById(elementById);
    element.style.display = "block";
}

function showAnnouncement(message, color) {
    // change banner color
    $('#announcement').removeClass("alert-danger").addClass(alertColor[color]);

    // change banner message
    element = document.getElementById('announcement-message');
    element.innerHTML = message

    show('announcement');
}

// func: function that we want to run during specific dates.
//       Date specifies 12AM, the beginning of that day
// dateFrom: YYYY-MM-DD formatted string
// dateTo: YYYY-MM-DD formatted string
// ...args: to pass arbitrary number of arguments to func
function schedule(func, dateFromStr, dateToStr, ...args) {
  let currDate = new Date();
  let dateFrom = new Date(dateFromStr);
  let dateTo = new Date(dateToStr);

  if (currDate >= dateFrom && currDate <= dateTo) {
    func(...args);
  }
}

function hideSpecials() {
  hide('specials-tab');
  hide('specials');

  breakfast_tab = document.getElementById('breakfast-tab');
  breakfast = document.getElementById('breakfast');

  // selects the breakfast tab, making it appear white
  breakfast_tab.classList.add('active');

  // displays the breakfast menu
  breakfast.className = 'tab-pane fade in active';
}

function changeMenuPDF(menuTabNameStr)
{
  let menu_link = document.getElementById('menu_pdf');
  if (menuTabNameStr == 'breakfast')
  {
    menu_link.href = "assets\\pdf\\menu.pdf";
    menu_link.textContent = "View Breakfast Menu PDF";
  }
  else if (menuTabNameStr == 'lunch')
  {
    menu_link.href = "assets\\pdf\\menu.pdf";
    menu_link.textContent = "View Lunch Menu PDF";
  }
  else if (menuTabNameStr == 'catering')
  {
    menu_link.href = "assets\\pdf\\catering-menu.pdf";
    menu_link.textContent = "View Catering Menu PDF";
  }
  else
  {
    console.log('Given menuTabNameStr is not supported');
  }

  // return false to prevent the page from scrolling
  return false;
}
