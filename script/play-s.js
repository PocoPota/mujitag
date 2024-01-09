// canvas準備
let canvas = document.getElementById("cv");
let ctx = canvas.getContext("2d");

// 画像カラーの取得
const url = new URL(window.location.href);
const color = url.searchParams.get('c');

window.onload = () => {
    // 画像読み込み
    let chara = new Image();
    // 使用画像分岐
    if (color === 'w') {
        chara.src = "../images/square-white.png";
    } else {
        // 色指定なしの場合も茶色
        chara.src = "../images/square.png";
    }
    chara.onload = () => {
        ctx.drawImage(chara, 0, 0);
    };

    // inputが変更される度load()実行
    const allInputs = document.querySelectorAll('.input');
    allInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            load();
        });
    });
};

function load() {
    // 前のcanvasの内容初期化
    ctx.clearRect(0, 0, 680, 680);

    let chara = new Image();
    // 使用画像分岐
    if (color === 'w') {
        chara.src = "../images/square-white.png";
    } else {
        // 色指定なしの場合も茶色
        chara.src = "../images/square.png";
    }
    chara.onload = () => {
        ctx.drawImage(chara, 0, 0);
        outText();
    };


    // canvasへ出力する内容,文字のスタイル
    function outText() {
        // valueの値取得
        let valAa = document.getElementById('text-a').value;
        let valC = document.getElementById('text-b').value;
        let valD = document.getElementById('text-c').value;
        let valFa = document.getElementById('text-da').value;
        let valFb = document.getElementById('text-db').value;
        let valFc = document.getElementById('text-dc').value;
        let valFd = document.getElementById('text-dd').value;
        let valFe = document.getElementById('text-de').value;
        let valG = document.getElementById('text-e').value;

        ctx.font = "bold 45px Noto Sans JP, sans-serif";
        ctx.textAlign = 'center';
        ctx.fillText(`${valAa}`, 680 / 2, 58);

        ctx.font = 'bold 88px Noto Sans JP, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${valC}`, 680 / 2, 179);

        ctx.font = 'bold 54px Noto Sans JP, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${valD}`, 680 / 2, 245);

        ctx.font = 'bold 35px Noto Sans JP, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`${valFa}`, 40, 328);

        ctx.font = 'bold 35px Noto Sans JP, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`${valFb}`, 40, 368);

        ctx.font = 'bold 35px Noto Sans JP, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`${valFc}`, 40, 408);

        ctx.font = 'bold 35px Noto Sans JP, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`${valFd}`, 40, 448);

        ctx.font = 'bold 35px Noto Sans JP, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`${valFe}`, 40, 488);

        ctx.font = 'bold 38px Noto Sans JP, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(`${valG}`, 647, 647);
    }
}

// ダウンロード
document.getElementById("download").onclick = (event) => {
    let link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "mujitag.png";
    link.click();
}