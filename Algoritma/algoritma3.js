INPUT = ['xc', 'dz', 'bbb', 'dz']  
QUERY = ['bbb', 'ac', 'dz']  

//OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT
let output = []
let a,b = 0

for(let i=0; i<QUERY.length;i++){
    
    a=0
    
    for(let j=0; j<INPUT.length;j++){
        if(QUERY[i] === INPUT[j]){
            a += 1
            
        }else{
            b += 1
        }
    }
    output.push(a)
    if(a=0){
        output.push(b)
    }
    
    a=0;
    
}
console.log(output)
//console.log(INPUT[2] === QUERY[0]);