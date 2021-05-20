var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;
function likePhoto(numPhoto) {
    counter1++
    document.getElementById("likeCount1").innerHTML = counter1;
    if (numPhoto === 1) {
        counter1++
        document.getElementById("likeCount1").innerHTML = counter1;
    } else if (numPhoto === 2) {
        counter2++
        document.getElementById("likeCount2").innerHTML = counter2;
    } else if (numPhoto === 3) {
        counter3++
        document.getElementById("likeCount3").innerHTML = counter3;
    } else if (numPhoto === 4) {
        counter4++
        document.getElementById("likeCount4").innerHTML = counter4;
    } else {
        counter5++
        document.getElementById("likeCount5").innerHTML = counter5;
    }
}
user = {
    "name": "Riley",
    "name_last": "Davis",
    'followers': ['amy', 'eve', 'sam', 'ceddrick', 'dennis', 'brandon', 'zekhi'],
    'profile_pic': "https://i.pinimg.com/originals/9f/aa/a1/9faaa1fedc94c355a4256ba6207c7714.png",
    'bio': 'hiii',
}
setTimeout(function(){ document.getElementById("name").innerHTML = user.name;}, 3000);
setTimeout(function(){ document.getElementById("name_last").innerHTML = user.name_last;}, 3000);
setTimeout(function(){ document.getElementById("followers").innerHTML = "Followers: " + user.followers.length;}, 3000);
setTimeout(function(){ $("#profile_pic").attr("src", user.profile_pic);}, 3000);