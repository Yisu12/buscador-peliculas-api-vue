const app = Vue.createApp({
    data(){
        return{
            title: "API Películas Vue",
            movieData: {},
            movieTitle: "Spider Man",
        }
    },
    mounted(){
        this.getMovie();
    },
    methods: {
        async getMovie() {
            const search = this.movieTitle.toLowerCase().replace(/ /g, "+");
            
            const data = await fetch(`https://www.omdbapi.com/?apikey=91f16f5d&t=${search}`);

            const jsonData = await data.json();
            this.movieData = jsonData;
        }
    }
})
