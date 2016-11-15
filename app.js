var globals = {};
globals.user = firebase.auth().currentUser;
if(globals.user)
    $('#btn-account').text('로그아웃');

$('#btn-account').on('click', function () {
    var thiz = $(this);
    if(!globals.user) {
        firebase.auth().signInWithEmailAndPassword('ohenwkgdj@gmail.com', 'dmsgod32')
            .then(function () {
                globals.user = firebase.auth().currentUser;
                thiz.text('로그아웃');
            })
            .catch(function (error) {
                alert(error.message);
            });
    } else {
        firebase.auth().signOut().then(function() {
            globals.user = null;
            thiz.text('로그인');
        }, function(error) {
            alert(error.message);
        });
    }
});