//Vinícius Gabriel Uecker - 2º Informática
//SOMA
//primeira matriz
document.write("<h1 class='centralizar'>Adição das Matrizes</h1>");

document.write("<div class='tabelas'>");

var m1 = new Array();
m1.push([0, 0, 0]);
m1.push([0, 0, 0]);
m1.push([0, 0, 0]);

for (var i = 0; i < m1.length; i++) {
    for (var j = 0; j < m1[i].length; j++) {
        m1[i][j] = Math.ceil(Math.random() * 100);
    }
}

document.write("<div>");
document.write("<h3 id='matrizes'>Matriz 1</h3>");

document.write("<table>");

for (var i = 0; i < m1.length; i++) {
    document.write("<tr>");
    for (var j = 0; j < m1[i].length; j++) {
        document.write('<td>' + m1[i][j] + '</td>');
    }
    document.write("</tr>");
}

document.write('</table>');
document.write("</div>");

//segunda matriz

var m2 = new Array();
m2.push([0, 0, 0]);
m2.push([0, 0, 0]);
m2.push([0, 0, 0]);

for (var i = 0; i < m2.length; i++) {
    for (var j = 0; j < m2[i].length; j++) {
        m2[i][j] = Math.ceil(Math.random() * 100);
    }
}
document.write("<div>");

document.write("<h1 id='sinal'>+</h1>");

document.write("</div>");


document.write("<div>");
document.write("<h3 id='matrizes'>Matriz 2</h3>");

document.write("<table border='1'>");

for (var i = 0; i < m2.length; i++) {
    document.write("<tr>");
    for (var j = 0; j < m2[i].length; j++) {
        document.write('<td>' + m2[i][j] + '</td>');
    }
    document.write("</tr>");
}

document.write('</table>');
document.write("</div>");


//Calculo (matriz 1 + matriz 2) e criação da terceira matriz para o resultado da adição
var m3 = new Array();
m3.push([0, 0, 0]);
m3.push([0, 0, 0]);
m3.push([0, 0, 0]);


for (var i = 0; i < m3.length; i++) {
    for (var j = 0; j < m3[i].length; j++) {
        m3[i][j] = m1[i][j] + m2[i][j];
    }
}
//exibir o resultado

document.write("<div>");

document.write("<h1 id='sinal'>=</h1>");

document.write("</div>");

document.write("<div>");

document.write("<h3 id='matrizes'>Resultado:</h3>");

document.write("<table border='1'>");

for (var i = 0; i < m3.length; i++) {
    document.write("<tr>");
    for (var j = 0; j < m3[i].length; j++) {
        document.write('<td>' + m3[i][j] + '</td>');
    }
    document.write("</tr>");
}

document.write('</table>');
document.write("</div>");
document.write("</div>");

//MULTIPLICAÇÃO
//quarta matriz
document.write("<h1 class='centralizar'>Multiplicação das Matrizes</h1>");

document.write("<div class='tabelas'>");

var m4 = new Array();
m4.push([0, 0, 0]);
m4.push([0, 0, 0]);
m4.push([0, 0, 0]);

for (var i = 0; i < m4.length; i++) {
    for (var j = 0; j < m4[i].length; j++) {
        m4[i][j] = Math.ceil(Math.random() * 100);
    }
}

document.write("<div>");
document.write("<h3 id='matrizes'>Matriz 1</h3>");

document.write("<table border='1'>");

for (var i = 0; i < m4.length; i++) {
    document.write("<tr>");
    for (var j = 0; j < m4[i].length; j++) {
        document.write('<td>' + m4[i][j] + '</td>');
    }
    document.write("</tr>");
}

document.write('</table>');
document.write("</div>");


document.write("<div>");

document.write("<h1 id='sinal'>x</h1>");

document.write("</div>");

//quinta matriz

var m5 = new Array();
m5.push([0, 0, 0]);
m5.push([0, 0, 0]);
m5.push([0, 0, 0]);

for (var i = 0; i < m5.length; i++) {
    for (var j = 0; j < m5[i].length; j++) {
        m5[i][j] = Math.ceil(Math.random() * 100);
    }
}

document.write("<div>");
document.write("<h3 id='matrizes'>Matriz 2</h3>");

document.write("<table border='1'>");

for (var i = 0; i < m5.length; i++) {
    document.write("<tr>");
    for (var j = 0; j < m5[i].length; j++) {
        document.write('<td>' + m5[i][j] + '</td>');
    }
    document.write("</tr>");
}

document.write('</table>');
document.write("</div>");

//Calculo (matriz 4 * matriz 5) e criação da sexta matriz para o resultado da multiplicação

var m6 = new Array();
m6.push([0, 0, 0]);
m6.push([0, 0, 0]);
m6.push([0, 0, 0]);
for (var i = 0; i < m6.length; i++) {
    for (var j = 0; j < m6[i].length; j++) {
        for (var k = 0; k < m6[j].length; k++) {
            m6[i][j] += m4[i][k] * m5[k][j];
        }
    }
}

//exibir o resultado
document.write("<div>");

document.write("<h1 id='sinal'>=</h1>");

document.write("</div>");
document.write("<div>");

document.write("<h3 id='matrizes'>Resultado:</h3>");

document.write("<table border='1'>");

for (var i = 0; i < m6.length; i++) {
    document.write("<tr>");
    for (var j = 0; j < m6[i].length; j++) {
        document.write('<td>' + m6[i][j] + '</td>');
    }
    document.write("</tr>");
}

document.write('</table>');
document.write("</div>");
document.write("</div>");
