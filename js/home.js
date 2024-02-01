import { ui } from "./ui.js";
import { Details } from "./details.js";
export class Home {
    constructor() {
        document.querySelectorAll('.nav-link').forEach(item => {
            item.addEventListener("click", () => {
                document.querySelector('.selectedCategory').classList.remove('selectedCategory');
                item.classList.add('selectedCategory')
                this.getGames(item.getAttribute('category'));
            });
        });
        this.ui = new ui();
        this.loader = document.querySelector('.lds-hourglass');
        this.games = document.getElementById('games');
        this.gamedetails = document.getElementById('details');
    }


    async getGames(category = 'mmorpg') {
        this.loader.classList.remove('d-none');
        this.games.classList.add('d-none');
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
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
            this.loader.classList.add('d-none');
            this.games.classList.remove('d-none');
            this.ui.displayMovies(result);
            this.makeItClickable();
        } catch (error) {
            console.error(error);
        }
    }

    makeItClickable() {
        document.querySelectorAll('.itemHolder').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.getAttribute('id');
                this.showDetails(id);
            }
            )
        })
    }


    showDetails(id) {
        const details = new Details();
        details.getDetails(id);
        document.getElementById("games").classList.add("d-none");
        document.getElementById("details").classList.remove("d-none");
    }


}