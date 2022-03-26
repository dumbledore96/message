function Num(n) {
    event.preventDefault();
    document.getElementById("output").innerHTML = "計算中";
    let text=Hanoi(n , 1 , 2 , 3);
    document.getElementById("output").innerHTML = text;
}

function Hanoi(n , p1 , p2 , p3) {
    if(n==1){
		return p1+"到"+p3+" ";
	}
	else{
		return Hanoi(n-1 , p1 , p3 , p2)+p1+"到"+p3+" "+Hanoi(n-1 , p2 , p1 , p3);
	}
}