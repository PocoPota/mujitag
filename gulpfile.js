const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Sassをコンパイルする
const compileSass = () =>
    src("style/*.scss")
        .pipe(
            sass({
                outputStyle: "expanded"
            })
        )
        .pipe(dest("style"));

// Sassファイルを監視
const watchSassFiles = () =>
    watch("style/*.scss", compileSass);

// npx gulpで実行される関数
exports.default = () =>
    watchSassFiles();