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

for (let index=0; index<obj.recipes.length; index++) {
    console.log(obj.recipes[index].name)
}