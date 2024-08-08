let i =0;
while(i<10){
    if(i===5){
        break;
    }
    console.log(i);//imprime 0 1 2 3 4
    i++;
}

for(let j=0;j<10;j++){
    if(j===5){
        continue;
    }
    console.log(j);//imprime 0 1 2 3 4 6 7 8 9, omite el 5
}
