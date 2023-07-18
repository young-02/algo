function solution(num_list) {
   
    let odd = 0 ;
    let even = 0;
    num_list.map((cur,idx)=>{
        
       if( idx % 2 === 0 ){
           even += cur
       }else{
           odd +=  cur
       }
        
    })
    return odd > even  ? odd : even
 
}