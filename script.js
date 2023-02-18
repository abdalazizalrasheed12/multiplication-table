document.write("<table border='1px'>");
document.write("<tr style=''>");
for (i = 1; i < 13; i++) {
    document.write("<th> [ " + i + "]</th>");
}
document.write("</tr>")
for (k = 1; k < 13; k++) {
    var colorcode = "";
    if (k % 2 === 0) {
        colorcode = "#eee"
    } else {
        colorcode = "#99e265"
    }
    document.write("<tr style='background-color:'" + colorcode + "'>");
    for (j = 1; j < 13; j++) {
        document.write("<td style='font-size:20px;'>" + j + " X" + k + " = " + j * k + "</td>")
    }
    document.write("</tr>")
}
document.write("</table>")
