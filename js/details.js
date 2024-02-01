import { ui } from "./ui.js";

export class Details {
    constructor() {
        this.ui = new ui()
        this.loader = document.querySelector('.lds-hourglass');
    }

    async getDetails(id) {
        this.loader.classList.remove('d-none');
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3a61efc06cmsh7b9027e98481a51p120611jsnbf3d613a34e4',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(result); 
            this.ui.displayDetails(result);
            this.loader.classList.add('d-none');
            document.querySelector('.icon').addEventListener('click', function () {
                document.getElementById('details').classList.add('d-none');
                document.getElementById('games').classList.remove('d-none');
            });
        } catch (error) {
            console.error(error);
        }
    }
}