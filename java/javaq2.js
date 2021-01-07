var array=[1,2,3,4,5,6,7]
var n = 5

function look(array,n) 
{
    var index=-1

    array.find(function(item,ind){
        if(item==n){index==ind
            return true
        }
        else{
            return false
        }
    })

        return index
    }
var found=look(array,n)

console.log(found)