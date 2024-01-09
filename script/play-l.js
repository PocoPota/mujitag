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
        chara.src = "../images/long-white.png";
    } else {
        // 色指定なしの場合も茶色
        chara.src = "../images/long.png";
    }
    chara.onload = () => {
        ctx.drawImage(chara, 0, 0);
    };
};

document.getElementById('load').onclick = function () {
    // 前のcanvasの内容初期化
    ctx.clearRect(0, 0, 699, 1172);

    let chara = new Image();
    // 使用画像分岐
    if (color === 'w') {
        chara.src = "../images/long-white.png";
    } else {
        // 色指定なしの場合も茶色
        chara.src = "../images/long.png";
    }
    chara.onload = () => {
        ctx.drawImage(chara, 0, 0);
        outText();
    };

    // canvasへ出力する内容,文字のスタイル
    function outText() {
        // valueの値取得
        let valAa = document.getElementById('text-aa').value;
        let valAb = document.getElementById('text-ab').value;
        let valAc = document.getElementById('text-ac').value;
        let valB = document.getElementById('text-b').value;
        let valC = document.getElementById('text-c').value;
        let valD = document.getElementById('text-d').value;
        let valEa = document.getElementById('text-ea').value;
        let valEb = document.getElementById('text-eb').value;
        let valFa = document.getElementById('text-fa').value;
        let valFb = document.getElementById('text-fb').value;
        let valFc = document.getElementById('text-fc').value;
        let valFd = document.getElementById('text-fd').value;
        let valFe = document.getElementById('text-fe').value;
        let valFf = document.getElementById('text-ff').value;
        let valFg = document.getElementById('text-fg').value;
        let valFh = document.getElementById('text-fh').value;
        let valG = document.getElementById('text-g').value;

        ctx.font = "bold 45px Noto Sans JP, sans-serif";
        ctx.textAlign = 'center';
        ctx.fillText(`${valAa}`, 699 / 2, 58);

        ctx.font = "bold 45px Noto Sans JP, sans-serif";
        ctx.textAlign = 'center';
        ctx.fillText(`${valAb}`, 699 / 2, 108);

        ctx.font = "bold 45px Noto Sans JP, sans-serif";
        ctx.textAlign = 'center';
        ctx.fillText(`${valAc}`, 699 / 2, 158);

        ctx.font = 'bold 43px Noto Sans JP, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${valB}`, 699 / 2, 240);

        ctx.font = 'bold 88px Noto Sans JP, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${valC}`, 699 / 2, 351);

        ctx.font = 'bold 50px Noto Sans JP, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${valD}`, 699 / 2, 412);

        ctx.font = 'bold 42px Noto Sans JP, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${valEa}`, 699 / 2, 500);

        ctx.font = 'bold 42px Noto Sans JP, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${valEb}`, 699 / 2, 550);

        ctx.font = 'bold 35px Noto Sans JP, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`${valFa}`, 40, 800);

        ctx.font = 'bold 35px Noto Sans JP, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`${valFb}`, 40, 838);

        ctx.font = 'bold 35px Noto Sans JP, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`${valFc}`, 40, 876);

        ctx.font = 'bold 35px Noto Sans JP, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`${valFd}`, 40, 914);

        ctx.font = 'bold 35px Noto Sans JP, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`${valFe}`, 40, 952);

        ctx.font = 'bold 35px Noto Sans JP, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`${valFf}`, 40, 990);

        ctx.font = 'bold 35px Noto Sans JP, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`${valFg}`, 40, 1028);

        ctx.font = 'bold 35px Noto Sans JP, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`${valFh}`, 40, 1066);

        ctx.font = 'bold 30px Noto Sans JP, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(`${valG}`, 338, 1124);
    }
}

// ダウンロード
document.getElementById("downloadn").onclick = (event) => {
    let link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "mujitag.png";
    link.click();
}