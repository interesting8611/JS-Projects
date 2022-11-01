<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div class="title">Case Converter</div>
    <textarea id="text"></textarea>
    <button id="upper-case">Upper Case</button>
    <button id="lower-case">Lower Case</button>
    <button id="proper-case">Proper Case</button>
    <button id="sentence-case">Sentence Case</button>
    <button id="save-text-file">Save Text File</button>
    <script>
        document.getElementById("upper-case").addEventListener("click",function () {
            let element = document.querySelector("textarea");
            element.value = element.value.toUpperCase();
        });
        document.getElementById("lower-case").addEventListener("click",function () {
            let element = document.querySelector("textarea");
            element.value = element.value.toLowerCase();
        });
        document.getElementById("proper-case").addEventListener("click",function () {
            let element = document.querySelector("textarea");
            let str = element.value.toLowerCase().split(" ");
            for ( let i in str) {
                str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
            }
            element.value = str.join(" ");
        });
        document.getElementById("sentence-case").addEventListener("click",function () {
            let element = document.querySelector("textarea");
            let str = element.value.toLowerCase().split(". ");
            for ( let i in str) {
                str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
            }
            element.value = str.join(". ");
        });

        function download(filename, text) {
            let element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
        }
        document.getElementById("save-text-file").addEventListener("click", function() {
            let text = document.getElementById("text").value;
            let filename = "text.txt"
            download(filename ,text);
        }, false);
    </script>
</body>
</html>
