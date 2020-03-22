var box = [];

for (let i = 0; i < 9; i++) {
    box[i] = '<img class="box" src="img/img-' + i + '.jpg">';
    document.querySelector('#gallery').innerHTML += box[i];
}