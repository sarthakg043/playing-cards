let cards = [
    "SVG cards/king_of_hearts.svg",
    "SVG cards/queen_of_hearts.svg",
    "SVG cards/jack_of_hearts.svg",
    "SVG cards/ace_of_hearts.svg",
    "SVG cards/2_of_hearts.svg",
    "SVG cards/3_of_hearts.svg",
    "SVG cards/4_of_hearts.svg",
    "SVG cards/5_of_hearts.svg",
    "SVG cards/6_of_hearts.svg",
    "SVG cards/7_of_hearts.svg",
    "SVG cards/8_of_hearts.svg",
    "SVG cards/9_of_hearts.svg",
    "SVG cards/10_of_hearts.svg",
    "SVG cards/king_of_diamonds.svg",
    "SVG cards/queen_of_diamonds.svg",
    "SVG cards/jack_of_diamonds.svg",
    "SVG cards/ace_of_diamonds.svg",
    "SVG cards/2_of_diamonds.svg",
    "SVG cards/3_of_diamonds.svg",
    "SVG cards/4_of_diamonds.svg",
    "SVG cards/5_of_diamonds.svg",
    "SVG cards/6_of_diamonds.svg",
    "SVG cards/7_of_diamonds.svg",
    "SVG cards/8_of_diamonds.svg",
    "SVG cards/9_of_diamonds.svg",
    "SVG cards/10_of_diamonds.svg",
    "SVG cards/king_of_clubs.svg",
    "SVG cards/queen_of_clubs.svg",
    "SVG cards/jack_of_clubs.svg",
    "SVG cards/ace_of_clubs.svg",
    "SVG cards/2_of_clubs.svg",
    "SVG cards/3_of_clubs.svg",
    "SVG cards/4_of_clubs.svg",
    "SVG cards/5_of_clubs.svg",
    "SVG cards/6_of_clubs.svg",
    "SVG cards/7_of_clubs.svg",
    "SVG cards/8_of_clubs.svg",
    "SVG cards/9_of_clubs.svg",
    "SVG cards/10_of_clubs.svg",
    "SVG cards/king_of_spades.svg",
    "SVG cards/queen_of_spades.svg",
    "SVG cards/jack_of_spades.svg",
    "SVG cards/ace_of_spades.svg",
    "SVG cards/2_of_spades.svg",
    "SVG cards/3_of_spades.svg",
    "SVG cards/4_of_spades.svg",
    "SVG cards/5_of_spades.svg",
    "SVG cards/6_of_spades.svg",
    "SVG cards/7_of_spades.svg",
    "SVG cards/8_of_spades.svg",
    "SVG cards/9_of_spades.svg",
    "SVG cards/10_of_spades.svg",
    "SVG cards/red_joker.svg",
    "SVG cards/black_joker.svg"
];

let next_btn = document.querySelector('#next_btn');
let card1 = document.querySelector('#card_1');
let card2 = document.querySelector('#card_2');
let index = [51,36,49,15,19,27,9,46,30,21,39,20,28,41,42,37,40,50,6,11,1,33,12,31,2,53,44,45,7,32,8,52,10,47,24,13,5,35,43,18,48,23,29,14,38,22,26,3,16,34,17,25,4];

let i =0;
next_btn.addEventListener('click', function(){
    if(i==10){
        document.querySelector("#playing_area").style.display = "none";
        document.querySelector(".win_board").style.display = "flex";
    }
    else if(i>27){
        i=0;
    }
    else if(i==11){
        document.querySelector("#playing_area").style.display = "flex";
        document.querySelector(".win_board").style.display = "none";
    }
    card1.attributes.src.nodeValue = cards[index[i]];
    card2.attributes.src.nodeValue = cards[index[52-i]];
    i++;
});
