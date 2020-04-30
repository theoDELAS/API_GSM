let price_tel = 459
let size_screen = 7
let type_ecran = "AMOLED"
let os = "Android"
let ram = 10
let release_year = 2019
let storage_tel = 256

let this_year = new Date().getFullYear()

let pts_tel = 10
let pts_size = 0
let pts_type = 0
let pts_os = 0
let pts_ram = 10
let pts_year = 10
let pts_storage = 10

function calcul(price_tel, pts_tel, ram, pts_ram, release_year, pts_year, storage_tel, pts_storage, pts_size, pts_type) {
    while (price_tel > 650){
        price_tel -= 100
        pts_tel -= 1}
    if (size_screen >= 5.8 && size_screen <= 6.4){
        pts_size = 10}
    else if (size_screen >= 5.4 && size_screen < 5.8 || 6.4 > size_screen && size_screen >= 6.8){
        pts_size = 9}
    else if (size_screen < 5.4 || size_screen > 6.8){
        pts_size = 8}
    if (type_ecran == "AMOLED"){
        pts_type = 10}
    else if (type_ecran == "OLED"){
        pts_type = 9}
    else if (type_ecran == "LCD"){
        pts_type = 8}
    if (os == "ios"){
        pts_os = 10}
    else
        pts_os = 9
    while (ram < 8){
        ram += 1
        pts_ram -= 1}
    while (release_year < this_year - 2){
        release_year += 1
        pts_year -= 1}
    while (storage_tel < 128){
        storage_tel = storage_tel*2
        pts_storage -= 1}
    note_finale = ((1.5 * pts_tel) + (1 * pts_size) + (1 * pts_type) + (0.5 * pts_os) + (2 * pts_ram) + (
                2 * pts_year) + (2 * pts_storage)) / 10

    return note_finale 
}

console.log(calcul(price_tel, pts_tel, ram, pts_ram, release_year, pts_year, storage_tel, pts_storage, pts_size, pts_type))