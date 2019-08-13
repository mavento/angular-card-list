import {Component, OnInit} from '@angular/core';
import {Item} from "../shared/item";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public items: Item[] = [];

    constructor() {
    }

    ngOnInit() {
        this.items = [
            {
                id: 0,
                name: "Lina Gonzales Ltd.",
                description: "definitiones nominavi signiferumque interpretaris atqui consectetuer definitiones contentiones semper conubia tibiqueis atqui consectetuer condimentum volutpat duo",
                city: "Quails Nest",
                key: "What",
                owner: "Ferdinand Owen",
                manager: "Leonel Stein"

            },
            {
                id: 1,
                name: "Vernon Tucker Ltd.",
                description: "feugiat dico contentiones semper conubia tibique referrentur, gloriatur sed his mnesarchum audire natum quod doctus condimentum volutpat duo repudiare vivamus montes interdum",
                city: "Smackover",
                key: "We",
                owner: "Cory Ferrell",
                manager: "Essie Carver"
            },
            {
                id: 2,
                name: "Neil Tyler Ltd.",
                description: "gloriatur sed his mnesarchum audire natum quod doctus condimentum, feugiat dico contentiones semper conubia tibique finibus dicit sapientem propriae dictumst volutpat duo repudiare vivamus montes",
                city: "Haddonfield",
                key: "Do",
                owner: "Angie Cross",
                manager: "Blanche Klein"
            },
            {
                id: 3,
                name: "Darla Graham Ltd.",
                description: "posse deterruisset nullam theophrastus viderer definitiones nominavi signiferumque interpretaris atqui consectetuer audire natum quod doctus volutpat duo repudiare vivamus montes interdum",
                city: "Note",
                key: "Do",
                owner: "Dustin Campos",
                manager: "Angelia Guthrie"
            },
            {
                id: 4,
                name: "Corrine Patrick Ltd.",
                description: "postulant simul finibus efficitur sociis finibus dicit sapientem propriae dictumst volutpat duo repudiare vivamus montes propriae dictumst volutpat duo repudiare vivamus montes interdum postulant simul finibus ",
                city: "Vasilia",
                key: "Is",
                owner: "Corina Rios",
                manager: "Tracie Wolfe"
            },
            {
                id: 5,
                name: "Billie Bray Ltd.",
                key: "What",
                description: "propriae dictumst volutpat duo repudiare vivamus montes interdum postulant simul finibus efficitur sociis finibus dicit sapientem theophrastus viderer definitiones nominavi signiferumque ",
                city: "New Diggings",
                owner: "Rosie Villarreal",
                manager: "Rickey Marshall"
            }
        ]
    }
}
