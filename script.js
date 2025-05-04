function findNonFollowers() {
    const followersTextarea = document.getElementById("followers").value;
    const followingTextarea = document.getElementById("follow").value;

    const followers = parseUsersList(followersTextarea);
    const following = parseUsersList(followingTextarea);

    console.log('Followers:', followers); 
    console.log('Following:', following);

    const usersNotFollowingBack = getUsersNotFollowingBack(followers, following);

    displayUsers(usersNotFollowingBack);
}

function parseUsersList(text) {
    return text.trim().split("\n")
        .map(user => user.trim().toLowerCase()); 
}

function getUsersNotFollowingBack(followers, following) {
    return following.filter(user => !followers.includes(user));
}

function displayUsers(usersNotFollowingBack) {
    usersNotFollowingBack.forEach(user => {
        console.log(user); 
    });
}

