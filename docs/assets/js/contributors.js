
let fetchDetails = async ({username, pull_request}) => {
    let res = await carrier.get(`https://api.github.com/users/${username}`);

    let user = res.response;

    let template = `
    <div class="contributors-column">
        <div class="contributors-card">
            <img src='${user.avatar_url}' alt="carrierjs-contributors" style="width:100%">
            <h1 class="contributors-name">${user.name}</h1>
            <p class="contributors-title">${user.bio || 'Contributor of CarrierJs'}</p>

            <div style="margin: 24px 0;">
                <a href="${user.html_url}" target="_blank"><i class="fab fa-github fa-fw"></i></a> 
            </div>

            <p>
                <a href="https://github.com/theritikchoure/carrierjs/pull/${pull_request}" target="_blank" class="btn btn-light contributors-card-button">
                    <i class="fas fa-arrow-alt-circle-right me-2"></i> View Merged PR
                </a>
            </p>
        </div>
    </div>
    `;

    return template;
}

let generateColumn = async () => {
    console.log(contributorsList.length);
    let row = document.getElementById('contributors-row');

    let column = '';

    for (let index = 0; index < contributorsList.length; index++) {
        let hello = await fetchDetails(contributorsList[index]);
        column = column+hello;
    }

    row.innerHTML = column;
}

generateColumn();