export class ui {
    constructor() { }

    displayMovies(data) {
        let cartona = ``;
        for (let i = 0; i < data.length; i++) {
            let { thumbnail, title, short_description, id, genre, platform } = data[i];
            cartona += `
                    <div class="itemHolder col-lg-3 col-md-6 py-2 " id = ${id}>
            <div class="item ">
                <figure class="mb-3">
                    <img src="${thumbnail}" class="w-100" alt="" srcset="">
                </figure>
                <figcaption class="mb-5">
                    <div class="title d-flex justify-content-between align-items-center ">
                        <h3>${title}</h3><span class="badge text-bg-primary p-2 ">Free</span>
                    </div>
                    <p class="smallDesc text-center card-text small">${short_description}</p>
                </figcaption>
            </div>
            <footer class="card-footer small d-flex justify-content-between p-2">
                <span class="badge badge-color">${genre}</span><span class="badge badge-color">${platform}</span>
            </footer>
        </div>
            `
        }
        document.getElementById('gamesViewer').innerHTML = cartona;
    }

    displayDetails(data) {
        let { title, thumbnail, status, description, platform, genre, freetogame_profile_url } = data;
        let cartona = `
        <div class="row gx-5 gameDetails justify-content-between position-relative">
        <h3>Details Game</h3>
        <div class="image col-lg-4 col-md-12 my-5">
            <img src="${(thumbnail != undefined) ? thumbnail : ""}" class="w-100" alt="">
        </div>
        <div class="desc col-lg-7 col-md-12">
            <h3>Title: ${data.title}</h3>
            <h5>category: <span class="badge text-bg-info p-2 ">${genre}</span></h5>
            <h5>Platform: <span class="badge text-bg-info p-2 ">${platform}</span></h5>
            <h5>Status: <span class="badge text-bg-info p-2 ">${status}</span></h5>
            <p>${description}</p>

        <a href="${freetogame_profile_url}" target = "__black" class="btn btn-outline-warning">Show Game</a>
        <i class="fa-solid fa-x icon" ></i>
        </div>
    </div>
    `
        document.getElementById('detailsScreen').innerHTML = cartona;
    }
}