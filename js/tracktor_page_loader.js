$('Document').ready(function(){
    loadGods();

});
function loadGods(){
    $.getJSON('goods.json', function (data){
        var out='';
        for (var key in data){
       out+='<section class="product">'
       out+='<div class="product_image">';
       out+='<div id="slider">';
       out+=' <a href="#" class="control_next">></a>';
       out+= '<a href="#" class="control_prev"><</a>';
       out+=' <ul>';
       out+= '<li><img class="product_img" src="' +data[key].images+'" alt=""></li>';
       out+= '<li><img class="product_img" src="' +data[key].images+'" alt=""></li>';
       out+= '</ul>';
       out+= '</div>';
       out+= '</div>';
       out+= '<div class="product_information">';
       out+= '<h2>'+data[key]["fullName"]+'</h2>';
       out+= '<ul class="product-characteristics">';
       out+='<li>Рік випуску:'+ data[key]["age"]+'</li>';
       out+='<li>Модель:'+data[key]["model"]+'</li>';
       out+='<li>'+data[key]["is"]+'</li>';
       out+='</ul>';
       out+=' <div class="product-price">';
       out+=' <span class="new-price">'+data[key]["cost"]+'</span>';
       out+='</div>';
       out+=' <a href="tel:+3806791100202">';
       out+=' <button class="add_to_cart" id="add_to_cart">оформити лізинг</button>';
       out+='</a>';
       out+='</div>';
       out+='</section>';
       out+='<section class="product-tabs">';
       out+='<ul class="tabs">';
       out+='<li class="tab active" data-tab="description">Опис</li>';
       out+='<li class="tab" data-tab="characteristics">Характеристики</li>';
       out+='<li class="tab" id="comments" data-tab="reviews">Відгуки</li>';
       out+='</ul>';
       out+='<div class="tab-content">';
       out+='<div class="tab-pane active" id="description">';
       out+='<p>'+data[key]["description"]+'</p>';
       out+='</div>';
       out+='<div class="tab-pane" id="characteristics">';
       out+=' <table class="table_characteristics">';
       out+='<tr class="table_element">';
       out+='<th>Модель</th>';
       out+= '<th>'+data[key]["model"]+'</th>';
       out+='</tr>';
       out+='< class="table_element">';
       out+='<td>Рік випуску</td>';
       out+='<td>'+data[key]["age"]+'</td>';
       out+= '</tr>';
       out+= ' <tr class="table_element">';
       out+='<td>Серійний номер</td>';
       out+='<td>'+data[key]["serialNumber"]+'</td>';
       out+='</tr>';
       out+= '<tr class="table_element">';
       out+='<td>Напрацювання (м/год.)</td>';
       out+='<td>'+data[key]["engine"]+'</td>';
       out+= '</tr class="table_element">';
       out+='</table>';
       out+='</div>';
       out+=' <div class="tab-pane" id="reviews">';
       out+='<ul class="reviews">';
       out+='<li class="review">';
       out+='<p class="review-author">Ім`я автора</p>';
       out+='<p class="review-text">Відгук про товар...</p>';
       out+='</li>';
       out+=' <li class="review">';
       out+='<p class="review-author">Інше ім`я</p>';
       out+='<p class="review-text">Ще один відгук...</p>';
       out+='</li>';
       out+='</ul>';
       out+='</div>';
       out+='</div>';
       out+='</section>';
break;
        
         

        }
$('#product_container_database').html(out);
    })
};