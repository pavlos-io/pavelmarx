(function(){$(function(){return $(window).width()>=960&&$(".bio").innerHeight($(window).innerHeight()),$.fn.emailForm=function(){return $(this).find($(".send-email")).click(function(e){return function(n){var i,t;return n.preventDefault(),t=$(e).find($(".sender")).val().trim(),i=$(e).find($(".msg")).val().trim(),t.length&&i.length?$.ajax({url:"https://formspree.io/maltsevp@gmail.com",method:"POST",data:{message:i,email:t},dataType:"json",error:function(){},success:function(){return $(e).find($(".sender")).val(""),$(e).find($(".msg")).val("")}}):console.log("else")}}(this))},$(".bar-email").emailForm(),$(".footer-email").emailForm()})}).call(this);