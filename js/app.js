// Helper function to add event listener
// Easy to add additional listeners
function addEvent(el, event, callback) {
  if ('addEventListener' in el) {
    el.addEventListener(event, callback, false);
  } else {
    el['e' + event + callback] = callback;
    el[event + callback] = function() {
      el['e' + event + callback](window.event);
    };
    el.attachEvent('on' + event, el[event + callback]);
  }
}


// Degree option and major sorter


(function(){
  var type = document.getElementById('degreeType');
  var model = document.getElementById('major');
  var bachelors = {
    accounting: 'Accounting',
    biblical: 'Biblical Studies',
    computerScience: 'Computer Science',
    english: 'English',
    nursing: 'Nursing',
    zoology: 'Zoology'
  };
  var masters = {
    accounting: 'Accounting',
    business: 'Business Administration',
    marketing: 'Marketing',
    psychology: 'Psychology',
    sport: 'Sports Managment'
  };
  var doctoral = {
    education: 'Education',
    nursing: 'Nursing Practice',
    osteopathic: 'Osteopathic Medicine'
  };

  addEvent(type, 'change', function() {
    var models = getModels(this.value);
    var options = '<option value="">Please select your major choice</option>';
    for (var key in models) {
      options += '<option value="' + key + '">' + models[key] + '</option>';
    }
    model.innerHTML = options;
  });

  function getModels(degreeType) {
    if (degreeType === 'bachelors') {
      return bachelors;
    } else if (degreeType === 'masters') {
      return masters;
    } else if (degreeType === 'doctoral') {
      return doctoral;
    }
  }
}());


// Validate form


function validateForm() {
    var first   = document.getElementById('fName');
    var last   = document.getElementById('lName');
    var email = document.getElementById('email');
    var tel = document.getElementById('tel');
    var add = document.getElementById('address');
    var degree = document.getElementById('degreeType');
    var major = document.getElementById('major');

    if ( ! degree.value ) {
        alert("Choose a degree type");
        degree.focus();
        return false;
    }

    if ( ! major.value ) {
        alert("Choose a major");
        major.focus();
        return false;
    }

    if ( ! first.value ) {
        alert("First name required");
        first.focus();
        return false;
    }

    if ( ! last.value ) {
        alert("Last name required");
        last.focus();
        return false;
    }

    if (! email.value)
    {
        alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf("@", 0) < 0)
    {
        alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf(".", 0) < 0)
    {
        alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if ( ! tel.value ) {
        alert("Telephone required");
        tel.focus();
        return false;
    }
    if ( ! add.value ) {
        alert("Address required");
        address.focus();
        return false;
    }
    return true;
}
