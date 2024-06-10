document.addEventListener('DOMContentLoaded', async function() {
    const nameElement = document.querySelector("#name");
    const usernameElement = document.querySelector("#username");
    const avatarElement = document.querySelector("#avatar");
    const reposElement = document.querySelector("#repos");
    const followersElement = document.querySelector("#followers");
    const followingElement = document.querySelector("#following");

    fetch('https://api.github.com/users/lyannabueno')

    try {
        const response = await fetch('https://api.github.com/users/lyannabueno');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const json = await response.json();

        nameElement.innerHTML = json.name
        usernameElement.innerHTML = json.login
        avatarElement.innerHTML = json.avatar_url
        followingElement.innerHTML = json.following
        followersElement.innerHTML = json.followers
        reposElement.innerHTML = json.public_repos
    } catch(erro) {
        alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde!")
    } finally {
        console.log('Operação fetch finalizada.');
    }
})