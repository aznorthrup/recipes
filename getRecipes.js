let json = '{"recipes":['
json += '{"name":"breakfast","description":"breakfast","type":"breakfast","ingredients":"ingredients","measurements":"measurements","instructions":"instructions"},'
json += '{"name":"lunch","description":"lunch","type":"lunch","ingredients":"ingredients","measurements":"measurements","instructions":"instructions"},'
json += '{"name":"dinner","description":"dinner","type":"dinner","ingredients":"ingredients","measurements":"measurements","instructions":"instructions"},'
json += '{"name":"dessert","description":"dessert","type":"dessert","ingredients":"ingredients","measurements":"measurements","instructions":"instructions"},'
json += '{"name":"other","description":"other","type":"other","ingredients":"ingredients","measurements":"measurements","instructions":"instructions"},'
json += '{"name":"breakfast2","description":"breakfast","type":"breakfast","ingredients":"ingredients","measurements":"measurements","instructions":"instructions"},'
json += '{"name":"lunch2","description":"lunch","type":"lunch","ingredients":"ingredients","measurements":"measurements","instructions":"instructions"},'
json += '{"name":"dinner2","description":"dinner","type":"dinner","ingredients":"ingredients","measurements":"measurements","instructions":"instructions"},'
json += '{"name":"dessert2","description":"dessert","type":"dessert","ingredients":"ingredients","measurements":"measurements","instructions":"instructions"},'
json += '{"name":"other2","description":"other","type":"other","ingredients":"ingredients","measurements":"measurements","instructions":"instructions"}'
json += ']}'

const obj = JSON.parse(json);

const recipeType = document.getElementById("type").textContent
let recipeList = ''
for (let index=0; index<obj.recipes.length; index++) {
    if (recipeType == 'Breakfast' && obj.recipes[index].type == 'breakfast') {
        recipeList += '<div style="width:45%"><img src="https://user-images.githubusercontent.com/85071007/222539336-eda689ce-ce76-499d-ade8-843270058995.png" alt="'+obj.recipes[index].name+'" style="width:70%"><div><h4><b>'+obj.recipes[index].name+'</b></h4><p>'+obj.recipes[index].description+'</p></div></div>'
    } else if (recipeType == 'Lunch' && obj.recipes[index].type == 'lunch') {
        recipeList += '<div style="width:45%"><img src="https://user-images.githubusercontent.com/85071007/222539336-eda689ce-ce76-499d-ade8-843270058995.png" alt="'+obj.recipes[index].name+'" style="width:70%"><div><h4><b>'+obj.recipes[index].name+'</b></h4><p>'+obj.recipes[index].description+'</p></div></div>'
    } else if (recipeType == 'Dinner' && obj.recipes[index].type == 'dinner') {
        recipeList += '<div style="width:45%"><img src="https://user-images.githubusercontent.com/85071007/222539336-eda689ce-ce76-499d-ade8-843270058995.png" alt="'+obj.recipes[index].name+'" style="width:70%"><div><h4><b>'+obj.recipes[index].name+'</b></h4><p>'+obj.recipes[index].description+'</p></div></div>'
    } else if (recipeType == 'Dessert' && obj.recipes[index].type == 'dessert') {
        recipeList += '<div style="width:45%"><img src="https://user-images.githubusercontent.com/85071007/222539336-eda689ce-ce76-499d-ade8-843270058995.png" alt="'+obj.recipes[index].name+'" style="width:70%"><div><h4><b>'+obj.recipes[index].name+'</b></h4><p>'+obj.recipes[index].description+'</p></div></div>'
    } else if (recipeType == 'Other' && obj.recipes[index].type == 'other') {
        recipeList += '<div style="width:45%"><img src="https://user-images.githubusercontent.com/85071007/222539336-eda689ce-ce76-499d-ade8-843270058995.png" alt="'+obj.recipes[index].name+'" style="width:70%"><div><h4><b>'+obj.recipes[index].name+'</b></h4><p>'+obj.recipes[index].description+'</p></div></div>'
    //   '<li>' + obj.recipes[index].name + '</li>'
    }
    document.getElementById("recipe").innerHTML = recipeList
}