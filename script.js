let menu, bebida;
menu = prompt("Tipo de menu: Desayuno, Comida, Cena")
switch (menu){
    case 'Desayuno':
        comida = ("Hotcakes")
        bebida = "¿Desea beber cafe?";
        break;
    case 'Comida':
        comida= "Mole"
        bebida = "¿Desea beber Coca Cola?";
        break;
    case 'Cena':
        comida= "Lassagna"
        bebida = "¿Desea Coca Cola?";
        break;
    default:
        bebida = "Elija desayuno, comida o cena";
    }
alert(comida);
alert(bebida);