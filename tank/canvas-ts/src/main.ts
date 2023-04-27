const el = document.querySelector<HTMLCanvasElement>('#canvas')!

const app = el.getContext('2d')!

// app.fillStyle = 'red'
// app.fillRect(0,0,300,300)
//
// app.fillStyle = 'blue'
// app.fillRect(el.width / 2 - 50, el.height / 2 -50, 100, 100)

// app.strokeStyle = 'red';
// app.lineWidth = 20
// app.lineJoin = 'round'
// app.strokeRect(50, 50, 200, 200)

// stroke 线 fill 填充
// app.strokeStyle = 'red'
// app.lineWidth = 5
// app.arc(100,100, 50, 0, 360)
// app.stroke()


app.beginPath()
app.strokeStyle = 'red'
app.fillStyle = 'red'
app.lineWidth = 5
app.moveTo(el.width / 2, 10)
app.lineTo(el.width,250)
app.lineTo(10 ,250)
app.closePath()
// app.fill()
app.stroke()