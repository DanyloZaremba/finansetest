$('Document').ready(function(){
    loadGods();

});
function loadGods(){
    $.getJSON('goods.json', function (data){
        var out=''; 
        for (var key in data){
         out+= '<div class="asort_container product_id="'+data[key]["article"]+'">';
         out+='<a href='+data[key]["href"]+'>';
         out+='<img class="img_asort" src=" '+ data[key].title_image+'">';
         out+='</a>';
         out+= '<div class="asort_transcription">';
         out+='<p class="asort_article">'+ data[key]["article"]+'</p>';
         out+='<a class="asort_link_transporter" href="11441.html?id='+key+'">';
         out+='<p class="asort_name">'+data[key]["name"]+'</p>';
         out+='</a>';
         out+='<p class="asort_price price" id="price">'+data[key]["cost"]+'</p>';
         out+='<p class="asort_is">'+data[key]["is"]+'</p>';
         out+='<p class="asort_year"> Рік випуску: '+data[key]["age"]+'</p>';
         out+='<div class="asort_button_container">';
         out+= '<a  href="tel:+3806791100202">';
         out+= '<button class="asort_btn" >оформити лізинг</button>';
         out+='</a>';
         out+='</div>';
         out+='</div>';
         out+='</div>';
        
        
        }
$('#goods').html(out);
    });
}

