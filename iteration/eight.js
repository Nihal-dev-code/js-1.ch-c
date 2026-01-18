const mynums=[1,2,3]

const mytotal=mynums.reduce(function(acc,currval)
{
    return acc+currval
},4+5
)
console.log(mytotal);

const shoppingcart=[
    {
        itemname:"js course",
        price:2999,
    },
    {
        itemname:"python",
        price:2999,
    },
    {
        itemname:"c++",
        price:2999,
    },
    {
        itemname:"java",
        price:2999,
    }
]

const allshopping=shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(allshopping);
