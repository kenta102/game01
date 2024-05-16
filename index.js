$(function() {

    const FIRST = 0
    const MARU = "〇"
    const BATSU = "×"

    const complete_patterns = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    let now_attack = FIRST
    let got_match = false

    $("td").click(function() {
        if (got_match) {
            alert("決着がつきました。画面をリロードしてください")
        } else {
            let result_symbol= now_attack ? BATSU : MARU
            $(this).html(result_symbol)
            now_attack = !now_attack

            if (check_complete()) {
                got_match = true
                alert(result_symbol + "の勝ち！")
            }
        }
    })

    function check_complete() {
        let results = $("td").get()
        let completed = false

        for (let cnt = 0; cnt < complete_patterns.length; cnt++) {
            let pattern = complete_patterns[cnt]

            let cell1 = $(results[pattern[0]]).html()
            let cell2 = $(results[pattern[1]]).html()
            let cell3 = $(results[pattern[2]]).html()

            completed = cell1 && cell1 == cell2 && cell2 == cell3 && cell3 == cell1
            if (completed) break
        }
        return completed
    }
})