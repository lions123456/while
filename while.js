let num = 50;
while (num < 55) {
    console.log(num);
    num++;
}
// пока num == 50 цикл работает

do {
    console.log(num);
    num++;
}
while (num < 55);
// сначала сделаем, потом проверяем условие


for (let i = 1; i < 8; i++) {
    console.log(i);
}
// перебор через for


for (let i = 1; i < 10; i++) {
    if (i == 6) {
        break
    }
    console.log(i);
}
// стоп через break


for (let i = 1; i < 10; i++) {
    if (i == 6) {
        continue
    }
    console.log(i);
}
// for continue
