var c1,c2,m1,m2;
var ct,mid,internals;
var outputTable,analysisTable;
var outHeading,analysisHeading;

function calculate() {

	c1 = document.getElementById("c1").value;
	m1 = document.getElementById("m1").value;
	c2 = document.getElementById("c2").value;
	m2 = document.getElementById("m2").value;
	
	if(c1 == "" || m1 == "" || c2 == "" || m2 == "") { 

		alert("Enter the Marks Correctly..!");

	} else {

		c1 = Math.ceil(parseFloat(c1));
		c2 = Math.ceil(parseFloat(c2));
		m1 = Math.ceil(parseFloat(m1));
		m2 = Math.ceil(parseFloat(m2));

		if(c1 < 0 || c2 < 0 || m1 < 0 || m2 < 0 
			|| c1 > 10 || c2 > 10 || m1 > 40 || m2 > 40) {

			alert("Enter the Marks Correctly..!")

		} else {

			let max = Math.max(m1,m2);
			let min = Math.min(m1,m2);
			ct = Math.ceil((c1 + c2) / 2);
			mid = Math.ceil(((max * 3) + min) * 3 / 16);
			internals = (ct+mid);

			let outputDiv = document.getElementById("output");
			document.getElementById("outHeading").innerHTML = "Internals";


			if(outputDiv.childElementCount == 2) {
				let btn = document.createElement("BUTTON");   
				btn.innerHTML = "Show Analysis";      
				btn.setAttribute("onclick","showAnalysis()"); 
				btn.style.height = "35px"; 
				btn.style.marginTop = "15px";         
				outputDiv.appendChild(btn);   
			}

			outputTable = document.getElementById("Internals");
			outputTable.setAttribute("border","1");

			outputTable.rows[0].cells[0].innerHTML = "Class Test : ";
			outputTable.rows[0].cells[1].innerHTML = ct;
			outputTable.rows[1].cells[0].innerHTML = "Mid  Exam : ";
			outputTable.rows[1].cells[1].innerHTML = mid;
			outputTable.rows[2].cells[0].innerHTML = "Total :- ";
			outputTable.rows[2].cells[1].innerHTML = internals;
			
		}
		
	}
	

}

function showAnalysis() {
	document.getElementById("analysisHeading").innerHTML = "Grade Analysis";

	analysisTable = document.getElementById("gradeAnalysis");
	analysisTable.setAttribute("border","1");
	analysisTable.style.marginBottom = "50px";


	analysisTable.rows[0].cells[0].innerHTML = " Grades";
	analysisTable.rows[0].cells[1].innerHTML = " Marks Required ";

	analysisTable.rows[1].cells[0].innerHTML = "O";
	analysisTable.rows[1].cells[1].innerHTML = 
	(90 - internals) <= 60 ? (90-internals) : "Not Possible";

	analysisTable.rows[2].cells[0].innerHTML = "A+";
	analysisTable.rows[2].cells[1].innerHTML = 
	(80 - internals) <= 60 ? (90-internals) : "Not Possible";

	analysisTable.rows[3].cells[0].innerHTML = "A";
	analysisTable.rows[3].cells[1].innerHTML = 
	(70 - internals) <= 60 ? (70-internals) : "Not Possible";;

	analysisTable.rows[4].cells[0].innerHTML = "B+";
	analysisTable.rows[4].cells[1].innerHTML = 
	(60 - internals) >= 21 ? (60-internals) : "21" ;

	analysisTable.rows[5].cells[0].innerHTML = "B";
	analysisTable.rows[5].cells[1].innerHTML = 
	(50 - internals) >= 21 ? (50-internals) : "Not Possible";

	analysisTable.rows[6].cells[0].innerHTML = "C";
	analysisTable.rows[6].cells[1].innerHTML = 
	(45 - internals) >= 21 ? (45-internals) : "Not Possible";

	analysisTable.rows[7].cells[0].innerHTML = "P";
	analysisTable.rows[7].cells[1].innerHTML = 
	(40 - internals) >= 21 ? (40-internals) : "21";

}

function hideAnalysis() {
	
}

function reset() {

	document.getElementById("c1").value = "";
	document.getElementById("c2").value = "";
	document.getElementById("m1").value = "";
	document.getElementById("m2").value = "";

}

