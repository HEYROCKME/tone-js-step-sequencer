const startButton = document.getElementById("start-btn")
const stopButton = document.getElementById( "stop-btn")

const synths = [
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth()
]


synths[0].oscillator = "sawtooth"
synths[1].oscillator = "rectangle"
synths[2].oscillator = "sine"

synths.forEach(synth => synth.toDestination())

const $rows = document.body.querySelectorAll('div > div')
let index = 0

let notes = [ "E4", "C5", "G4"]


function repeat(time){
    let step = index % 16;
    for (let i = 0; i < $rows.length; i++) {
        let synth = synths[i],
        note = notes[i],
        $row = $rows[i]
        $input = $row.querySelector(`input:nth-child(${step + 1})`)

        if ($input.checked) synth.triggerAttackRelease(note, "16n", time)
        
    }
    index++
    console.log(index)
    
}

Tone.Transport.scheduleRepeat(repeat, '16n')


startButton.addEventListener("click", () => {

    Tone.Transport.start()

})
stopButton.addEventListener("click", () => {

    Tone.Transport.stop()

})

