// (function() {
//   var documentEl = $(document),
//       parallaxBox = $('div.header-box');
//
//       documentEl.on('scroll', function() {
//         var currScrollPos = documentEl.scrollTop();
//         parallaxBox.css('background-position', '0 ' + -currScrollPos/4 + 'px');
//       })
// })();
$(function(){

    $("#typed").typed({
        // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
        stringsElement: $('#typed-strings'),
        typeSpeed: 90,
        backDelay: 990,
        loop: false,
        contentType: 'text', // or text
        // defaults to false for infinite loop
        // defaults: false,

        loopCount: false,
        callback: function(){ foo(); },
        resetCallback: function() { newTyped(); }
    });

    $(".reset").click(function(){
        $("#typed").typed('reset');
    });

});

function newTyped(){ /* A new typed object */ }

function foo(){ console.log("Callback"); }
