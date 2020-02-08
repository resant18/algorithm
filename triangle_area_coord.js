// Find area of triangle given three coordinates. One of the side is parallel to the axis.

// Solution:
// Ax * ( By −	Cy )	+ Bx 	* ( Cy −	Ay ) 	+	Cx *	( Ay − By )
// ____________________________________________________________  
//                                2
 	
const triangleArea = (x, y) => {
   return 1/2 * (x[0] * Math.abs(y[1] - y[2]) + x[1] * Math.abs(y[2] - y[0]) + x[2] * Math.abs(y[0] - y[1]));
}

console.log(triangleArea([0, 2, 3], [0, 0, 3]));


