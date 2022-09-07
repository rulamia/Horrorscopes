function monthChanged(x) {
    var days = 0
    switch (parseInt(x)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30
            break;
        case 2:
            days = 29;
            break;
        default:
            console.log("Unknown month given.")
            return;
    }
    $('#daySelect').children().each(function (index, elem) { elem.remove() })
    for (var i = 0; i <= days; i++) {
        $('#daySelect').append('<option value="' + i + '">' + i + '</option>');
    }
}

function dayChanged(x) {
    var birthMonth = parseInt($('#monthSelect').val())
    var birthDay = parseInt(x)

    var signRanges = [
        { "startMonth": 1, "endMonth": 2, "startDay": 20, "endDay": 18, "sign": "Aquarius" },
        { "startMonth": 2, "endMonth": 3, "startDay": 19, "endDay": 20, "sign": "Pisces" },
        { "startMonth": 3, "endMonth": 4, "startDay": 21, "endDay": 19, "sign": "Aries" },
        { "startMonth": 4, "endMonth": 5, "startDay": 20, "endDay": 20, "sign": "Taurus" },
        { "startMonth": 5, "endMonth": 6, "startDay": 21, "endDay": 20, "sign": "Gemini" },
        { "startMonth": 6, "endMonth": 7, "startDay": 21, "endDay": 22, "sign": "Cancer" },
        { "startMonth": 7, "endMonth": 8, "startDay": 23, "endDay": 22, "sign": "Leo" },
        { "startMonth": 8, "endMonth": 9, "startDay": 23, "endDay": 22, "sign": "Virgo" },
        { "startMonth": 9, "endMonth": 10, "startDay": 23, "endDay": 22, "sign": "Libra" },
        { "startMonth": 10, "endMonth": 11, "startDay": 23, "endDay": 21, "sign": "Scorpio" },
        { "startMonth": 11, "endMonth": 12, "startDay": 22, "endDay": 21, "sign": "Sagittarius" },
        { "startMonth": 12, "endMonth": 1, "startDay": 22, "endDay": 19, "sign": "Capricorn" },
    ]

    var sign = "Unknown"
    for (var i = 0; i < signRanges.length; i++) {
        if (birthMonth == signRanges[i].startMonth) {
            if (birthDay >= signRanges[i].startDay) {
                sign = signRanges[i].sign
                break
            }
        } else if (birthMonth == signRanges[i].endMonth) {
            if (birthDay <= signRanges[i].endDay) {
                sign = signRanges[i].sign
                break
            }
        }
    }
    var signDiv = $('#sign')
    if (signDiv) {
        signDiv.remove()
    }
    var statsDiv = $('#stats')
    if (statsDiv) {
        statsDiv.remove()
    }
    $('#container').append('<div id="sign" class="card m-3"><p class="text-center align-middle">Hello ' + sign + '</p></div>')
    $('#container').append('<table id="stats" class="table" style="background: #ffffff"><thead><tr><th scope="col">Name</th><th scope="col">Birth Date</th><th scope="col">Confirmed Kills</th></tr></thead><tbody id="statsBody"></tbody></table>')
    var killersWithSameSign = []
    for (var i = 0; i < killers.length; i++) {
        if (killers[i].zodiac_sign && killers[i].zodiac_sign.toUpperCase() === sign.toUpperCase()) {
            killersWithSameSign.push(killers[i])
        }
    }
    killersWithSameSign.sort((a, b) => { return b.proven_victims - a.proven_victims })
    for (var i = 0; i < 10; i++) {
        $('#statsBody').append("<tr><td>" + killersWithSameSign[i].name + "</td><td>" + killersWithSameSign[i].born + "</td><td>" + killersWithSameSign[i].proven_victims + "</td></tr>")
    }
}

$(document).ready(function () {
    var months = [
        { "value": 1, "name": "January" },
        { "value": 2, "name": "February" },
        { "value": 3, "name": "March" },
        { "value": 4, "name": "April" },
        { "value": 5, "name": "May" },
        { "value": 6, "name": "June" },
        { "value": 7, "name": "July" },
        { "value": 8, "name": "August" },
        { "value": 9, "name": "September" },
        { "value": 10, "name": "October" },
        { "value": 11, "name": "November" },
        { "value": 12, "name": "December" }
    ];
    for (var index = 0; index < months.length; index++) {
        $('#monthSelect').append('<option value=' + months[index].value + '>' + months[index].name + '</option>');
    }
    monthChanged(1)

    var divElement = document.getElementById('viz1662341474918'); 
    var vizElement = divElement.getElementsByTagName('object')[0]; 
    vizElement.style.width = '80%'; 
    vizElement.style.height = '1000px'; 
    var scriptElement = document.createElement('script'); 
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);

    openTab(document.getElementsByClassName("tabcontent")[0], 'Main')
});
function openTab(evt, Name) {
    console.log(evt)
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(Name).style.display = "block";
    evt.currentTarget.className += " active";
}