'use strict'

$(document).ready(function () {
    var count = 0;
    var counter = setInterval(function () {
        if (count < 101) {
            $('.count').text(count + '%');
            $('.loader').css('width', count + '%');
            $('.allwebsite').css('display','none')
            count++
        }
        else {
            $('.allwebsite').css('display','block')

            clearInterval(counter)
        }
    }, 20)
})


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('#header').addClass('activeheader');

        }
        else{
            $('#header').removeClass('activeheader');
        }
    })
})

$(document).ready(function () {
    $('.counter').each(function () {
        var cnt = $(this);
        var countTo = cnt.attr('data-count');

        $({ countNum: cnt.text() }).animate({
            countNum: countTo
        },
            {
                duration: 5000,
                easing: 'linear',
                step: function () {
                    cnt.text(Math.floor(this.countNum));
                },
                complete: function () {
                    cnt.text(this.countNum)
                }

            }

        )
    })
})
var sidebar = document.getElementById('sidebar');
function openmenu() {
    sidebar.classList.toggle('side-active')
}

