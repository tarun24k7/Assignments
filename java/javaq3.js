var pararef=document.getElementById('root')
pararef.addEventListener('mouseover',function() {
    pararef.style.color='red';
})
pararef.addEventListener('mouseout',function() {
    pararef.style.color='black';
    
})



var bw=document.getElementsByClassName("blue-white")
bw[0].addEventListener('mouseover',function () {
    bw[0].style.backgroundColor='blue';
    bw[0].style.color='white'
    
})
bw[1].addEventListener('mouseover',function () {
    bw[1].style.backgroundColor='blue';
    bw[1].style.color='white'
    
})
bw[0].addEventListener('mouseout',function () {
    bw[0].style.backgroundColor='white';
    bw[0].style.color='black'
    
})
bw[1].addEventListener('mouseout',function () {
    bw[1].style.backgroundColor='white';
    bw[1].style.color='black'
    
})

var paraaref=document.getElementsByTagName('p')
paraaref[0].addEventListener('mouseover',function () {
    paraaref[0].style.fontSize="50px"
})
paraaref[1].addEventListener('mouseover',function () {
    paraaref[1].style.fontSize="50px"
})
