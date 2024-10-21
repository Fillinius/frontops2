let time = new Date()

let nowHour = time.getHours()
let greating
if (nowHour >= 8 && nowHour <= 12) {
  greating = 'Good moning'
}
if (nowHour >= 13 && nowHour <= 21) {
  greating = 'Good day'
}
if (nowHour >= 22 && nowHour <= 7) {
  greating = 'Good night'
}
document.write(greating)
