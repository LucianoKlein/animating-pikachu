// function writeCode(prefix, result, next) {
//     var n = 0;
//     preHtml.innerHTML = Prism.highlight(prefix, Prism.languages.css);
//     styleHtml.innerHTML = prefix;

//     var id = setInterval(function () {
//         var codeFragment = prefix + result.slice(0, n);
//         styleHtml.innerHTML = codeFragment;
//         preHtml.innerHTML = Prism.highlight(codeFragment, Prism.languages.css);
//         n++;
//         preHtml.scrollTop = preHtml.scrollHeight;
//         if (n > result.length) {
//             clearInterval(id);
//             console.log("完成");
//             next();
//         }
//     }, 1);
// }

!function(){
    function writeCode(prefix, code, fn) {
        let container = document.querySelector("#code");
        let styleTag = document.querySelector("#styleTag");
        let n = 0;
        let id = setInterval(()=>{
            n += 1;
            container.innerHTML = code.substring(0, n);
            styleTag.innerHTML = code.substring(0, n);
            container.scrollTop = container.scrollHeight;
            if (n >= code.length) {
                window.clearInterval(id);
                fn && fn.call();
            }
        }, 1);
    }
    let code = `/*先要皮卡丘的皮*/
body {
    display: flex;
    height: 100vh;
    flex-direction: column;
}


.preview-wrapper .preview {
    height: 100%;
    border: 1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FEE433;
}

.preview-wrapper .preview .wrapper {
    width: 100%;
    height: 165px;
    position: relative;
}

/*
 * 接下来画皮卡丘的鼻子
 */
.preview-wrapper .preview .wrapper .nose {
    width: 0px;
    height: 0px;
    border-radius: 100px;
    border-style: solid;
    border: 11px solid red;
    border-width: 12px;
    border-color: black transparent transparent;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -12px;
}
/*
 * 接下来画皮卡丘的眼睛
 */

.preview-wrapper .preview .wrapper .eye {
    background-color: #2E2E2E;
    width: 49px;
    height: 49px;
    position: absolute;
    border-radius: 50%;
    border: 2px solid;
}

.preview-wrapper .preview .wrapper .eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background-color: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    border: 2px solid #000;
    top: -1px;
}
/*
 * 左眼在左边
 */
.preview-wrapper .preview .wrapper .eye.left {
    right: 50%;
    margin-right: 90px;
}
/*
 * 右眼在右边
 */

.preview-wrapper .preview .wrapper .eye.right {
    left: 50%;
    margin-left: 90px;
}
/*
 * 一个大饼脸
 */
.preview-wrapper .preview .wrapper .face {
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    position: absolute;
    border: 2px solid black;
    border-radius: 50%;
    top: 85px;
}

.preview-wrapper .preview .wrapper .face.left {
    right: 50%;
    margin-right: 116px;
}

.preview-wrapper .preview .wrapper .face.right {
    left: 50%;
    margin-left: 116px;
}
/*
 * 嘴唇！
 */
.preview-wrapper .preview .wrapper .upperLip {
    height: 20px;
    width: 80px;
    border: 2px solid black;
    position: absolute;
    background-color: #FEE433;
}

.preview-wrapper .preview .wrapper .upperLip.left {
    right: 50%;
    top: 52px;
    border-bottom-left-radius: 40px 20px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}

.preview-wrapper .preview .wrapper .upperLip.right {
    top: 52px;
    left: 50%;
    border-bottom-right-radius: 40px 20px;
    border-left: none;
    border-top: none;
    transform: rotate(20deg);
}

.preview-wrapper .preview .wrapper .lowerLip-wrapper {
    margin-left: -150px;
    left: 50%;
    position: absolute;
    bottom: 0;
    height: 107px;
    width: 300px;
    overflow: hidden;
}

.preview-wrapper .preview .wrapper .lowerLip-wrapper .lowerLip {
    width: 300px;
    height: 3500px;
    background-color: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}

.preview-wrapper .preview .wrapper .lowerLip-wrapper .lowerLip::after {
    content: '';
    position: absolute;
    bottom: -20px;
    width: 100px;
    height: 100px;
    overflow: hidden;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px;
    background-color: #FC4A62;
}
/*
 * 好了皮卡丘画完了嘻嘻
 */
    `;
    writeCode('', code);
}.call();