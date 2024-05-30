"use strict"
//==========================================
import { ERROR_SERVER, PRODUCT_INFORMATION_NOT_FOUND } from './constants.js';
import { 
    showErrorMessage,
    checkingRelevanceValueBasket
} from './utils.js';

const wrapper = document.querySelector('.wrapper');
let productsData = [];


getProducts();


async function getProducts() {
    try {

        if (!productsData.length) {
            const res = await fetch('../data/samoskid.json');
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            productsData = await res.json();
        }
        
        loadProductDetails(productsData);

    } catch (err) {
        showErrorMessage(ERROR_SERVER);
        console.log(err.message);
    }
}


function getParameterFromURL(parameter) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parameter);
}


function loadProductDetails(data) {

    if (!data || !data.length) {
        showErrorMessage(ERROR_SERVER)
        return;
    }

    checkingRelevanceValueBasket(data);

    const productId = Number(getParameterFromURL('id'));

    if (!productId) {
        showErrorMessage(PRODUCT_INFORMATION_NOT_FOUND)
        return;
    }

    const findProduct = data.find(rake => rake.article === productId);

    if(!findProduct) {
        showErrorMessage(PRODUCT_INFORMATION_NOT_FOUND)
        return;
    }
    renderInfoProduct(findProduct);
}


function renderInfoProduct(product) {
    const { article, name, fullName, cost, is, brend, model, serialNumber, engine, images, description, title_image, age } = product;
    const productItem = 
        `
        <section class="product">
        <div class="product_image">
       
              <img class="product_img" src="${title_image}" alt="">
              
        </div>
       
          
          
                      </div>
    <div class="product_information">
        <h2>${fullName}</h2>
        <p class="product-description_1"></p>
        <ul class="product-characteristics">
            <li>Рік випуску: ${age}</li>
            <li>Модель: ${model}</li>
            <li>На складі: ${is}</li>
        </ul>
        <div class="product-price">
            <span class="new-price">${cost}</span>
        </div>
        <a href="tel:+3806791100202">

            <button class="add_to_cart" id="add_to_cart">оформити лізинг</button>
        </a>
       
    </div>
</section>
<section class="product-tabs">
    
    <div class="tab-content">
        <div class="tab-pane active" id="description">
            <p>${description}</p>
        </div>
            <table class="table_characteristics">
                <tr class="table_element table_element_1">
                    <th>Модель</th>
                    <th>${model}</th>
                </tr>
                <tr class="table_element">
                    <td>Рік випуску</td>
                    <td>${age}</td>
                </tr>
                <tr class="table_element">
                    <td>Серійний номер</td>
                    <td>${serialNumber}</td>
                </tr>
                <tr class="table_element">
                    <td>Напрацювання (м/год.)</td>
                    <td>${engine}</td></td>
                </tr class="table_element">
            </table>
        </div>
      
    </div>
</section>
        `
    wrapper.insertAdjacentHTML('beforeend', productItem);
}