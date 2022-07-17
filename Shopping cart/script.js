    
     var delbtn=document.getElementsByClassName('delete')
     var addbtn= document.getElementsByClassName('plus-btn')
     var rembtn= document.getElementsByClassName('minus-btn')
     var price=document.getElementsByClassName('price')
     var priceIphone = parseInt( document.getElementById('p1').innerText)
     var priceshoes= parseInt(document.getElementById('p2').innerText)
     var pricewatch =parseInt(document.getElementById('p3').innerText)
     var pricetot =document.getElementById('finalPrice')
     var items=document.getElementsByClassName('Item');


    for (let i=0; i<delbtn.length;i++)
    {
      let  dlt= delbtn[i]

      dlt.addEventListener('click',function()
      {
        dlt.parentElement.remove();
        totalprice();
      });
    }

   

    for (let i = 0 ; i<addbtn.length; i++)
    { 
        addbtn[i].addEventListener('click',function(){
            count =addbtn[i].previousElementSibling.value++
            if(i===0){
              price[i].innerText= priceIphone *(count+1)
            }
            
            else if(i===1)
              {price[i].innerText = priceshoes *(count+1)
             }
            else if (i===2)
                {price[i].innerText = pricewatch *(count+1)}
            totalprice();  
        })
        
    }

    
   
    for (let i = 0 ; i<rembtn.length; i++)
    { 
        rembtn[i].addEventListener('click',function(){
             count2=rembtn[i].nextElementSibling.value--
             if (rembtn[i].nextElementSibling.value<1)
             {
                rembtn[i].nextElementSibling.value=1
                pricetot.value=1804
             }
             if(i===0){
              price[i].innerText= priceIphone *(count2-1)
             }
            
            else if(i===1)
              {price[i].innerText = priceshoes *(count2-1)
              }
            else if (i===2)
                {price[i].innerText= pricewatch *(count2-1)
              }
          totalprice()
        })
        
    }
    
 

var redbtn=document.getElementsByClassName('fa fa-heart fa-2x')
var cc=['red','black']
var j=0
for (let i=0;i<redbtn.length;i++)
{
    redbtn[i].addEventListener('click',function(){
        j= j< cc.length ? ++j : 0;
        redbtn[i].style.color=cc[j];
    })
}


function totalprice()
{
  let s=0;

  for (let i=0;i<items.length;i++)
  {
    s+=(items[i].querySelector(".price").innerText)*(items[i].querySelector(".Quant").value);
  }
  return (pricetot.value=s)
}
 totalprice()



