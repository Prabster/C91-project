player1_name = localStorage.getItem("Player1");
player2_name = localStorage.getItem("Player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " =";
document.getElementById("player2_name").innerHTML = player2_name + " =";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn " + player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);
    lngth = Math.floor(word.length/2);
    char1 = word.charAt(1);
    char2 = word.charAt(lngth);
    char3 = word.charAt(word.length - 1);
    replace1 = word.replace(char1, "_");
    replace2 = replace1.replace(char2, "_");
    replace3 = replace2.replace(char3, "_");
    console.log(replace1, replace2, replace3, word);

    question_word = "<br><h4 id='word_display'> Q. " + replace3 + "</h4>";
    input_box = "<br><input type='text' id='input_id' class='form-control'>";
    btn = "<br><button class='btn btn-info' onclick='check()'>Check Your Answer</button>";
    row = question_word + input_box + btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}