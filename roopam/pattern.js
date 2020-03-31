const pattern = (max,initial = 1) => {
    for(let i = initial; i <= initial+9 && i <= max ;i++ ){
        if(i !== 1 && i%5 === 1){
            process.stdout.write("\n")
        }
        process.stdout.write(i + " ")
        if(i%10 == 5 ){
            pattern(max,i+6)
        }
    }
}
pattern(25)