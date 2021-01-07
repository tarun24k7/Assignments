function prime(){
    var result=[]
for (x=100;x>0;x--){
    if (x%2==0){
        result.push(x)}
    }
    return result
}
var res=prime()

console.log(res)
