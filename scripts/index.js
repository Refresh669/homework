'use strict';

let birthYear = prompt('В каком году вы родились?');
if (birthYear === null) {
    alert('Жаль, что Вы не захотели ввести свой год рождения');
} else {
    let city = prompt(`В каком городе вы живете?`);
    if (city === null) {
        alert('Жаль, что Вы не захотели ввести свой город');
    } else {
        let favoriteSport = prompt(`Какой ваш любимый вид спорта?`);
        if (favoriteSport === null) {
            alert('Жаль, что Вы не захотели ввести свой любимый вид спорта');
        } else {
            let age = 2023 - birthYear;
            let capital;
            switch (city) {
                case 'Киев':
                    capital = 'Ты живешь в столице Украины';
                    break;
                case 'Москва':
                    capital = 'Ты живешь в столице России';
                    break;
                case 'Минск':
                    capital = 'Ты живешь в столице Беларуси';
                    break;
                default:
                    capital = `Ты живешь в городе ${city}`;
                    break;
            }
            let champion;
            switch (favoriteSport) {
                case 'футбол':
                    champion = 'Лионель Месси';
                    break;
                case 'баскетбол':
                    champion = 'Леброн Джеймс';
                    break;
                case 'теннис':
                    champion = 'Рафаэль Надаль';
                    break;
                default:
                    champion = 'неизвестного спортсмена';
                    break;
            }
            alert(`Ваш возраст: ${age} лет\n${capital}\nКруто! Хочешь стать ${champion}?`);
        }
    }
}