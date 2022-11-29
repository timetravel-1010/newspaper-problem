% Lectura de Datos
enum Temas;
array[Temas] of int: minPaginas;
array[Temas] of int: maxPaginas;
array[Temas] of int: promLectores;
int: p;

% variables
array[Temas] of var 0..max(maxPaginas): cantidadPag;

% restricciones
constraint forall (i in Temas) (
		(cantidadPag[i] <= maxPaginas[i] /\
		cantidadPag[i] >= minPaginas[i]) \/
		cantidadPag[i] = 0
);
constraint (sum(i in Temas)(cantidadPag[i])) <= p; 

% Maximizar numero de lectores.
solve maximize sum(i in Temas)(cantidadPag[i]*promLectores[i]); 

/*
output ["{ "] ++
				["temas: { "] ++ 
			 ["\(i):\(cantidadPag[i]), " | i in Temas] ++
			 ["}, "]
			 ++ ["objective: \(_objective) }"];
	*/
output [showJSON([show(i) | i in cantidadPag])];				