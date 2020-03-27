function handleConversion() {
    const input = $("#inputString").val()
    const converter = $("#type").val()
    $('#inputString').val("")

    $("#output").val(window[converter](input))
}

function binary(inputString){
    return inputString.split("").map(char => char.charCodeAt(0).toString(2)).join(" ")
}

function ascii(inputString){
    return inputString.split("").map(char => char.charCodeAt(0)).join(" ")
}


$("#submit").on("click", handleConversion)