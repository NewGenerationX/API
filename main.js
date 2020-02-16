$(function() {

    var $container = $("#container");
    var $addCommentBtn = $("#add-comment-btn");
    var $name = $("#name-inp");
    var $comment = $("comment-inp")

    $.ajax({
        type: 'GET',
        url: 'comments.json',
        success: function(data) {
            console.log('data: ', data);
            $.each(data, function(i, data) {
                $container.append('<div>' + '<h3>' + data.author + '</h3>' + '<p>' + data.message + '</p>');
            });
        }
    });

    $addCommentBtn.on('click', (function(i) {

        i++

        var message = {
            author: $name.val(),
            message: $comment.val(),
        } 

        $.ajax({
            type: 'POST',
            url: 'comments.json',
            datatype: 'JSON',
            data: (message),
            success: function(newMessage) {
                $container.append('<div>' + '<h3>' + newMessage.author + '</h3>' + '<p>' + newMessage.message + '</p>');

            },
        });
    }));
});